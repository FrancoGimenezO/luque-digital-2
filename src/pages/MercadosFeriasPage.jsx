import { useState } from 'react';
import PageHero from './PageHero.jsx';
import { ShoppingBag, Utensils, Gem, MapPin, Clock, Tag, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function MercadosFeriasPage({ onBackToHome }) {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const markets = [
    {
      id: 'mercado-1',
      name: 'Mercado Municipal N° 1 (Mercado Central)',
      category: 'Mercados Municipales',
      tag: 'Abastecimiento y Comedor Popular',
      image: '/santuario-luque-opt.jpg',
      location: 'Calles Cerro Corá esq. Moisés Bertoni (Casco Urbano)',
      schedule: 'Lunes a Domingos de 04:00 a 16:00 hs',
      description:
        'El corazón comercial tradicional y gastronómico de la ciudad. Punto neurálgico de compras donde productores y puesteros ofrecen carnes seleccionadas, verduras y frutas frescas recién traídas del campo, especias y hierbas medicinales paraguayas (pohã ñana).',
      sections: [
        'Comedor Popular: Vori vori casero, sopa paraguaya, bife a caballo, marinera caliente y caldo de pescado',
        'Paseo de Yuyeras: Más de 50 variedades de hierbas medicinales y refrescantes para el tereré matutino',
        'Sector Frutihortícola: Hortalizas frescas de productores locales de Itapuamí, Tarumandy y Maramburé',
        'Sector Carnicería y Pescadería: Cortes inspeccionados diariamente por el departamento de Salubridad',
      ],
    },
    {
      id: 'mercado-2',
      name: 'Mercado Municipal N° 2',
      category: 'Mercados Municipales',
      tag: 'Comercio Minorista Barrial',
      image: '/conmebol-luque.jpg',
      location: 'Acceso Este de Luque (Avda. Humaitá y Capitán Bado)',
      schedule: 'Lunes a Sábados de 05:00 a 15:00 hs',
      description:
        'Mercado minorista complementario que abastece a los barrios de la zona este y norte. Ofrece gran variedad de productos secos, almacén, confección textil, calzados artesanales y artículos del hogar.',
      sections: [
        'Almacenes de granos, harinas de maíz de primera molienda y quesos paraguayos',
        'Puestos de zapatería artesanal y composturas',
        'Mercería y artículos tradicionales de campo',
      ],
    },
    {
      id: 'paseo-orfebres',
      name: 'Paseo de los Orfebres y Joyeros de Filigrana',
      category: 'Orfebrería y Artesanía',
      tag: 'Patrimonio de Oro y Plata',
      image: '/arpa-luque.jpg',
      location: 'Eje comercial calle Cerro Corá, Gral. Aquino y Peatonal Histórica',
      schedule: 'Lunes a Sábados de 08:00 a 18:30 hs',
      description:
        'El epicentro de la orfebrería paraguaya. Más de 60 joyerías y talleres familiares donde se pueden adquirir directamente de las manos de los artesanos pendientes, collares, rosarios y prendedores modelados en finos hilos de oro de 18k y plata 925.',
      sections: [
        'Joyas en filigrana tradicionales con motivos de la flor del mburucuyá y jazmines',
        'Servicio de grabado personalizado y confección de alianzas nupciales a medida',
        'Certificado de autenticidad y pureza del metal expedido por la Asociación de Joyeros de Luque',
      ],
    },
    {
      id: 'talleres-luthiers',
      name: 'Talleres de Luthiers (Arpas y Guitarras de Concierto)',
      category: 'Orfebrería y Artesanía',
      tag: 'Instrumentos de Cuerda de Luque',
      image: '/arpa-luque.jpg',
      location: 'Casco Céntrico y Barrio Maka\'i',
      schedule: 'Lunes a Viernes de 08:00 a 17:00 hs (Atención con visita guiada)',
      description:
        'Visitas a los legendarios talleres donde maestros artesanos seleccionan maderas nobles (cedro paraguayo, jacarandá y pino armónico) para construir y afinar las célebres arpas de 36 cuerdas y guitarras de concierto exportadas a Japón, Europa y las Américas.',
      sections: [
        'Fabricación artesanal de arpas paraguayas de concierto',
        'Guitarras acústicas, electroacústicas y requintos profesionales',
        'Restauración y calibración de instrumentos de cuerda',
      ],
    },
    {
      id: 'feria-productores',
      name: 'Feria Semanal de Productores Agropecuarios de Luque',
      category: 'Ferias Agropecuarias',
      tag: 'Del Productor a tu Mesa',
      image: '/santuario-luque.jpg',
      location: 'Explanada Municipal (Avda. Guillermo Leoz)',
      schedule: 'Jueves y Viernes de 06:00 a 13:00 hs',
      description:
        'Feria directa organizada por la Dirección de Desarrollo Económico Municipal donde comités de pequeños productores familiares de las compañías rurales comercializan alimentos frescos sin intermediarios y a precios justos.',
      sections: [
        'Queso Paraguay fresco, manteca casera y huevos de granja',
        'Miel pura de abeja de cañaverales luqueños y dulces artesanales',
        'Verduras de hoja fresca, mandioca nueva y porotos',
        'Puestos de chipa asador recién salida y cocido con carbón',
      ],
    },
    {
      id: 'feria-emprendedores',
      name: 'Feria de Emprendedores y Artesanos en la Peatonal',
      category: 'Ferias y Emprendimientos',
      tag: 'Creaciones Locales y Diseño',
      image: '/farias.jpg',
      location: 'Peatonal Histórica (Calle Mariscal López)',
      schedule: 'Sábados, Domingos y Días Feriados de 16:00 a 22:00 hs',
      description:
        'Paseo cultural de fin de semana con stands de jóvenes emprendedores, artesanos de cuero repujado, talladores en madera, tejidos en ao po\'i y plantas ornamentales para el hogar.',
      sections: [
        'Artesanías en cuero, termos forrados y billeteras personalizadas',
        'Viveros de orquídeas y suculentas cultivadas en Luque',
        'Cafetería al aire libre y postres artesanales paraguayos',
      ],
    },
  ];

  const categories = ['Todos', 'Mercados Municipales', 'Orfebrería y Artesanía', 'Ferias Agropecuarias', 'Ferias y Emprendimientos'];

  const filteredMarkets = markets.filter((m) => {
    if (activeCategory === 'Todos') return true;
    return m.category === activeCategory;
  });

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="COMERCIO POPULAR, GASTRONOMÍA Y ARTESANÍA"
        title="Mercados y Ferias de Luque"
        subtitle="Conocé los sabores autóctonos del Mercado Municipal N° 1, el Paseo de los Joyeros de Filigrana, los talleres de luthiers y las ferias de productores agropecuarios."
        category="Ciudad"
        badge="Producción Local"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Banner de Identidad Gastronómica y Artesanal */}
          <div className="market-highlight-banner">
            <div className="market-highlight-icon">
              <ShoppingBag size={32} />
            </div>
            <div className="market-highlight-text">
              <span className="eyebrow-accent">PRODUCCIÓN Y TRADICIÓN LUQUEÑA</span>
              <h2>Sabores Tradicionales y Artesanías de Excelencia</h2>
              <p>
                Los mercados y ferias de Luque son el punto de encuentro vivo de nuestra gente. Desde el inconfundible aroma del vori vori
                y el caldo de pescado en el Mercado N° 1 hasta el brillo milimétrico de las joyas de filigrana forjadas por orfebres galardonados.
              </p>
            </div>
          </div>

          {/* Filtros por Categoría */}
          <div className="category-filters-container">
            <span className="filter-label">Filtrar por rubro:</span>
            <div className="category-filters" role="tablist">
              {categories.map((cat) => {
                const count = cat === 'Todos' ? markets.length : markets.filter((m) => m.category === cat).length;
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    className={`cat-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <span>{cat}</span>
                    <span className="cat-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grilla de Mercados y Ferias */}
          <div className="markets-cards-grid">
            {filteredMarkets.map((market) => (
              <article className="market-detail-card" key={market.id}>
                <div className="market-card-header-row">
                  <div className="market-title-wrap">
                    <span className="market-badge-pill">{market.tag}</span>
                    <h3>{market.name}</h3>
                    <span className="market-cat-name">{market.category}</span>
                  </div>
                </div>

                <div className="market-meta-box">
                  <div className="place-meta-item">
                    <MapPin size={15} />
                    <span>{market.location}</span>
                  </div>
                  <div className="place-meta-item">
                    <Clock size={15} />
                    <span>{market.schedule}</span>
                  </div>
                </div>

                <p className="market-desc">{market.description}</p>

                <div className="market-sections-box">
                  <strong>Pabellones y Secciones Principales:</strong>
                  <ul>
                    {market.sections.map((sec, i) => (
                      <li key={i}>
                        <ShieldCheck size={14} className="hl-check" />
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* Control de Calidad e Higiene Municipal */}
          <div className="hygiene-notice-card">
            <div className="hygiene-notice-icon">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3>Garantía de Salubridad e Inocuidad Alimentaria</h3>
              <p>
                La Dirección de Salubridad e Higiene de la Municipalidad de Luque realiza inspecciones diarias bromatológicas en los
                puestos del Mercado Municipal N° 1 y N° 2, verificando la cadena de frío, la potabilidad del agua y la manipulación segura de alimentos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
