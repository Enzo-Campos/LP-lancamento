import './ProductShowcase.css'

// ─── Capas ────────────────────────────────────────────────────────────────────
import capaBriTecaTeak   from '../assets/capas/BRI TECA TEAK.jpg'
import capaMuxaTropi     from '../assets/capas/MUXA TROPI.jpg'
import capaTacoVert      from '../assets/capas/TACO VERT.jpg'
import capaTacoArco      from '../assets/capas/TACO ARCO.jpg'
import capaCobLume       from '../assets/capas/COB LUME.jpg'
import capaInfinito      from '../assets/capas/INFINITO.jpg'
import capaElTauriClay   from '../assets/capas/EL TAURI CLAY.jpg'
import capaElTauriNoz    from '../assets/capas/EL TAURI NOZ.jpg'
import capaMulMirindiba  from '../assets/capas/MUL MIRINDIBA.jpg'
import capaDeckTeca      from '../assets/capas/DECK TECA.jpg'
import capaSucClear      from '../assets/capas/SUC CLEAR.jpg'
import capaTauClear      from '../assets/capas/TAU CLEAR.jpg'
import capaTauAspen      from '../assets/capas/TAU ASPEN.jpg'
import capaTauMatte      from '../assets/capas/TAU MATTE.jpg'
import capaCarBianco     from '../assets/capas/CAR BIANCO.jpg'

// ─── Miniaturas ───────────────────────────────────────────────────────────────
import minBriTecaTeak    from '../assets/miniaturas/BRI TECAA TEAK.jpg'
import minMuxTropi       from '../assets/miniaturas/MIN MUX TROPI.jpg'
import minCob            from '../assets/miniaturas/MIN COB.jpg'
import minInfinito       from '../assets/miniaturas/MIN INFINITO.jpg'
import minTauClay        from '../assets/miniaturas/MIN TAU CLAY.jpg'
import minElTauNoz       from '../assets/miniaturas/EL TAU NOZ.jpg'
import minMulMirindiba   from '../assets/miniaturas/MUL MIRINDIBA.jpg'
import minDeckTeca       from '../assets/miniaturas/MIN DECK TECA.jpg'
import minSucClear       from '../assets/miniaturas/SUC CLEAR.jpg'
import minTauClear       from '../assets/miniaturas/MIN TAU CLEAR.jpg'
import minTauAspen       from '../assets/miniaturas/MIN TAU ASPEN.jpg'
import minTauMatte       from '../assets/miniaturas/MIN TAU MATTE.jpg'
import minCarvBianco     from '../assets/miniaturas/CARV BIANCO.jpg'

export const showcaseData = [
  // 1 — Elegance Tauari Clay
  {
    id: 11,
    anchorId: 'assoalho',
    lifestyleImage: capaElTauriClay,
    materialImage:  minTauClay,
    specs: [
      { label: 'Madeira',  value: 'Tauari'            },
      { label: 'Brilho',   value: '20'                 },
      { label: 'Cód.',     value: '8540'               },
    ],
    dimensions: [
      { label: 'Espessura',   value: '12.5 mm'        },
      { label: 'Largura',     value: '131 mm'          },
      { label: 'Comprimento', value: '305 - 2.134 mm'  },
    ],
  },
  // 2 — Elegance Tauari Noz
  {
    id: 10,
    lifestyleImage: capaElTauriNoz,
    materialImage: minElTauNoz,
    specs: [
      { label: 'Madeira',  value: 'Tauari'            },
      { label: 'Brilho',   value: '20'                 },
      { label: 'Cód.',     value: '8541'               },
    ],
    dimensions: [
      { label: 'Espessura',   value: '12.5 mm'        },
      { label: 'Largura',     value: '131 mm'          },
      { label: 'Comprimento', value: '305 - 2.134 mm'  },
    ],
  },
  // 3 — Multistrato Mirindiba
  {
    id: 9,
    lifestyleImage: capaMulMirindiba,
    materialImage: minMulMirindiba,
    specs: [
      { label: 'Madeira',  value: 'Mirindiba'          },
      { label: 'Brilho',   value: '20'                 },
      { label: 'Cód.',     value: '17014'              },
    ],
    dimensions: [
      { label: 'Espessura',   value: '18 mm'           },
      { label: 'Largura',     value: '140 mm'           },
      { label: 'Comprimento', value: '280 - 2.235 mm'  },
    ],
  },
  // 4 — Deck Teca
  {
    id: 8,
    anchorId: 'deck',
    lifestyleImage: capaDeckTeca,
    materialImage: minDeckTeca,
    specs: [
      { label: 'Madeira',  value: 'Teca'               },
      { label: 'Cód.',     value: '16451'              },
    ],
    dimensions: [
      { label: 'Espessura',   value: '19 mm'           },
      { label: 'Largura',     value: '45 mm'           },
      { label: 'Comprimento', value: '700 - 2.200 mm - FF AL LISO (Bisôte)' },
    ],
  },
  // 5 — Sucupira Clear
  {
    id: 7,
    anchorId: 'masterteto',
    lifestyleImage: capaSucClear,
    materialImage: minSucClear,
    specs: [
      { label: 'Madeira',  value: 'Sucupira'           },
      { label: 'Brilho',   value: '10'                 },
      { label: 'Cód.',     value: '8542'               },
    ],
    dimensions: [
      { label: 'Espessura',   value: '10 mm'           },
      { label: 'Largura',     value: '290 mm'           },
      { label: 'Comprimento', value: '600 - 2.500 mm'  },
    ],
  },
  // 6 — Tauari Clear
  {
    id: 6,
    lifestyleImage: capaTauClear,
    materialImage: minTauClear,
    specs: [
      { label: 'Madeira',  value: 'Tauari'             },
      { label: 'Brilho',   value: '10'                 },
      { label: 'Cód.',     value: '8543'               },
    ],
    dimensions: [
      { label: 'Espessura',   value: '10 mm'           },
      { label: 'Largura',     value: '290 mm'           },
      { label: 'Comprimento', value: '600 - 2.500 mm'  },
    ],
  },
  // 7 — Tauari Aspen
  {
    id: 5,
    lifestyleImage: capaTauAspen,
    materialImage: minTauAspen,
    specs: [
      { label: 'Madeira',  value: 'Tauari'             },
      { label: 'Brilho',   value: '10'                 },
      { label: 'Cód.',     value: '8544'               },
    ],
    dimensions: [
      { label: 'Espessura',   value: '10 mm'           },
      { label: 'Largura',     value: '290 mm'           },
      { label: 'Comprimento', value: '600 - 2.500 mm'  },
    ],
  },
  // 8 — Tauari Matte
  {
    id: 4,
    lifestyleImage: capaTauMatte,
    materialImage: minTauMatte,
    specs: [
      { label: 'Madeira',  value: 'Tauari'             },
      { label: 'Brilho',   value: '10'                 },
      { label: 'Cód.',     value: '8545'               },
    ],
    dimensions: [
      { label: 'Espessura',   value: '10 mm'           },
      { label: 'Largura',     value: '290 mm'           },
      { label: 'Comprimento', value: '600 - 2.500 mm'  },
    ],
  },
  // 9 — Carvalho Bianco
  {
    id: 3,
    lifestyleImage: capaCarBianco,
    materialImage: minCarvBianco,
    specs: [
      { label: 'Madeira',  value: 'Carvalho Bianco ou Champanhe' },
      { label: 'Brilho',   value: '10'                 },
      { label: 'Cód.',     value: '8546 / 8547'        },
    ],
    dimensions: [
      { label: 'Espessura',   value: '10 mm'           },
      { label: 'Largura',     value: '290 mm'           },
      { label: 'Comprimento', value: '600 - 2.500 mm'  },
    ],
  },
   // 12 — Taco Vértice
  {
    id: 15,
    anchorId: 'linha-forma',
    lifestyleImage: capaTacoVert,
    materialImage:  minTauClay,
    specs: [
      { label: 'Madeira',  value: 'Peroba Mica ou Tauari' },
    ],
    dimensions: [
      { label: 'Espessura',   value: '19 mm'           },
      { label: 'Largura',     value: '100 mm'           },
      { label: 'Comprimento', value: '400 mm'          },
    ],
  },
  // 13 — Taco Arco
  {
    id: 14,
    lifestyleImage: capaTacoArco,
    materialImage: minTauClay,
    specs: [
      { label: 'Madeira',  value: 'Peroba Mica ou Tauari' },
    ],
    dimensions: [
      { label: 'Espessura',   value: '10 mm'           },
      { label: 'Largura',     value: '100 mm'           },
      { label: 'Comprimento', value: '370 mm'          },
    ],
  },
  // 14 — Cobogó Lume
  {
    id: 13,
    lifestyleImage: capaCobLume,
    materialImage: minCob,
    specs: [
      { label: 'Madeira',  value: 'Cumaru ou Tauari'   },
      { label: 'Brilho',   value: '20'                 },
    ],
    dimensions: [
      { label: 'Espessura',   value: '70 mm'           },
      { label: 'Largura',     value: '200 mm'           },
      { label: 'Comprimento', value: '200 mm'          },
    ],
  },
  // 15 — Revestimento Infinito
  {
    id: 12,
    anchorId: 'revestimento',
    lifestyleImage: capaInfinito,
    materialImage: minInfinito,
    specs: [
      { label: 'Madeira',  value: 'Tauari'             },
      { label: 'Tamanho',  value: 'Sob medida'         },
    ],
    dimensions: [
    ],
  },
  // 10 — Brise Pronto Teca Teak
  {
    id: 1,
    anchorId: 'brise',
    lifestyleImage: capaBriTecaTeak,
    materialImage: minBriTecaTeak,
    specs: [
      { label: 'Madeira',  value: 'Teca'               },
      { label: 'Brilho',   value: '3'                  },
      { label: 'Cód.',     value: '16681'              },
    ],
    dimensions: [
      { label: 'Espessura',   value: '19 mm'           },
      { label: 'Largura',     value: '37 mm'           },
      { label: 'Comprimento', value: '500 – 2.200 mm'  },
    ],
  },
   // 11 — Muxarabi Tropicalia
  {
    id: 2,
    anchorId: 'muxarabi',
    lifestyleImage: capaMuxaTropi,
    materialImage: minMuxTropi,
    specs: [
      { label: 'Madeira',  value: 'Peroba Mica ou Teca' },
      { label: 'Brilho',   value: 'Óleo'               },
      { label: 'Formato',  value: 'Quadrado'           },
    ],
    dimensions: [
      { label: 'Espessura',   value: '50 - 110 mm'     },
      { label: 'Largura',     value: '1.370 mm'        },
      { label: 'Comprimento', value: '1.370 mm'        },
    ],
  },
]

// ─── SpecPanel ────────────────────────────────────────────────────────────────

function SpecPanel({ product }) {
  return (
    <div className="showcase-panel">

      {/* Material swatch */}
      <div className="showcase-swatch">
        <img
          src={product.materialImage}
          alt={product.materialImageAlt}
        />
      </div>

      {/* Section label */}
      <p className="showcase-label">Especificações:</p>

      {/* Specs list */}
      <ul className="showcase-specs" role="list">
        {product.specs.map((spec, i) => (
          <li key={i} className="showcase-spec-row">
            <span className="showcase-spec-key">{spec.label}</span>
            <span className="showcase-spec-val">{spec.value}</span>
          </li>
        ))}
      </ul>

      {/* Dimensions */}
      <div className="showcase-dims" role="list" aria-label="Dimensões do produto">
        {product.dimensions.map((dim, i) => (
          <div key={i} className="showcase-dim-item" role="listitem">
            <span className="showcase-dim-label">{dim.label}</span>
            <div className="showcase-dim-value">
              <span>{dim.value}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

// ─── ProductRow ───────────────────────────────────────────────────────────────

function ProductRow({ product, index }) {
  const isReversed = index % 2 !== 0
  const bg         = index % 2 === 0 ? '#ffffff' : '#f7f6f4'

  return (
    <section
      id={product.anchorId}
      className={`showcase-row${isReversed ? ' showcase-row--reversed' : ''}`}
      style={{ background: bg }}
    >
      {/* Image */}
      <div className="showcase-image-col">
        <img
          src={product.lifestyleImage}
          alt={product.lifestyleImageAlt}
        />
      </div>

      {/* Specification panel */}
      <div className="showcase-panel-col">
        <SpecPanel product={product} />
      </div>
    </section>
  )
}

// ─── ProductShowcase (default export) ────────────────────────────────────────

export default function ProductShowcase({ products = showcaseData }) {
  return (
    <div className="showcase">
      {products.map((product, index) => (
        <ProductRow key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
