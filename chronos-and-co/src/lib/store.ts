import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Watch } from './seed-data';
import { supabase } from './supabase';

export interface CartItem extends Watch {
    quantity: number;
}

export type OrderStatus = 'Recibido' | 'Preparación' | 'Enviado' | 'Entregado' | 'Cancelado';

export interface Order {
    id: string; // Internal/Local ID
    trackingNumber: string; // Public Tracking Number
    customerName: string;
    email: string;
    phone: string;
    note?: string;
    items: CartItem[];
    total: number;
    status: OrderStatus;
    date: string;
    address?: string;
}

interface StoreState {
    cart: CartItem[];
    isCartOpen: boolean;
    orders: Order[];

    // Cart Actions
    addToCart: (watch: Watch) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
    toggleCart: (isOpen?: boolean) => void;

    // Order Actions
    placeOrder: (details: { name: string; email: string; phone: string; note?: string; address: string }) => Order | void;
    updateOrderStatus: (orderId: string, status: OrderStatus) => void;
    cancelOrder: (orderId: string) => void;
    updateQuantity: (id: string, delta: number) => void;

    // Inventory Actions
    inventory: Watch[];
    isLoading: boolean;
    fetchInventory: () => Promise<void>;
    deleteItem: (id: string) => Promise<void>;
    updateItemStatus: (id: string, status: 'in-stock' | 'pre-order' | 'sold') => Promise<void>;
    updateWatchDetails: (id: string, updates: Partial<Watch>) => Promise<void>;
}

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            cart: [],
            isCartOpen: false,
            orders: [],
            inventory: [], // Initialize empty
            isLoading: false,

            // ... (fetchInventory, addToCart, removeFromCart, clearCart, toggleCart implementations remain same) ...
            fetchInventory: async () => {
                const client = supabase;
                if (!client) return;
                set({ isLoading: true });
                const { data, error } = await client
                    .from('watches')
                    .select('*');

                if (error) {
                    console.error('Error fetching inventory:', error);
                    set({ isLoading: false });
                    return;
                }

                if (data) {
                    // Normalize data if necessary or just cast
                    set({ inventory: data as Watch[], isLoading: false });
                }
            },

            addToCart: (watch) =>
                set((state) => {
                    const existing = state.cart.find((item) => item.id === watch.id);
                    if (existing) {
                        return {
                            cart: state.cart.map((item) =>
                                item.id === watch.id
                                    ? { ...item, quantity: item.quantity + 1 }
                                    : item
                            ),
                            isCartOpen: true,
                        };
                    }
                    return {
                        cart: [...state.cart, { ...watch, quantity: 1 }],
                        isCartOpen: true,
                    };
                }),

            removeFromCart: (id) =>
                set((state) => ({
                    cart: state.cart.filter((item) => item.id !== id),
                })),

            clearCart: () => set({ cart: [] }),

            toggleCart: (isOpen) =>
                set((state) => ({
                    isCartOpen: isOpen !== undefined ? isOpen : !state.isCartOpen,
                })),

            placeOrder: (details) => {
                let newOrder: Order | undefined;
                set((state) => {
                    if (state.cart.length === 0) return state;

                    const total = state.cart.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    );

                    // Generate a better tracking number: CHR-7823-X92
                    const randomNum = Math.floor(1000 + Math.random() * 9000);
                    const randomSuffix = Math.random().toString(36).substring(2, 5).toUpperCase();
                    const trackingNumber = `CHR-${randomNum}-${randomSuffix}`;

                    newOrder = {
                        id: Math.random().toString(36).substr(2, 9).toUpperCase(),
                        trackingNumber,
                        customerName: details.name,
                        email: details.email,
                        phone: details.phone,
                        note: details.note,
                        address: details.address,
                        items: [...state.cart],
                        total,
                        status: 'Recibido',
                        date: new Date().toISOString(),
                    };

                    return {
                        orders: [newOrder, ...state.orders],
                        cart: [],
                    };
                });
                return newOrder;
            },

            updateOrderStatus: (orderId: string, status: OrderStatus) =>
                set((state) => ({
                    orders: state.orders.map((order) =>
                        order.id === orderId ? { ...order, status } : order
                    ),
                })),

            cancelOrder: (orderId: string) =>
                set((state) => ({
                    orders: state.orders.map((order) =>
                        order.id === orderId ? { ...order, status: 'Cancelado' } : order
                    ),
                })),

            updateQuantity: (id: string, delta: number) =>
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === id
                            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                            : item
                    ),
                })),

            deleteItem: async (id: string) => {
                const client = supabase;
                if (!client) return;
                const { error } = await client.from('watches').delete().eq('id', id);
                if (error) {
                    console.error('Error deleting item:', error);
                    return;
                }
                set((state) => ({
                    inventory: state.inventory.filter((item) => item.id !== id),
                }));
            },

            updateItemStatus: async (id: string, status) => {
                const client = supabase;
                if (!client) return;
                const { error } = await client.from('watches').update({ availability: status }).eq('id', id);
                if (error) {
                    console.error('Error updating status:', error);
                    return;
                }
                set((state) => ({
                    inventory: state.inventory.map((item) =>
                        item.id === id ? { ...item, availability: status as any } : item
                    ),
                }));
            },

            updateWatchDetails: async (id, updates) => {
                const client = supabase;
                if (!client) return;
                const { error } = await client.from('watches').update(updates).eq('id', id);
                if (error) {
                    console.error('Error updating details:', error);
                    return;
                }
                set((state) => ({
                    inventory: state.inventory.map((item) =>
                        item.id === id ? { ...item, ...updates } : item
                    ),
                }));
            },
        }),
        {
            name: 'chronos-store',
        }
    )
);
