import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Watch } from './seed-data';

export interface CartItem extends Watch {
    quantity: number;
}

export type OrderStatus = 'Recibido' | 'Preparación' | 'Enviado' | 'Entregado';

export interface Order {
    id: string;
    customerName: string;
    email: string;
    phone: string;
    note?: string;
    items: CartItem[];
    total: number;
    status: OrderStatus;
    date: string;
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
    placeOrder: (details: { name: string; email: string; phone: string; note?: string }) => Order | void;
    updateOrderStatus: (orderId: string, status: OrderStatus) => void;
    updateQuantity: (id: string, delta: number) => void;
}

export const useStore = create<StoreState>()(
    persist(
        (set) => ({
            cart: [],
            isCartOpen: false,
            orders: [],

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

                    newOrder = {
                        id: Math.random().toString(36).substr(2, 9).toUpperCase(),
                        customerName: details.name,
                        email: details.email,
                        phone: details.phone,
                        note: details.note,
                        items: [...state.cart],
                        total,
                        status: 'Recibido',
                        date: new Date().toISOString(),
                    };

                    return {
                        orders: [newOrder, ...state.orders],
                        cart: [],
                        isCartOpen: false,
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

            updateQuantity: (id: string, delta: number) =>
                set((state) => ({
                    cart: state.cart.map((item) =>
                        item.id === id
                            ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                            : item
                    ),
                })),
        }),
        {
            name: 'chronos-store',
        }
    )
);
