export interface Watch {
    id: string;
    brand: string;
    model: string;
    price: number;
    description: string;
    image: string;
    gallery?: string[];
    is_featured?: boolean;
    availability?: 'in-stock' | 'pre-order';
    details: Record<string, string>;
}

export const WATCHES: Watch[] = [
    // Tissot (Swiss Minimalist / Sport Chic)
    {
        id: "tissot-prx",
        brand: "Tissot",
        availability: "in-stock",
        model: "PRX 40mm tiffany dial",
        price: 1161,
        description: "Una mezcla magistral de 1970s retro-chic y moderna excelencia mecánica. Si buscas un reloj delgado y suave con un auténtico toque de los años 70, no busques más.",
        image: "/watches/tissot-prx/main.jpg",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-gold-pvd",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Quartz 40mm Gold PVD",
        price: 921,
        description: "El Tissot PRX, el reloj para aquellos con pasión por el diseño y ojo para el ingenio. Su diseño evocador y delgado lo hace un esencial intransigente. Acabado PVD oro amarillo.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwf3224e66/product-pictures/3ff417c6-3ab6-42d9-b01f-f359aa5c926e_T137_410_33_021_00.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Cuarzo Suizo",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-quartz-blue",
        brand: "Tissot", availability: "in-stock",
        model: "PRX Quartz 40mm Blue",
        price: 720,
        description: "Descubre el nuevo Tissot PRX, su diseño evocador y delgado lo hace un esencial intransigente para todos los entusiastas del diseño.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw4398c36a/product-pictures/739cc440-025b-42e8-a5f9-ae33b31479b2_T137-410-11-041-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Cuarzo Suizo",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-quartz-green",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Quartz 40mm Green",
        price: 720,
        description: "En 1978 nació el Tissot PRX, ahora celebramos su regreso. El reloj para aquellos con pasión por el diseño.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw51c36e24/product-pictures/2ea14f38-887a-4f88-b35f-ef97276e79c2_T137-410-11-091-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Cuarzo Suizo",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-quartz-black",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Quartz 40mm Black",
        price: 720,
        description: "Un diseño delgado y evocador que lo convierte en un esencial intransigente para todos los entusiastas del diseño.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwdce8b0a5/product-pictures/56554287-24c7-4edf-b4aa-04bf6845fe24_T137-410-11-051-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Cuarzo Suizo",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-quartz-silver",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Quartz 40mm Silver",
        price: 720,
        description: "El nuevo Tissot PRX, el reloj para aquellos con pasión por el diseño y ojo para el ingenio.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw5af4bd57/product-pictures/eab45cfc-8389-4430-9cf7-1ee3d13f428c_T137-410-11-031-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Cuarzo Suizo",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-quartz-mint",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Quartz 40mm Mint",
        price: 720,
        description: "Descubre el nuevo Tissot PRX ahora, su diseño evocador y delgado lo hace un esencial intransigente.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw7e0f6b6f/product-pictures/ed11fd53-ddd9-4272-a771-5d180a551211_T137-410-11-091-01_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Cuarzo Suizo",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-quartz-rubber-black",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Quartz 40mm Rubber Strap",
        price: 681,
        description: "Estilo moderno con comodidad deportiva. La versión con correa de caucho del icónico PRX.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb77b24b2/product-pictures/05dc0b87-3f53-4697-99f9-e464b0e589d3_T137-410-17-051-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Cuarzo Suizo",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-quartz-leather-blue",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Quartz 40mm Leather Strap",
        price: 640,
        description: "Elegancia clásica con un toque moderno. La versión con correa de piel azul para un look sofisticado.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw66579bc1/product-pictures/1035559f-8895-4f8b-a45c-fd0489773882_T137-410-16-041-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Cuarzo Suizo",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },

    {
        id: "tissot-le-locle",
        brand: "Tissot", availability: "pre-order",
        model: "Le Locle Automatique",
        price: 1040,
        description: "Revisando la tradición con una firma clásica de Le Locle. Elegancia personificada.",
        image: "/watches/tissot-le-locle/main.jpg",
        details: {
            "Movimiento": "Automático Suizo",
            "Tamaño de Caja": "39.3mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-gentleman",
        brand: "Tissot", availability: "pre-order",
        model: "Gentleman Powermatic",
        price: 1433,
        description: "El reloj perfecto para el día a día para el caballero moderno. Versátil y robusto.",
        image: "/watches/tissot-gentleman/main.jpg",
        details: {
            "Movimiento": "Powermatic 80 con Silicio",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-seastar-1000",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar 1000 Powermatic 80",
        price: 1200,
        description: "Un Reloj de buceo de alto rendimiento con una reserva de marcha de 80 horas.",
        image: "/watches/tissot-seastar-1000/main.jpg",
        details: {
            "Movimiento": "Powermatic 80",
            "Tamaño de Caja": "43mm",
            "Resistencia al Agua": "300m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-supersport-chrono",
        brand: "Tissot", availability: "pre-order",
        model: "Supersport Chrono",
        price: 921,
        description: "Un masculino, dinámico y futurista cronógrafo deportivo.",
        image: "/watches/tissot-supersport-chrono/main.jpg",
        details: {
            "Movimiento": "Cronógrafo de Cuarzo",
            "Tamaño de Caja": "45.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-heritage-1938",
        brand: "Tissot", availability: "pre-order",
        model: "Heritage 1938 Automatic",
        price: 1321,
        description: "Un reloj de inspiración vintage celebrando la rica historia.",
        image: "/watches/tissot-heritage-1938/main.jpg",
        details: {
            "Movimiento": "Automático",
            "Tamaño de Caja": "39mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-telemeter-1938",
        brand: "Tissot", availability: "pre-order",
        model: "Telemeter 1938",
        price: 3401,
        description: "Un cronógrafo elegante presentando una escala telemétrica en la esfera.",
        image: "/watches/tissot-telemeter-1938/main.jpg",
        details: {
            "Movimiento": "Cronógrafo Automático",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-chrono-xl",
        brand: "Tissot", availability: "pre-order",
        model: "Chrono XL Vintage",
        price: 633,
        description: "Un reloj de caja grande con una estética retro vintage.",
        image: "/watches/tissot-chrono-xl/main.jpg",
        details: {
            "Movimiento": "Cronógrafo de Cuarzo",
            "Tamaño de Caja": "45mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-chemin-des-tourelles",
        brand: "Tissot", availability: "pre-order",
        model: "Chemin des Tourelles",
        price: 1321,
        description: "Nombrado en honor a la calle donde se estableció el taller de Tissot.",
        image: "/watches/tissot-chemin-des-tourelles/main.jpg",
        details: {
            "Movimiento": "Powermatic 80",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-pr-100",
        brand: "Tissot", availability: "pre-order",
        model: "PR 100 Quartz",
        price: 521,
        description: "Un preciso y robusto everyday watch for any occasion.",
        image: "/watches/tissot-pr-100/main.jpg",
        details: {
            "Movimiento": "Cuarzo",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-classic-dream",
        brand: "Tissot", availability: "pre-order",
        model: "Classic Dream",
        price: 560,
        description: "Un diseño minimalista y atemporal for uso formal.",
        image: "/watches/tissot-classic-dream/main.jpg",
        details: {
            "Movimiento": "Cuarzo",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-ballade",
        brand: "Tissot", availability: "pre-order",
        model: "Ballade Powermatic 80 COSC",
        price: 1520,
        description: "Precisión certificada por cronómetro con una espiral de silicio.",
        image: "/watches/tissot-ballade/main.jpg",
        details: {
            "Movimiento": "Automático COSC",
            "Tamaño de Caja": "41mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-pr516-chrono",
        brand: "Tissot", availability: "pre-order",
        model: "PR516 Chronograph",
        price: 841,
        description: "Reinterpretación moderna of a 1970s clásico de carreras.",
        image: "/watches/tissot-pr516-chrono/main.jpg",
        details: {
            "Movimiento": "Cronógrafo de Cuarzo",
            "Tamaño de Caja": "41mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-carson-premium",
        brand: "Tissot", availability: "pre-order",
        model: "Carson Premium",
        price: 1161,
        description: "Un reloj de vestir elegante con una sofisticada esfera con números romanos.",
        image: "/watches/tissot-carson-premium/main.jpg",
        details: {
            "Movimiento": "Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-tradition",
        brand: "Tissot", availability: "pre-order",
        model: "Tradition Quartz",
        price: 560,
        description: "Relojería ultramoderna con una toque de nostalgia.",
        image: "/watches/tissot-tradition/main.jpg",
        details: {
            "Movimiento": "Cuarzo",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-everytime",
        brand: "Tissot", availability: "pre-order",
        model: "Everytime Quartz",
        price: 473,
        description: "Un diseño de esfera simple y limpio for the minimalista moderno.",
        image: "/watches/tissot-everytime/main.jpg",
        details: {
            "Movimiento": "Cuarzo",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-t-touch-solar",
        brand: "Tissot", availability: "pre-order",
        model: "T-Touch Connect Solar",
        price: 1840,
        description: "El primer reloj conectado táctil alimentado por energía solar sostenible.",
        image: "/watches/tissot-t-touch-solar/main.jpg",
        details: {
            "Movimiento": "Solar Táctil",
            "Tamaño de Caja": "47mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro Táctil",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-visodate",
        brand: "Tissot", availability: "pre-order",
        model: "Heritage Visodate",
        price: 1081,
        description: "Un actualización contemporánea to the original de los años 50 Visodate.",
        image: "/watches/tissot-visodate/main.jpg",
        details: {
            "Movimiento": "Powermatic 80",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prc-200",
        brand: "Tissot", availability: "pre-order",
        model: "PRC 200 Chronograph",
        price: 841,
        description: "Un cronógrafo deportivo with alta resistencia al agua and a taquímetro.",
        image: "/watches/tissot-prc-200/main.jpg",
        details: {
            "Movimiento": "Cronógrafo de Cuarzo",
            "Tamaño de Caja": "43mm",
            "Resistencia al Agua": "200m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-couturier",
        brand: "Tissot", availability: "pre-order",
        model: "Couturier Chronograph",
        price: 1040,
        description: "Un watch influenciado por los diseños meticulosos of diseñadores de moda de clase mundial.",
        image: "/watches/tissot-couturier/main.jpg",
        details: {
            "Movimiento": "Cronógrafo de Cuarzo",
            "Tamaño de Caja": "41mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },

    // Seiko (Japanese Precision / Nature Inspired)


    // Orient (Classic / Value)
    {
        id: "orient-ra-ak0007s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon V3 RA-AK0007S",
        price: 550,
        description: "Un sofisticado reloj de vestir que equilibra complejidad y elegancia. Cuenta con un dial secundario único que rastrea el sol y la luna para indicar el día y la noche, junto con complicaciones de día y fecha. El cristal de zafiro garantiza una claridad duradera y resistencia a los arañazos.",
        image: "/watches/orient-ra-ak0007s/main.webp",
        gallery: [
            "/watches/orient-ra-ak0007s/gallery_1.jpg",
            "/watches/orient-ra-ak0007s/gallery_2.webp",
            "/watches/orient-ra-ak0007s/gallery_3.jpg"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "42.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ak0008s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon V3 RA-AK0008S",
        price: 555,
        description: "Eternamente apreciado, un verdadero clásico. El sol y la luna trazan silenciosamente el paso del tiempo dentro de una caja meticulosamente acabada y cristal de zafiro. El diseño atemporal se acentúa sutilmente por las manecillas pulidas y el dial texturizado.",
        image: "/watches/orient-ra-ak0008s/main.webp",
        gallery: [
            "/watches/orient-ra-ak0008s/gallery_1.jpg",
            "/watches/orient-ra-ak0008s/gallery_2.jpg",
            "/watches/orient-ra-ak0008s/gallery_3.jpg"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "42.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ak0009t",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon V3 RA-AK0009T",
        price: 560,
        description: "Reloj de estilo clásico y sencillo con indicador de día y noche, esfera marrón y detalles en oro rosa. Presenta una pantalla de sol y luna que añade un toque romántico a la precisión mecánica.",
        image: "/watches/orient-ra-ak0009t/main.webp",
        gallery: [
            "/watches/orient-ra-ak0009t/gallery_1.jpg",
            "/watches/orient-ra-ak0009t/gallery_2.webp",
            "/watches/orient-ra-ak0009t/gallery_3.jpg"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "42.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ak0010b",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon V3 RA-AK0010B",
        price: 565,
        description: "Diseño atemporal con fiabilidad moderna. Este Sun & Moon cuenta con una esfera negra profunda y correa de cuero, ideal para un look formal y sofisticado en cualquier ocasión.",
        image: "/watches/orient-ra-ak0010b/main.webp",
        gallery: [
            "/watches/orient-ra-ak0010b/gallery_1.jpg",
            "/watches/orient-ra-ak0010b/gallery_2.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "42.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ak0011d",
        brand: "Orient", availability: "pre-order",
        model: "Classic Day & Night RA-AK0011D",
        price: 560,
        description: "Classic & Simple Style Day & Night with esfera azul marino and correa de cuero a juego. Elegante y sofisticado.",
        image: "/watches/orient-ra-ak0011d/main.webp",
        gallery: [
            "/watches/orient-ra-ak0011d/gallery_1.jpg",
            "/watches/orient-ra-ak0011d/gallery_2.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "42.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-as0101s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon Open Heart RA-AS0101S",
        price: 570,
        description: "Este modelo combina el romántico indicador de Sol y Luna con una ventana de \"corazón abierto\" en la posición de las 9 en punto, lo que permite vislumbrar el movimiento mecánico en funcionamiento. Ofrece un giro moderno a una estética clásica.",
        image: "/watches/orient-ra-as0101s/main.webp",
        gallery: [
            "/watches/orient-ra-as0101s/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-as0102s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon RA-AS0102S",
        price: 575,
        description: "Classic Sun & Moon with white dial, rose gold case, and correa de cuero marrón. Elegancia de inspiración vintage.",
        image: "/watches/orient-ra-as0102s/main.webp",
        gallery: [
            "/watches/orient-ra-as0102s/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-as0103a",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon Open Heart RA-AS0103A",
        price: 580,
        description: "Una mezcla perfecta de estilo clásico y maravilla mecánica. Dial azul marino profundo con complicación de Sol y Luna y ventana radial que revela el escape del movimiento.",
        image: "/watches/orient-ra-as0103a/main.webp",
        gallery: [
            "/watches/orient-ra-as0103a/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    // Classic Semi-Skeleton (Batch 2)
    {
        id: "orient-ra-ak0805e",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon RA-AK0805E",
        price: 550,
        description: "Una elegante adición a la colección de Orient, que combina la estética vintage con sofisticadas complicaciones mecánicas. Presenta una impresionante esfera verde con el icónico indicador de Sol y Luna.",
        image: "/watches/orient-ra-ak0805e/main.webp",
        gallery: [
            "/watches/orient-ra-ak0805e/gallery_1.webp",
            "/watches/orient-ra-ak0805e/gallery_2.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ak0806l",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon RA-AK0806L",
        price: 555,
        description: "Elegancia mecánica con una profunda esfera azul marino. Este modelo Sun & Moon destaca por su disposición clásica y la complicación día/noche que le otorga un carácter único.",
        image: "/watches/orient-ra-ak0806l/main.webp",
        gallery: [
            "/watches/orient-ra-ak0806l/gallery_1.webp",
            "/watches/orient-ra-ak0806l/gallery_2.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ak0807r",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon RA-AK0807R",
        price: 560,
        description: "Una pieza de declaración audaz con esfera color burdeos. Combina la calidez del tono vino con la precisión del movimiento automático F6B24 y el indicador de día y noche.",
        image: "/watches/orient-ra-ak0807r/main.webp",
        gallery: [
            "/watches/orient-ra-ak0807r/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ak0808s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Semi-Skeleton RA-AK0808S",
        price: 640,
        description: "Edición limitada mechanical watch with white dial and correa extra. Elegante y exclusivo.",
        image: "/watches/orient-ra-ak0808s/main.webp",
        gallery: [
            "/watches/orient-ra-ak0808s/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ak0801s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon RA-AK0801S",
        price: 565,
        description: "Acabado en oro rosa elegante para un look vintage sofisticado. Su esfera clara resalta el subdial de Sol y Luna y el indicador de día de la semana.",
        image: "/watches/orient-ra-ak0801s/main.webp",
        gallery: [
            "/watches/orient-ra-ak0801s/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ak0802s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Sun & Moon RA-AK0802S",
        price: 570,
        description: "Versatilidad y elegancia en tono plateado con esfera blanca. Un clásico moderno con la complicación Sun & Moon y el refinamiento de la serie Bambino.",
        image: "/watches/orient-ra-ak0802s/main.webp",
        gallery: [
            "/watches/orient-ra-ak0802s/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ak0803y",
        brand: "Orient", availability: "pre-order",
        model: "Classic Semi-Skeleton RA-AK0803Y",
        price: 608,
        description: "Gold plated mechanical watch with esfera color marfil. Estética vintage clásica.",
        image: "/watches/orient-ra-ak0803y/main.webp",
        gallery: [],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ak0804y",
        brand: "Orient", availability: "pre-order",
        model: "Classic Semi-Skeleton RA-AK0804Y",
        price: 576,
        description: "Earthy brown dial mechanical watch with semi-skeleton feature. Distinctive and warm.",
        image: "/watches/orient-ra-ak0804y/main.webp",
        gallery: [
            "/watches/orient-ra-ak0804y/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    // Classic & Simple Style (Bambino Gen 2 V4 / V8)
    {
        id: "orient-ra-ac0029e",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino V4 RA-AC0029E",
        price: 320,
        description: "Famoso por su impresionante esfera con degradado verde esmeralda y su cristal abovedado de estilo vintage. El V4 mantiene la silueta clásica del Bambino pero con una caja modernizada de 40.5mm y correa de malla.",
        image: "/watches/orient-ra-ac0029e/main.webp",
        gallery: [
            "/watches/orient-ra-ac0029e/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0030l",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino RA-AC0030L",
        price: 325,
        description: "Reloj mecánico Bambino con una esfera de degradado azul claro. Fresco y contemporáneo, este modelo ofrece una elegancia atemporal con un toque de modernidad.",
        image: "/watches/orient-ra-ac0030l/main.webp",
        gallery: [
            "/watches/orient-ra-ac0030l/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0031s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino RA-AC0031S",
        price: 330,
        description: "Elegante Bambino mecánico con esfera blanca e índices simplificados. Pura sofisticación minimalista para el caballero moderno.",
        image: "/watches/orient-ra-ac0031s/main.webp",
        gallery: [
            "/watches/orient-ra-ac0031s/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0032v",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino RA-AC0032V",
        price: 335,
        description: "Unique purple gradation dial Bambino mechanical watch. Stand out with this rare color.",
        image: "/watches/orient-ra-ac0032v/main.webp",
        gallery: [],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0033y",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino RA-AC0033Y",
        price: 340,
        description: "Bambino de inspiración vintage con esfera color marfil y cristal abovedado. Un atractivo atemporal que celebra la herencia clásica de la relojería.",
        image: "/watches/orient-ra-ac0033y/main.webp",
        gallery: [],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0035e",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino RA-AC0035E",
        price: 345,
        description: "Bambino con esfera verde y números arábigos en una correa de cuero. Estética de reloj de campo en un paquete elegante y formal.",
        image: "/watches/orient-ra-ac0035e/main.webp",
        gallery: [
            "/watches/orient-ra-ac0035e/gallery_1.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0037r",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino RA-AC0037R",
        price: 350,
        description: "Mechanical watch with deep esfera burdeos and Unrabic numerals. Rich and elegant.",
        image: "/watches/orient-ra-ac0037r/main.webp",
        gallery: [],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0038s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino RA-AC0038S",
        price: 355,
        description: "Clean white dial Bambino with Unrabic numerals and black strap. High legibility and classic style.",
        image: "/watches/orient-ra-ac0038s/main.webp",
        gallery: [],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0039y",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino RA-AC0039Y",
        price: 360,
        description: "Ivory dial Bambino features unique Unrabic numerals and blued hands. Un collector favorite.",
        image: "/watches/orient-ra-ac0039y/main.webp",
        gallery: [
            "/watches/orient-ra-ac0039y/gallery_1.webp",
            "/watches/orient-ra-ac0039y/gallery_2.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    // Classic & Simple Style (Batch 4)
    {
        id: "orient-ra-ac0023e",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino V4 RA-AC0023E",
        price: 320,
        description: "Elegante reloj mecánico que presenta una rica esfera verde y un estilo clásico. Su cristal abovedado resalta el degradado único de la colección Bambino V4.",
        image: "/watches/orient-ra-ac0023e/main.webp",
        gallery: [
            "/watches/orient-ra-ac0023e/gallery_1.webp",
            "/watches/orient-ra-ac0023e/gallery_2.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0024l",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino V4 RA-AC0024L",
        price: 325,
        description: "Diseño atemporal con una esfera azul profundo y cristal abovedado. La colección V4 ofrece modernidad mecánica en un diseño clásico.",
        image: "/watches/orient-ra-ac0024l/main.webp",
        gallery: [
            "/watches/orient-ra-ac0024l/gallery_1.webp",
            "/watches/orient-ra-ac0024l/gallery_2.webp",
            "/watches/orient-ra-ac0024l/gallery_3.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0025n",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino V4 RA-AC0025N",
        price: 330,
        description: "Versátil reloj mecánico con esfera gris y una cómoda correa de cuero. El diseño elegante y minimalista de la serie Bambino V4 lo convierte en el compañero perfecto para cualquier ocasión.",
        image: "/watches/orient-ra-ac0025n/main.webp",
        gallery: [
            "/watches/orient-ra-ac0025n/gallery_1.webp",
            "/watches/orient-ra-ac0025n/gallery_2.webp",
            "/watches/orient-ra-ac0025n/gallery_3.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0026r",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino V4 RA-AC0026R",
        price: 335,
        description: "Sofisticado reloj con esfera roja que hace una declaración audaz. Combina la herencia mecánica de Orient con un color contemporáneo y vibrante.",
        image: "/watches/orient-ra-ac0026r/main.webp",
        gallery: [
            "/watches/orient-ra-ac0026r/gallery_1.webp",
            "/watches/orient-ra-ac0026r/gallery_2.webp",
            "/watches/orient-ra-ac0026r/gallery_3.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0027s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino V4 RA-AC0027S",
        price: 340,
        description: "Esfera blanca impecable con detalles plateados para un aspecto minimalista y puro. La esencia de la elegancia clásica bajo un cristal abovedado.",
        image: "/watches/orient-ra-ac0027s/main.webp",
        gallery: [
            "/watches/orient-ra-ac0027s/gallery_1.webp",
            "/watches/orient-ra-ac0027s/gallery_2.webp",
            "/watches/orient-ra-ac0027s/gallery_3.jpg"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-wk0001s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino Quartz RA-WK0001S",
        price: 320,
        description: "Una refinada variante de cuarzo del legendario Bambino. Captura la esencia vintage con un dial secundario de segundero pequeño y una caja más compacta de 38.4 mm.",
        image: "/watches/orient-ra-wk0001s/main.webp",
        gallery: [
            "/watches/orient-ra-wk0001s/gallery_1.webp",
            "/watches/orient-ra-wk0001s/gallery_2.webp",
            "/watches/orient-ra-wk0001s/gallery_3.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "38.4mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-wk0003g",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino Solar RA-WK0003G",
        price: 345,
        description: "Esfera color champagne con detalles en tono dorado. Representa la evolución tecnológica de un clásico con su movimiento alimentado por luz solar.",
        image: "/watches/orient-ra-wk0003g/main.webp",
        gallery: [
            "/watches/orient-ra-wk0003g/gallery_1.webp",
            "/watches/orient-ra-wk0003g/gallery_2.webp",
            "/watches/orient-ra-wk0003g/gallery_3.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "38.4mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-wk0004l",
        brand: "Orient", availability: "pre-order",
        model: "Classic & Simple Style RA-WK0004L",
        price: 480,
        description: "Deep blue sunburst dial in a compact 38mm case.",
        image: "/watches/orient-ra-wk0004l/main.webp",
        gallery: [
            "/watches/orient-ra-wk0004l/gallery_1.webp",
            "/watches/orient-ra-wk0004l/gallery_2.webp",
            "/watches/orient-ra-wk0004l/gallery_3.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "38.4 mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-wk0005p",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino Solar RA-WK0005P",
        price: 350,
        description: "Modelo único con esfera color salmón que añade un toque de distinción a la colección clásica. La tecnología solar garantiza fiabilidad sin cambios de batería.",
        image: "/watches/orient-ra-wk0005p/main.webp",
        gallery: [
            "/watches/orient-ra-wk0005p/gallery_1.webp",
            "/watches/orient-ra-wk0005p/gallery_2.webp",
            "/watches/orient-ra-wk0005p/gallery_3.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "38.4mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-wk0006s",
        brand: "Orient", availability: "pre-order",
        model: "Classic & Simple Style RA-WK0006S",
        price: 480,
        description: "Silver dial with mesh bracelet option. Modern meets classic.",
        image: "/watches/orient-ra-wk0006s/main.webp",
        gallery: [
            "/watches/orient-ra-wk0006s/gallery_1.webp",
            "/watches/orient-ra-wk0006s/gallery_2.webp",
            "/watches/orient-ra-wk0006s/gallery_3.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "38.4 mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ap0101b",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino Small Seconds RA-AP0101B",
        price: 355,
        description: "Bambino Small Seconds con esfera negra. Un diseño retro con un dial secundario que evoca los relojes clásicos de mediados de siglo.",
        image: "/watches/orient-ra-ap0101b/main.webp",
        gallery: [
            "/watches/orient-ra-ap0101b/gallery_1.webp",
            "/watches/orient-ra-ap0101b/gallery_2.webp",
            "/watches/orient-ra-ap0101b/gallery_3.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "38.4mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ap0104s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino Small Seconds RA-AP0104S",
        price: 360,
        description: "Bambino Small Seconds con esfera blanca y detalles dorados. Pura sofisticación retro en un tamaño clásico de 38.4 mm.",
        image: "/watches/orient-ra-ap0104s/main.webp",
        gallery: [
            "/watches/orient-ra-ap0104s/gallery_1.webp",
            "/watches/orient-ra-ap0104s/gallery_2.webp",
            "/watches/orient-ra-ap0104s/gallery_3.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "38.4mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "orient-ra-ac0028s",
        brand: "Orient", availability: "pre-order",
        model: "Classic Bambino RA-AC0028S",
        price: 320,
        description: "Estilo clásico Bambino con una esfera blanca nítida y complicación de fecha. Un diseño atemporal que define el estándar de los relojes de vestir de Orient.",
        image: "/watches/orient-ra-ac0028s/main.webp",
        gallery: [
            "/watches/orient-ra-ac0028s/gallery_1.webp",
            "/watches/orient-ra-ac0028s/gallery_2.webp"
        ],
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral resistente a rayones",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "tissot-prx-titanium-38mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Titanium 38mm",
        price: 1561,
        description: "Swiss made excellence. El Tissot PRX Titanium 38mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prx-titanium-38mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-le-locle-39-3mm",
        brand: "Tissot", availability: "pre-order",
        model: "Le Locle 39.3mm",
        price: 1120,
        description: "Swiss made excellence. El Tissot Le Locle 39.3mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-le-locle-39-3mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "3mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "tissot-classic-dream-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "Classic Dream 40mm",
        price: 880,
        description: "Swiss made excellence. El Tissot Classic Dream 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-classic-dream-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-ballade-39mm",
        brand: "Tissot", availability: "pre-order",
        model: "Ballade 39mm",
        price: 1760,
        description: "Swiss made excellence. El Tissot Ballade 39mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-ballade-39mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "39mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-damascus-steel-38mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Damascus Steel 38mm",
        price: 1881,
        description: "Swiss made excellence. El Tissot PRX Damascus Steel 38mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prx-damascus-steel-38mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-pr-100-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "PR 100 40mm",
        price: 681,
        description: "Swiss made excellence. El Tissot PR 100 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-pr-100-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 40mm",
        price: 1520,
        description: "Swiss made excellence. El Tissot PRX 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prx-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-pr516-41mm",
        brand: "Tissot", availability: "pre-order",
        model: "PR516 41mm",
        price: 3440,
        description: "Swiss made excellence. El Tissot PR516 41mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-pr516-41mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "41mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-classic-dream-42mm",
        brand: "Tissot", availability: "pre-order",
        model: "Classic Dream 42mm",
        price: 521,
        description: "Swiss made excellence. El Tissot Classic Dream 42mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-classic-dream-42mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-ballade-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "Ballade 40mm",
        price: 640,
        description: "Swiss made excellence. El Tissot Ballade 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-ballade-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-chrono-xl-vintage-45mm",
        brand: "Tissot", availability: "pre-order",
        model: "Chrono XL Vintage 45mm",
        price: 720,
        description: "Swiss made excellence. El Tissot Chrono XL Vintage 45mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-chrono-xl-vintage-45mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "45mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-chemin-des-tourelles-skeleton-39mm",
        brand: "Tissot", availability: "pre-order",
        model: "Chemin Des Tourelles Skeleton 39mm",
        price: 1680,
        description: "Swiss made excellence. El Tissot Chemin Des Tourelles Skeleton 39mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-chemin-des-tourelles-skeleton-39mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "39mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-seastar-1000-45-5mm",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar 1000 45.5mm",
        price: 1001,
        description: "Swiss made excellence. El Tissot Seastar 1000 45.5mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-seastar-1000-45-5mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "45.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-seastar-wilson-wnba-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar Wilson WNBA 40mm",
        price: 1401,
        description: "Swiss made excellence. El Tissot Seastar Wilson WNBUn 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-seastar-wilson-wnba-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-35mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 35mm",
        price: 1273,
        description: "Swiss made excellence. El Tissot PRX 35mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prx-35mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-seastar-1000-gmt-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar 1000 GMT 40mm",
        price: 880,
        description: "Swiss made excellence. El Tissot Seastar 1000 GMT 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-seastar-1000-gmt-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-t-race-45mm",
        brand: "Tissot", availability: "pre-order",
        model: "T-Race 45mm",
        price: 1040,
        description: "Swiss made excellence. El Tissot T-Race 45mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-t-race-45mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "45mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prc-200-43mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRC 200 43mm",
        price: 953,
        description: "Swiss made excellence. El Tissot PRC 200 43mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prc-200-43mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "43mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-seastar-1000-43mm",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar 1000 43mm",
        price: 1481,
        description: "Swiss made excellence. El Tissot Seastar 1000 43mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-seastar-1000-43mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "43mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-t-touch-connect-sport-43-75mm",
        brand: "Tissot", availability: "pre-order",
        model: "T-Touch Connect Sport 43.75mm",
        price: 1840,
        description: "Swiss made excellence. El Tissot T-Touch Connect Sport 43.75mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-t-touch-connect-sport-43-75mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "43.75mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-t-touch-connect-sport-jungfraubahn-43-75mm",
        brand: "Tissot", availability: "pre-order",
        model: "T-Touch Connect Sport Jungfraubahn 43.75mm",
        price: 2073,
        description: "Swiss made excellence. El Tissot T-Touch Connect Sport Jungfraubahn 43.75mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-t-touch-connect-sport-jungfraubahn-43-75mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "43.75mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-savonnette-49-4mm",
        brand: "Tissot", availability: "pre-order",
        model: "Savonnette 49.4mm",
        price: 1561,
        description: "Swiss made excellence. El Tissot Savonnette 49.4mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-savonnette-49-4mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "49.4mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Latón"
        }
    },
    {
        id: "tissot-prc-100-solar-39mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRC 100 Solar 39mm",
        price: 921,
        description: "Swiss made excellence. El Tissot PRC 100 Solar 39mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prc-100-solar-39mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "39mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-gentleman-open-heart-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "Gentleman Open Heart 40mm",
        price: 1641,
        description: "Swiss made excellence. El Tissot Gentleman Open Heart 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-gentleman-open-heart-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-pr516-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "PR516 40mm",
        price: 1001,
        description: "Swiss made excellence. El Tissot PR516 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-pr516-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-supersport-chrono-45-5mm",
        brand: "Tissot", availability: "pre-order",
        model: "Supersport Chrono 45.5mm",
        price: 921,
        description: "Swiss made excellence. El Tissot Supersport Chrono 45.5mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-supersport-chrono-45-5mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "45.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-chrono-xl-classic-45mm",
        brand: "Tissot", availability: "pre-order",
        model: "Chrono XL Classic 45mm",
        price: 825,
        description: "Swiss made excellence. El Tissot Chrono XL Classic 45mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-chrono-xl-classic-45mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "45mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-t-touch-connect-solar-47-5mm",
        brand: "Tissot", availability: "pre-order",
        model: "T-Touch Connect Solar 47.5mm",
        price: 2000,
        description: "Swiss made excellence. El Tissot T-Touch Connect Solar 47.5mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-t-touch-connect-solar-47-5mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "47.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-tradition-42mm",
        brand: "Tissot", availability: "pre-order",
        model: "Tradition 42mm",
        price: 720,
        description: "Swiss made excellence. El Tissot Tradition 42mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-tradition-42mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-seastar-1000-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar 1000 40mm",
        price: 1401,
        description: "Swiss made excellence. El Tissot Seastar 1000 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-seastar-1000-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-savonnette-48-5mm",
        brand: "Tissot", availability: "pre-order",
        model: "Savonnette 48.5mm",
        price: 681,
        description: "Swiss made excellence. El Tissot Savonnette 48.5mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-savonnette-48-5mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "48.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Latón"
        }
    },
    {
        id: "tissot-pr-100-34mm",
        brand: "Tissot", availability: "pre-order",
        model: "PR 100 34mm",
        price: 560,
        description: "Swiss made excellence. El Tissot PR 100 34mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-pr-100-34mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "34mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-gentleman-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "Gentleman 40mm",
        price: 1520,
        description: "Swiss made excellence. El Tissot Gentleman 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-gentleman-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-seastar-1000-38mm",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar 1000 38mm",
        price: 1001,
        description: "Swiss made excellence. El Tissot Seastar 1000 38mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-seastar-1000-38mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-carson-premium-41mm",
        brand: "Tissot", availability: "pre-order",
        model: "Carson Premium 41mm",
        price: 825,
        description: "Swiss made excellence. El Tissot Carson Premium 41mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-carson-premium-41mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "41mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-pr516-38mm",
        brand: "Tissot", availability: "pre-order",
        model: "PR516 38mm",
        price: 1321,
        description: "Swiss made excellence. El Tissot PR516 38mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-pr516-38mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-gentleman-gold-bezel-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "Gentleman Gold bezel 40mm",
        price: 3801,
        description: "Swiss made excellence. El Tissot Gentleman Gold bezel 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-gentleman-gold-bezel-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-t-race-38mm",
        brand: "Tissot", availability: "pre-order",
        model: "T-Race 38mm",
        price: 1081,
        description: "Swiss made excellence. El Tissot T-Race 38mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-t-race-38mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-pr-100-jungfraubahn-34mm",
        brand: "Tissot", availability: "pre-order",
        model: "PR 100 Jungfraubahn 34mm",
        price: 633,
        description: "Swiss made excellence. El Tissot PR 100 Jungfraubahn 34mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-pr-100-jungfraubahn-34mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "34mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-seastar-1000-quartz-chronograph-38mm",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar 1000 Quartz Chronograph 38mm",
        price: 1040,
        description: "Swiss made excellence. El Tissot Seastar 1000 Quartz Chronograph 38mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-seastar-1000-quartz-chronograph-38mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-pr-100-vuelta-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "PR 100 Vuelta 40mm",
        price: 825,
        description: "Swiss made excellence. El Tissot PR 100 Vuelta 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-pr-100-vuelta-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-heritage-1938-39mm",
        brand: "Tissot", availability: "pre-order",
        model: "HERITAGE 1938 39mm",
        price: 1593,
        description: "Swiss made excellence. El TISSOT HERITUnGE 1938 39mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-heritage-1938-39mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "39mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-ufo-robot-grendizer-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRX UFO Robot Grendizer 40mm",
        price: 1520,
        description: "Swiss made excellence. El Tissot PRX UFO Robot Grendizer 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prx-ufo-robot-grendizer-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-le-locle-gold-39-3mm",
        brand: "Tissot", availability: "pre-order",
        model: "Le Locle Gold 39.3mm",
        price: 3561,
        description: "Swiss made excellence. El Tissot Le Locle Gold 39.3mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-le-locle-gold-39-3mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "3mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "tissot-seastar-1000-36mm",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar 1000 36mm",
        price: 793,
        description: "Swiss made excellence. El Tissot Seastar 1000 36mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-seastar-1000-36mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "36mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-seastar-2000-46mm",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar 2000 46mm",
        price: 2041,
        description: "Swiss made excellence. El Tissot Seastar 2000 46mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-seastar-2000-46mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "46mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-le-locle-open-heart-39-3mm",
        brand: "Tissot", availability: "pre-order",
        model: "Le Locle Open Heart 39.3mm",
        price: 1401,
        description: "Swiss made excellence. El Tissot Le Locle Open Heart 39.3mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-le-locle-open-heart-39-3mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "3mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "tissot-telemeter-1938-42mm",
        brand: "Tissot", availability: "pre-order",
        model: "Telemeter 1938 42mm",
        price: 3840,
        description: "Swiss made excellence. El Tissot Telemeter 1938 42mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-telemeter-1938-42mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-t-race-41mm",
        brand: "Tissot", availability: "pre-order",
        model: "T-Race 41mm",
        price: 1321,
        description: "Swiss made excellence. El Tissot T-Race 41mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-t-race-41mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "41mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-lepine-49mm",
        brand: "Tissot", availability: "pre-order",
        model: "Lepine 49mm",
        price: 560,
        description: "Swiss made excellence. El Tissot Lepine 49mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-lepine-49mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "49mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Latón"
        }
    },
    {
        id: "tissot-chrono-xl-classic",
        brand: "Tissot", availability: "pre-order",
        model: "Chrono XL Classic",
        price: 793,
        description: "Swiss made excellence. El Tissot Chrono XL Classic represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-chrono-xl-classic/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-42mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 42mm",
        price: 3440,
        description: "Swiss made excellence. El Tissot PRX 42mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prx-42mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-gold-35mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Gold 35mm",
        price: 3440,
        description: "Swiss made excellence. El Tissot PRX Gold 35mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prx-gold-35mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-t-complication-squelette-43mm",
        brand: "Tissot", availability: "pre-order",
        model: "T-Complication Squelette 43mm",
        price: 3673,
        description: "Swiss made excellence. El Tissot T-Complication Squelette 43mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-t-complication-squelette-43mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "43mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prc-100-solar-34mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRC 100 Solar 34mm",
        price: 1001,
        description: "Swiss made excellence. El Tissot PRC 100 Solar 34mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prc-100-solar-34mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "34mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-gold-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Gold 40mm",
        price: 3801,
        description: "Swiss made excellence. El Tissot PRX Gold 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prx-gold-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-chemin-des-tourelles-42mm",
        brand: "Tissot", availability: "pre-order",
        model: "Chemin des Tourelles 42mm",
        price: 1401,
        description: "Swiss made excellence. El Tissot Chemin des Tourelles 42mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-chemin-des-tourelles-42mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-goldrun-gold-38mm",
        brand: "Tissot", availability: "pre-order",
        model: "Goldrun Gold 38mm",
        price: 60,
        description: "Swiss made excellence. El Tissot Goldrun Gold 38mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-goldrun-gold-38mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-pendants-30-1mm",
        brand: "Tissot", availability: "pre-order",
        model: "Pendants 30.1mm",
        price: 441,
        description: "Swiss made excellence. El Tissot Pendants 30.1mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-pendants-30-1mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "30.1mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Latón"
        }
    },
    {
        id: "tissot-goldrun-hesalite-gold-33-7mm",
        brand: "Tissot", availability: "pre-order",
        model: "Goldrun Hesalite Gold 33.7mm",
        price: 4841,
        description: "Swiss made excellence. El Tissot Goldrun Hesalite Gold 33.7mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-goldrun-hesalite-gold-33-7mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "33.7mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-le-locle-gold-39mm",
        brand: "Tissot", availability: "pre-order",
        model: "Le Locle Gold 39mm",
        price: 3561,
        description: "Swiss made excellence. El Tissot Le Locle Gold 39mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-le-locle-gold-39mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "39mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-infirmi-egrave-res",
        brand: "Tissot", availability: "pre-order",
        model: "Infirmi&egrave;res",
        price: 473,
        description: "Swiss made excellence. El Tissot Infirmi&egrave;res represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-infirmi-egrave-res/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-classic-dream-swissmatic",
        brand: "Tissot", availability: "pre-order",
        model: "Classic Dream Swissmatic",
        price: 880,
        description: "Swiss made excellence. El Tissot Classic Dream Swissmatic represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-classic-dream-swissmatic/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-seastar-1000-powermatic-80-gmt",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar 1000 Powermatic 80 GMT",
        price: 2201,
        description: "Swiss made excellence. El Tissot Seastar 1000 Powermatic 80 GMT represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-seastar-1000-powermatic-80-gmt/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-ufo-robot-grendizer-50th-anniversary-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRX UFO Robot Grendizer 50th Anniversary 40mm",
        price: 1760,
        description: "Swiss made excellence. El Tissot PRX UFO Robot Grendizer 50th Anniversary 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prx-ufo-robot-grendizer-50th-anniversary-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-heritage-1973",
        brand: "Tissot", availability: "pre-order",
        model: "Heritage 1973",
        price: 4121,
        description: "Swiss made excellence. El Tissot Heritage 1973 represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-heritage-1973/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-t-touch-connect-solar-jungfraubahn-47-5mm",
        brand: "Tissot", availability: "pre-order",
        model: "T-Touch Connect Solar Jungfraubahn 47.5mm",
        price: 2000,
        description: "Swiss made excellence. El Tissot T-Touch Connect Solar Jungfraubahn 47.5mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-t-touch-connect-solar-jungfraubahn-47-5mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "47.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-rockwatch-38mm",
        brand: "Tissot", availability: "pre-order",
        model: "Rockwatch 38mm",
        price: 1961,
        description: "Swiss made excellence. El Tissot Rockwatch 38mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-rockwatch-38mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-le-locle-20th-anniversary-39-3mm",
        brand: "Tissot", availability: "pre-order",
        model: "Le Locle 20th Anniversary 39.3mm",
        price: 1401,
        description: "Swiss made excellence. El Tissot Le Locle 20th Anniversary 39.3mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-le-locle-20th-anniversary-39-3mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "3mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "tissot-pr-100-41mm",
        brand: "Tissot", availability: "pre-order",
        model: "PR 100 41mm",
        price: 953,
        description: "Swiss made excellence. El Tissot PR 100 41mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-pr-100-41mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "41mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-savonnette-49-5mm",
        brand: "Tissot", availability: "pre-order",
        model: "Savonnette 49.5mm",
        price: 681,
        description: "Swiss made excellence. El Tissot Savonnette 49.5mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-savonnette-49-5mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "49.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Latón"
        }
    },
    {
        id: "tissot-prx-carbon-40-5mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Carbon 40.5mm",
        price: 1840,
        description: "Swiss made excellence. El Tissot PRX Carbon 40.5mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prx-carbon-40-5mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-pr-100-jungfraubahn-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "PR 100 Jungfraubahn 40mm",
        price: 633,
        description: "Swiss made excellence. El Tissot PR 100 Jungfraubahn 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-pr-100-jungfraubahn-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-everytime-34mm",
        brand: "Tissot", availability: "pre-order",
        model: "Everytime 34mm",
        price: 560,
        description: "Swiss made excellence. El Tissot Everytime 34mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-everytime-34mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "34mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-damian-lillard-special-edition-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Damian Lillard Special Edition 40mm",
        price: 1520,
        description: "Swiss made excellence. El Tissot PRX Damian Lillard Edición Especial 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-prx-damian-lillard-special-edition-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-supersport-nba-special-edition-45-5mm",
        brand: "Tissot", availability: "pre-order",
        model: "Supersport NBA Special Edition 45.5mm",
        price: 880,
        description: "Swiss made excellence. El Tissot Supersport NBUn Edición Especial 45.5mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-supersport-nba-special-edition-45-5mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "45.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-savonnette-49-55mm",
        brand: "Tissot", availability: "pre-order",
        model: "Savonnette 49.55mm",
        price: 1561,
        description: "Swiss made excellence. El Tissot Savonnette 49.55mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-savonnette-49-55mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "49.55mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Latón"
        }
    },
    {
        id: "tissot-carson-premium-40mm",
        brand: "Tissot", availability: "pre-order",
        model: "Carson Premium 40mm",
        price: 793,
        description: "Swiss made excellence. El Tissot Carson Premium 40mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-carson-premium-40mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-supersport-chrono-basketball-edition-45-5mm",
        brand: "Tissot", availability: "pre-order",
        model: "Supersport Chrono Basketball Edition 45.5mm",
        price: 880,
        description: "Swiss made excellence. El Tissot Supersport Chrono Basketball Edition 45.5mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-supersport-chrono-basketball-edition-45-5mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "45.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-le-locle-39mm",
        brand: "Tissot", availability: "pre-order",
        model: "Le Locle 39mm",
        price: 1120,
        description: "Swiss made excellence. El Tissot Le Locle 39mm represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-le-locle-39mm/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "39mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-seastar-1000-chronograph",
        brand: "Tissot", availability: "pre-order",
        model: "Seastar 1000 Chronograph",
        price: 1040,
        description: "Swiss made excellence. El Tissot Seastar 1000 Chronograph represents the pinnacle of Tissot craftsmanship.",
        image: "/watches/tissot-seastar-1000-chronograph/main.jpg",
        details: {
            "Movimiento": "Swiss Quartz / Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "seiko-srpl61",
        brand: "Seiko", availability: "in-stock",
        model: "Presage Cocktail Time SRPL61",
        price: 550,
        description: "Una pieza que captura la sofisticación de la coctelería clásica. Con un dial texturizado 'Frozen Skydiving' que evoca el brillo del hielo, este modelo hereda la maestría artesanal de Seiko.",
        image: "/watches/seiko-srpl61/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "34.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-srpl63",
        brand: "Seiko", availability: "pre-order",
        model: "Presage Cocktail Time SRPL63",
        price: 550,
        description: "El modelo 'Frozen Mojito' destaca por su dial verde texturizado y elegancia refinada. Ofrece una precisión automática impecable en un diseño atemporal inspirado en la alta coctelería.",
        image: "/watches/seiko-srpl63/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "34.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-srpl64",
        brand: "Seiko", availability: "pre-order",
        model: "Presage Cocktail Time SRPL64",
        price: 595,
        description: "Inspirado en el cóctel 'Frozen Daiquiri', este reloj combina tonos cálidos con la sofisticación de la línea Presage. Un ejemplo perfecto de la unión entre arte y relojería mecánica.",
        image: "/watches/seiko-srpl64/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "34.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-sur589",
        brand: "Seiko", availability: "pre-order",
        model: "Coutura SUR589",
        price: 995,
        description: "La colección Coutura representa la unión entre el diseño moderno y el lujo. Adornado con diamantes genuinos y protegido por cristal de zafiro, es una pieza de elegancia contemporánea.",
        image: "/watches/seiko-sur589/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "30.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-sur591",
        brand: "Seiko", availability: "pre-order",
        model: "Coutura SUR591",
        price: 995,
        description: "Elegancia y rendimiento en cada detalle. Este modelo Coutura presenta una esfera refinada con acentos de diamantes, ideal para quienes buscan un reloj joya con la fiabilidad de Seiko.",
        image: "/watches/seiko-sur591/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "30.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-sur592",
        brand: "Seiko", availability: "pre-order",
        model: "Coutura SUR592",
        price: 1050,
        description: "Un modelo bitono excepcional de la serie Coutura. Su diseño integrado, esmerada selección de diamantes y cristal de zafiro lo sitúan a la vanguardia del lujo funcional.",
        image: "/watches/seiko-sur592/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "30.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-sur586",
        brand: "Seiko", availability: "pre-order",
        model: "Coutura SUR586",
        price: 495,
        description: "Este modelo de la serie Seiko Coutura destaca por su sofisticado diseño bitono y su esfera de madreperla blanca. Una joya de precisión protegida por cristal de zafiro.",
        image: "/watches/seiko-sur586/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "34.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-sur588",
        brand: "Seiko", availability: "pre-order",
        model: "Coutura SUR588",
        price: 495,
        description: "Un reloj de lujo moderno con acabado dorado integral y esfera de madreperla. Su cristal de zafiro y resistencia de 100m lo hacen tan robusto como elegante.",
        image: "/watches/seiko-sur588/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "34.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-swr093",
        brand: "Seiko", availability: "pre-order",
        model: "Essentials Crystal SWR093",
        price: 400,
        description: "Reloj estilo 'Tank' con 34 cristales que adornan el bisel. Un diseño clásico rectangular que combina la elegancia de la joyería con la fiabilidad de Seiko.",
        image: "/watches/seiko-swr093/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "22.7mm x 33.1mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-ssc939",
        brand: "Seiko", availability: "pre-order",
        model: "Prospex Speedtimer SSC939",
        price: 750,
        description: "Cronógrafo solar inspirado en la herencia de cronometraje deportivo de Seiko. Su cristal de zafiro curvado y tecnología solar V192 lo sitúan en la cima del rendimiento.",
        image: "/watches/seiko-ssc939/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.4mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-ssc929",
        brand: "Seiko", availability: "pre-order",
        model: "Prospex Speedtimer SSC929",
        price: 900,
        description: "Un cronógrafo de alta precisión que rinde homenaje a los hitos históricos de Seiko en el deporte profesional. Equipado con carga solar y zafiro con revestimiento antirreflectante.",
        image: "/watches/seiko-ssc929/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.4mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-ssc931",
        brand: "Seiko", availability: "pre-order",
        model: "Prospex Speedtimer SSC931",
        price: 750,
        description: "Diseño robusto y tecnología avanzada se unen en este Speedtimer. Su movimiento solar elimina la necesidad de cambio de batería, ofreciendo una fiabilidad excepcional.",
        image: "/watches/seiko-ssc931/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "41.4mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-ssc913",
        brand: "Seiko", availability: "pre-order",
        model: "Prospex Speedtimer SSC913",
        price: 750,
        description: "Versión compacta de 39mm con dial azul 'Pepsi'. Un cronógrafo solar versátil que captura la esencia de los clásicos de los años 60 con especificaciones modernas.",
        image: "/watches/seiko-ssc913/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "39.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-sur605",
        brand: "Seiko", availability: "pre-order",
        model: "Prospex Sea Series SUR605",
        price: 795,
        description: "Este modelo Prospex combina elegancia y rendimiento deportivo en un diseño compacto. Con esfera de madreperla blanca y cristal de zafiro, ofrece una impresionante resistencia al agua de 200 metros.",
        image: "/watches/seiko-sur605/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "34.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-sur607",
        brand: "Seiko", availability: "pre-order",
        model: "Prospex Sea Series SUR607",
        price: 795,
        description: "Un reloj sumergible de alta gama con esfera de madreperla azul. Su construcción robusta y cristal de zafiro lo hacen ideal tanto para el uso diario sofisticado como para actividades acuáticas.",
        image: "/watches/seiko-sur607/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "34.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-sur608",
        brand: "Seiko", availability: "pre-order",
        model: "Prospex Sea Series SUR608",
        price: 875,
        description: "La variante bitono de la serie Prospex Sea Compact. Combina lujo y funcionalidad con una esfera de madreperla, 200m de resistencia al agua y la dureza del cristal de zafiro.",
        image: "/watches/seiko-sur608/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "34.0mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-ssk039",
        brand: "Seiko", availability: "pre-order",
        model: "Presage Cocktail Time GMT SSK039",
        price: 595,
        description: "Elevando la elegancia mecánica, este modelo integra la complicación GMT en la icónica estética Cocktail Time. Con dial 'Skydiving' y la precisión del calibre automático 4R34.",
        image: "/watches/seiko-ssk039/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-ssk041",
        brand: "Seiko", availability: "pre-order",
        model: "Presage Cocktail Time GMT SSK041",
        price: 625,
        description: "Inspirado en los colores del cóctel 'Acacia', este GMT combina funcionalidad para el viajero con un diseño refinado. Presenta un cristal Hardlex abovedado y fondo de caja transparente.",
        image: "/watches/seiko-ssk041/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-srpk48",
        brand: "Seiko", availability: "pre-order",
        model: "Presage Cocktail Time SRPK48",
        price: 550,
        description: "Captura la luz de los bares de Tokio con este modelo en tonos dorados y esfera azul profunda. Una celebración de la precisión japonesa y la elegancia clásica de la línea Presage.",
        image: "/watches/seiko-srpk48/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "seiko-srpk46",
        brand: "Seiko", availability: "pre-order",
        model: "Presage Cocktail Time SRPK46",
        price: 575,
        description: "Edición especial con acabado dorado y esfera blanca radiante. Su movimiento automático es visible a través del fondo de caja, rindiendo tributo a la tradición relojera de Seiko.",
        image: "/watches/seiko-srpk46/default.png",
        details: {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "bulova-bul98a162",
        brand: "Bulova",
        model: "Curv Chronograph Dark Gray Dial Men's Watch 98A162",
        price: 875,
        description: "Official Bulova Curv Chronograph Dark Gray Esfera Men's Watch 98Un162 (BUL98Un162). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul98a162/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul96k111",
        brand: "Bulova",
        model: "Lunar Pilot Archive Chronograph Quartz Black Dial Men's Watch 96K111",
        price: 926,
        description: "Official Bulova Lunar Pilot Unrchive Chronograph Quartz Black Esfera Men's Watch 96K111 (BUL96K111). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul96k111/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul98b422",
        brand: "Bulova",
        model: "Surveyor Automatic Red Dial Men's Watch 98B422",
        price: 494,
        description: "Official Bulova Surveyor Unutomatic Red Esfera Men's Watch 98B422 (BUL98B422). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul98b422/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul96k115",
        brand: "Bulova",
        model: "Lunar Pilot Chronograph Quartz Red Dial Men's Watch 96K115",
        price: 750,
        description: "Official Bulova Lunar Pilot Chronograph Quartz Red Esfera Men's Watch 96K115 (BUL96K115). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul96k115/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul96a268",
        brand: "Bulova",
        model: "Sutton Automatic Silver White Dial Men's Watch 96A268",
        price: 382,
        description: "Official Bulova Sutton Unutomatic Silver White Esfera Men's Watch 96Un268 (BUL96Un268). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul96a268/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul98a272",
        brand: "Bulova",
        model: "Marine Star Automatic Black Dial Men's Watch 98A272",
        price: 526,
        description: "Official Bulova Marine Star Unutomatic Black Esfera Men's Watch 98Un272 (BUL98Un272). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul98a272/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul98a255",
        brand: "Bulova",
        model: "Hack Automatic Black Dial Men's Watch 98A255",
        price: 436,
        description: "Official Bulova Hack Unutomatic Black Esfera Men's Watch 98Un255 (BUL98Un255). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul98a255/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul96a310",
        brand: "Bulova",
        model: "Surveyor Automatic Men's Watch 96A310",
        price: 448,
        description: "Official Bulova Surveyor Unutomatic Men's Watch 96Un310 (BUL96Un310). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul96a310/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul96b426",
        brand: "Bulova",
        model: "Marine Star HPQ Precisionist Quartz White Dial Men's Watch 96B426",
        price: 632,
        description: "Official Bulova Marine Star HPQ Precisionist Quartz White Esfera Men's Watch 96B426 (BUL96B426). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul96b426/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul97b214",
        brand: "Bulova",
        model: "Jet Star Quartz Gold Dial Men's Watch 97B214",
        price: 520,
        description: "Official Bulova Jet Star Quartz Gold Esfera Men's Watch 97B214 (BUL97B214). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul97b214/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul98b449",
        brand: "Bulova",
        model: "Snorkel Quartz White Dial Men's Watch 98B449",
        price: 336,
        description: "Official Bulova Snorkel Quartz White Esfera Men's Watch 98B449 (BUL98B449). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul98b449/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul96a259",
        brand: "Bulova",
        model: "VWI Special Edition HACK Automatic Black Dial Men's Watch 96A259",
        price: 387,
        description: "Official Bulova VWI Edición Especial HUnCK Unutomatic Black Esfera Men's Watch 96Un259 (BUL96Un259). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul96a259/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul96b374",
        brand: "Bulova",
        model: "Aerojet Chronograph Automatic Blue Sunray Dial  Men's Watch 96B374",
        price: 430,
        description: "Official Bulova Unerojet Chronograph Unutomatic Blue Sunray Esfera  Men's Watch 96B374 (BUL96B374). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul96b374/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul98b427",
        brand: "Bulova",
        model: "Racer Chronograph Quartz Black Dial Men's Watch 98B427",
        price: 523,
        description: "Official Bulova Racer Chronograph Quartz Black Esfera Men's Watch 98B427 (BUL98B427). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul98b427/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul97a161",
        brand: "Bulova",
        model: "Sutton Automatic Silver Skeleton Dial Men's Watch 97A161",
        price: 528,
        description: "Official Bulova Sutton Unutomatic Silver Skeleton Esfera Men's Watch 97Un161 (BUL97Un161). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul97a161/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul98a319",
        brand: "Bulova",
        model: "Maquina Automatic Blue Dial Men's Watch 98A319",
        price: 725,
        description: "Official Bulova Maquina Unutomatic Blue Esfera Men's Watch 98Un319 (BUL98Un319). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul98a319/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul96b443",
        brand: "Bulova",
        model: "Sutton Quartz Grey Dial Watch 96B443",
        price: 285,
        description: "Official Bulova Sutton Quartz Grey Esfera Watch 96B443 (BUL96B443). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul96b443/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul98b432",
        brand: "Bulova",
        model: "Racer Chronograph Quartz Blue Dial Men's Watch 98B432",
        price: 667,
        description: "Official Bulova Racer Chronograph Quartz Blue Esfera Men's Watch 98B432 (BUL98B432). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul98b432/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "bulova-bul96a246",
        brand: "Bulova",
        model: "Hack Automatic Ivory Dial Men's Watch 96A246",
        price: 371,
        description: "Official Bulova Hack Unutomatic Ivory Esfera Men's Watch 96Un246 (BUL96Un246). Unmerican innovation and craftsmanship.",
        image: "/watches/bulova-bul96a246/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-59370",
        brand: "Stauer",
        model: "DuMonde Watch",
        price: 31840,
        description: "Official Stauer DuMonde Watch (59370). Vintage-inspired timepiece.",
        image: "/watches/stauer-59370/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-46931",
        brand: "Stauer",
        model: "Stauer Swiss Tactical Watch",
        price: 23840,
        description: "Official Stauer Stauer Swiss Tactical Watch (46931). Vintage-inspired timepiece.",
        image: "/watches/stauer-46931/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-55092",
        brand: "Stauer",
        model: "1920s Retrograde Watch",
        price: 23840,
        description: "Official Stauer 1920s Retrograde Watch (55092). Vintage-inspired timepiece.",
        image: "/watches/stauer-55092/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-17468",
        brand: "Stauer",
        model: "Stauer Titanium Atomic Men's Watch",
        price: 39840,
        description: "Official Stauer Stauer Titanium Untomic Men's Watch (17468). Vintage-inspired timepiece.",
        image: "/watches/stauer-17468/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "stauer-17469",
        brand: "Stauer",
        model: "Stauer 1930 Dashtronic Watch",
        price: 31840,
        description: "Official Stauer Stauer 1930 Dashtronic Watch (17469). Vintage-inspired timepiece.",
        image: "/watches/stauer-17469/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-62698",
        brand: "Stauer",
        model: "RossoBlu Classic Sport Watch",
        price: 23840,
        description: "Official Stauer RossoBlu Classic Sport Watch (62698). Vintage-inspired timepiece.",
        image: "/watches/stauer-62698/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-60100",
        brand: "Stauer",
        model: "The Only Chronograph Watch",
        price: 23840,
        description: "Official Stauer El Only Chronograph Watch (60100). Vintage-inspired timepiece.",
        image: "/watches/stauer-60100/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-62789",
        brand: "Stauer",
        model: "Italian-made Volterra Chronograph",
        price: 31840,
        description: "Official Stauer Italian-made Volterra Chronograph (62789). Vintage-inspired timepiece.",
        image: "/watches/stauer-62789/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-18295",
        brand: "Stauer",
        model: "Morgan Silver Dollar Men's Watch",
        price: 55840,
        description: "Official Stauer Morgan Silver Dollar Men's Watch (18295). Vintage-inspired timepiece.",
        image: "/watches/stauer-18295/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-61955",
        brand: "Stauer",
        model: "The Sage Men's Hybrid Watch",
        price: 23840,
        description: "Official Stauer El Sage Men's Hybrid Watch (61955). Vintage-inspired timepiece.",
        image: "/watches/stauer-61955/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-61104",
        brand: "Stauer",
        model: "Swiss Tactical Adventurer Watch",
        price: 23840,
        description: "Official Stauer Swiss Tactical Undventurer Watch (61104). Vintage-inspired timepiece.",
        image: "/watches/stauer-61104/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-62787",
        brand: "Stauer",
        model: "Alpine Precision Italian-made Chronograph",
        price: 31840,
        description: "Official Stauer Unlpine Precision Italian-made Chronograph (62787). Vintage-inspired timepiece.",
        image: "/watches/stauer-62787/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-20319",
        brand: "Stauer",
        model: "Stauer Meisterzeit Timepiece",
        price: 23840,
        description: "Official Stauer Stauer Meisterzeit Timepiece (20319). Vintage-inspired timepiece.",
        image: "/watches/stauer-20319/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-17475",
        brand: "Stauer",
        model: "Stauer 1930 Gold-Finished Dashtronic Watch",
        price: 31840,
        description: "Official Stauer Stauer 1930 Gold-Finished Dashtronic Watch (17475). Vintage-inspired timepiece.",
        image: "/watches/stauer-17475/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-61631",
        brand: "Stauer",
        model: "Classique Retrograde Watch",
        price: 20640,
        description: "Official Stauer Classique Retrograde Watch (61631). Vintage-inspired timepiece.",
        image: "/watches/stauer-61631/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-51465",
        brand: "Stauer",
        model: "Ladies Rouge Watch",
        price: 15840,
        description: "Official Stauer Ladies Rouge Watch (51465). Vintage-inspired timepiece.",
        image: "/watches/stauer-51465/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-59495",
        brand: "Stauer",
        model: "Senso Sport Hybrid Smart Watch (Slate Grey)",
        price: 60640,
        description: "Official Stauer Senso Sport Hybrid Smart Watch (Slate Grey) (59495). Vintage-inspired timepiece.",
        image: "/watches/stauer-59495/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-35771",
        brand: "Stauer",
        model: "Co-Pilot Men's Watch",
        price: 28640,
        description: "Official Stauer Co-Pilot Men's Watch (35771). Vintage-inspired timepiece.",
        image: "/watches/stauer-35771/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-61396",
        brand: "Stauer",
        model: "Men's Rhone Glacier Swiss Watch",
        price: 23840,
        description: "Official Stauer Men's Rhone Glacier Swiss Watch (61396). Vintage-inspired timepiece.",
        image: "/watches/stauer-61396/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "stauer-33208",
        brand: "Stauer",
        model: "Stauer Blue Stone Chronograph",
        price: 12640,
        description: "Official Stauer Stauer Blue Stone Chronograph (33208). Vintage-inspired timepiece.",
        image: "/watches/stauer-33208/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "30m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtwh6z4310",
        brand: "Timex",
        model: "Harborside Coast Automatic Blue Dial Men's Watch TWH6Z4310",
        price: 94,
        description: "Official Timex Harborside Coast Unutomatic Blue Esfera Men's Watch TWH6Z4310 (TXTWH6Z4310). Reliable, durable, and iconic.",
        image: "/watches/timex-txtwh6z4310/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2v62100",
        brand: "Timex",
        model: "Marlin Automatic Black Dial Men's Watch TW2V62100",
        price: 510,
        description: "Official Timex Marlin Unutomatic Black Esfera Men's Watch TW2V62100 (TXTW2V62100). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2v62100/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw4b06800",
        brand: "Timex",
        model: "Expedition Quartz Beige Dial Watch TW4B06800",
        price: 54,
        description: "Official Timex Expedition Quartz Beige Esfera Watch TW4B06800 (TXTW4B06800). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw4b06800/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2w47300",
        brand: "Timex",
        model: "Waterbury Chronograph Quartz Men's Watch TW2W47300",
        price: 91,
        description: "Official Timex Waterbury Chronograph Quartz Men's Watch TW2W47300 (TXTW2W47300). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2w47300/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2w51300jr",
        brand: "Timex",
        model: "Marlin Quartz Moon Phase Blue Dial Watch TW2W51300JR",
        price: 363,
        description: "Official Timex Marlin Quartz Moon Phase Blue Esfera Watch TW2W51300JR (TXTW2W51300JR). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2w51300jr/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2u78300",
        brand: "Timex",
        model: "M79 Automatic Black Dial Watch TW2U78300V3",
        price: 198,
        description: "Official Timex M79 Unutomatic Black Esfera Watch TW2U78300V3 (TXTW2U78300). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2u78300/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2w44700",
        brand: "Timex",
        model: "Q Timex 1978 Quartz Green Dial Men's Watch TW2W44700",
        price: 334,
        description: "Official Timex Q Timex 1978 Quartz Green Esfera Men's Watch TW2W44700 (TXTW2W44700). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2w44700/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2u88100",
        brand: "Timex",
        model: "Waterbury Classic Chronograph Quartz White Dial Men's Watch TW2U88100",
        price: 102,
        description: "Official Timex Waterbury Classic Chronograph Quartz White Esfera Men's Watch TW2U88100 (TXTW2U88100). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2u88100/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2w64200",
        brand: "Timex",
        model: "Q Timex Chronograph Quartz Black Dial Men's Watch TW2W64200",
        price: 358,
        description: "Official Timex Q Timex Chronograph Quartz Black Esfera Men's Watch TW2W64200 (TXTW2W64200). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2w64200/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2w51600",
        brand: "Timex",
        model: "Q Timex Chronograph Quartz Blue Dial Men's Watch TW2W51600",
        price: 374,
        description: "Official Timex Q Timex Chronograph Quartz Blue Esfera Men's Watch TW2W51600 (TXTW2W51600). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2w51600/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2w41900",
        brand: "Timex",
        model: "Expedition North Anchorage Quartz Black Dial Men's Watch TW2W41900",
        price: 128,
        description: "Official Timex Expedition North Anchorage Quartz Black Esfera Men's Watch TW2W41900 (TXTW2W41900). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2w41900/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2v67900",
        brand: "Timex",
        model: "Legacy Quartz Gray Dial Men's Watch TW2V67900",
        price: 156,
        description: "Official Timex Legacy Quartz Gray Esfera Men's Watch TW2V67900 (TXTW2V67900). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2v67900/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2r67600",
        brand: "Timex",
        model: "MK1 Chronograph Quartz Blue Dial Men's Watch TW2R67600",
        price: 78,
        description: "Official Timex MK1 Chronograph Quartz Blue Esfera Men's Watch TW2R67600 (TXTW2R67600). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2r67600/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2t80700",
        brand: "Timex",
        model: "Q Timex Reissue Quartz Blue Dial Pepsi Bezel Watch TW2T80700ZV",
        price: 198,
        description: "Official Timex Q Timex Reissue Quartz Blue Esfera Pepsi Bezel Watch TW2T80700ZV (TXTW2T80700). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2t80700/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2v17500",
        brand: "Timex",
        model: "Waterbury Legacy Quartz Navy Dial Men's Watch TW2V17500",
        price: 106,
        description: "Official Timex Waterbury Legacy Quartz Navy Esfera Men's Watch TW2V17500 (TXTW2V17500). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2v17500/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2w58800",
        brand: "Timex",
        model: "Marlin Automatic Black Dial Men's Watch TW2W58800",
        price: 528,
        description: "Official Timex Marlin Unutomatic Black Esfera Men's Watch TW2W58800 (TXTW2W58800). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2w58800/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2w71200",
        brand: "Timex",
        model: "Expedition Traprock Blue Dial Men's Watch TW2W71200",
        price: 94,
        description: "Official Timex Expedition Traprock Blue Esfera Men's Watch TW2W71200 (TXTW2W71200). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2w71200/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2v42700",
        brand: "Timex",
        model: "Q Chronograph Quartz Black Dial Men's Watch TW2V42700",
        price: 334,
        description: "Official Timex Q Chronograph Quartz Black Esfera Men's Watch TW2V42700 (TXTW2V42700). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2v42700/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2v74000",
        brand: "Timex",
        model: "Waterbury Traditional GMT Quartz Coke Bezel Men's Watch TW2V74000VQ",
        price: 110,
        description: "Official Timex Waterbury Traditional GMT Quartz Coke Bezel Men's Watch TW2V74000VQ (TXTW2V74000). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2v74000/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        id: "timex-txtw2w33700",
        brand: "Timex",
        model: "Q Falcon Eye Chronograph Quartz Blue Dial Men's Watch TW2W33700",
        price: 408,
        description: "Official Timex Q Falcon Eye Chronograph Quartz Blue Esfera Men's Watch TW2W33700 (TXTW2W33700). Reliable, durable, and iconic.",
        image: "/watches/timex-txtw2w33700/default.jpg",
        details: {
            "Movimiento": "Quartz/Automatic",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Mineral",
            "Material de la Caja": "Acero Inoxidable"
        }
    },
    {
        "id": "seiko-ssk049",
        "brand": "Seiko",
        "model": "SSK049",
        "price": 62500,
        "description": "Presage Cocktail Time GMT U.S. Special Creation. Offering the finest in Japanese mechanical watchmaking, the Presage Collection blends precision technology with superior craftsmanship and design. Evok...",
        "image": "/watches/seiko-ssk049/main.webp",
        "gallery": [
            "/watches/seiko-ssk049/gallery_1.webp",
            "/watches/seiko-ssk049/gallery_2.webp",
            "/watches/seiko-ssk049/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssj026",
        "brand": "Seiko",
        "model": "SSJ026",
        "price": 240000,
        "description": "Astron GPS Solar. With the strong, sleek lines of the Seiko Astron, the world’s first commercially available quartz watch, today’s Astron is designed for a new generation of leaders, breaking through ...",
        "image": "/watches/seiko-ssj026/main.webp",
        "gallery": [
            "/watches/seiko-ssj026/gallery_1.webp",
            "/watches/seiko-ssj026/gallery_2.webp",
            "/watches/seiko-ssj026/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssj021",
        "brand": "Seiko",
        "model": "SSJ021",
        "price": 230000,
        "description": "Astron GPS Solar Limited Edition.  With the strong, sleek lines of the Seiko Astron, the world’s first commercially available quartz watch, today’s Astron is designed for a new generation of leaders, ...",
        "image": "/watches/seiko-ssj021/main.webp",
        "gallery": [
            "/watches/seiko-ssj021/gallery_1.webp",
            "/watches/seiko-ssj021/gallery_2.webp",
            "/watches/seiko-ssj021/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssj013",
        "brand": "Seiko",
        "model": "SSJ013",
        "price": 220000,
        "description": "Astron GPS Solar.  With the strong, sleek lines of the Seiko Astron, the world’s first commercially available quartz watch, today’s Astron is designed for a new generation of leaders, breaking through...",
        "image": "/watches/seiko-ssj013/main.webp",
        "gallery": [
            "/watches/seiko-ssj013/gallery_1.webp",
            "/watches/seiko-ssj013/gallery_2.webp",
            "/watches/seiko-ssj013/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssh153",
        "brand": "Seiko",
        "model": "SSH153",
        "price": 270000,
        "description": "Astron GPS Solar Dual-Time Chronograph. Extending the legacy of the Seiko Astron, the world’s first commercially available quartz watch, today’s Astron is designed for a new generation of leaders to b...",
        "image": "/watches/seiko-ssh153/main.webp",
        "gallery": [
            "/watches/seiko-ssh153/gallery_1.webp",
            "/watches/seiko-ssh153/gallery_2.webp",
            "/watches/seiko-ssh153/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssh137",
        "brand": "Seiko",
        "model": "SSH137",
        "price": 290000,
        "description": "Astron GPS Solar Limited Edition. With the strong, sleek lines of the Seiko Astron, the world’s first commercially available quartz watch, today’s Astron is designed for a new generation of leaders, b...",
        "image": "/watches/seiko-ssh137/main.webp",
        "gallery": [
            "/watches/seiko-ssh137/gallery_1.webp",
            "/watches/seiko-ssh137/gallery_2.webp",
            "/watches/seiko-ssh137/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssh139",
        "brand": "Seiko",
        "model": "SSH139",
        "price": 280000,
        "description": "Astron GPS Solar Limited Edition. With the strong, sleek lines of the Seiko Astron, the world’s first commercially available quartz watch, today’s Astron is designed for a new generation of leaders, b...",
        "image": "/watches/seiko-ssh139/main.webp",
        "gallery": [
            "/watches/seiko-ssh139/gallery_1.webp",
            "/watches/seiko-ssh139/gallery_2.webp",
            "/watches/seiko-ssh139/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb446",
        "brand": "Seiko",
        "model": "SSB446",
        "price": 35000,
        "description": "From the Essentials Collection. Designed to evoke the cool thrill of driving by night, this smooth chronograph offers a slim profile for sleek sport or everyday wear. Framed by a gold tachymeter bezel...",
        "image": "/watches/seiko-ssb446/main.webp",
        "gallery": [
            "/watches/seiko-ssb446/gallery_1.webp",
            "/watches/seiko-ssb446/gallery_2.webp",
            "/watches/seiko-ssb446/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sseh024",
        "brand": "Seiko",
        "model": "SSEH024",
        "price": 41000,
        "description": "Power Design Project Limited Edition. The “Power Design Project” began in 2001 as an initiative for Seiko Watch Corporation’s designers to explore the essence of watches and pursue design possibilitie...",
        "image": "/watches/seiko-sseh024/main.webp",
        "gallery": [
            "/watches/seiko-sseh024/gallery_1.webp",
            "/watches/seiko-sseh024/gallery_2.webp",
            "/watches/seiko-sseh024/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sseh023",
        "brand": "Seiko",
        "model": "SSEH023",
        "price": 41000,
        "description": "Power Design Project Limited Edition. The “Power Design Project” began in 2001 as an initiative for Seiko Watch Corporation’s designers to explore the essence of watches and pursue design possibilitie...",
        "image": "/watches/seiko-sseh023/main.webp",
        "gallery": [
            "/watches/seiko-sseh023/gallery_1.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sseh021",
        "brand": "Seiko",
        "model": "SSEH021",
        "price": 37000,
        "description": "Power Design Project Limited Edition. The “Power Design Project” began in 2001 as an initiative for Seiko Watch Corporation’s designers to explore the essence of watches and pursue design possibilitie...",
        "image": "/watches/seiko-sseh021/main.webp",
        "gallery": [
            "/watches/seiko-sseh021/gallery_1.webp",
            "/watches/seiko-sseh021/gallery_2.webp",
            "/watches/seiko-sseh021/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur392",
        "brand": "Seiko",
        "model": "SUR392",
        "price": 36000,
        "description": "From the Crystal Collection. Inspired by jewelry design, this elegant watch is styled to be perfect for both everyday and special occasion use. With dazzling crystals framing a patterned white dial wi...",
        "image": "/watches/seiko-sur392/main.webp",
        "gallery": [
            "/watches/seiko-sur392/gallery_1.webp",
            "/watches/seiko-sur392/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur394",
        "brand": "Seiko",
        "model": "SUR394",
        "price": 37500,
        "description": "From the Crystal Collection. Inspired by jewelry design, this elegant watch is styled to be perfect for both everyday and special occasion use. With dazzling crystals framing a patterned white dial wi...",
        "image": "/watches/seiko-sur394/main.webp",
        "gallery": [
            "/watches/seiko-sur394/gallery_1.webp",
            "/watches/seiko-sur394/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur618",
        "brand": "Seiko",
        "model": "SUR618",
        "price": 115000,
        "description": "Prospex Sea Series. Designed for those who treat life as the ultimate adventure, the Seiko Prospex line meets every challenge with technological excellence and style. Taking on a sporty, yet refined i...",
        "image": "/watches/seiko-sur618/main.webp",
        "gallery": [
            "/watches/seiko-sur618/gallery_1.webp",
            "/watches/seiko-sur618/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur620",
        "brand": "Seiko",
        "model": "SUR620",
        "price": 115000,
        "description": "Prospex Sea Series. Designed for those who treat life as the ultimate adventure, the Seiko Prospex line meets every challenge with technological excellence and style. Taking on a sporty, yet refined i...",
        "image": "/watches/seiko-sur620/main.webp",
        "gallery": [
            "/watches/seiko-sur620/gallery_1.webp",
            "/watches/seiko-sur620/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur622",
        "brand": "Seiko",
        "model": "SUR622",
        "price": 295000,
        "description": "Prospex Sea Series. Designed for those who treat life as the ultimate adventure, the Seiko Prospex line meets every challenge with technological excellence and style. Taking on a sporty, yet refined i...",
        "image": "/watches/seiko-sur622/main.webp",
        "gallery": [
            "/watches/seiko-sur622/gallery_1.webp",
            "/watches/seiko-sur622/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur595",
        "brand": "Seiko",
        "model": "SUR595",
        "price": 79500,
        "description": "Prospex Sea Series. Designed for those who treat life as the ultimate adventure, the Seiko Prospex line meets every challenge with technological excellence and style. Taking on a sporty, yet refined i...",
        "image": "/watches/seiko-sur595/main.webp",
        "gallery": [
            "/watches/seiko-sur595/gallery_1.webp",
            "/watches/seiko-sur595/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur597",
        "brand": "Seiko",
        "model": "SUR597",
        "price": 79500,
        "description": "Prospex Sea Series. Designed for those who treat life as the ultimate adventure, the Seiko Prospex line meets every challenge with technological excellence and style. Taking on a sporty, yet refined i...",
        "image": "/watches/seiko-sur597/main.webp",
        "gallery": [
            "/watches/seiko-sur597/gallery_1.webp",
            "/watches/seiko-sur597/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl81",
        "brand": "Seiko",
        "model": "SRPL81",
        "price": 79500,
        "description": "Prospex JAWS 50th Anniversary Limited Edition. Designed for those who treat life as the ultimate adventure, Seiko Prospex challenges every limit with timepieces created to exceed expectations, enginee...",
        "image": "/watches/seiko-srpl81/main.webp",
        "gallery": [
            "/watches/seiko-srpl81/gallery_1.webp",
            "/watches/seiko-srpl81/gallery_2.webp",
            "/watches/seiko-srpl81/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur402",
        "brand": "Seiko",
        "model": "SUR402",
        "price": 23500,
        "description": "From the Essentials Collection. Offering classic designs, the Essentials Collection provides the ideal solution for all-day wear. Crafted of stainless steel in versatile two-tone finish, this perfectl...",
        "image": "/watches/seiko-sur402/main.webp",
        "gallery": [
            "/watches/seiko-sur402/gallery_1.webp",
            "/watches/seiko-sur402/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur444",
        "brand": "Seiko",
        "model": "SUR444",
        "price": 25000,
        "description": "From the Essentials Collection. Offering classic designs, the Essentials Collection provides the ideal solution for all-day wear. Crafted of stainless steel in gold-tone finish, this perfectly tailore...",
        "image": "/watches/seiko-sur444/main.webp",
        "gallery": [
            "/watches/seiko-sur444/gallery_1.webp",
            "/watches/seiko-sur444/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur442",
        "brand": "Seiko",
        "model": "SUR442",
        "price": 25000,
        "description": "From the Essentials Collection. Offering classic designs, the Essentials Collection provides the ideal solution for all-day wear. Crafted of stainless steel in gold-tone finish, this perfectly tailore...",
        "image": "/watches/seiko-sur442/main.webp",
        "gallery": [
            "/watches/seiko-sur442/gallery_1.webp",
            "/watches/seiko-sur442/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur410",
        "brand": "Seiko",
        "model": "SUR410",
        "price": 23500,
        "description": "From the Essentials Collection. Offering classic designs, the Essentials Collection provides the ideal solution for all-day wear. Crafted of stainless steel in versatile two-tone finish, this perfectl...",
        "image": "/watches/seiko-sur410/main.webp",
        "gallery": [
            "/watches/seiko-sur410/gallery_1.webp",
            "/watches/seiko-sur410/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl57",
        "brand": "Seiko",
        "model": "SRPL57",
        "price": 41500,
        "description": "Show your style. Make your move. For over 50 years, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Inspired by the best-selling SNXS series from the...",
        "image": "/watches/seiko-srpl57/main.webp",
        "gallery": [
            "/watches/seiko-srpl57/gallery_1.webp",
            "/watches/seiko-srpl57/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl59",
        "brand": "Seiko",
        "model": "SRPL59",
        "price": 41500,
        "description": "Show your style. Make your move. For over 50 years, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Inspired by the best-selling SNXS series from the...",
        "image": "/watches/seiko-srpl59/main.webp",
        "gallery": [
            "/watches/seiko-srpl59/gallery_1.webp",
            "/watches/seiko-srpl59/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl55",
        "brand": "Seiko",
        "model": "SRPL55",
        "price": 41500,
        "description": "Show your style. Make your move. For over 50 years, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Inspired by the best-selling SNXS series from the...",
        "image": "/watches/seiko-srpl55/main.webp",
        "gallery": [
            "/watches/seiko-srpl55/gallery_1.webp",
            "/watches/seiko-srpl55/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sre017",
        "brand": "Seiko",
        "model": "SRE017",
        "price": 57500,
        "description": "Seiko Presage Cocktail Time. Offering the finest in Japanese mechanical watchmaking, the Presage Collection blends precision technology with superior craftsmanship and design. Inspired by hot cocktail...",
        "image": "/watches/seiko-sre017/main.webp",
        "gallery": [
            "/watches/seiko-sre017/gallery_1.webp",
            "/watches/seiko-sre017/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sre018",
        "brand": "Seiko",
        "model": "SRE018",
        "price": 62500,
        "description": "Seiko Presage Cocktail Time. Offering the finest in Japanese mechanical watchmaking, the Presage Collection blends precision technology with superior craftsmanship and design. Inspired by hot cocktail...",
        "image": "/watches/seiko-sre018/main.webp",
        "gallery": [
            "/watches/seiko-sre018/gallery_1.webp",
            "/watches/seiko-sre018/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sre020",
        "brand": "Seiko",
        "model": "SRE020",
        "price": 62500,
        "description": "Seiko Presage Cocktail Time. Offering the finest in Japanese mechanical watchmaking, the Presage Collection blends precision technology with superior craftsmanship and design. Inspired by hot cocktail...",
        "image": "/watches/seiko-sre020/main.webp",
        "gallery": [
            "/watches/seiko-sre020/gallery_1.webp",
            "/watches/seiko-sre020/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl99",
        "brand": "Seiko",
        "model": "SRPL99",
        "price": 39500,
        "description": "Seiko 5 Sports x Pepsi® Limited Edition. In collaboration with the globally popular beverage brand Pepsi, this exciting Limited Edition is inspired by the heritage design of Seiko 5 Sports and the blu...",
        "image": "/watches/seiko-srpl99/main.webp",
        "gallery": [
            "/watches/seiko-srpl99/gallery_1.webp",
            "/watches/seiko-srpl99/gallery_2.webp",
            "/watches/seiko-srpl99/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk047",
        "brand": "Seiko",
        "model": "SSK047",
        "price": 55000,
        "description": "Seiko 5 Sports x Pepsi® Limited Edition. In collaboration with the globally popular beverage brand Pepsi, this exciting Limited Edition is based on the modern  Pepsi logo, with a bold blue and sleek b...",
        "image": "/watches/seiko-ssk047/main.webp",
        "gallery": [
            "/watches/seiko-ssk047/gallery_1.webp",
            "/watches/seiko-ssk047/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssc947",
        "brand": "Seiko",
        "model": "SSC947",
        "price": 75000,
        "description": "Seiko Speedtimer Solar Chronograph. Designed for those who treat life as the ultimate adventure, Seiko Prospex keeps moving forward, meeting every challenge with technological excellence and winning d...",
        "image": "/watches/seiko-ssc947/main.webp",
        "gallery": [
            "/watches/seiko-ssc947/gallery_1.webp",
            "/watches/seiko-ssc947/gallery_2.webp",
            "/watches/seiko-ssc947/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl79",
        "brand": "Seiko",
        "model": "SRPL79",
        "price": 35000,
        "description": "Seiko 5 Sports SKX Mid-Size. With vintage styling and colors recalling the quartz diver’s watches of the 1980s, the mid-size SKX design offers the 38mm case diameter of the originals, but with a slimm...",
        "image": "/watches/seiko-srpl79/main.webp",
        "gallery": [
            "/watches/seiko-srpl79/gallery_1.webp",
            "/watches/seiko-srpl79/gallery_2.webp",
            "/watches/seiko-srpl79/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl77",
        "brand": "Seiko",
        "model": "SRPL77",
        "price": 35000,
        "description": "Seiko 5 Sports SKX Mid-Size. With vintage styling and colors recalling the quartz diver’s watches of the 1980s, the mid-size SKX design offers the 38mm case diameter of the originals, but with a slimm...",
        "image": "/watches/seiko-srpl77/main.webp",
        "gallery": [
            "/watches/seiko-srpl77/gallery_1.webp",
            "/watches/seiko-srpl77/gallery_2.webp",
            "/watches/seiko-srpl77/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssc945",
        "brand": "Seiko",
        "model": "SSC945",
        "price": 88500,
        "description": "Prospex Speedtimer Solar Chronograph U.S. Special Edition. Designed for those who treat life as the ultimate adventure, Seiko Prospex keeps moving forward, meeting every challenge with technological e...",
        "image": "/watches/seiko-ssc945/main.webp",
        "gallery": [
            "/watches/seiko-ssc945/gallery_1.webp",
            "/watches/seiko-ssc945/gallery_2.webp",
            "/watches/seiko-ssc945/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur585",
        "brand": "Seiko",
        "model": "SUR585",
        "price": 45000,
        "description": "From the Coutura Collection. Expressing a polished and modern sophistication, the Coutura Collection combines bold angularity and elegant design with superior timekeeping for an effortless sport/dress...",
        "image": "/watches/seiko-sur585/main.webp",
        "gallery": [
            "/watches/seiko-sur585/gallery_1.webp",
            "/watches/seiko-sur585/gallery_2.webp",
            "/watches/seiko-sur585/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur583",
        "brand": "Seiko",
        "model": "SUR583",
        "price": 45000,
        "description": "From the Coutura Collection. Expressing a polished and modern sophistication, the Coutura Collection combines bold angularity and elegant design with superior timekeeping for an effortless sport/dress...",
        "image": "/watches/seiko-sur583/main.webp",
        "gallery": [
            "/watches/seiko-sur583/gallery_1.webp",
            "/watches/seiko-sur583/gallery_2.webp",
            "/watches/seiko-sur583/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur560",
        "brand": "Seiko",
        "model": "SUR560",
        "price": 29500,
        "description": "From the Essentials Collection. Designed to evoke the cool excitement of a night run, this smooth watch offers a slim profile for sleek sport or everyday wear. This subtly updated watch adds a streetw...",
        "image": "/watches/seiko-sur560/main.webp",
        "gallery": [
            "/watches/seiko-sur560/gallery_1.webp",
            "/watches/seiko-sur560/gallery_2.webp",
            "/watches/seiko-sur560/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur557",
        "brand": "Seiko",
        "model": "SUR557",
        "price": 33500,
        "description": "From the Essentials Collection\nBlack pressed-pattern dial\nSilver stick indices\nDate calendar\nLumiBrite hands and markers\nScratch-resistant sapphire crystal\nScrewdown caseback\nCase diameter: 39.0mm\nSta...",
        "image": "/watches/seiko-sur557/main.webp",
        "gallery": [
            "/watches/seiko-sur557/gallery_1.webp",
            "/watches/seiko-sur557/gallery_2.webp",
            "/watches/seiko-sur557/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur438",
        "brand": "Seiko",
        "model": "SUR438",
        "price": 22500,
        "description": "From the Essentials CollectionWhite dialDay/date calendarStylized Arabic numeralsCase diameter: 25.5mmTwo-tone stainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Caliber ...",
        "image": "/watches/seiko-sur438/main.webp",
        "gallery": [
            "/watches/seiko-sur438/gallery_1.webp",
            "/watches/seiko-sur438/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur377",
        "brand": "Seiko",
        "model": "SUR377",
        "price": 38500,
        "description": "From the Essentials CollectionGreen sunray dialDate calendarGold hands and markersSapphire crystalCase diameter: 40.2mmTwo-tone Titanium case and braceletWater-resistant to 10 bar, 100 meters (330 fee...",
        "image": "/watches/seiko-sur377/main.webp",
        "gallery": [
            "/watches/seiko-sur377/gallery_1.webp",
            "/watches/seiko-sur377/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur421",
        "brand": "Seiko",
        "model": "SUR421",
        "price": 23500,
        "description": "From the Essentials CollectionPatterned antique white dialDate calendarArabic numerals and stick markersSapphire crystalCase diameter: 39.4mmStainless steel caseBrown leather strapWater-resistant to 1...",
        "image": "/watches/seiko-sur421/main.webp",
        "gallery": [
            "/watches/seiko-sur421/gallery_1.webp",
            "/watches/seiko-sur421/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur632",
        "brand": "Seiko",
        "model": "SUR632",
        "price": 29500,
        "description": "Essentials CollectionSilver dial with sunray finishDate calendarLumiBrite handsSapphire crystalCase diameter: 29.8 mmGold-tone stainless steel case and braceletWater-resistant to 10 bar, 100 meters (3...",
        "image": "/watches/seiko-sur632/main.webp",
        "gallery": [
            "/watches/seiko-sur632/gallery_1.webp",
            "/watches/seiko-sur632/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur309",
        "brand": "Seiko",
        "model": "SUR309",
        "price": 26500,
        "description": "Essentials CollectionBlue dial with sunray finishDate calendarLumiBrite handsSapphire crystalCase diameter: 40.2 mmStainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Cali...",
        "image": "/watches/seiko-sur309/main.webp",
        "gallery": [
            "/watches/seiko-sur309/gallery_1.webp",
            "/watches/seiko-sur309/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur307",
        "brand": "Seiko",
        "model": "SUR307",
        "price": 26500,
        "description": "Essentials CollectionSilver dial with sunray finishDate calendarLumiBrite handsSapphire crystalCase diameter: 40.2 mmStainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Ca...",
        "image": "/watches/seiko-sur307/main.webp",
        "gallery": [
            "/watches/seiko-sur307/gallery_1.webp",
            "/watches/seiko-sur307/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe03",
        "brand": "Seiko",
        "model": "SRPE03",
        "price": 65000,
        "description": "Prospex Automatic DiverManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsBlack ceramic one-way rotating elapsed timing bezelBlack dial wi...",
        "image": "/watches/seiko-srpe03/main.webp",
        "gallery": [
            "/watches/seiko-srpe03/gallery_1.webp",
            "/watches/seiko-srpe03/gallery_2.webp",
            "/watches/seiko-srpe03/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb325",
        "brand": "Seiko",
        "model": "SSB325",
        "price": 25000,
        "description": "Analog Quartz3 year batteryHour, minute, and small second handsChronograph measures up to 12 hours minutes of elapsed time in 1/5-second incrementsStainless steel case Silicone strapScrewdown caseback...",
        "image": "/watches/seiko-ssb325/main.webp",
        "gallery": [
            "/watches/seiko-ssb325/gallery_1.webp",
            "/watches/seiko-ssb325/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb321",
        "brand": "Seiko",
        "model": "SSB321",
        "price": 29500,
        "description": "Analog Quartz3 year batteryHour, minute, and small second handsChronograph measures up to 12 hours of elapsed time in 1/5-second incrementsTachymeter bezel with Blue ion finishBlue patterned dial with...",
        "image": "/watches/seiko-ssb321/main.webp",
        "gallery": [
            "/watches/seiko-ssb321/gallery_1.webp",
            "/watches/seiko-ssb321/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpd95",
        "brand": "Seiko",
        "model": "SRPD95",
        "price": 35000,
        "description": "Seiko 5 SportsManual and automatic winding capabilities 21,600 vibrations per hour Power reserve: approximately 41 hours 24 jewels Black sunray dial Black unidirectional rotating bezelDay/date calenda...",
        "image": "/watches/seiko-srpd95/main.webp",
        "gallery": [
            "/watches/seiko-srpd95/gallery_1.webp",
            "/watches/seiko-srpd95/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpd91",
        "brand": "Seiko",
        "model": "SRPD91",
        "price": 37500,
        "description": "Seiko 5 SportsManual and automatic winding capabilities 21,600 vibrations per hour Power reserve: approximately 41 hours 24 jewels Black dial and unidirectional rotating bezelDay/date calendar LumiBri...",
        "image": "/watches/seiko-srpd91/main.webp",
        "gallery": [
            "/watches/seiko-srpd91/gallery_1.webp",
            "/watches/seiko-srpd91/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpd63",
        "brand": "Seiko",
        "model": "SRPD63",
        "price": 35000,
        "description": "Seiko 5 SportsManual and automatic winding capabilities 21,600 vibrations per hour Power reserve: approximately 41 hours 24 jewels Green dial with rose gold accentsGreen unidirectional rotating bezelD...",
        "image": "/watches/seiko-srpd63/main.webp",
        "gallery": [
            "/watches/seiko-srpd63/gallery_1.webp",
            "/watches/seiko-srpd63/gallery_2.webp",
            "/watches/seiko-srpd63/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpd55",
        "brand": "Seiko",
        "model": "SRPD55",
        "price": 35000,
        "description": "Seiko 5 SportsManual and automatic winding capabilities 21,600 vibrations per hour Power reserve: approximately 41 hours 24 jewels Black dial and unidirectional rotating bezelDay/date calendar LumiBri...",
        "image": "/watches/seiko-srpd55/main.webp",
        "gallery": [
            "/watches/seiko-srpd55/gallery_1.webp",
            "/watches/seiko-srpd55/gallery_2.webp",
            "/watches/seiko-srpd55/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl53",
        "brand": "Seiko",
        "model": "SRPL53",
        "price": 65000,
        "description": "Prospex Automatic Diver PADI Special Edition. Designed for those who treat life as the ultimate adventure, Seiko Prospex challenges every limit with timepieces created to exceed expectations, engineer...",
        "image": "/watches/seiko-srpl53/main.webp",
        "gallery": [
            "/watches/seiko-srpl53/gallery_1.webp",
            "/watches/seiko-srpl53/gallery_2.webp",
            "/watches/seiko-srpl53/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl51",
        "brand": "Seiko",
        "model": "SRPL51",
        "price": 59500,
        "description": "Prospex Automatic Diver. Designed for those who treat life as the ultimate adventure, Seiko Prospex challenges every limit with timepieces created to exceed expectations, engineered with superior styl...",
        "image": "/watches/seiko-srpl51/main.webp",
        "gallery": [
            "/watches/seiko-srpl51/gallery_1.webp",
            "/watches/seiko-srpl51/gallery_2.webp",
            "/watches/seiko-srpl51/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl83",
        "brand": "Seiko",
        "model": "SRPL83",
        "price": 45000,
        "description": "Show your style. Make your move. Since the 1960s, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Paying homage to Seiko’s iconic SKX models of the p...",
        "image": "/watches/seiko-srpl83/main.webp",
        "gallery": [
            "/watches/seiko-srpl83/gallery_1.webp",
            "/watches/seiko-srpl83/gallery_2.webp",
            "/watches/seiko-srpl83/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl87",
        "brand": "Seiko",
        "model": "SRPL87",
        "price": 40000,
        "description": "Show your style. Make your move. Since the 1960s, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Paying homage to Seiko’s iconic SKX models of the p...",
        "image": "/watches/seiko-srpl87/main.webp",
        "gallery": [
            "/watches/seiko-srpl87/gallery_1.webp",
            "/watches/seiko-srpl87/gallery_2.webp",
            "/watches/seiko-srpl87/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl89",
        "brand": "Seiko",
        "model": "SRPL89",
        "price": 40000,
        "description": "Show your style. Make your move. Since the 1960s, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Paying homage to Seiko’s iconic SKX models of the p...",
        "image": "/watches/seiko-srpl89/main.webp",
        "gallery": [
            "/watches/seiko-srpl89/gallery_1.webp",
            "/watches/seiko-srpl89/gallery_2.webp",
            "/watches/seiko-srpl89/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl85",
        "brand": "Seiko",
        "model": "SRPL85",
        "price": 45000,
        "description": "Show your style. Make your move. Since the 1960s, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Paying homage to Seiko’s iconic SKX models of the p...",
        "image": "/watches/seiko-srpl85/main.webp",
        "gallery": [
            "/watches/seiko-srpl85/gallery_1.webp",
            "/watches/seiko-srpl85/gallery_2.webp",
            "/watches/seiko-srpl85/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },

    {
        "id": "seiko-srpl75",
        "brand": "Seiko",
        "model": "SRPL75",
        "price": 59500,
        "description": "Presage Style60's Collection. Celebrating the fresh spirit of the 1960s, this design is an homage to Seiko’s 1964 “Crown Chronograph,” combining a bold ruggedness with a refined and tailored style. Fr...",
        "image": "/watches/seiko-srpl75/main.webp",
        "gallery": [
            "/watches/seiko-srpl75/gallery_1.webp",
            "/watches/seiko-srpl75/gallery_2.webp",
            "/watches/seiko-srpl75/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl73",
        "brand": "Seiko",
        "model": "SRPL73",
        "price": 59500,
        "description": "Presage Style60's Collection. Celebrating the fresh spirit of the 1960s, this design is an homage to Seiko’s 1964 “Crown Chronograph,” combining a bold ruggedness with a refined and tailored style. Fr...",
        "image": "/watches/seiko-srpl73/main.webp",
        "gallery": [
            "/watches/seiko-srpl73/gallery_1.webp",
            "/watches/seiko-srpl73/gallery_2.webp",
            "/watches/seiko-srpl73/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl71",
        "brand": "Seiko",
        "model": "SRPL71",
        "price": 59500,
        "description": "Presage Style60's Collection. Celebrating the fresh spirit of the 1960s, this design is an homage to Seiko’s 1964 “Crown Chronograph,” combining a bold ruggedness with a refined and tailored style. Fr...",
        "image": "/watches/seiko-srpl71/main.webp",
        "gallery": [
            "/watches/seiko-srpl71/gallery_1.webp",
            "/watches/seiko-srpl71/gallery_2.webp",
            "/watches/seiko-srpl71/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },

    {
        "id": "seiko-srpk91",
        "brand": "Seiko",
        "model": "SRPK91",
        "price": 41500,
        "description": "Show your style. Make your move. For over 50 years, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Inspired by the best-selling SNXS series from the...",
        "image": "/watches/seiko-srpk91/main.webp",
        "gallery": [
            "/watches/seiko-srpk91/gallery_1.webp",
            "/watches/seiko-srpk91/gallery_2.webp",
            "/watches/seiko-srpk91/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl15",
        "brand": "Seiko",
        "model": "SRPL15",
        "price": 57500,
        "description": "Prospex Automatic Diver. Designed for those who treat life as the ultimate adventure, the Seiko Prospex line meets every challenge with technological excellence and winning design. Inspired by Seiko’s...",
        "image": "/watches/seiko-srpl15/main.webp",
        "gallery": [
            "/watches/seiko-srpl15/gallery_1.webp",
            "/watches/seiko-srpl15/gallery_2.webp",
            "/watches/seiko-srpl15/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl13",
        "brand": "Seiko",
        "model": "SRPL13",
        "price": 59500,
        "description": "Prospex Automatic Diver. Designed for those who treat life as the ultimate adventure, the Seiko Prospex line meets every challenge with technological excellence and winning design. Inspired by Seiko’s...",
        "image": "/watches/seiko-srpl13/main.webp",
        "gallery": [
            "/watches/seiko-srpl13/gallery_1.webp",
            "/watches/seiko-srpl13/gallery_2.webp",
            "/watches/seiko-srpl13/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl11",
        "brand": "Seiko",
        "model": "SRPL11",
        "price": 59500,
        "description": "Prospex Automatic Diver. Designed for those who treat life as the ultimate adventure, the Seiko Prospex line meets every challenge with technological excellence and winning design. Inspired by Seiko’s...",
        "image": "/watches/seiko-srpl11/main.webp",
        "gallery": [
            "/watches/seiko-srpl11/gallery_1.webp",
            "/watches/seiko-srpl11/gallery_2.webp",
            "/watches/seiko-srpl11/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk036",
        "brand": "Seiko",
        "model": "SSK036",
        "price": 47500,
        "description": "Seiko 5 Sports SKX Sports Style GMT Series. Adding new richness to classic sport/dress design, this dynamic watch offers a new variation on the popular “SKX” style. Equipped with automatic technology ...",
        "image": "/watches/seiko-ssk036/main.webp",
        "gallery": [
            "/watches/seiko-ssk036/gallery_1.webp",
            "/watches/seiko-ssk036/gallery_2.webp",
            "/watches/seiko-ssk036/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk035",
        "brand": "Seiko",
        "model": "SSK035",
        "price": 49500,
        "description": "Seiko 5 Sports SKX Sports Style GMT Series. Adding new richness to classic sport/dress design, this dynamic watch offers a new variation on the popular “SKX” style. Equipped with automatic technology ...",
        "image": "/watches/seiko-ssk035/main.webp",
        "gallery": [
            "/watches/seiko-ssk035/gallery_1.webp",
            "/watches/seiko-ssk035/gallery_2.webp",
            "/watches/seiko-ssk035/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk033",
        "brand": "Seiko",
        "model": "SSK033",
        "price": 49500,
        "description": "Seiko 5 Sports SKX Sports Style GMT Series. Adding new richness to classic sport/dress design, this dynamic watch offers a new variation on the popular “SKX” style. Equipped with automatic technology ...",
        "image": "/watches/seiko-ssk033/main.webp",
        "gallery": [
            "/watches/seiko-ssk033/gallery_1.webp",
            "/watches/seiko-ssk033/gallery_2.webp",
            "/watches/seiko-ssk033/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sut068",
        "brand": "Seiko",
        "model": "SUT068",
        "price": 47500,
        "description": "From the Diamonds 18 diamonds Mother-of-pearl dial Solar Powered by light energy 12-month power reserve once fully charged Case diameter: 27.0mm Two-tone rose Gold stainless steel case and bracelet Wa...",
        "image": "/watches/seiko-sut068/main.webp",
        "gallery": [],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srz535",
        "brand": "Seiko",
        "model": "SRZ535",
        "price": 52500,
        "description": "From the Diamond Collection12 diamondsGreen mother-of-pearl dialSapphire crystalLight blue cabochon crownCase diameter: 30.0mmStainless steel case and braceletWater-resistant to  5 bar, 50 meters (165...",
        "image": "/watches/seiko-srz535/main.webp",
        "gallery": [
            "/watches/seiko-srz535/gallery_1.webp",
            "/watches/seiko-srz535/gallery_2.webp",
            "/watches/seiko-srz535/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sne565",
        "brand": "Seiko",
        "model": "SNE565",
        "price": 39500,
        "description": "From the Coutura CollectionSolarPowered by light energy - no battery change required10-month power reserve once fully chargedGray dial with blue accentsDate calendarLumiBrite hands and markersSapphire...",
        "image": "/watches/seiko-sne565/main.webp",
        "gallery": [
            "/watches/seiko-sne565/gallery_1.webp",
            "/watches/seiko-sne565/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sne506",
        "brand": "Seiko",
        "model": "SNE506",
        "price": 59500,
        "description": "Coutura Diamond 15 diamond markers Sapphire crystal Powered by light energy- no battery change required Black ion finish with Gold accents Stainless steel case and bracelet Cabochon crown Patterned su...",
        "image": "/watches/seiko-sne506/main.webp",
        "gallery": [
            "/watches/seiko-sne506/gallery_1.webp",
            "/watches/seiko-sne506/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssc927",
        "brand": "Seiko",
        "model": "SSC927",
        "price": 75000,
        "description": "Prospex Speedtimer Solar Chronograph U.S. Special Edition. Designed for those who treat life as the ultimate adventure, the Seiko Prospex line meets every challenge with technological excellence and s...",
        "image": "/watches/seiko-ssc927/main.webp",
        "gallery": [
            "/watches/seiko-ssc927/gallery_1.webp",
            "/watches/seiko-ssc927/gallery_2.webp",
            "/watches/seiko-ssc927/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssc941",
        "brand": "Seiko",
        "model": "SSC941",
        "price": 78500,
        "description": "Prospex Speedtimer Solar Chronograph. Designed for those who treat life as the ultimate adventure, Seiko Prospex keeps moving forward, meeting every challenge with technological excellence and winning...",
        "image": "/watches/seiko-ssc941/main.webp",
        "gallery": [
            "/watches/seiko-ssc941/gallery_1.webp",
            "/watches/seiko-ssc941/gallery_2.webp",
            "/watches/seiko-ssc941/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssc933",
        "brand": "Seiko",
        "model": "SSC933",
        "price": 72500,
        "description": "Prospex Speedtimer Solar Chronograph. Designed for those who treat life as the ultimate adventure, Seiko Prospex keeps moving forward, meeting every challenge with technological excellence and winning...",
        "image": "/watches/seiko-ssc933/main.webp",
        "gallery": [
            "/watches/seiko-ssc933/gallery_1.webp",
            "/watches/seiko-ssc933/gallery_2.webp",
            "/watches/seiko-ssc933/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssc911",
        "brand": "Seiko",
        "model": "SSC911",
        "price": 75000,
        "description": "Prospex Speedtimer Solar Chronograph.  Designed for those who treat life as the ultimate adventure, Seiko Prospex keeps moving forward, meeting every challenge with technological excellence and winnin...",
        "image": "/watches/seiko-ssc911/main.webp",
        "gallery": [
            "/watches/seiko-ssc911/gallery_1.webp",
            "/watches/seiko-ssc911/gallery_2.webp",
            "/watches/seiko-ssc911/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssc813",
        "brand": "Seiko",
        "model": "SSC813",
        "price": 72500,
        "description": "Prospex Speedtimer Solar ChronographDesign inspired by Seiko's first precision chronographs, developed for international sporting competitions in 1964Powered by light energy - no battery change requir...",
        "image": "/watches/seiko-ssc813/main.webp",
        "gallery": [
            "/watches/seiko-ssc813/gallery_1.webp",
            "/watches/seiko-ssc813/gallery_2.webp",
            "/watches/seiko-ssc813/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-swr091",
        "brand": "Seiko",
        "model": "SWR091",
        "price": 36500,
        "description": "From the Essentials Collection. A sophisticated classic, perfectly proportioned for a jewelry-like feel, this elegant timepiece features a rectangular case adorned by 34 crystals, a patterned white Ro...",
        "image": "/watches/seiko-swr091/main.webp",
        "gallery": [
            "/watches/seiko-swr091/gallery_1.webp",
            "/watches/seiko-swr091/gallery_2.webp",
            "/watches/seiko-swr091/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur582",
        "brand": "Seiko",
        "model": "SUR582",
        "price": 56500,
        "description": "From the Diamond Collection. With elegant simplicity, this versatile design, perfect for dress or everyday wear, features a shimmering silver sunray finish dial set with 12 diamonds. Crafted of stainl...",
        "image": "/watches/seiko-sur582/main.webp",
        "gallery": [
            "/watches/seiko-sur582/gallery_1.webp",
            "/watches/seiko-sur582/gallery_2.webp",
            "/watches/seiko-sur582/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur581",
        "brand": "Seiko",
        "model": "SUR581",
        "price": 51500,
        "description": "From the Diamond Collection. With elegant simplicity, this versatile design, perfect for dress or everyday wear, features a shimmering blue sunray finish dial set with 12 diamonds. Crafted of stainles...",
        "image": "/watches/seiko-sur581/main.webp",
        "gallery": [
            "/watches/seiko-sur581/gallery_1.webp",
            "/watches/seiko-sur581/gallery_2.webp",
            "/watches/seiko-sur581/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur579",
        "brand": "Seiko",
        "model": "SUR579",
        "price": 52500,
        "description": "From the Diamond Collection. With elegant simplicity, this versatile design, perfect for dress or everyday wear, features a shimmering white mother-of-pearl dial set with 12 diamonds. Crafted of stain...",
        "image": "/watches/seiko-sur579/main.webp",
        "gallery": [
            "/watches/seiko-sur579/gallery_1.webp",
            "/watches/seiko-sur579/gallery_2.webp",
            "/watches/seiko-sur579/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur578",
        "brand": "Seiko",
        "model": "SUR578",
        "price": 35000,
        "description": "From the Essentials Collection. A modern take on a classic style, this elegant watch features a sleek, angular case and bracelet design perfect for both dress occasions and everyday wear. The white pr...",
        "image": "/watches/seiko-sur578/main.webp",
        "gallery": [
            "/watches/seiko-sur578/gallery_1.webp",
            "/watches/seiko-sur578/gallery_2.webp",
            "/watches/seiko-sur578/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur575",
        "brand": "Seiko",
        "model": "SUR575",
        "price": 31500,
        "description": "From the Essentials Collection. A modern take on a classic style, this elegant watch features a sleek, angular case and bracelet design perfect for both dress occasions and everyday wear. The dark blu...",
        "image": "/watches/seiko-sur575/main.webp",
        "gallery": [
            "/watches/seiko-sur575/gallery_1.webp",
            "/watches/seiko-sur575/gallery_2.webp",
            "/watches/seiko-sur575/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur573",
        "brand": "Seiko",
        "model": "SUR573",
        "price": 31500,
        "description": "From the Essentials Collection. A modern take on a classic style, this elegant watch features a sleek, angular case and bracelet design perfect for both dress occasions and everyday wear. The silver p...",
        "image": "/watches/seiko-sur573/main.webp",
        "gallery": [
            "/watches/seiko-sur573/gallery_1.webp",
            "/watches/seiko-sur573/gallery_2.webp",
            "/watches/seiko-sur573/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb455",
        "brand": "Seiko",
        "model": "SSB455",
        "price": 41500,
        "description": "From the Essentials Collection. A modern take on a classic style, this contemporary watch features a sleek, angular case and bracelet design perfect for both dress occasions and everyday wear. The gra...",
        "image": "/watches/seiko-ssb455/main.webp",
        "gallery": [
            "/watches/seiko-ssb455/gallery_1.webp",
            "/watches/seiko-ssb455/gallery_2.webp",
            "/watches/seiko-ssb455/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb453",
        "brand": "Seiko",
        "model": "SSB453",
        "price": 41500,
        "description": "From the Essentials Collection. A modern take on a classic style, this contemporary watch features a sleek, angular case and bracelet design perfect for both dress occasions and everyday wear. The blu...",
        "image": "/watches/seiko-ssb453/main.webp",
        "gallery": [
            "/watches/seiko-ssb453/gallery_1.webp",
            "/watches/seiko-ssb453/gallery_2.webp",
            "/watches/seiko-ssb453/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb451",
        "brand": "Seiko",
        "model": "SSB451",
        "price": 41500,
        "description": "From the Essentials Collection. A modern take on a classic style, this contemporary watch features a sleek, angular case and bracelet design perfect for both dress occasions and everyday wear. The sil...",
        "image": "/watches/seiko-ssb451/main.webp",
        "gallery": [
            "/watches/seiko-ssb451/gallery_1.webp",
            "/watches/seiko-ssb451/gallery_2.webp",
            "/watches/seiko-ssb451/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur567",
        "brand": "Seiko",
        "model": "SUR567",
        "price": 45000,
        "description": "From the Coutura Collection. Delivering the perfect blend of edge and elegance for those on the move, the Coutura Collection combines bold angularity and shading with superior timekeeping for effortle...",
        "image": "/watches/seiko-sur567/main.webp",
        "gallery": [
            "/watches/seiko-sur567/gallery_1.webp",
            "/watches/seiko-sur567/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur566",
        "brand": "Seiko",
        "model": "SUR566",
        "price": 47500,
        "description": "From the Coutura Collection. Delivering the perfect blend of edge and elegance for those on the move, the Coutura Collection combines bold angularity and shading with superior timekeeping for effortle...",
        "image": "/watches/seiko-sur566/main.webp",
        "gallery": [
            "/watches/seiko-sur566/gallery_1.webp",
            "/watches/seiko-sur566/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur565",
        "brand": "Seiko",
        "model": "SUR565",
        "price": 45000,
        "description": "From the Coutura Collection. Delivering the perfect blend of edge and elegance for those on the move, the Coutura Collection combines bold angularity and shading with superior timekeeping for effortle...",
        "image": "/watches/seiko-sur565/main.webp",
        "gallery": [
            "/watches/seiko-sur565/gallery_1.webp",
            "/watches/seiko-sur565/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk037",
        "brand": "Seiko",
        "model": "SSK037",
        "price": 62500,
        "description": "Presage Cocktail Time GMT. Offering the finest in Japanese mechanical watchmaking, the Presage Collection blends precision technology with superior craftsmanship and design. Inspired by the vibrance o...",
        "image": "/watches/seiko-ssk037/main.webp",
        "gallery": [
            "/watches/seiko-ssk037/gallery_1.webp",
            "/watches/seiko-ssk037/gallery_2.webp",
            "/watches/seiko-ssk037/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk99",
        "brand": "Seiko",
        "model": "SRPK99",
        "price": 40000,
        "description": "Inspired by Seiko’s popular SNZH series, this stylish watch delivers all-day versatility with a cutting edge. Equipped with automatic technology that you control with every motion, this dynamic timepi...",
        "image": "/watches/seiko-srpk99/main.webp",
        "gallery": [
            "/watches/seiko-srpk99/gallery_1.webp",
            "/watches/seiko-srpk99/gallery_2.webp",
            "/watches/seiko-srpk99/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk97",
        "brand": "Seiko",
        "model": "SRPK97",
        "price": 40000,
        "description": "Inspired by Seiko’s popular SNZH series, this stylish watch delivers all-day versatility with a cutting edge. Equipped with automatic technology that you control with every motion, this dynamic timepi...",
        "image": "/watches/seiko-srpk97/main.webp",
        "gallery": [
            "/watches/seiko-srpk97/gallery_1.webp",
            "/watches/seiko-srpk97/gallery_2.webp",
            "/watches/seiko-srpk97/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl09",
        "brand": "Seiko",
        "model": "SRPL09",
        "price": 59500,
        "description": "Presage Style 60s. Celebrating the fresh spirit of the 1960s, this design is an homage to Seiko’s 1964 “Crown Chronograph,” combining a bold ruggedness with a refined and tailored style. Framed by a m...",
        "image": "/watches/seiko-srpl09/main.webp",
        "gallery": [
            "/watches/seiko-srpl09/gallery_1.webp",
            "/watches/seiko-srpl09/gallery_2.webp",
            "/watches/seiko-srpl09/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpl07",
        "brand": "Seiko",
        "model": "SRPL07",
        "price": 59500,
        "description": "Presage Style 60s. Celebrating the fresh spirit of the 1960s, this design is an homage to Seiko’s 1964 “Crown Chronograph,” combining a bold ruggedness with a refined and tailored style. Framed by a m...",
        "image": "/watches/seiko-srpl07/main.webp",
        "gallery": [
            "/watches/seiko-srpl07/gallery_1.webp",
            "/watches/seiko-srpl07/gallery_2.webp",
            "/watches/seiko-srpl07/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur562",
        "brand": "Seiko",
        "model": "SUR562",
        "price": 35000,
        "description": "From the Essentials Collection. With elegant, jewelry-inspired styling, this gracefully updated watch features a sophisticated ivory dial with a subtle center radial pattern, gold hands, and gold-tone...",
        "image": "/watches/seiko-sur562/main.webp",
        "gallery": [
            "/watches/seiko-sur562/gallery_1.webp",
            "/watches/seiko-sur562/gallery_2.webp",
            "/watches/seiko-sur562/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur561",
        "brand": "Seiko",
        "model": "SUR561",
        "price": 30000,
        "description": "From the Essentials Collection. With elegant, jewelry-inspired styling, this gracefully updated watch features a sophisticated white dial with subtle center radial pattern, blue hands, and blue Arabic...",
        "image": "/watches/seiko-sur561/main.webp",
        "gallery": [
            "/watches/seiko-sur561/gallery_1.webp",
            "/watches/seiko-sur561/gallery_2.webp",
            "/watches/seiko-sur561/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-swr087",
        "brand": "Seiko",
        "model": "SWR087",
        "price": 36500,
        "description": "From the Essentials Collection\nPatterned white Roman numeral dial\nBlue hands\nBlue cabochon crown\nCase diameter: 22.2mm\nSophisticated stainless steel rectangular case and five-row bracelet in two-tone ...",
        "image": "/watches/seiko-swr087/main.webp",
        "gallery": [
            "/watches/seiko-swr087/gallery_1.webp",
            "/watches/seiko-swr087/gallery_2.webp",
            "/watches/seiko-swr087/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-swr085",
        "brand": "Seiko",
        "model": "SWR085",
        "price": 31500,
        "description": "From the Essentials Collection\nPatterned blue Roman numeral dial\nSilver hands and markers\nBlue cabochon crown\nCase diameter: 22.2mm\nSophisticated stainless steel rectangular case and five-row bracelet...",
        "image": "/watches/seiko-swr085/main.webp",
        "gallery": [
            "/watches/seiko-swr085/gallery_1.webp",
            "/watches/seiko-swr085/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-swr083",
        "brand": "Seiko",
        "model": "SWR083",
        "price": 31500,
        "description": "From the Essentials Collection\nPatterned white Roman numeral dial\nBlue hands\nBlue cabochon crown\nCase diameter: 22.2mm\nSophisticated stainless steel rectangular case and five-row bracelet\nTri-fold pus...",
        "image": "/watches/seiko-swr083/main.webp",
        "gallery": [
            "/watches/seiko-swr083/gallery_1.webp",
            "/watches/seiko-swr083/gallery_2.webp",
            "/watches/seiko-swr083/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur558",
        "brand": "Seiko",
        "model": "SUR558",
        "price": 37500,
        "description": "From the Essentials Collection\nWhite pressed-pattern dial\nGold stick indices\nDate calendar\nLumiBrite hands and markers\nScratch-resistant sapphire crystal\nScrewdown caseback\nCase diameter: 39.0mm\nStain...",
        "image": "/watches/seiko-sur558/main.webp",
        "gallery": [
            "/watches/seiko-sur558/gallery_1.webp",
            "/watches/seiko-sur558/gallery_2.webp",
            "/watches/seiko-sur558/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur555",
        "brand": "Seiko",
        "model": "SUR555",
        "price": 33500,
        "description": "From the Essentials Collection\nVibrant blue pressed-pattern dial\nSilver stick indices\nDate calendar\nLumiBrite hands and markers\nScratch-resistant sapphire crystal\nScrewdown caseback\nCase diameter: 39....",
        "image": "/watches/seiko-sur555/main.webp",
        "gallery": [
            "/watches/seiko-sur555/gallery_1.webp",
            "/watches/seiko-sur555/gallery_2.webp",
            "/watches/seiko-sur555/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-swr078",
        "brand": "Seiko",
        "model": "SWR078",
        "price": 36500,
        "description": "From the Essentials CollectionWhite dial with die-stamped grid patternTextured gold markersSophisticated square case designCase diameter: 26.0mmStainless steel case and bracelet with gold finishTri-fo...",
        "image": "/watches/seiko-swr078/main.webp",
        "gallery": [
            "/watches/seiko-swr078/gallery_1.webp",
            "/watches/seiko-swr078/gallery_2.webp",
            "/watches/seiko-swr078/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-swr070",
        "brand": "Seiko",
        "model": "SWR070",
        "price": 28500,
        "description": "From the Essentials CollectionSilver dial with Roman numeralsSapphire crystalCabochon crownCase diameter:  29.0mmStainless steel case and bracelet in two-tone finishTri-fold push button release claspW...",
        "image": "/watches/seiko-swr070/main.webp",
        "gallery": [
            "/watches/seiko-swr070/gallery_1.webp",
            "/watches/seiko-swr070/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-swr052",
        "brand": "Seiko",
        "model": "SWR052",
        "price": 22500,
        "description": "From the Essentials CollectionWhite dialClassic Roman numeralsCabochon crownCase diameter: 28.4mmGold-tone stainless steel caseBlack leather strapWater-resistant to 3 bar, 30 meters (99 feet)Caliber 4...",
        "image": "/watches/seiko-swr052/main.webp",
        "gallery": [
            "/watches/seiko-swr052/gallery_1.webp",
            "/watches/seiko-swr052/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-swr049",
        "brand": "Seiko",
        "model": "SWR049",
        "price": 21000,
        "description": "From the Essentials CollectionWhite dialClassic Roman numeralsCabochon crownCase diameter: 28.4mmStainless steel caseBlack leather strapWater-resistant to 3 bar, 30 meters (99 feet)Caliber 4N30...",
        "image": "/watches/seiko-swr049/main.webp",
        "gallery": [
            "/watches/seiko-swr049/gallery_1.webp",
            "/watches/seiko-swr049/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-swr048",
        "brand": "Seiko",
        "model": "SWR048",
        "price": 31500,
        "description": "From the Essentials collectionChampagne dial with matching gold accentsCase diameter: 15.5mmJewelry inspired gold-tone stainless steel case and braceletWater-resistant to 3 bar, 30 meters (100 feet)Ca...",
        "image": "/watches/seiko-swr048/main.webp",
        "gallery": [
            "/watches/seiko-swr048/gallery_1.webp",
            "/watches/seiko-swr048/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-swr046",
        "brand": "Seiko",
        "model": "SWR046",
        "price": 31500,
        "description": "From the Essentials collectionBlack dial with gold accentsCase diameter: 15.5mmJewelry inspired two-tone stainless steel case and braceletWater-resistant to 3 bar, 30 meters (100 feet)Caliber 4N30...",
        "image": "/watches/seiko-swr046/main.webp",
        "gallery": [
            "/watches/seiko-swr046/gallery_1.webp",
            "/watches/seiko-swr046/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-swr044",
        "brand": "Seiko",
        "model": "SWR044",
        "price": 31500,
        "description": "From the Essentials collectionWhite dial with gold accentsCase diameter: 15.5mmJewelry inspired two-tone stainless steel case and braceletWater-resistant to 3 bar, 30 meters (100 feet)Caliber 4N30...",
        "image": "/watches/seiko-swr044/main.webp",
        "gallery": [
            "/watches/seiko-swr044/gallery_1.webp",
            "/watches/seiko-swr044/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur636",
        "brand": "Seiko",
        "model": "SUR636",
        "price": 29500,
        "description": "Essentials CollectionMother-of-pearl dialDate calendarLumiBrite handsSapphire crystalCase diameter: 29.8 mmTwo-tone stainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Cal...",
        "image": "/watches/seiko-sur636/main.webp",
        "gallery": [
            "/watches/seiko-sur636/gallery_1.webp",
            "/watches/seiko-sur636/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur633",
        "brand": "Seiko",
        "model": "SUR633",
        "price": 24000,
        "description": "Essentials CollectionSilver dial with sunray finishDate calendarLumiBrite handsSapphire crystalCase diameter: 29.8 mmStainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Ca...",
        "image": "/watches/seiko-sur633/main.webp",
        "gallery": [
            "/watches/seiko-sur633/gallery_1.webp",
            "/watches/seiko-sur633/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur540",
        "brand": "Seiko",
        "model": "SUR540",
        "price": 36000,
        "description": "From the Crystal Collection\n45 crystals set on the bezel\nPatterned white dial with sunray finish\nGold hands and slim stick indices evoking individual beams of light\nCabochon crown\nCase diameter: 26.0m...",
        "image": "/watches/seiko-sur540/main.webp",
        "gallery": [
            "/watches/seiko-sur540/gallery_1.webp",
            "/watches/seiko-sur540/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur531",
        "brand": "Seiko",
        "model": "SUR531",
        "price": 24000,
        "description": "From the Essentials Collection\nBlue sunray dial in a new color inspired by the richness of water\nSilver stick indices\nDate calendar\nSapphire crystal\nScrewdown caseback\nCase diameter: 29.8mm\nStainless ...",
        "image": "/watches/seiko-sur531/main.webp",
        "gallery": [
            "/watches/seiko-sur531/gallery_1.webp",
            "/watches/seiko-sur531/gallery_2.webp",
            "/watches/seiko-sur531/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur527",
        "brand": "Seiko",
        "model": "SUR527",
        "price": 26500,
        "description": "From the Essentials Collection\nOlive green sunray dial in a new color inspired by the depth of the forest\nSilver stick indices\nDate calendar\nSapphire crystal\nScrewdown caseback\nCase diameter: 40.2mm\nS...",
        "image": "/watches/seiko-sur527/main.webp",
        "gallery": [
            "/watches/seiko-sur527/gallery_1.webp",
            "/watches/seiko-sur527/gallery_2.webp",
            "/watches/seiko-sur527/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur503",
        "brand": "Seiko",
        "model": "SUR503",
        "price": 25000,
        "description": "From the Essentials CollectionDimensional embossed green dial with applied metallic elements60-minute track marked in five-minute incrementsDate calendarLumiBrite hands and markersCase diameter:  40.0...",
        "image": "/watches/seiko-sur503/main.webp",
        "gallery": [
            "/watches/seiko-sur503/gallery_1.webp",
            "/watches/seiko-sur503/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur487",
        "brand": "Seiko",
        "model": "SUR487",
        "price": 31500,
        "description": "From the Essentials CollectionContemporary minimalist designBlack sunray dialDate calendarCase diameter: 40.6mmStainless steel case and bracelet with black ion finishWater-resistant to 3 bar, 30 meter...",
        "image": "/watches/seiko-sur487/main.webp",
        "gallery": [
            "/watches/seiko-sur487/gallery_1.webp",
            "/watches/seiko-sur487/gallery_2.webp",
            "/watches/seiko-sur487/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur460",
        "brand": "Seiko",
        "model": "SUR460",
        "price": 31500,
        "description": "From the Essentials CollectionWhite dial with gold accents and Arabic numeralsDate calendarLumiBrite handsSapphire crystalCase diameter: 40.2mmTwo-tone stainless steel case and braceletWater-resistant...",
        "image": "/watches/seiko-sur460/main.webp",
        "gallery": [
            "/watches/seiko-sur460/gallery_1.webp",
            "/watches/seiko-sur460/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur450",
        "brand": "Seiko",
        "model": "SUR450",
        "price": 26500,
        "description": "From the Essentials CollectionLight champagne sunray dial with gold accentsDay/date calendarLumiBrite hands and markersSapphire crystalCase diameter: 40.2mmStainless steel case with gold finishBrown l...",
        "image": "/watches/seiko-sur450/main.webp",
        "gallery": [
            "/watches/seiko-sur450/gallery_1.webp",
            "/watches/seiko-sur450/gallery_2.webp",
            "/watches/seiko-sur450/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur449",
        "brand": "Seiko",
        "model": "SUR449",
        "price": 23500,
        "description": "From the Essentials CollectionGreen sunray dial with gold accentsDay/date calendarLumiBrite hands and markersSapphire crystalCase diameter: 40.2mmStainless steel caseBrown leather strap with contrast ...",
        "image": "/watches/seiko-sur449/main.webp",
        "gallery": [
            "/watches/seiko-sur449/gallery_1.webp",
            "/watches/seiko-sur449/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur440",
        "brand": "Seiko",
        "model": "SUR440",
        "price": 22500,
        "description": "From the Essentials CollectionWhite dialDay/date calendarStylized Arabic numeralsCase diameter: 25.5mmGold-tone stainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Caliber...",
        "image": "/watches/seiko-sur440/main.webp",
        "gallery": [
            "/watches/seiko-sur440/gallery_1.webp",
            "/watches/seiko-sur440/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur436",
        "brand": "Seiko",
        "model": "SUR436",
        "price": 22500,
        "description": "From the Essentials CollectionBlue sunray dialDay/date calendarGold hands and markersCase diameter: 25.5mmTwo-tone stainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Cali...",
        "image": "/watches/seiko-sur436/main.webp",
        "gallery": [
            "/watches/seiko-sur436/gallery_1.webp",
            "/watches/seiko-sur436/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur434",
        "brand": "Seiko",
        "model": "SUR434",
        "price": 22500,
        "description": "From the Essentials CollectionChampagne sunray dialDay/date calendarGold hands and markersCase diameter: 36.9mmGold-tone stainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 fee...",
        "image": "/watches/seiko-sur434/main.webp",
        "gallery": [
            "/watches/seiko-sur434/gallery_1.webp",
            "/watches/seiko-sur434/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur430",
        "brand": "Seiko",
        "model": "SUR430",
        "price": 22500,
        "description": "From the Essentials CollectionWhite sunray dialDay/date calendarGold hands and markersCase diameter: 36.9mmTwo-tone stainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Cal...",
        "image": "/watches/seiko-sur430/main.webp",
        "gallery": [
            "/watches/seiko-sur430/gallery_1.webp",
            "/watches/seiko-sur430/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur419",
        "brand": "Seiko",
        "model": "SUR419",
        "price": 26500,
        "description": "From the Essentials CollectionPatterned blue dialDate calendarArabic numerals and stick markersSapphire crystalCase diameter: 39.4mmStainless steel case and braceletWater-resistant to 10 bar, 100 mete...",
        "image": "/watches/seiko-sur419/main.webp",
        "gallery": [
            "/watches/seiko-sur419/gallery_1.webp",
            "/watches/seiko-sur419/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur375",
        "brand": "Seiko",
        "model": "SUR375",
        "price": 35000,
        "description": "From the Essentials CollectionBlack sunray dialDate calendarSapphire crystalCase diameter: 40.2mmTitanium case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Caliber 6N52...",
        "image": "/watches/seiko-sur375/main.webp",
        "gallery": [
            "/watches/seiko-sur375/gallery_1.webp",
            "/watches/seiko-sur375/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur361",
        "brand": "Seiko",
        "model": "SUR361",
        "price": 21000,
        "description": "From the Essentials collectionBlack dialDay/Date CalendarLumiBrite hands and markersCase diameter: 37.4mmStainless steel case and braceletScrewdown casebackWater-resistant to 10 bar, 100 meters (330 f...",
        "image": "/watches/seiko-sur361/main.webp",
        "gallery": [
            "/watches/seiko-sur361/gallery_1.webp",
            "/watches/seiko-sur361/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur360",
        "brand": "Seiko",
        "model": "SUR360",
        "price": 23500,
        "description": "From the Essentials collectionCharcoal dialDay/Date CalendarLumiBrite hands and markersCase diameter: 39.6mmTwo-tone stainless steel caseBrown leather strapScrewdown casebackWater-resistant to 10 bar,...",
        "image": "/watches/seiko-sur360/main.webp",
        "gallery": [
            "/watches/seiko-sur360/gallery_1.webp",
            "/watches/seiko-sur360/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssg022",
        "brand": "Seiko",
        "model": "SSG022",
        "price": 68500,
        "description": "From the Coutura CollectionRadio sync solar chronographRadio controlled: automatically receives radio signals to adjust time and calendarPowered by light energy - no battery change required6-month pow...",
        "image": "/watches/seiko-ssg022/main.webp",
        "gallery": [
            "/watches/seiko-ssg022/gallery_1.webp",
            "/watches/seiko-ssg022/gallery_2.webp",
            "/watches/seiko-ssg022/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssg010",
        "brand": "Seiko",
        "model": "SSG010",
        "price": 68500,
        "description": "Radio Sync Solar Chronograph Radio-controlled: Automatically receives radio signals to precisely adjust the time and calendar Powered by light energy- no battery change required Signal reception and r...",
        "image": "/watches/seiko-ssg010/main.webp",
        "gallery": [
            "/watches/seiko-ssg010/gallery_1.webp",
            "/watches/seiko-ssg010/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssc700",
        "brand": "Seiko",
        "model": "SSC700",
        "price": 55000,
        "description": "Perpetual Solar Alarm ChronographPowered by light energy- no battery change required 6-month power reserve once fully chargedHour, minute, and small second hands Power reserve indicator Leap year, mon...",
        "image": "/watches/seiko-ssc700/main.webp",
        "gallery": [
            "/watches/seiko-ssc700/gallery_1.webp",
            "/watches/seiko-ssc700/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssc376",
        "brand": "Seiko",
        "model": "SSC376",
        "price": 52500,
        "description": "Perpetual Solar Alarm Chronograph Powered by light energy- no battery change required 6-month power reserve once fully charged Hour, minute, and small second hands Power reserve indicator Leap year, m...",
        "image": "/watches/seiko-ssc376/main.webp",
        "gallery": [],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb435",
        "brand": "Seiko",
        "model": "SSB435",
        "price": 55000,
        "description": "From the Coutura Collection\nInspired by motor sports, with a new case design incorporating the angles and edges of race car architecture\nQuartz chronograph\nChronograph measures up to 60 minutes of ela...",
        "image": "/watches/seiko-ssb435/main.webp",
        "gallery": [
            "/watches/seiko-ssb435/gallery_1.webp",
            "/watches/seiko-ssb435/gallery_2.webp",
            "/watches/seiko-ssb435/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb397",
        "brand": "Seiko",
        "model": "SSB397",
        "price": 30000,
        "description": "From the Essentials CollectionChronograph measures up to 60 minutes of elapsed time in 1/5-second incrementsBlack tachymeter ringDimensional embossed black dial with applied metallic elements and gray...",
        "image": "/watches/seiko-ssb397/main.webp",
        "gallery": [
            "/watches/seiko-ssb397/gallery_1.webp",
            "/watches/seiko-ssb397/gallery_2.webp",
            "/watches/seiko-ssb397/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb345",
        "brand": "Seiko",
        "model": "SSB345",
        "price": 33500,
        "description": "Men's EssentialsQuartz ChronographChronograph measures up to 60 minutes of elapsed time in 1/5-second incrementsTachymeter bezel with Blue ion-finishBlue multi-layered dial with orange accents24-hour ...",
        "image": "/watches/seiko-ssb345/main.webp",
        "gallery": [
            "/watches/seiko-ssb345/gallery_1.webp",
            "/watches/seiko-ssb345/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-snj025",
        "brand": "Seiko",
        "model": "SNJ025",
        "price": 55000,
        "description": "Modern Interpretation of the 1982 Hybrid Diver's WatchSolar DiverPowered by light energy-no battery change required6-month power reserve once fully chargedAnalogue and digital displaysPower reserve di...",
        "image": "/watches/seiko-snj025/main.webp",
        "gallery": [
            "/watches/seiko-snj025/gallery_1.webp",
            "/watches/seiko-snj025/gallery_2.webp",
            "/watches/seiko-snj025/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur363",
        "brand": "Seiko",
        "model": "SUR363",
        "price": 23000,
        "description": "From the Essentials collectionBlack dial with gold accentsDay/Date CalendarLumiBrite hands and markersCase diameter: 37.4mmStainless steel caseTwo-tone stainless steel braceletScrewdown casebackWater-...",
        "image": "/watches/seiko-sur363/main.webp",
        "gallery": [
            "/watches/seiko-sur363/gallery_1.webp",
            "/watches/seiko-sur363/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur373",
        "brand": "Seiko",
        "model": "SUR373",
        "price": 35000,
        "description": "From the Essentials CollectionBlue sunray dialDate calendarSapphire crystalCase diameter: 40.2mmTitanium case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Caliber 6N52...",
        "image": "/watches/seiko-sur373/main.webp",
        "gallery": [
            "/watches/seiko-sur373/gallery_1.webp",
            "/watches/seiko-sur373/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur358",
        "brand": "Seiko",
        "model": "SUR358",
        "price": 27500,
        "description": "From the Essentials collectionBlack dialDay/Date CalendarLumiBrite hands and markersCase diameter: 39.6mmGold-tone brushed and polished stainless steel case and braceletScrewdown casebackWater-resista...",
        "image": "/watches/seiko-sur358/main.webp",
        "gallery": [
            "/watches/seiko-sur358/gallery_1.webp",
            "/watches/seiko-sur358/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur356",
        "brand": "Seiko",
        "model": "SUR356",
        "price": 27500,
        "description": "From the Essentials collectionGray dialDay/Date CalendarLumiBrite hands and markersCase diameter: 39.6mmTwo-tone brushed and polished stainless steel case and braceletScrewdown casebackWater-resistant...",
        "image": "/watches/seiko-sur356/main.webp",
        "gallery": [
            "/watches/seiko-sur356/gallery_1.webp",
            "/watches/seiko-sur356/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur355",
        "brand": "Seiko",
        "model": "SUR355",
        "price": 23500,
        "description": "From the Essentials collectionBlack dialDay/Date CalendarLumiBrite hands and markersCase diameter: 39.6mmStainless steel case and braceletScrewdown casebackWater-resistant to 10 bar, 100 meters (330 f...",
        "image": "/watches/seiko-sur355/main.webp",
        "gallery": [
            "/watches/seiko-sur355/gallery_1.webp",
            "/watches/seiko-sur355/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur343",
        "brand": "Seiko",
        "model": "SUR343",
        "price": 26500,
        "description": "From the Essentials CollectionDark gray dial with sunray finish and gold accentsDay/Date calendarLumiBrite hands and markersSapphire crystalCase diameter: 40.2mmStainless steel case and braceletWater-...",
        "image": "/watches/seiko-sur343/main.webp",
        "gallery": [
            "/watches/seiko-sur343/gallery_1.webp",
            "/watches/seiko-sur343/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur322",
        "brand": "Seiko",
        "model": "SUR322",
        "price": 31000,
        "description": "Essentials CollectionSilver dial with sunray finishDate calendarLumiBrite handsSapphire crystalCase diameter: 36.0 mmRose-gold two-tone stainless steel case and braceletWater-resistant to 10 bar, 100 ...",
        "image": "/watches/seiko-sur322/main.webp",
        "gallery": [
            "/watches/seiko-sur322/gallery_1.webp",
            "/watches/seiko-sur322/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur314",
        "brand": "Seiko",
        "model": "SUR314",
        "price": 31500,
        "description": "Essentials CollectionWhite dialDate calendarLumiBrite handsSapphire crystalCase diameter: 40.2 mmGold-tone stainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Caliber 6N52...",
        "image": "/watches/seiko-sur314/main.webp",
        "gallery": [
            "/watches/seiko-sur314/gallery_1.webp",
            "/watches/seiko-sur314/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk025",
        "brand": "Seiko",
        "model": "SSK025",
        "price": 43500,
        "description": "Seiko 5 Sports Field GMT. For decades, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Equipped with automatic technology that you control with every...",
        "image": "/watches/seiko-ssk025/main.webp",
        "gallery": [
            "/watches/seiko-ssk025/gallery_1.webp",
            "/watches/seiko-ssk025/gallery_2.webp",
            "/watches/seiko-ssk025/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk023",
        "brand": "Seiko",
        "model": "SSK023",
        "price": 45000,
        "description": "Seiko 5 Sports Field GMT. For decades, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Equipped with automatic technology that you control with every...",
        "image": "/watches/seiko-ssk023/main.webp",
        "gallery": [
            "/watches/seiko-ssk023/gallery_1.webp",
            "/watches/seiko-ssk023/gallery_2.webp",
            "/watches/seiko-ssk023/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sup467",
        "brand": "Seiko",
        "model": "SUP467",
        "price": 37500,
        "description": "From the Essentials Collection\n45 crystals set on the bezel\nPowered by light energy - no battery change required\n12-month power reserve once fully charged\nPatterned mother-of-pearl dial\nSilver Arabic ...",
        "image": "/watches/seiko-sup467/main.webp",
        "gallery": [
            "/watches/seiko-sup467/gallery_1.webp",
            "/watches/seiko-sup467/gallery_2.webp",
            "/watches/seiko-sup467/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur312",
        "brand": "Seiko",
        "model": "SUR312",
        "price": 31500,
        "description": "Essentials CollectionWhite dialDate calendarLumiBrite handsSapphire crystalCase diameter: 40.2 mmTwo-tone stainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Caliber 6N52...",
        "image": "/watches/seiko-sur312/main.webp",
        "gallery": [
            "/watches/seiko-sur312/gallery_1.webp",
            "/watches/seiko-sur312/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur311",
        "brand": "Seiko",
        "model": "SUR311",
        "price": 26500,
        "description": "Essentials CollectionBlack dialDate calendarLumiBrite handsSapphire crystalCase diameter: 40.2 mmStainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Caliber 6N52...",
        "image": "/watches/seiko-sur311/main.webp",
        "gallery": [
            "/watches/seiko-sur311/gallery_1.webp",
            "/watches/seiko-sur311/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk019",
        "brand": "Seiko",
        "model": "SSK019",
        "price": 49500,
        "description": "Seiko 5 Sports SKX GMT U.S. Special Creation\nAutomatic with manual winding capability\n21,600 vibrations per hour\nPower reserve: approximately 41 hours\n24 jewels\nBi-color 24-hour GMT bezel\nDark gray di...",
        "image": "/watches/seiko-ssk019/main.webp",
        "gallery": [
            "/watches/seiko-ssk019/gallery_1.webp",
            "/watches/seiko-ssk019/gallery_2.webp",
            "/watches/seiko-ssk019/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk017",
        "brand": "Seiko",
        "model": "SSK017",
        "price": 49500,
        "description": "Seiko 5 Sports SKX GMT U.S. Special Creation\nAutomatic with manual winding capability\n21,600 vibrations per hour\nPower reserve: approximately 41 hours\n24 jewels\nBi-color 24-hour GMT bezel\nVibrant yell...",
        "image": "/watches/seiko-ssk017/main.webp",
        "gallery": [
            "/watches/seiko-ssk017/gallery_1.webp",
            "/watches/seiko-ssk017/gallery_2.webp",
            "/watches/seiko-ssk017/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk013",
        "brand": "Seiko",
        "model": "SSK013",
        "price": 65000,
        "description": "Presage Style ’60s GMT\nInspired by the styling and metallic colors of vintage 1960s automobiles, and the 1964 “Crown Chronograph,” Japan’s first watch with a stopwatch function\nFine mechanical watchma...",
        "image": "/watches/seiko-ssk013/main.webp",
        "gallery": [
            "/watches/seiko-ssk013/gallery_1.webp",
            "/watches/seiko-ssk013/gallery_2.webp",
            "/watches/seiko-ssk013/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk009",
        "brand": "Seiko",
        "model": "SSK009",
        "price": 65000,
        "description": "Presage Style ’60s GMT\nInspired by the styling and metallic colors of vintage 1960s automobiles, and the 1964 “Crown Chronograph,” Japan’s first watch with a stopwatch function\nFine mechanical watchma...",
        "image": "/watches/seiko-ssk009/main.webp",
        "gallery": [
            "/watches/seiko-ssk009/gallery_1.webp",
            "/watches/seiko-ssk009/gallery_2.webp",
            "/watches/seiko-ssk009/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk005",
        "brand": "Seiko",
        "model": "SSK005",
        "price": 49500,
        "description": "Seiko 5 Sports SKX Sports Style GMT SeriesDesign of the case and bracelet inspired by one of Seiko's best-loved sports watches, known to enthusiasts as the Seiko SKX series Automatic GMT with manual w...",
        "image": "/watches/seiko-ssk005/main.webp",
        "gallery": [
            "/watches/seiko-ssk005/gallery_1.webp",
            "/watches/seiko-ssk005/gallery_2.webp",
            "/watches/seiko-ssk005/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk003",
        "brand": "Seiko",
        "model": "SSK003",
        "price": 49500,
        "description": "Seiko 5 Sports SKX Sports Style GMT SeriesDesign of the case and bracelet inspired by one of Seiko's best-loved sports watches, known to enthusiasts as the Seiko SKX seriesAutomatic GMT with manual wi...",
        "image": "/watches/seiko-ssk003/main.webp",
        "gallery": [
            "/watches/seiko-ssk003/gallery_1.webp",
            "/watches/seiko-ssk003/gallery_2.webp",
            "/watches/seiko-ssk003/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk001",
        "brand": "Seiko",
        "model": "SSK001",
        "price": 49500,
        "description": "Seiko 5 Sports SKX Sports Style GMT SeriesDesign of the case and bracelet inspired by one of Seiko's best-loved sports watches, known to enthusiasts as the Seiko SKX seriesAutomatic GMT with manual wi...",
        "image": "/watches/seiko-ssk001/main.webp",
        "gallery": [
            "/watches/seiko-ssk001/gallery_1.webp",
            "/watches/seiko-ssk001/gallery_2.webp",
            "/watches/seiko-ssk001/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssg021",
        "brand": "Seiko",
        "model": "SSG021",
        "price": 72500,
        "description": "Coutura Radio Sync Solar Chronograph Radio-controlled: Automatically receives radio signals to precisely adjust the time and calendar Powered by light energy- no battery change required Signal recepti...",
        "image": "/watches/seiko-ssg021/main.webp",
        "gallery": [
            "/watches/seiko-ssg021/gallery_1.webp",
            "/watches/seiko-ssg021/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssg009",
        "brand": "Seiko",
        "model": "SSG009",
        "price": 62500,
        "description": "Radio Sync Solar Chronograph Radio-controlled: Automatically receives radio signals to precisely adjust the time and calendar Powered by light energy- no battery change required Signal reception and r...",
        "image": "/watches/seiko-ssg009/main.webp",
        "gallery": [
            "/watches/seiko-ssg009/gallery_1.webp",
            "/watches/seiko-ssg009/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb445",
        "brand": "Seiko",
        "model": "SSB445",
        "price": 36500,
        "description": "From the Essentials Collection. Designed to evoke the cool thrill of driving by night, this smooth chronograph offers a slim profile for sleek sport or everyday wear. Framed by a blue tachymeter bezel...",
        "image": "/watches/seiko-ssb445/main.webp",
        "gallery": [
            "/watches/seiko-ssb445/gallery_1.webp",
            "/watches/seiko-ssb445/gallery_2.webp",
            "/watches/seiko-ssb445/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb430",
        "brand": "Seiko",
        "model": "SSB430",
        "price": 31500,
        "description": "From the Essentials Collection\nChronograph measures up to 60 minutes of elapsed time in 1/5-second increments\nBlack tachymeter dial ring\nBlack dial with gold accents\nBold gold subdials at 3 and 9 o’cl...",
        "image": "/watches/seiko-ssb430/main.webp",
        "gallery": [
            "/watches/seiko-ssb430/gallery_1.webp",
            "/watches/seiko-ssb430/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb438",
        "brand": "Seiko",
        "model": "SSB438",
        "price": 58500,
        "description": "From the Coutura Collection\nInspired by motor sports, with a new case and bracelet design incorporating the angles and edges of racecar architecture\nQuartz chronograph\nChronograph measures up to 60 mi...",
        "image": "/watches/seiko-ssb438/main.webp",
        "gallery": [
            "/watches/seiko-ssb438/gallery_1.webp",
            "/watches/seiko-ssb438/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb434",
        "brand": "Seiko",
        "model": "SSB434",
        "price": 58500,
        "description": "From the Coutura Collection\nInspired by motor sports, with a new case and bracelet design incorporating the angles and edges of race car architecture\nQuartz chronograph\nChronograph measures up to 60 m...",
        "image": "/watches/seiko-ssb434/main.webp",
        "gallery": [
            "/watches/seiko-ssb434/gallery_1.webp",
            "/watches/seiko-ssb434/gallery_2.webp",
            "/watches/seiko-ssb434/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssc787",
        "brand": "Seiko",
        "model": "SSC787",
        "price": 52500,
        "description": "From the Coutura CollectionSolar perpetual calendar alarm chronographPowered by light energy - no battery change required6-month power reserve once fully chargedPerpetual calendar adjusts for odd and ...",
        "image": "/watches/seiko-ssc787/main.webp",
        "gallery": [
            "/watches/seiko-ssc787/gallery_1.webp",
            "/watches/seiko-ssc787/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk89",
        "brand": "Seiko",
        "model": "SRPK89",
        "price": 41500,
        "description": "Show your style. Make your move. For over 50 years, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Inspired by the best-selling SNXS series from the...",
        "image": "/watches/seiko-srpk89/main.webp",
        "gallery": [
            "/watches/seiko-srpk89/gallery_1.webp",
            "/watches/seiko-srpk89/gallery_2.webp",
            "/watches/seiko-srpk89/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk87",
        "brand": "Seiko",
        "model": "SRPK87",
        "price": 41500,
        "description": "Show your style. Make your move. For over 50 years, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. Inspired by the best-selling SNXS series from the...",
        "image": "/watches/seiko-srpk87/main.webp",
        "gallery": [
            "/watches/seiko-srpk87/gallery_1.webp",
            "/watches/seiko-srpk87/gallery_2.webp",
            "/watches/seiko-srpk87/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk73",
        "brand": "Seiko",
        "model": "SRPK73",
        "price": 37500,
        "description": "Seiko 5 Sports U.S Special Creation. With vivid colors and bold design inspired by the stripes of vintage cars, this dynamic watch, launched exclusively in the U.S. market, delivers both memorable sty...",
        "image": "/watches/seiko-srpk73/main.webp",
        "gallery": [
            "/watches/seiko-srpk73/gallery_1.webp",
            "/watches/seiko-srpk73/gallery_2.webp",
            "/watches/seiko-srpk73/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb429",
        "brand": "Seiko",
        "model": "SSB429",
        "price": 26500,
        "description": "From the Essentials Collection\nChronograph measures up to 60 minutes of elapsed time in 1/5-second increments\nBlack tachymeter dial ring\nBlack dial\nBold silver subdials at 3 and 9 o’clock styled to su...",
        "image": "/watches/seiko-ssb429/main.webp",
        "gallery": [
            "/watches/seiko-ssb429/gallery_1.webp",
            "/watches/seiko-ssb429/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb427",
        "brand": "Seiko",
        "model": "SSB427",
        "price": 26500,
        "description": "From the Essentials Collection\nChronograph measures up to 60 minutes of elapsed time in 1/5-second increments\nBlue tachymeter dial ring\nBlue dial\nBold silver subdials at 3 and 9 o’clock styled to sugg...",
        "image": "/watches/seiko-ssb427/main.webp",
        "gallery": [
            "/watches/seiko-ssb427/gallery_1.webp",
            "/watches/seiko-ssb427/gallery_2.webp",
            "/watches/seiko-ssb427/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb425",
        "brand": "Seiko",
        "model": "SSB425",
        "price": 26500,
        "description": "From the Essentials Collection\nChronograph measures up to 60 minutes of elapsed time in 1/5-second increments\nBlack tachymeter dial ring\nSilver dial\nBold black subdials at 3 and 9 o’clock styled to su...",
        "image": "/watches/seiko-ssb425/main.webp",
        "gallery": [
            "/watches/seiko-ssb425/gallery_1.webp",
            "/watches/seiko-ssb425/gallery_2.webp",
            "/watches/seiko-ssb425/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssa459",
        "brand": "Seiko",
        "model": "SSA459",
        "price": 59500,
        "description": "Seiko Presage Cocktail Time\nInspired by the vibrant elegance of the exciting cocktail lounges in today’s Tokyo\nFine mechanical watchmaking from Japan\nAutomatic with manual winding capability\n21,600 vi...",
        "image": "/watches/seiko-ssa459/main.webp",
        "gallery": [
            "/watches/seiko-ssa459/gallery_1.webp",
            "/watches/seiko-ssa459/gallery_2.webp",
            "/watches/seiko-ssa459/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srwz24",
        "brand": "Seiko",
        "model": "SRWZ24",
        "price": 55000,
        "description": "From the Coutura CollectionQuartz chronographChronograph measures up to 60 minutes of elapsed time in 1/5-second increments with split time measurement functionMulti-layered white dial with pressed pa...",
        "image": "/watches/seiko-srwz24/main.webp",
        "gallery": [
            "/watches/seiko-srwz24/gallery_1.webp",
            "/watches/seiko-srwz24/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk65",
        "brand": "Seiko",
        "model": "SRPK65",
        "price": 37500,
        "description": "Seiko 5 Sports Special Edition. For decades, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. This dynamic watch offers current styling with a vintage...",
        "image": "/watches/seiko-srpk65/main.webp",
        "gallery": [
            "/watches/seiko-srpk65/gallery_1.webp",
            "/watches/seiko-srpk65/gallery_2.webp",
            "/watches/seiko-srpk65/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk67",
        "brand": "Seiko",
        "model": "SRPK67",
        "price": 37500,
        "description": "Seiko 5 Sports Special Edition. For decades, Seiko 5 Sports has delivered consistently high levels of reliability, durability, and performance. This dynamic watch offers current styling with a vintage...",
        "image": "/watches/seiko-srpk67/main.webp",
        "gallery": [
            "/watches/seiko-srpk67/gallery_1.webp",
            "/watches/seiko-srpk67/gallery_2.webp",
            "/watches/seiko-srpk67/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk43",
        "brand": "Seiko",
        "model": "SRPK43",
        "price": 76500,
        "description": "Prospex Black Series. Designed for those who treat life as the ultimate adventure, Seiko Prospex keeps moving forward, meeting every challenge with technological excellence and winning design. Featuri...",
        "image": "/watches/seiko-srpk43/main.webp",
        "gallery": [
            "/watches/seiko-srpk43/gallery_1.webp",
            "/watches/seiko-srpk43/gallery_2.webp",
            "/watches/seiko-srpk43/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk71",
        "brand": "Seiko",
        "model": "SRPK71",
        "price": 37500,
        "description": "Seiko 5 Sports U.S Special Creation. With vivid colors and bold design inspired by the stripes of vintage race cars, this dynamic watch, lsunched exclusively in the U.S. market, delivers both memorabl...",
        "image": "/watches/seiko-srpk71/main.webp",
        "gallery": [
            "/watches/seiko-srpk71/gallery_1.webp",
            "/watches/seiko-srpk71/gallery_2.webp",
            "/watches/seiko-srpk71/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk15",
        "brand": "Seiko",
        "model": "SRPK15",
        "price": 47500,
        "description": "Seiko Presage Cocktail Time\nInspired by the vibrant elegance of the exciting cocktail lounges in today’s Tokyo\nFine mechanical watchmaking from Japan\nAutomatic with manual winding capability\n21,600 vi...",
        "image": "/watches/seiko-srpk15/main.webp",
        "gallery": [
            "/watches/seiko-srpk15/gallery_1.webp",
            "/watches/seiko-srpk15/gallery_2.webp",
            "/watches/seiko-srpk15/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk01",
        "brand": "Seiko",
        "model": "SRPK01",
        "price": 65000,
        "description": "Prospex PADI Special Edition\nSpecial edition celebrating the partnership between Seiko Prospex and PADI, the world’s leading scuba diver training organization\nPatterned and gradated blue dial reflecti...",
        "image": "/watches/seiko-srpk01/main.webp",
        "gallery": [
            "/watches/seiko-srpk01/gallery_1.webp",
            "/watches/seiko-srpk01/gallery_2.webp",
            "/watches/seiko-srpk01/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpj93",
        "brand": "Seiko",
        "model": "SRPJ93",
        "price": 62500,
        "description": "Prospex PADI Special Edition\nSpecial edition celebrating the partnership between Seiko Prospex and PADI, the world’s leading scuba diver training organization\nPatterned and gradated blue dial reflecti...",
        "image": "/watches/seiko-srpj93/main.webp",
        "gallery": [
            "/watches/seiko-srpj93/gallery_1.webp",
            "/watches/seiko-srpj93/gallery_2.webp",
            "/watches/seiko-srpj93/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk22",
        "brand": "Seiko",
        "model": "SRPK22",
        "price": 41500,
        "description": "Seiko 5 Sports U.S. Special Creation\nInitially launched exclusively in the US market, now available in select markets globally\nAutomatic with manual winding capability\n21,600 vibrations per hour\nPower...",
        "image": "/watches/seiko-srpk22/main.webp",
        "gallery": [
            "/watches/seiko-srpk22/gallery_1.webp",
            "/watches/seiko-srpk22/gallery_2.webp",
            "/watches/seiko-srpk22/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk20",
        "brand": "Seiko",
        "model": "SRPK20",
        "price": 41500,
        "description": "Seiko 5 Sports U.S. Special Creation\nAvailable exclusively in the U.S.\nAutomatic with manual winding capability\n21,600 vibrations per hour\nPower reserve: approximately 41 hours\n24 jewels\nBlack uni-dir...",
        "image": "/watches/seiko-srpk20/main.webp",
        "gallery": [
            "/watches/seiko-srpk20/gallery_1.webp",
            "/watches/seiko-srpk20/gallery_2.webp",
            "/watches/seiko-srpk20/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk18",
        "brand": "Seiko",
        "model": "SRPK18",
        "price": 41500,
        "description": "Seiko 5 Sports U.S. Special Creation\nInitially launched exclusively in the US market, now available in select markets globally\nAutomatic with manual winding capability\n21,600 vibrations per hour\nPower...",
        "image": "/watches/seiko-srpk18/main.webp",
        "gallery": [
            "/watches/seiko-srpk18/gallery_1.webp",
            "/watches/seiko-srpk18/gallery_2.webp",
            "/watches/seiko-srpk18/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpj85",
        "brand": "Seiko",
        "model": "SRPJ85",
        "price": 31500,
        "description": "Seiko 5 Sports Collection\nInspired by vintage field/aviator style\nAutomatic with manual winding capability\n21,600 vibrations per hour\nPower reserve: approximately 41 hours\n24 jewels\nBlack dial\n60-minu...",
        "image": "/watches/seiko-srpj85/main.webp",
        "gallery": [
            "/watches/seiko-srpj85/gallery_1.webp",
            "/watches/seiko-srpj85/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpj81",
        "brand": "Seiko",
        "model": "SRPJ81",
        "price": 31500,
        "description": "Seiko 5 Sports Collection\nInspired by vintage field/aviator style\nAutomatic with manual winding capability\n21,600 vibrations per hour\nPower reserve: approximately 41 hours\n24 jewels\nBlack dial\n60-minu...",
        "image": "/watches/seiko-srpj81/main.webp",
        "gallery": [
            "/watches/seiko-srpj81/gallery_1.webp",
            "/watches/seiko-srpj81/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk33",
        "brand": "Seiko",
        "model": "SRPK33",
        "price": 35000,
        "description": "Seiko 5 SportsAutomatic with manual winding capability21,600 vibrations per hourPower reserve: approximately 41 hours24 jewels\nBlack uni-directional rotating bezelVibrant green dial\nDay/date calendarL...",
        "image": "/watches/seiko-srpk33/main.webp",
        "gallery": [
            "/watches/seiko-srpk33/gallery_1.webp",
            "/watches/seiko-srpk33/gallery_2.webp",
            "/watches/seiko-srpk33/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk31",
        "brand": "Seiko",
        "model": "SRPK31",
        "price": 35000,
        "description": "Seiko 5 Sports\nAutomatic with manual winding capability21,600 vibrations per hourPower reserve: approximately 41 hours24 jewels\nDark gray uni-directional rotating bezelLight beige sunray dial\nDay/date...",
        "image": "/watches/seiko-srpk31/main.webp",
        "gallery": [
            "/watches/seiko-srpk31/gallery_1.webp",
            "/watches/seiko-srpk31/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk29",
        "brand": "Seiko",
        "model": "SRPK29",
        "price": 35000,
        "description": "Seiko 5 SportsAutomatic with manual winding capability21,600 vibrations per hourPower reserve: approximately 41 hours24 jewels\nBlack uni-directional rotating bezelBlack dial\nDay/date calendarLuminous ...",
        "image": "/watches/seiko-srpk29/main.webp",
        "gallery": [
            "/watches/seiko-srpk29/gallery_1.webp",
            "/watches/seiko-srpk29/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srph89",
        "brand": "Seiko",
        "model": "SRPH89",
        "price": 31500,
        "description": "From the Essentials CollectionAutomatic with manual winding capability21,600 vibrations per hourPower reserve: approximately 41 hours23 jewelsGreen sunray dialDate calendarScrewdown see-through caseba...",
        "image": "/watches/seiko-srph89/main.webp",
        "gallery": [
            "/watches/seiko-srph89/gallery_1.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpj17",
        "brand": "Seiko",
        "model": "SRPJ17",
        "price": 47500,
        "description": "Seiko Presage Cocktail TimeInspired by the vibrant elegance of the exciting cocktail lounges in today's TokyoFine mechanical watchmaking from JapanAutomatic with manual winding capability21,600 vibrat...",
        "image": "/watches/seiko-srpj17/main.webp",
        "gallery": [
            "/watches/seiko-srpj17/gallery_1.webp",
            "/watches/seiko-srpj17/gallery_2.webp",
            "/watches/seiko-srpj17/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpj13",
        "brand": "Seiko",
        "model": "SRPJ13",
        "price": 47500,
        "description": "Seiko Presage Cocktail TimeInspired by the vibrant elegance of the exciting cocktail lounges in today's TokyoFine mechanical watchmaking from JapanAutomatic with manual winding capability21,600 vibrat...",
        "image": "/watches/seiko-srpj13/main.webp",
        "gallery": [
            "/watches/seiko-srpj13/gallery_1.webp",
            "/watches/seiko-srpj13/gallery_2.webp",
            "/watches/seiko-srpj13/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srph33",
        "brand": "Seiko",
        "model": "SRPH33",
        "price": 35000,
        "description": "Seiko 5 Sports CollectionInspired by vintage designs worn by early pilotsAutomatic with manual winding capability21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsBlack dial with...",
        "image": "/watches/seiko-srph33/main.webp",
        "gallery": [
            "/watches/seiko-srph33/gallery_1.webp",
            "/watches/seiko-srph33/gallery_2.webp",
            "/watches/seiko-srph33/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srph29",
        "brand": "Seiko",
        "model": "SRPH29",
        "price": 31500,
        "description": "Seiko 5 Sports CollectionInspired by vintage designs worn by early pilotsAutomatic with manual winding capability21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsGreen dial60-mi...",
        "image": "/watches/seiko-srph29/main.webp",
        "gallery": [
            "/watches/seiko-srph29/gallery_1.webp",
            "/watches/seiko-srph29/gallery_2.webp",
            "/watches/seiko-srph29/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srph59",
        "brand": "Seiko",
        "model": "SRPH59",
        "price": 78500,
        "description": "Prospex U.S. Special EditionCelebrates Seiko Prospex's ongoing efforts to promote ocean exploration and conservationAutomatic diver with manual winding capability21,600 vibrations per hourPower reserv...",
        "image": "/watches/seiko-srph59/main.webp",
        "gallery": [
            "/watches/seiko-srph59/gallery_1.webp",
            "/watches/seiko-srph59/gallery_2.webp",
            "/watches/seiko-srph59/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpg57",
        "brand": "Seiko",
        "model": "SRPG57",
        "price": 55000,
        "description": "Prospex Save the Ocean Special EditionSpecial Edition supporting conservation efforts to save the oceanGradient die-stamped dial evoking the whites and blues of light reflecting off Antarctic ice and ...",
        "image": "/watches/seiko-srpg57/main.webp",
        "gallery": [
            "/watches/seiko-srpg57/gallery_1.webp",
            "/watches/seiko-srpg57/gallery_2.webp",
            "/watches/seiko-srpg57/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpg05",
        "brand": "Seiko",
        "model": "SRPG05",
        "price": 55000,
        "description": "Presage Style '60s CollectionInspired by the styles of the 1960s, including the 1964 \"Crown Chronograph,\" Japan's first watch with a stopwatch functionFine mechanical watchmaking from JapanAutomatic w...",
        "image": "/watches/seiko-srpg05/main.webp",
        "gallery": [
            "/watches/seiko-srpg05/gallery_1.webp",
            "/watches/seiko-srpg05/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpg03",
        "brand": "Seiko",
        "model": "SRPG03",
        "price": 55000,
        "description": "Presage Style '60s CollectionInspired by the styles of the 1960s, including the 1964 \"Crown Chronograph,\" Japan's first watch with a stopwatch functionFine mechanical watchmaking from JapanAutomatic w...",
        "image": "/watches/seiko-srpg03/main.webp",
        "gallery": [
            "/watches/seiko-srpg03/gallery_1.webp",
            "/watches/seiko-srpg03/gallery_2.webp",
            "/watches/seiko-srpg03/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpg31",
        "brand": "Seiko",
        "model": "SRPG31",
        "price": 31500,
        "description": "Seiko 5 Sports CollectionInspired by vintage field/military styleAutomatic with manual winding capability21,600 vibrations per hour Power reserve:  approximately 41 hours24 jewelsBlue-gray dialDay/dat...",
        "image": "/watches/seiko-srpg31/main.webp",
        "gallery": [
            "/watches/seiko-srpg31/gallery_1.webp",
            "/watches/seiko-srpg31/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpg29",
        "brand": "Seiko",
        "model": "SRPG29",
        "price": 31500,
        "description": "Seiko 5 Sports CollectionInspired by vintage field/military styleAutomatic with manual winding capability21,600 vibrations per hourPower reserve:  approximately 41 hours24 jewelsBlue dialDay/date cale...",
        "image": "/watches/seiko-srpg29/main.webp",
        "gallery": [
            "/watches/seiko-srpg29/gallery_1.webp",
            "/watches/seiko-srpg29/gallery_2.webp",
            "/watches/seiko-srpg29/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpg41",
        "brand": "Seiko",
        "model": "SRPG41",
        "price": 35000,
        "description": "Seiko 5 Sports CollectionInspired by vintage field/military styleAutomatic with manual winding capability21,600 vibrations per hourPower reserve:  approximately 41 hours24 jewelsBlack dialDay/date cal...",
        "image": "/watches/seiko-srpg41/main.webp",
        "gallery": [
            "/watches/seiko-srpg41/gallery_1.webp",
            "/watches/seiko-srpg41/gallery_2.webp",
            "/watches/seiko-srpg41/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpg39",
        "brand": "Seiko",
        "model": "SRPG39",
        "price": 31500,
        "description": "Seiko 5 Sports CollectionInspired by vintage field/military styleAutomatic with manual winding capability21,600 vibrations per hourPower reserve:  approximately 41 hours24 jewelsBlue dialDay/date cale...",
        "image": "/watches/seiko-srpg39/main.webp",
        "gallery": [
            "/watches/seiko-srpg39/gallery_1.webp",
            "/watches/seiko-srpg39/gallery_2.webp",
            "/watches/seiko-srpg39/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpg37",
        "brand": "Seiko",
        "model": "SRPG37",
        "price": 31500,
        "description": "Seiko 5 Sports CollectionInspired by vintage field/military styleAutomatic with manual winding capability21,600 vibrations per hourPower reserve:  approximately 41 hours24 jewelsBlack dialDay/date cal...",
        "image": "/watches/seiko-srpg37/main.webp",
        "gallery": [
            "/watches/seiko-srpg37/gallery_1.webp",
            "/watches/seiko-srpg37/gallery_2.webp",
            "/watches/seiko-srpg37/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpg35",
        "brand": "Seiko",
        "model": "SRPG35",
        "price": 31500,
        "description": "Seiko 5 Sports CollectionInspired by vintage field/military styleAutomatic with manual winding capability21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsBlack dialDay/date cale...",
        "image": "/watches/seiko-srpg35/main.webp",
        "gallery": [
            "/watches/seiko-srpg35/gallery_1.webp",
            "/watches/seiko-srpg35/gallery_2.webp",
            "/watches/seiko-srpg35/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpg33",
        "brand": "Seiko",
        "model": "SRPG33",
        "price": 31500,
        "description": "Seiko 5 Sports CollectionInspired by vintage field/military styleAutomatic with manual winding capability21,600 vibrations per hourPower reserve:  approximately 41 hours24 jewelsGreen dialDay/date cal...",
        "image": "/watches/seiko-srpg33/main.webp",
        "gallery": [
            "/watches/seiko-srpg33/gallery_1.webp",
            "/watches/seiko-srpg33/gallery_2.webp",
            "/watches/seiko-srpg33/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpg27",
        "brand": "Seiko",
        "model": "SRPG27",
        "price": 31500,
        "description": "Seiko 5 Sports CollectionInspired by vintage field/military styleAutomatic with manual winding capability21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsBlack dialDay/date cale...",
        "image": "/watches/seiko-srpg27/main.webp",
        "gallery": [
            "/watches/seiko-srpg27/gallery_1.webp",
            "/watches/seiko-srpg27/gallery_2.webp",
            "/watches/seiko-srpg27/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpf03",
        "brand": "Seiko",
        "model": "SRPF03",
        "price": 55000,
        "description": "Automatic DiverManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours23 jewelsOne-way rotating elapsed timing bezelLumiBrite hands and markersDate cal...",
        "image": "/watches/seiko-srpf03/main.webp",
        "gallery": [
            "/watches/seiko-srpf03/gallery_1.webp",
            "/watches/seiko-srpf03/gallery_2.webp",
            "/watches/seiko-srpf03/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpf54",
        "brand": "Seiko",
        "model": "SRPF54",
        "price": 55000,
        "description": "Seiko Presage Cocktail TimeInspired by the classic Pink Champagne cocktailFine mechanical watchmaking from JapanManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approx...",
        "image": "/watches/seiko-srpf54/main.webp",
        "gallery": [
            "/watches/seiko-srpf54/gallery_1.webp",
            "/watches/seiko-srpf54/gallery_2.webp",
            "/watches/seiko-srpf54/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpf53",
        "brand": "Seiko",
        "model": "SRPF53",
        "price": 55000,
        "description": "Presage Japanese Garden CollectionU.S. ExclusiveInspired by the serenity of a Japanese GardenFine mechanical watchmaking from JapanManual and automatic winding capabilities21,600 vibrations per hourPo...",
        "image": "/watches/seiko-srpf53/main.webp",
        "gallery": [
            "/watches/seiko-srpf53/gallery_1.webp",
            "/watches/seiko-srpf53/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe93",
        "brand": "Seiko",
        "model": "SRPE93",
        "price": 52500,
        "description": "Automatic DiverManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsDay/Date calendarScrewdown crown and casebackOne-way rotating elapsed ti...",
        "image": "/watches/seiko-srpe93/main.webp",
        "gallery": [
            "/watches/seiko-srpe93/gallery_1.webp",
            "/watches/seiko-srpe93/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe99",
        "brand": "Seiko",
        "model": "SRPE99",
        "price": 57500,
        "description": "PADI Special EditionAutomatic DiverManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsOne-way rotating elapsed timing bezelLumiBrite hands...",
        "image": "/watches/seiko-srpe99/main.webp",
        "gallery": [
            "/watches/seiko-srpe99/gallery_1.webp",
            "/watches/seiko-srpe99/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe45",
        "brand": "Seiko",
        "model": "SRPE45",
        "price": 45000,
        "description": "Seiko Presage Cocktail TimeInspired by the classic Mojito cocktailFine mechanical watchmaking from JapanManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately ...",
        "image": "/watches/seiko-srpe45/main.webp",
        "gallery": [
            "/watches/seiko-srpe45/gallery_1.webp",
            "/watches/seiko-srpe45/gallery_2.webp",
            "/watches/seiko-srpe45/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe43",
        "brand": "Seiko",
        "model": "SRPE43",
        "price": 45000,
        "description": "Seiko Presage Cocktail TimeInspired by the classic Old Clock cocktailFine mechanical watchmaking from JapanManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximate...",
        "image": "/watches/seiko-srpe43/main.webp",
        "gallery": [
            "/watches/seiko-srpe43/gallery_1.webp",
            "/watches/seiko-srpe43/gallery_2.webp",
            "/watches/seiko-srpe43/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe41",
        "brand": "Seiko",
        "model": "SRPE41",
        "price": 45000,
        "description": "Seiko Presage Cocktail TimeInspired by the classic Negroni cocktailFine mechanical watchmaking from JapanManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately...",
        "image": "/watches/seiko-srpe41/main.webp",
        "gallery": [
            "/watches/seiko-srpe41/gallery_1.webp",
            "/watches/seiko-srpe41/gallery_2.webp",
            "/watches/seiko-srpe41/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe37",
        "brand": "Seiko",
        "model": "SRPE37",
        "price": 62500,
        "description": "From the Prospex CollectionAutomatic DiverManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours23 jewelsBlack ceramic one-way rotating elapsed timing...",
        "image": "/watches/seiko-srpe37/main.webp",
        "gallery": [
            "/watches/seiko-srpe37/gallery_1.webp",
            "/watches/seiko-srpe37/gallery_2.webp",
            "/watches/seiko-srpe37/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe57",
        "brand": "Seiko",
        "model": "SRPE57",
        "price": 31500,
        "description": "Seiko 5 SportsManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsBlack sunray dial with gold accentsDay/date calendarLumiBrite hands and m...",
        "image": "/watches/seiko-srpe57/main.webp",
        "gallery": [
            "/watches/seiko-srpe57/gallery_1.webp",
            "/watches/seiko-srpe57/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe55",
        "brand": "Seiko",
        "model": "SRPE55",
        "price": 31500,
        "description": "Seiko 5 SportsManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsBlack sunray dialDay/date calendarLumiBrite hands and markersCase diamete...",
        "image": "/watches/seiko-srpe55/main.webp",
        "gallery": [
            "/watches/seiko-srpe55/gallery_1.webp",
            "/watches/seiko-srpe55/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe53",
        "brand": "Seiko",
        "model": "SRPE53",
        "price": 31500,
        "description": "Seiko 5 SportsManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsBlue sunray dialDay/date calendarLumiBrite hands and markersCase diameter...",
        "image": "/watches/seiko-srpe53/main.webp",
        "gallery": [
            "/watches/seiko-srpe53/gallery_1.webp",
            "/watches/seiko-srpe53/gallery_2.webp",
            "/watches/seiko-srpe53/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe51",
        "brand": "Seiko",
        "model": "SRPE51",
        "price": 31500,
        "description": "Seiko 5 SportsManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsGray sunray dialDay/date calendarLumiBrite hands and markersCase diameter...",
        "image": "/watches/seiko-srpe51/main.webp",
        "gallery": [
            "/watches/seiko-srpe51/gallery_1.webp",
            "/watches/seiko-srpe51/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe33",
        "brand": "Seiko",
        "model": "SRPE33",
        "price": 65000,
        "description": "Prospex Save the Ocean Special Edition\"Manta Ray\" themed gradient blue dial with stamped wave patternAutomatic DiverManual and automatic winding capabilities21,600 vibrations per hourPower reserve: ap...",
        "image": "/watches/seiko-srpe33/main.webp",
        "gallery": [
            "/watches/seiko-srpe33/gallery_1.webp",
            "/watches/seiko-srpe33/gallery_2.webp",
            "/watches/seiko-srpe33/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe74",
        "brand": "Seiko",
        "model": "SRPE74",
        "price": 45000,
        "description": "Seiko 5 SportsManual and automatic winding capabilities 21,600 vibrations per hour Power reserve: approximately 41 hours 24 jewels Metallic gold-tone dial Gold-tone unidirectional rotating bezelDay/da...",
        "image": "/watches/seiko-srpe74/main.webp",
        "gallery": [
            "/watches/seiko-srpe74/gallery_1.webp",
            "/watches/seiko-srpe74/gallery_2.webp",
            "/watches/seiko-srpe74/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe27",
        "brand": "Seiko",
        "model": "SRPE27",
        "price": 55000,
        "description": "Prospex PADI Special EditionManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsBlue and red one-way rotating elapsed timing bezelBlack dia...",
        "image": "/watches/seiko-srpe27/main.webp",
        "gallery": [
            "/watches/seiko-srpe27/gallery_1.webp",
            "/watches/seiko-srpe27/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpd59",
        "brand": "Seiko",
        "model": "SRPD59",
        "price": 35000,
        "description": "Seiko 5 SportsManual and automatic winding capabilities 21,600 vibrations per hour Power reserve: approximately 41 hours 24 jewels Orange sunray dial with gold and black accentsBlack and gold unidirec...",
        "image": "/watches/seiko-srpd59/main.webp",
        "gallery": [
            "/watches/seiko-srpd59/gallery_1.webp",
            "/watches/seiko-srpd59/gallery_2.webp",
            "/watches/seiko-srpd59/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpd71",
        "brand": "Seiko",
        "model": "SRPD71",
        "price": 39500,
        "description": "Seiko 5 SportsManual and automatic winding capabilities 21,600 vibrations per hour Power reserve: approximately 41 hours 24 jewels Blue sunray dial Blue unidirectional rotating bezelDay/date calendar ...",
        "image": "/watches/seiko-srpd71/main.webp",
        "gallery": [
            "/watches/seiko-srpd71/gallery_1.webp",
            "/watches/seiko-srpd71/gallery_2.webp",
            "/watches/seiko-srpd71/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpd79",
        "brand": "Seiko",
        "model": "SRPD79",
        "price": 37500,
        "description": "Seiko 5 SportsManual and automatic winding capabilities 21,600 vibrations per hour Power reserve: approximately 41 hours 24 jewels Black dial and unidirectional rotating bezelDay/date calendar Black h...",
        "image": "/watches/seiko-srpd79/main.webp",
        "gallery": [
            "/watches/seiko-srpd79/gallery_1.webp",
            "/watches/seiko-srpd79/gallery_2.webp",
            "/watches/seiko-srpd79/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpd93",
        "brand": "Seiko",
        "model": "SRPD93",
        "price": 35000,
        "description": "Seiko 5 SportsManual and automatic winding capabilities 21,600 vibrations per hour Power reserve: approximately 41 hours 24 jewels Blue sunray dial Blue unidirectional rotating bezelDay/date calendar ...",
        "image": "/watches/seiko-srpd93/main.webp",
        "gallery": [
            "/watches/seiko-srpd93/gallery_1.webp",
            "/watches/seiko-srpd93/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpd65",
        "brand": "Seiko",
        "model": "SRPD65",
        "price": 39500,
        "description": "Seiko 5 SportsManual and automatic winding capabilities 21,600 vibrations per hour Power reserve: approximately 41 hours 24 jewels Black dial and unidirectional rotating bezelDay/date calendar LumiBri...",
        "image": "/watches/seiko-srpd65/main.webp",
        "gallery": [
            "/watches/seiko-srpd65/gallery_1.webp",
            "/watches/seiko-srpd65/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpd51",
        "brand": "Seiko",
        "model": "SRPD51",
        "price": 35000,
        "description": "Seiko 5 SportsManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsBlue sunray dialBlue unidirectional rotating bezelDay/date calendarLumiBr...",
        "image": "/watches/seiko-srpd51/main.webp",
        "gallery": [
            "/watches/seiko-srpd51/gallery_1.webp",
            "/watches/seiko-srpd51/gallery_2.webp",
            "/watches/seiko-srpd51/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srp841",
        "brand": "Seiko",
        "model": "SRP841",
        "price": 47500,
        "description": "From the Presage Cocktail Time CollectionFine mechanical watchmaking from JapanManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours23 jewelsIce blue...",
        "image": "/watches/seiko-srp841/main.webp",
        "gallery": [
            "/watches/seiko-srp841/gallery_1.webp",
            "/watches/seiko-srp841/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srp839",
        "brand": "Seiko",
        "model": "SRP839",
        "price": 47500,
        "description": "From the Presage Cocktail Time CollectionFine mechanical watchmaking from JapanManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours23 jewelsPink dia...",
        "image": "/watches/seiko-srp839/main.webp",
        "gallery": [
            "/watches/seiko-srp839/gallery_1.webp",
            "/watches/seiko-srp839/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe15",
        "brand": "Seiko",
        "model": "SRPE15",
        "price": 47500,
        "description": "From the Presage Cocktail Time CollectionFine mechanical watchmaking from JapanManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours23 jewelsGreen di...",
        "image": "/watches/seiko-srpe15/main.webp",
        "gallery": [
            "/watches/seiko-srpe15/gallery_1.webp",
            "/watches/seiko-srpe15/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpd37",
        "brand": "Seiko",
        "model": "SRPD37",
        "price": 45000,
        "description": "From the Presage Collection\nPresage Trimatic technologyFine mechanical watchmaking from JapanManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours23 ...",
        "image": "/watches/seiko-srpd37/main.webp",
        "gallery": [
            "/watches/seiko-srpd37/gallery_1.webp",
            "/watches/seiko-srpd37/gallery_2.webp",
            "/watches/seiko-srpd37/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpb46",
        "brand": "Seiko",
        "model": "SRPB46",
        "price": 52500,
        "description": "Automatic  Manual and automatic winding capabilities Rose Gold highlights  21,600 vibrations per hour  Power reserve: approximately 41 hours  23 jewels  Date calendar  Dial with pressed pattern and gl...",
        "image": "/watches/seiko-srpb46/main.webp",
        "gallery": [
            "/watches/seiko-srpb46/gallery_1.webp",
            "/watches/seiko-srpb46/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpb43",
        "brand": "Seiko",
        "model": "SRPB43",
        "price": 45000,
        "description": "Automatic  Manual and automatic winding capabilities  21,600 vibrations per hour  Power reserve: approximately 41 hours  23 jewels  Date calendar  Dial with pressed pattern and gloss finish  Box-shape...",
        "image": "/watches/seiko-srpb43/main.webp",
        "gallery": [
            "/watches/seiko-srpb43/gallery_1.webp",
            "/watches/seiko-srpb43/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpb41",
        "brand": "Seiko",
        "model": "SRPB41",
        "price": 47500,
        "description": "Automatic Presage Trimatic technologyManual and automatic winding capabilities  21,600 vibrations per hour  Power reserve: approximately 41 hours  23 jewels  Date calendar  Dial with pressed pattern a...",
        "image": "/watches/seiko-srpb41/main.webp",
        "gallery": [
            "/watches/seiko-srpb41/gallery_1.webp",
            "/watches/seiko-srpb41/gallery_2.webp",
            "/watches/seiko-srpb41/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpb77",
        "brand": "Seiko",
        "model": "SRPB77",
        "price": 47500,
        "description": "Automatic  Manual and automatic winding capabilities  21,600 vibrations per hour  Power reserve: approximately 41 hours  23 jewels  Date calendar  Dial with pressed pattern and gloss finish  Blue hour...",
        "image": "/watches/seiko-srpb77/main.webp",
        "gallery": [
            "/watches/seiko-srpb77/gallery_1.webp",
            "/watches/seiko-srpb77/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sfj009",
        "brand": "Seiko",
        "model": "SFJ009",
        "price": 105000,
        "description": "Prospex Seiko Watchmaking 110th Anniversary Limited Edition. To mark 110 years of watchmaking excellence, Seiko is highlighting its continuous dedication to evolving technology, as well as diversity, ...",
        "image": "/watches/seiko-sfj009/main.webp",
        "gallery": [
            "/watches/seiko-sfj009/gallery_1.webp",
            "/watches/seiko-sfj009/gallery_2.webp",
            "/watches/seiko-sfj009/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sfj007",
        "brand": "Seiko",
        "model": "SFJ007",
        "price": 95000,
        "description": "Prospex Speedtimer World Athletics Championships Budapest 23 Limited Edition\nLimited Edition of 4,000, commemorating the World Athletics Championships Budapest 23, for which Seiko is the official time...",
        "image": "/watches/seiko-sfj007/main.webp",
        "gallery": [
            "/watches/seiko-sfj007/gallery_1.webp",
            "/watches/seiko-sfj007/gallery_2.webp",
            "/watches/seiko-sfj007/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sre009",
        "brand": "Seiko",
        "model": "SRE009",
        "price": 59500,
        "description": "Seiko Presage Cocktail Time\nInspired by the vibrant elegance of the exciting cocktail lounges in today's Tokyo\n8 diamonds\nFine mechanical watchmaking from Japan\nAutomatic with manual winding capabilit...",
        "image": "/watches/seiko-sre009/main.webp",
        "gallery": [
            "/watches/seiko-sre009/gallery_1.webp",
            "/watches/seiko-sre009/gallery_2.webp",
            "/watches/seiko-sre009/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sre007",
        "brand": "Seiko",
        "model": "SRE007",
        "price": 57500,
        "description": "Seiko Presage Cocktail Time\nInspired by the vibrant elegance of the exciting cocktail lounges in today's Tokyo\n8 diamonds\nFine mechanical watchmaking from Japan\nAutomatic with manual winding capabilit...",
        "image": "/watches/seiko-sre007/main.webp",
        "gallery": [
            "/watches/seiko-sre007/gallery_1.webp",
            "/watches/seiko-sre007/gallery_2.webp",
            "/watches/seiko-sre007/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-spb249",
        "brand": "Seiko",
        "model": "SPB249",
        "price": 75000,
        "description": "Prospex Alpinist\n1959 Sport Watch ReinterpretationAutomatic with manual winding capability21,600 vibrations per hourPower reserve: approximately 70 hours24 jewelsBlue patterned dialDate windowLumiBrit...",
        "image": "/watches/seiko-spb249/main.webp",
        "gallery": [
            "/watches/seiko-spb249/gallery_1.webp",
            "/watches/seiko-spb249/gallery_2.webp",
            "/watches/seiko-spb249/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sre004",
        "brand": "Seiko",
        "model": "SRE004",
        "price": 36500,
        "description": "Seiko 5 Sports CollectionVintage, street-smart style in a new smaller caseAutomatic with manual winding capability21,600 vibrations per hourPower reserve:  approximately 40 hours21 jewelsWhite sunray ...",
        "image": "/watches/seiko-sre004/main.webp",
        "gallery": [
            "/watches/seiko-sre004/gallery_1.webp",
            "/watches/seiko-sre004/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sre003",
        "brand": "Seiko",
        "model": "SRE003",
        "price": 31500,
        "description": "Seiko 5 Sports CollectionVintage, street-smart style in a new smaller caseAutomatic with manual winding capability21,600 vibrations per hourPower reserve:  approximately 40 hours21 jewelsNavy blue sun...",
        "image": "/watches/seiko-sre003/main.webp",
        "gallery": [
            "/watches/seiko-sre003/gallery_1.webp",
            "/watches/seiko-sre003/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-spb117",
        "brand": "Seiko",
        "model": "SPB117",
        "price": 75000,
        "description": "From the Prospex Alpinist CollectionModern re-imagining of Seiko's first sport watch, introduced in 1959Manual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately ...",
        "image": "/watches/seiko-spb117/main.webp",
        "gallery": [
            "/watches/seiko-spb117/gallery_1.webp",
            "/watches/seiko-spb117/gallery_2.webp",
            "/watches/seiko-spb117/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-spb210",
        "brand": "Seiko",
        "model": "SPB210",
        "price": 77500,
        "description": "Prospex Alpinist\n1959 Sport Watch ReinterpretationAutomatic with manual winding capability21,600 vibrations per hourPower reserve: approximately 70 hours24 jewelsRotating inner compass bezelGradated g...",
        "image": "/watches/seiko-spb210/main.webp",
        "gallery": [
            "/watches/seiko-spb210/gallery_1.webp",
            "/watches/seiko-spb210/gallery_2.webp",
            "/watches/seiko-spb210/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-spb155",
        "brand": "Seiko",
        "model": "SPB155",
        "price": 72500,
        "description": "Prospex Alpinist\n1959 Sport Watch ReinterpretationManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 70 hours24 jewelsGradated green dialDate calendarLumiB...",
        "image": "/watches/seiko-spb155/main.webp",
        "gallery": [
            "/watches/seiko-spb155/gallery_1.webp",
            "/watches/seiko-spb155/gallery_2.webp",
            "/watches/seiko-spb155/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-spb121",
        "brand": "Seiko",
        "model": "SPB121",
        "price": 72500,
        "description": "SEIKO PROSPEX ALPINISTModern re-imagining of Seiko's first sport watch, introduced in 1959Manual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 70 hours24 jew...",
        "image": "/watches/seiko-spb121/main.webp",
        "gallery": [
            "/watches/seiko-spb121/gallery_1.webp",
            "/watches/seiko-spb121/gallery_2.webp",
            "/watches/seiko-spb121/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sne529",
        "brand": "Seiko",
        "model": "SNE529",
        "price": 25000,
        "description": "Men's EssentialsSolarPowered by light energy - no battery change required10-month power reserve once fully chargedDark green dial with sunray finish and Gold accentsDay/Date calendarSapphire crystalCa...",
        "image": "/watches/seiko-sne529/main.webp",
        "gallery": [
            "/watches/seiko-sne529/gallery_1.webp",
            "/watches/seiko-sne529/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-snkp27",
        "brand": "Seiko",
        "model": "SNKP27",
        "price": 28500,
        "description": "Automatic  Self-winding  21,600 vibrations per hour  Power reserve: approximately 41 hours  21 jewels  Day/Date calendar  Screwdown see-through caseback  Case diameter: 39.5mm Stainless steel case Gol...",
        "image": "/watches/seiko-snkp27/main.webp",
        "gallery": [
            "/watches/seiko-snkp27/gallery_1.webp",
            "/watches/seiko-snkp27/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-snkp23",
        "brand": "Seiko",
        "model": "SNKP23",
        "price": 28500,
        "description": "Automatic Self-winding  21,600 vibrations per hour  Power reserve: approximately 41 hours  21 jewels  Day/Date calendar  Screwdown see-through caseback  Case diameter: 39.5mm Stainless steel case and ...",
        "image": "/watches/seiko-snkp23/main.webp",
        "gallery": [
            "/watches/seiko-snkp23/gallery_1.webp",
            "/watches/seiko-snkp23/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-snkn37",
        "brand": "Seiko",
        "model": "SNKN37",
        "price": 23500,
        "description": "Automatic Self-winding 21,600 vibrations per hour Power reserve: approximately 41 hours 21 Jewels Day/Date calendar Screwdown see-through caseback Case diameter: 43.5mm Stainless steel case Leather st...",
        "image": "/watches/seiko-snkn37/main.webp",
        "gallery": [],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-snkm97",
        "brand": "Seiko",
        "model": "SNKM97",
        "price": 26500,
        "description": "Automatic Self-winding  21,600 vibrations per hour Power reserve: approximately 41 hours 21 Jewels Screwdown see-through caseback Day/Date calendar Case diameter: 43.5mm Stainless steel case and brace...",
        "image": "/watches/seiko-snkm97/main.webp",
        "gallery": [],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sfj005",
        "brand": "Seiko",
        "model": "SFJ005",
        "price": 92500,
        "description": "Prospex Speedtimer 1/100 Second Solar Chronograph Limited Edition\nLimited Edition of 4,000, celebrating the 40th anniversary of Seiko’s – and the world’s – first analog quartz chronograph equipped wit...",
        "image": "/watches/seiko-sfj005/main.webp",
        "gallery": [
            "/watches/seiko-sfj005/gallery_1.webp",
            "/watches/seiko-sfj005/gallery_2.webp",
            "/watches/seiko-sfj005/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-s23159",
        "brand": "Seiko",
        "model": "S23159",
        "price": 27500,
        "description": "Visually Impaired Braille for visually impaired Hinged acrylic crystal opens to allow access to raised markers Analog Quartz movement Case diameter: 36.0mm Stainless steel case Leather strap Caliber 7...",
        "image": "/watches/seiko-s23159/main.webp",
        "gallery": [],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur559",
        "brand": "Seiko",
        "model": "SUR559",
        "price": 32500,
        "description": "From the Essentials Collection. Designed to evoke the cool excitement of a night run, this smooth watch offers a slim profile for sleek sport or everyday wear. This subtly updated watch adds a streetw...",
        "image": "/watches/seiko-sur559/main.webp",
        "gallery": [
            "/watches/seiko-sur559/gallery_1.webp",
            "/watches/seiko-sur559/gallery_2.webp",
            "/watches/seiko-sur559/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sfj003",
        "brand": "Seiko",
        "model": "SFJ003",
        "price": 92500,
        "description": "Prospex Speedtimer 1/100 Second Solar Chronograph\nInspired by Seiko's – and the world’s – first analog quartz chronograph, which featured a 1/100-second stopwatch\nFeatures the new solar chronograph 8A...",
        "image": "/watches/seiko-sfj003/main.webp",
        "gallery": [
            "/watches/seiko-sfj003/gallery_1.webp",
            "/watches/seiko-sfj003/gallery_2.webp",
            "/watches/seiko-sfj003/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur549",
        "brand": "Seiko",
        "model": "SUR549",
        "price": 35000,
        "description": "From the Essentials Collection\nPale blue dial with subtly varying metallic texture\nSilver stick markers\nCase diameter: 30.0mm\nStainless steel case and bracelet with brushed and polished finish\nTri-fol...",
        "image": "/watches/seiko-sur549/main.webp",
        "gallery": [
            "/watches/seiko-sur549/gallery_1.webp",
            "/watches/seiko-sur549/gallery_2.webp",
            "/watches/seiko-sur549/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sre010",
        "brand": "Seiko",
        "model": "SRE010",
        "price": 62500,
        "description": "Seiko Presage Cocktail Time\nInspired by the vibrant elegance of the exciting cocktail lounges in today's Tokyo\n8 diamonds\nFine mechanical watchmaking from Japan\nAutomatic with manual winding capabilit...",
        "image": "/watches/seiko-sre010/main.webp",
        "gallery": [
            "/watches/seiko-sre010/gallery_1.webp",
            "/watches/seiko-sre010/gallery_2.webp",
            "/watches/seiko-sre010/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpj83",
        "brand": "Seiko",
        "model": "SRPJ83",
        "price": 31500,
        "description": "Seiko 5 Sports Collection\nInspired by vintage field/aviator style\nAutomatic with manual winding capability\n21,600 vibrations per hour\nPower reserve: approximately 41 hours\n24 jewels\nBeige dial\n60-minu...",
        "image": "/watches/seiko-srpj83/main.webp",
        "gallery": [
            "/watches/seiko-srpj83/gallery_1.webp",
            "/watches/seiko-srpj83/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur525",
        "brand": "Seiko",
        "model": "SUR525",
        "price": 26500,
        "description": "From the Essentials Collection\nBlue sunray dial in a new color inspired by the richness of water\nSilver stick indices\nDate calendar\nSapphire crystal\nScrewdown caseback\nCase diameter: 40.2mm\nStainless ...",
        "image": "/watches/seiko-sur525/main.webp",
        "gallery": [
            "/watches/seiko-sur525/gallery_1.webp",
            "/watches/seiko-sur525/gallery_2.webp",
            "/watches/seiko-sur525/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpj45",
        "brand": "Seiko",
        "model": "SRPJ45",
        "price": 35000,
        "description": "Seiko 5 Sports CollectionA tribute to Seiko's iconic \"Time Sonar\" of the 1970sTranslucent turquoise dial offering a view of the day/date diskAutomatic with manual winding capability21,600 vibrations p...",
        "image": "/watches/seiko-srpj45/main.webp",
        "gallery": [
            "/watches/seiko-srpj45/gallery_1.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srph87",
        "brand": "Seiko",
        "model": "SRPH87",
        "price": 31500,
        "description": "From the Essentials CollectionAutomatic with manual winding capability21,600 vibrations per hourPower reserve:  approximately 41 hours23 jewelsBlue sunray dialDate calendarScrewdown see-through caseba...",
        "image": "/watches/seiko-srph87/main.webp",
        "gallery": [
            "/watches/seiko-srph87/gallery_1.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb405",
        "brand": "Seiko",
        "model": "SSB405",
        "price": 30000,
        "description": "From the Essentials CollectionChronograph measures up to 60 minutes of elapsed time in 1/5-second incrementsBlack tachymeter ringDimensional embossed green dial with applied metallic elements and blac...",
        "image": "/watches/seiko-ssb405/main.webp",
        "gallery": [
            "/watches/seiko-ssb405/gallery_1.webp",
            "/watches/seiko-ssb405/gallery_2.webp",
            "/watches/seiko-ssb405/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srph31",
        "brand": "Seiko",
        "model": "SRPH31",
        "price": 31500,
        "description": "Seiko 5 Sports CollectionInspired by vintage designs worn by early pilotsAutomatic with manual winding capability21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsBlue dial60-min...",
        "image": "/watches/seiko-srph31/main.webp",
        "gallery": [
            "/watches/seiko-srph31/gallery_1.webp",
            "/watches/seiko-srph31/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur432",
        "brand": "Seiko",
        "model": "SUR432",
        "price": 22500,
        "description": "From the Essentials CollectionCharcoal sunray dialDay/date calendarGold hands and markersCase diameter: 36.9mmTwo-tone stainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)...",
        "image": "/watches/seiko-sur432/main.webp",
        "gallery": [
            "/watches/seiko-sur432/gallery_1.webp",
            "/watches/seiko-sur432/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur488",
        "brand": "Seiko",
        "model": "SUR488",
        "price": 31500,
        "description": "From the Essentials CollectionContemporary minimalist designBlack sunray dial with gold accentsDate calendarCase diameter: 40.6mmStainless steel case and bracelet with gold finishWater-resistant to 3 ...",
        "image": "/watches/seiko-sur488/main.webp",
        "gallery": [
            "/watches/seiko-sur488/gallery_1.webp",
            "/watches/seiko-sur488/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssa425",
        "brand": "Seiko",
        "model": "SSA425",
        "price": 59500,
        "description": "Presage Style '60s CollectionInspired by the styles of the 1960s, including the 1964 \"Crown Chronograph,\" Japan's first watch with a stopwatch functionFine mechanical watchmaking from JapanAutomatic w...",
        "image": "/watches/seiko-ssa425/main.webp",
        "gallery": [
            "/watches/seiko-ssa425/gallery_1.webp",
            "/watches/seiko-ssa425/gallery_2.webp",
            "/watches/seiko-ssa425/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpf77",
        "brand": "Seiko",
        "model": "SRPF77",
        "price": 62500,
        "description": "Prospex Save the Ocean Special Edition\"Manta Ray\" themed gradient blue dial with stamped wave patternAutomatic DiverManual and automatic winding capabilities21,600 vibrations per hourPower reserve: ap...",
        "image": "/watches/seiko-srpf77/main.webp",
        "gallery": [
            "/watches/seiko-srpf77/gallery_1.webp",
            "/watches/seiko-srpf77/gallery_2.webp",
            "/watches/seiko-srpf77/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpe05",
        "brand": "Seiko",
        "model": "SRPE05",
        "price": 62500,
        "description": "Prospex Automatic DiverManual and automatic winding capabilities21,600 vibrations per hourPower reserve: approximately 41 hours24 jewelsBlack ceramic one-way rotating elapsed timing bezelKhaki green d...",
        "image": "/watches/seiko-srpe05/main.webp",
        "gallery": [
            "/watches/seiko-srpe05/gallery_1.webp",
            "/watches/seiko-srpe05/gallery_2.webp",
            "/watches/seiko-srpe05/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur550",
        "brand": "Seiko",
        "model": "SUR550",
        "price": 37500,
        "description": "From the Essentials Collection\nLight champagne dial with subtly varying metallic texture\nGold stick markers\nCase diameter: 30.0mm\nStainless steel case and bracelet with brushed and polished two-tone f...",
        "image": "/watches/seiko-sur550/main.webp",
        "gallery": [
            "/watches/seiko-sur550/gallery_1.webp",
            "/watches/seiko-sur550/gallery_2.webp",
            "/watches/seiko-sur550/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb437",
        "brand": "Seiko",
        "model": "SSB437",
        "price": 55000,
        "description": "From the Coutura Collection\nInspired by motor sports, with a new case design incorporating the angles and edges of race car architecture\nQuartz chronograph\nChronograph measures up to 60 minutes of ela...",
        "image": "/watches/seiko-ssb437/main.webp",
        "gallery": [
            "/watches/seiko-ssb437/gallery_1.webp",
            "/watches/seiko-ssb437/gallery_2.webp",
            "/watches/seiko-ssb437/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srk050",
        "brand": "Seiko",
        "model": "SRK050",
        "price": 26500,
        "description": "From the Essentials CollectionWhite dial with Roman numeralsSeconds subdialSapphire crystalCabochon crownCase diameter:  39.0mmStainless steel case in gold finishBrown leather strapWater-resistant to ...",
        "image": "/watches/seiko-srk050/main.webp",
        "gallery": [
            "/watches/seiko-srk050/gallery_1.webp",
            "/watches/seiko-srk050/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srk047",
        "brand": "Seiko",
        "model": "SRK047",
        "price": 27500,
        "description": "From the Essentials CollectionAntique white dial with Roman numeralsSeconds subdialSapphire crystalCabochon crownCase diameter:  39.0mmStainless steel case and braceletTri-fold push button release cla...",
        "image": "/watches/seiko-srk047/main.webp",
        "gallery": [
            "/watches/seiko-srk047/gallery_1.webp",
            "/watches/seiko-srk047/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-sur414",
        "brand": "Seiko",
        "model": "SUR414",
        "price": 28500,
        "description": "From the Essentials CollectionCharcoal sunray dialDate calendarGold hands and markersCase diameter: 27.4mmTwo-tone stainless steel case and braceletWater-resistant to 10 bar, 100 meters (330 feet)Cali...",
        "image": "/watches/seiko-sur414/main.webp",
        "gallery": [
            "/watches/seiko-sur414/gallery_1.webp",
            "/watches/seiko-sur414/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssb347",
        "brand": "Seiko",
        "model": "SSB347",
        "price": 29500,
        "description": "Men's EssentialsQuartz ChronographChronograph measures up to 60 minutes of elapsed time in 1/5-second incrementsTachymeter bezel with Black ion-finishBlack multi-layered dial with red and Blue accents...",
        "image": "/watches/seiko-ssb347/main.webp",
        "gallery": [
            "/watches/seiko-ssb347/gallery_1.webp",
            "/watches/seiko-ssb347/gallery_2.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-ssk021",
        "brand": "Seiko",
        "model": "SSK021",
        "price": 49500,
        "description": "Seiko 5 Sports SKX GMT U.S. Special Creation. Adding new richness to classic sport/dress design, this stylish watch delivers all-day versatility with a cutting edge. With its GMT function and stylish ...",
        "image": "/watches/seiko-ssk021/main.webp",
        "gallery": [
            "/watches/seiko-ssk021/gallery_1.webp",
            "/watches/seiko-ssk021/gallery_2.webp",
            "/watches/seiko-ssk021/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        "id": "seiko-srpk37",
        "brand": "Seiko",
        "model": "SRPK37",
        "price": 40000,
        "description": "Seiko 5 Sports Honda Cub Limited Edition\nLimited Edition of 7,500\nProduction serial number engraved on caseback\nCreated in collaboration with Honda’s urban motorbike and partner, Super Cub\nAutomatic w...",
        "image": "/watches/seiko-srpk37/main.webp",
        "gallery": [
            "/watches/seiko-srpk37/gallery_1.webp",
            "/watches/seiko-srpk37/gallery_2.webp",
            "/watches/seiko-srpk37/gallery_3.webp"
        ],
        "details": {
            "Movimiento": "Automático Japonés",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "50m",
            "Cristal": "Hardlex",
            "Material de la Caja": "Stainless Steel"
        }
    },
    {
        id: "tissot-T1378079608100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Damascus Steel 38mm",
        price: 1881,
        description: "Un icono renacido con material de vanguardia: Acero de Damasco jaspeado. Si buscas un reloj delgado y suave con un auténtico toque de los años 70, no busques más.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw6af42289/product-pictures/2595b61a-d8db-414a-9356-51c9350e537b_T137-807-96-081-00_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-T1378074406100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Titanium 38mm Grey",
        price: 1561,
        description: "Un icono renacido con material de vanguardia: Titanio. Ultraligero y resistente, manteniendo el auténtico diseño de los 70.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw699e42ba/product-pictures/bb1339fa-d3fd-4572-a568-9ab0c2cbf248_T137-807-44-061-00_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-T1378074404100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Titanium 38mm Blue",
        price: 1561,
        description: "Esfera azul profundo en una caja de Titanio de alta tecnología. Estilo y sustancia con un peso pluma.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw544290e7/product-pictures/bfc139c5-3da5-4a57-849b-4711ef6b0f41_T137-807-44-041-00_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-T1374071104102",
        brand: "Tissot", availability: "pre-order",
        model: "PRX UFO Robot Grendizer",
        price: 1520,
        description: "Edición especial colaborativa. Un homenaje a la cultura pop y la relojería suiza.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw2e27ccbc/product-pictures/1640b44b-7c54-4c7a-878d-747000e92c3f_T137-407-11-041-02_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071135100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Ice Blue",
        price: 1360,
        description: "El codiciado dial azul hielo. Fresco, moderno y distintivo, con la fiabilidad del Powermatic 80.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw195fabc9/product-pictures/5f0c9cb0-604a-476e-8ba7-563133b91d5c_T137-407-11-351-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374073305101",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Grendizer 50th Anniversary",
        price: 1760,
        description: "Celebrando 50 años de un icono. Acabado PVD negro y detalles exclusivos de Grendizer.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwe931905e/product-pictures/2672bb1a-58ec-4ca0-aa4f-1b299fc802b2_T137-407-33-051-01_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374073304100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Blue PVD",
        price: 1520,
        description: "Todo en azul. Caja de acero y brazalete con revestimiento PVD azul para un look impactante.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8ddb8341/product-pictures/daab9283-862f-4732-abd0-fa955e11d7bd_T137-407-33-041-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374073302100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Gold PVD",
        price: 1520,
        description: "El clásico dorado. Caja de acero inoxidable 316L con revestimiento PVD oro amarillo.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwee0090e5/product-pictures/5729d09d-baed-40b3-8e7f-4643b9cd1a43_T137-407-33-021-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071104100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Blue",
        price: 1360,
        description: "El superventas. Dial azul texturizado y brazalete integrado en acero 316L.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw27713dcb/product-pictures/63f42767-a9f5-4cdd-b952-8ea7b82b7e0c_T137-407-11-041-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071105100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Black",
        price: 1360,
        description: "Elegancia discreta. Dial negro profundo con textura en relieve.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb4fc1f36/product-pictures/7cb35e0f-1746-4892-a054-b32700bdbe10_T137-407-11-051-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1379079720100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Carbon 40.5mm",
        price: 1840,
        description: "Vanguardia tecnológica. Caja y dial de carbono forjado jaspeado, ligero y duradero.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw627b1daa/product-pictures/ee3811c6-6d9e-44e1-889f-b0e6182bbc36_T137-907-97-201-00_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80 (Silicio)",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Carbono Forjado"
        }
    },
    {
        id: "tissot-T1372071135100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 35mm Ice Blue",
        price: 1273,
        description: "El color del momento, ahora en 35mm. Perfecto para muñecas más delgadas.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwdaec7f3c/product-pictures/842ff1da-5eac-4e1d-9222-1f828ab4835b_T137-207-11-351-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1372073302100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 35mm Gold PVD",
        price: 1520,
        description: "Todo el estilo del PRX Gold, en un tamaño clásico de 35mm. PVD oro amarillo.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwa499c9bb/product-pictures/c016ca2d-0369-4a45-969d-24c114b8d03d_T137-207-33-021-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374073305100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Damian Lillard Edition",
        price: 1520,
        description: "Diseñado con la estrella de la NBA. Estilo audaz en PVD oro con detalles únicos.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwf4dd9736/product-pictures/a56e8842-e93e-482a-b6bb-fb5dc223c496_T137-407-33-051-00_Shadow-png.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071109100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Green",
        price: 1360,
        description: "Dial verde profundo. Una elección elegante y contemporánea.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw38ffa161/product-pictures/6c313b76-3e79-466d-83a5-042e47b276d5_T137-407-11-091-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1372071105100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 35mm Black",
        price: 1273,
        description: "El clásico negro en 35mm. Atemporal y versátil.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw54e98d10/product-pictures/c84a100e-6e30-4244-aec6-44a8a1d1d333_T137-207-11-051-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071109101",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Mint",
        price: 1360,
        description: "Un toque de frescura con el dial verde menta.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwa2ce0f04/product-pictures/d102160b-bf40-4582-a545-910f29536ad9_T137-407-11-091-01_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1372071109100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 35mm Green",
        price: 1273,
        description: "Verde vibrante en formato compacto.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw5ab05c59/product-pictures/a2c83d75-5920-46ae-9357-748382f43010_T137-207-11-091-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071105101",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Black (Detail)",
        price: 1360,
        description: "Variación con detalles sutiles en el dial negro.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwa50b0112/product-pictures/dfde7d22-afc8-42e1-b263-6087f1cd022d_T137-407-11-051-01_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374072103100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Silver/Rose",
        price: 1360,
        description: "Acero y detalles en PVD oro rosa. Una combinación sofisticada.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw993ed041/product-pictures/4d67a811-f821-4e4f-9413-0c141790493f_T137-407-21-031-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374271101100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Chronograph Panda",
        price: 3440,
        description: "Cronógrafo automático con dial tipo panda. Estilo deportivo retro con el prestigio del Valjoux.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw6e9f0330/product-pictures/ee366fd4-7d3b-4cc8-8d59-07b9892ab1a5_T137-427-11-011-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Valjoux A05.H31",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374271109100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Chronograph Green (Pre-order)",
        price: 3440,
        description: "Cronógrafo automático con dial verde profundo. Potencia y precisión Valjoux.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw04fe3403/product-pictures/1ef9b8d4-d9af-4a09-9b89-c1a4a62da84e_T137-427-11-091-00_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Valjoux A05.H31",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374271104100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Chronograph Blue",
        price: 3440,
        description: "El cronógrafo PRX en su versión azul clásica. Movimiento Valjoux de alto rendimiento.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb94346ee/product-pictures/d7a9cc11-d2f8-49e6-b9f0-a4918e18082e_T137-427-11-041-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Valjoux A05.H31",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1372071104100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 35mm Blue",
        price: 1273,
        description: "El favorito de todos en 35mm. Perfecto acabado y movimiento Powermatic 80.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw288f0509/product-pictures/c40959ea-db66-4297-b91b-63cb686c1cf5_T137-207-11-041-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro irrayable con antírreflejos",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },

    {
        id: "tissot-T1378074406100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Titanium 38mm Grey",
        price: 1561,
        description: "Ultraligero y resistente. La versión de titanio del icónico PRX para un confort absoluto.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw699e42ba/product-pictures/bb1339fa-d3fd-4572-a568-9ab0c2cbf248_T137-807-44-061-00_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-T1378074404100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Titanium 38mm Blue",
        price: 1561,
        description: "Esfera azul profundo en una caja de titanio de alta tecnología. Estilo y sustancia.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw544290e7/product-pictures/bfc139c5-3da5-4a57-849b-4711ef6b0f41_T137-807-44-041-00_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "38mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Titanio"
        }
    },
    {
        id: "tissot-T1374071104102",
        brand: "Tissot", availability: "pre-order",
        model: "PRX UFO Robot Grendizer",
        price: 1520,
        description: "Edición especial colaborativa. Un homenaje a la cultura pop y la relojería suiza.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw2e27ccbc/product-pictures/1640b44b-7c54-4c7a-878d-747000e92c3f_T137-407-11-041-02_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071135100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Ice Blue",
        price: 1360,
        description: "El codiciado dial azul hielo. Fresco, moderno y distintivo.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw195fabc9/product-pictures/5f0c9cb0-604a-476e-8ba7-563133b91d5c_T137-407-11-351-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374073305101",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Grendizer 50th Anniversary",
        price: 1760,
        description: "Celebrando 50 años de un icono. Acabado PVD negro y detalles exclusivos.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwe931905e/product-pictures/2672bb1a-58ec-4ca0-aa4f-1b299fc802b2_T137-407-33-051-01_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374073304100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Blue PVD",
        price: 1520,
        description: "Todo en azul. Caja y brazalete con revestimiento PVD para un look impactante.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8ddb8341/product-pictures/daab9283-862f-4732-abd0-fa955e11d7bd_T137-407-33-041-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374073302100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Gold PVD",
        price: 1520,
        description: "El clásico dorado, ahora con movimiento automático. Lujo y precisión.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwee0090e5/product-pictures/5729d09d-baed-40b3-8e7f-4643b9cd1a43_T137-407-33-021-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071104100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Blue",
        price: 1360,
        description: "El superventas. Dial azul texturizado y brazalete integrado.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw27713dcb/product-pictures/63f42767-a9f5-4cdd-b952-8ea7b82b7e0c_T137-407-11-041-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071105100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Black",
        price: 1360,
        description: "Elegancia discreta. Dial negro profundo para cualquier ocasión.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb4fc1f36/product-pictures/7cb35e0f-1746-4892-a054-b32700bdbe10_T137-407-11-051-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1379079720100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Carbon 40.5mm",
        price: 1840,
        description: "Vanguardia tecnológica. Caja y dial de carbono forjado.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw627b1daa/product-pictures/ee3811c6-6d9e-44e1-889f-b0e6182bbc36_T137-907-97-201-00_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80 (Silicio)",
            "Tamaño de Caja": "40.5mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Carbono Forjado"
        }
    },
    {
        id: "tissot-T1372071135100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 35mm Ice Blue",
        price: 1273,
        description: "El color del momento, ahora en 35mm. Perfecto para muñecas más delgadas.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwdaec7f3c/product-pictures/842ff1da-5eac-4e1d-9222-1f828ab4835b_T137-207-11-351-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1372073302100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 35mm Gold PVD",
        price: 1520,
        description: "Todo el estilo del PRX Gold, en un tamaño clásico de 35mm.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwa499c9bb/product-pictures/c016ca2d-0369-4a45-969d-24c114b8d03d_T137-207-33-021-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374073305100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Damian Lillard Edition",
        price: 1520,
        description: "Diseñado con la estrella de la NBA. Estilo audaz y detalles únicos.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwf4dd9736/product-pictures/a56e8842-e93e-482a-b6bb-fb5dc223c496_T137-407-33-051-00_Shadow-png.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071109100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Green",
        price: 1360,
        description: "Dial verde profundo. Una elección elegante y contemporánea.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw38ffa161/product-pictures/6c313b76-3e79-466d-83a5-042e47b276d5_T137-407-11-091-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1372071105100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 35mm Black",
        price: 1273,
        description: "El clásico negro en 35mm. Atemporal y versátil.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw54e98d10/product-pictures/c84a100e-6e30-4244-aec6-44a8a1d1d333_T137-207-11-051-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071109101",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Mint",
        price: 1360,
        description: "Un toque de frescura con el dial verde menta.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwa2ce0f04/product-pictures/d102160b-bf40-4582-a545-910f29536ad9_T137-407-11-091-01_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1372071109100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 35mm Green",
        price: 1273,
        description: "Verde vibrante en formato compacto.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw5ab05c59/product-pictures/a2c83d75-5920-46ae-9357-748382f43010_T137-207-11-091-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374071105101",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Black (Detail)",
        price: 1360,
        description: "Variación con detalles sutiles en el dial negro.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwa50b0112/product-pictures/dfde7d22-afc8-42e1-b263-6087f1cd022d_T137-407-11-051-01_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374072103100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Powermatic 80 Silver/Rose",
        price: 1360,
        description: "Acero y detalles en oro rosa. Una combinación sofisticada.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw993ed041/product-pictures/4d67a811-f821-4e4f-9413-0c141790493f_T137-407-21-031-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "40mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374271101100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Chronograph Panda",
        price: 3440,
        description: "Cronógrafo automático con dial tipo panda. Estilo deportivo retro.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw6e9f0330/product-pictures/ee366fd4-7d3b-4cc8-8d59-07b9892ab1a5_T137-427-11-011-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Valjoux A05.H31",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374271109100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Chronograph Green (Pre-order)",
        price: 3440,
        description: "Cronógrafo automático con dial verde profundo. Potencia y precisión.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw04fe3403/product-pictures/1ef9b8d4-d9af-4a09-9b89-c1a4a62da84e_T137-427-11-091-00_Shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Valjoux A05.H31",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1374271104100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX Chronograph Blue",
        price: 3440,
        description: "El cronógrafo PRX en su versión azul clásica.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb94346ee/product-pictures/d7a9cc11-d2f8-49e6-b9f0-a4918e18082e_T137-427-11-041-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Valjoux A05.H31",
            "Tamaño de Caja": "42mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-T1372071104100",
        brand: "Tissot", availability: "pre-order",
        model: "PRX 35mm Blue",
        price: 1273,
        description: "El favorito de todos en 35mm.",
        image: "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw288f0509/product-pictures/c40959ea-db66-4297-b91b-63cb686c1cf5_T137-207-11-041-00_shadow.png?sm=fit&sw=800&sh=800",
        details: {
            "Movimiento": "Automático Powermatic 80",
            "Tamaño de Caja": "35mm",
            "Resistencia al Agua": "100m",
            "Cristal": "Zafiro",
            "Material de la Caja": "Acero Inoxidable 316L"
        }
    },
    {
        id: "tissot-prx-collection-end", // Marker to ensure proper comma handling
        brand: "Tissot", availability: "pre-order",
        model: "PRX Collection End Marker",
        price: 0,
        description: "Hidden marker",
        image: "",
        details: { "Movimiento": "", "Tamaño de Caja": "", "Resistencia al Agua": "", "Cristal": "" }
    },
];