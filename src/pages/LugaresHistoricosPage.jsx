import { useState } from 'react';
import PageHero from './PageHero.jsx';
import { MapPin, Calendar, Clock, Compass, Landmark, Camera, ExternalLink, ShieldCheck } from 'lucide-react';

export default function LugaresHistoricosPage({ onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const places = [
    {
      id: 'santuario-rosario',
      name: 'Santuario Nuestra Señora del Rosario',
      category: 'Templos y Fe',
      year: '1928 - 1939',
      image: '/santuario-luque-opt.jpg',
      location: 'Avda. Corrales esq. Rosario (frente a la Plaza Central)',
      schedule: 'Abierto todos los días de 06:30 a 19:30 hs',
      summary:
        'El templo principal y emblema espiritual de Luque. Construido sobre las bases del oratorio del siglo XVIII, conserva el majestuoso pórtico de madera tallada a mano de la época colonial y torres gemelas con los colores azul y oro.',
      highlights: [
        'Pórtico colonial original de madera tallada',
        'Altar mayor de arte sacro franciscano',
        'Campanario centenario y reloj de época',
        'Sede central de las Fiestas Patronales cada 7 de octubre',
      ],
    },
    {
      id: 'estacion-tren',
      name: 'Antigua Estación de Tren Carlos Antonio López',
      category: 'Patrimonio Ferroviario',
      year: 'Inaugurada en 1861',
      image: '/santuario-luque.jpg',
      location: 'Calle Pedro Juan Caballero y Valois Rivarola (Barrio Bella Vista)',
      schedule: 'Visitas guiadas y paseos: Lun a Sáb de 08:00 a 17:00 hs',
      summary:
        'Monumento histórico nacional y una de las primeras estaciones de ferrocarril de América del Sur. Conectó a Luque con Asunción en 1861, marcando el apogeo económico de la nación con locomotoras a vapor y andenes de piedra labrada.',
      highlights: [
        'Andenes originales de piedra labrada y mampostería histórica',
        'Boletería de época y sala de telégrafo restaurada',
        'Vía férrea histórica y locomotoras preservadas',
        'Punto de inicio del circuito peatonal y ciclovía municipal',
      ],
    },
    {
      id: 'peatonal-historica',
      name: 'Peatonal Histórica y Casonas de la Guerra Grande',
      category: 'Arquitectura Civil',
      year: 'Siglo XIX (1860-1870)',
      image: '/arpa-luque.jpg',
      location: 'Calle Mariscal López e/ Rosario y Cerro Corá',
      schedule: 'Acceso peatonal libre las 24 horas',
      summary:
        'Calle adoquinada que preserva la arquitectura tradicional paraguaya: anchas paredes de adobe, techos de teja y tacuara, y amplias galerías coloniales continuas. Aquí residieron el vicepresidente Sánchez y ministros durante la capitalidad de 1868.',
      highlights: [
        'Casonas coloniales con galerías peatonales continuas',
        'Sede histórica de ministerios durante la capital de 1868',
        'Talleres artesanales tradicionales en su recorrido',
        'Iluminación colonial nocturna y paseos culturales',
      ],
    },
    {
      id: 'cerro-koi',
      name: 'Monumento Natural Cerro Kõi (Areniscas Columnares)',
      category: 'Naturaleza y Geología',
      year: 'Área Protegida por Ley 179/93',
      image: '/conmebol-luque.jpg',
      location: 'Camino Luque - Areguá (a 5 km del centro de Luque)',
      schedule: 'Martes a domingos de 08:00 a 17:00 hs (Guardaparques)',
      summary:
        'Rareza geológica de fama mundial declarada Patrimonio Natural. Presenta formaciones de areniscas columnares octogonales semejantes a lápices gigantes verticales, un fenómeno volcánico y sedimentario único en Sudamérica (solo repetido en Sudáfrica).',
      highlights: [
        'Areniscas columnares geométricas octogonales únicas',
        'Mirador panorámico al lago Ypacaraí y serranías',
        'Senderos ecológicos interpretativos con guardaparques',
        'Área silvestre protegida libre de contaminación',
      ],
    },
    {
      id: 'mausoleo-aquino',
      name: 'Mausoleo y Plaza General Elizardo Aquino',
      category: 'Monumentos Cívicos',
      year: 'Monumento Histórico Cívico',
      image: '/farias.jpg',
      location: 'Microcentro Cívico de Luque (e/ Gral. Aquino y Mcal. López)',
      schedule: 'Abierto al público permanentemente',
      summary:
        'Panteón cívico de honor donde descansan los restos del célebre héroe luqueño de la Guerra de la Triple Alianza y genio militar de la fundición de Ybycuí, el Gral. Elizardo Aquino. Espacio arbolado con pérgolas y monolitos recordatorios.',
      highlights: [
        'Mausoleo con la urna cívica del Gral. Elizardo Aquino',
        'Lapachos centenarios y jardines cívicos ornamentales',
        'Escenario de actos oficiales de conmemoración patriótica',
        'Bancos coloniales y paseo peatonal',
      ],
    },
    {
      id: 'centro-cultural-balderrama',
      name: 'Centro Cultural Municipal y Escuela de Arte',
      category: 'Arquitectura Civil',
      year: 'Sede Cultural Municipal',
      image: '/arpa-luque.jpg',
      location: 'Calle Gral. Genes e/ Balderrama y San Martín',
      schedule: 'Lunes a viernes de 07:00 a 19:00 hs',
      summary:
        'Espacio dedicado a la enseñanza y difusión de la música popular, el arpa paraguaya, la orfebrería y la danza folclórica. Alberga exposiciones temporales de plástica luqueña y conciertos de cámara.',
      highlights: [
        'Aulas de formación de luthería y arpa paraguaya',
        'Auditorio para conciertos, recitales y teatro',
        'Muestras permanentes de filigrana y artesanías nativas',
        'Talleres municipales abiertos a toda la juventud',
      ],
    },
  ];

  const categories = ['Todos', 'Templos y Fe', 'Patrimonio Ferroviario', 'Arquitectura Civil', 'Naturaleza y Geología', 'Monumentos Cívicos'];

  const filteredPlaces = places.filter((p) => {
    if (selectedCategory === 'Todos') return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="CIRCUITO PATRIMONIAL Y TURÍSTICO"
        title="Lugares y Edificios Históricos"
        subtitle="Recorré los tesoros arquitectónicos de Luque: templos centenarios, la primera estación ferroviaria del país, casonas de la Guerra Grande y el milagro geológico del Cerro Kõi."
        category="Ciudad"
        badge="Patrimonio Protegido"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Barra de Filtros */}
          <div className="category-filters-container">
            <span className="filter-label">Filtrar por categoría:</span>
            <div className="category-filters" role="tablist">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const count = cat === 'Todos' ? places.length : places.filter((p) => p.category === cat).length;
                return (
                  <button
                    key={cat}
                    className={`cat-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
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

          {/* Grilla de Lugares Históricos */}
          <div className="places-cards-grid">
            {filteredPlaces.map((place) => (
              <article className="place-detail-card" key={place.id}>
                <div className="place-image-wrap">
                  <img src={place.image} alt={place.name} loading="lazy" width="600" height="380" />
                  <span className="place-category-tag">{place.category}</span>
                  <span className="place-year-pill">{place.year}</span>
                </div>

                <div className="place-content-body">
                  <h3>{place.name}</h3>

                  <div className="place-meta-item">
                    <MapPin size={15} />
                    <span>{place.location}</span>
                  </div>

                  <div className="place-meta-item">
                    <Clock size={15} />
                    <span>{place.schedule}</span>
                  </div>

                  <p className="place-summary">{place.summary}</p>

                  <div className="place-highlights-box">
                    <strong>Puntos destacados del sitio:</strong>
                    <ul>
                      {place.highlights.map((h, i) => (
                        <li key={i}>
                          <ShieldCheck size={14} className="hl-check" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Recuadro de Recomendaciones al Visitante */}
          <div className="tourism-tips-banner">
            <div className="tourism-tips-icon">
              <Compass size={28} />
            </div>
            <div>
              <h3>Recomendaciones para el Circuito Histórico Luqueño</h3>
              <p>
                El centro histórico de Luque cuenta con señalética peatonal informativa en cada monumento.
                Se sugiere iniciar el recorrido en la Antigua Estación del Tren y continuar a pie por la Peatonal Histórica hacia el Santuario Nuestra Señora del Rosario.
                Para visitas guiadas a colegios e instituciones, contactar con la Secretaría de Cultura y Turismo municipal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
