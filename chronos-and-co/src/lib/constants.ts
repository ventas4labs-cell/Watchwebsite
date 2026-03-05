export const WATCH_BRANDS = [
    'Rolex',
    'Patek Philippe',
    'Audemars Piguet',
    'Omega',
    'Cartier',
    'Tissot',
    'Seiko',
    'Bulova',
    'Orient'
] as const;

export const WATCH_COLLECTIONS = [
    'Divers',
    'Chronograph',
    'Dress',
    'Vintage',
    'Gold',
    'Limited Edition'
] as const;

export const WATCH_STATUSES = [
    'Available',
    'Reserved',
    'Sold'
] as const;

export const WATCH_MOVEMENTS = [
    'Automatico Suizo',
    'Cuarzo Suizo',
    'Cuarzo',
    'Automático Japonés'
] as const;

export const WATCH_CASE_SIZES = [
    '38mm',
    '39mm',
    '40mm',
    '41mm',
    '42mm',
    '45mm'
] as const;

export const WATCH_WATER_RESISTANCE = [
    '50m',
    '100m',
    '200m'
] as const;

export const WATCH_CASE_MATERIALS = [
    'Stainless Steel',
    'Titanium',
    'Gold PVD'
] as const;

export const WATCH_CRYSTAL_TYPES = [
    'Mineral resistente a rayones',
    'Zafiro resistente a rayones',
    'Zafiro resistente a rayones +antireflejante'
] as const;

export const ORDER_STATUS_STEPS = [
    { status: 'Orden Recibida' },
    { status: 'Asegurando su Pieza' },
    { status: 'Pieza en Camino' },
    { status: 'Pieza Llegó' },
    { status: 'Entregando' },
    { status: 'Entregada' }
] as const;
