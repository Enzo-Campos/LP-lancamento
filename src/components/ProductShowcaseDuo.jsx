import './ProductShowcase.css'
import './ProductShowcaseDuo.css'

// ─── Imagens ──────────────────────────────────────────────────────────────────
import imgLambri      from '../assets/capas/LAMBRI.png'
import imgLambri1     from '../assets/capas/LAMBRI1.png'
import imgMuxarabi    from '../assets/capas/MUXARABI.png'
import imgMuxarabiTro from '../assets/capas/MUXARABI TRO.png'

// ─── Dados ────────────────────────────────────────────────────────────────────

export const duoData = [
  {
    id: 1,
    materialImage: imgLambri,
    materialImageAlt: 'Lambri',
    specs: [
      { label: 'Madeira', value: 'Teca'  },
      { label: 'Brilho',  value: '20'      },
      { label: 'Cód.',    value: '17178'       },
    ],
    dimensions: [
      { label: 'Espessura',   value: '8 mm'  },
      { label: 'Largura',     value: '43 mm'  },
      { label: 'Comprimento', value: '500 - 2.200 mm BTS5'  },
    ],
  },
  {
    id: 2,
    materialImage: imgLambri1,
    materialImageAlt: 'Lambri 1',
    specs: [
      { label: 'Madeira', value: 'Teca'  },
      { label: 'Brilho',  value: '20'      },
      { label: 'Cód.',    value: '17177'       },
    ],
    dimensions: [
      { label: 'Espessura',   value: '8 mm'  },
      { label: 'Largura',     value: '43 mm'  },
      { label: 'Comprimento', value: '500 - 2.200 mm Bisotê'  },
    ],
  },
  {
    id: 3,
    materialImage: imgMuxarabi,
    materialImageAlt: 'Muxarabi',
    specs: [
      { label: 'Madeira', value: 'Teca'  },
      { label: 'Brilho',  value: '5'      },
      { label: 'Cód.',    value: '17208'       },
    ],
    dimensions: [
      { label: 'Espessura',   value: '17 mm'  },
      { label: 'Largura',     value: '595 mm'  },
      { label: 'Comprimento', value: '595 mm (vão 40x40 mm)'  },
    ],
  },
  {
    id: 4,
    materialImage: imgMuxarabiTro,
    materialImageAlt: 'Muxarabi Tro',
    specs: [
      { label: 'Madeira', value: 'Peroba Mica ou Teca'  },
      { label: 'Brilho',  value: 'Óleo'      },
      { label: 'Formato',    value: 'Retangular'       },
    ],
    dimensions: [
      { label: 'Espessura',   value: '55 mm'  },
      { label: 'Largura',     value: '440 mm'  },
      { label: 'Comprimento', value: '1300 mm'  },
    ],
  },
]

// ─── SpecPanel ────────────────────────────────────────────────────────────────

function SpecPanel({ product }) {
  return (
    <div className="showcase-panel">

      {/* Miniatura */}
      <div className="showcase-swatch">
        <img
          src={product.materialImage}
          alt={product.materialImageAlt}
        />
      </div>

      {/* Label */}
      <p className="showcase-label">Especificações:</p>

      {/* Lista de specs */}
      <ul className="showcase-specs" role="list">
        {product.specs.map((spec, i) => (
          <li key={i} className="showcase-spec-row">
            <span className="showcase-spec-key">{spec.label}</span>
            <span className="showcase-spec-val">{spec.value}</span>
          </li>
        ))}
      </ul>

      {/* Dimensões */}
      {product.dimensions.length > 0 && (
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
      )}

    </div>
  )
}

// ─── DuoRow — uma linha com dois painéis lado a lado ─────────────────────────

function DuoRow({ left, right, rowIndex }) {
  const bg = rowIndex % 2 === 0 ? '#ffffff' : '#f7f6f4'

  return (
    <section className="duo-row" style={{ background: bg }}>
      <div className="duo-col">
        <SpecPanel product={left} />
      </div>
      {right && (
        <div className="duo-col">
          <SpecPanel product={right} />
        </div>
      )}
    </section>
  )
}

// ─── ProductShowcaseDuo (default export) ─────────────────────────────────────

export default function ProductShowcaseDuo({ products = duoData }) {
  const pairs = []
  for (let i = 0; i < products.length; i += 2) {
    pairs.push([products[i], products[i + 1] ?? null])
  }

  return (
    <div className="showcase">
      {pairs.map(([left, right], rowIndex) => (
        <DuoRow
          key={left.id}
          left={left}
          right={right}
          rowIndex={rowIndex}
        />
      ))}
    </div>
  )
}
