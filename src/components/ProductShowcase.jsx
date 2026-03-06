import './ProductShowcase.css'

// ─── Sample Data ─────────────────────────────────────────────────────────────
//
// Replace `lifestyleImage` and `materialImage` with your actual imported assets.
// Example:
//   import img1 from '../assets/imagem1.jpg'
//   import swatch1 from '../assets/toco.jpg'
//
// Then set:  lifestyleImage: img1,  materialImage: swatch1

export const showcaseData = [
  {
    id: 1,
    lifestyleImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85',
    lifestyleImageAlt: 'Sala contemporânea com piso Tauari Natural — Linha Estesia Indusparquet',
    materialImage: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&q=80',
    materialImageAlt: 'Amostra de material: Tauari Natural',
    specs: [
      { label: 'Madeira',  value: 'Tauari'                  },
      { label: 'Brilho',   value: '20'                       },
      { label: 'Cód.',     value: '8540'                     },
      { label: 'Classe',   value: 'AC4'                      },
      { label: 'Uso',      value: 'Residencial / Comercial'  },
    ],
    dimensions: [
      { label: 'Espessura',   value: '12,5 mm'        },
      { label: 'Largura',     value: '131 mm'          },
      { label: 'Comprimento', value: '305–2134 mm'     },
    ],
  },
  {
    id: 2,
    lifestyleImage: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85',
    lifestyleImageAlt: 'Escritório moderno com piso Jatobá Claro — Linha Estesia Indusparquet',
    materialImage: 'https://images.unsplash.com/photo-1478479405421-ce83c92fb3ba?w=400&q=80',
    materialImageAlt: 'Amostra de material: Jatobá Claro',
    specs: [
      { label: 'Madeira',  value: 'Jatobá'            },
      { label: 'Brilho',   value: '30'                 },
      { label: 'Cód.',     value: '8541'               },
      { label: 'Classe',   value: 'AC5'                },
      { label: 'Uso',      value: 'Comercial Intenso'  },
    ],
    dimensions: [
      { label: 'Espessura',   value: '14,0 mm'        },
      { label: 'Largura',     value: '148 mm'          },
      { label: 'Comprimento', value: '400–2134 mm'     },
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
      className={`showcase-row${isReversed ? ' showcase-row--reversed' : ''}`}
      style={{ background: bg }}
      aria-label={`${product.lifestyleImageAlt}`}
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
