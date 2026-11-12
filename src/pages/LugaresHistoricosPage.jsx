import { useState } from 'react';
import PageHero from './PageHero.jsx';
import {
  MapPin,
  Calendar,
  Clock,
  Compass,
  Landmark,
  Camera,
  ExternalLink,
  ShieldCheck,
  Map,
  Navigation,
  Sparkles,
  Train,
  Church,
  Award,
  ChevronDown,
  ChevronUp,
  Search,
} from 'lucide-react';

export default function LugaresHistoricosPage({ onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeMapId, setActiveMapId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const places = [
    {
      id: 'santuario-rosario',
      name: 'Santuario Virgen del Rosario',
      category: 'Templos y Fe',
      isOfficial: true,
      officialBadge: 'Monumento y Templo Histórico',
      year: '1750 (Capilla) · 1928 - 1939 (Templo Actual)',
      image: '/lugar-santuario.jpg',
      fallbackImage: '/historia-iglesia.jpg',
      location: 'Avda. Corrales esq. Rosario (frente a la Plaza Central de Luque)',
      schedule: 'Misas y visitas: Lunes a Domingo de 06:30 a 19:30 hs',
      googleMapsUrl: 'https://goo.gl/maps/xD41z2PeWaN2eb8N6',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14432.427298528251!2d-57.50890016555788!3d-25.266991672247233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf897855715d%3A0x645129eb85827454!2sSantuario%20Virgen%20del%20Rosario%2C%20Luque!5e0!3m2!1ses!2spy!4v1652834176976!5m2!1ses!2spy',
      paragraphs: [
        'Entre los años 1750 y 1755 se erigió una capilla bajo el nombre de Virgen de Rosario, a cargo del Convento de San Francisco. Ese fue el origen de la edificación actual que contaba con torres hechas en maderos y en 1839 fue sustituido por materiales cocidos.',
        'Ya en 1920 y con el nombramiento de un nuevo cura párroco, comenzaron las tratativas para construir un nuevo y colosal templo. No fue hasta 1928 donde recién se pudo comenzar la construcción de la iglesia que hoy conocemos.',
        'En 1932 la obra fue detenida por el conflicto de la Guerra del Chaco, y continuó en 1934, donde se consiguió que varios prisioneros de guerra trabajen en la demolición del viejo campanario de más de un siglo y la nave del templo.',
        'En la post-guerra, el cura párroco retoma las actividades espirituales para con el pueblo por lo que las obras avanzan muy lentamente.',
        'En 1939 finalmente se termina de construir. La puerta principal de este templo es la puerta original del antiguo.',
      ],
      highlights: [
        'Capilla original franciscana de 1750-1755 y posterior torre de materiales cocidos (1839)',
        'Construcción monumental iniciada en 1928 tras gestiones comunitarias del curato parroquial',
        'Participación de prisioneros de la Guerra del Chaco en la demolición del antiguo campanario',
        'Conserva intacta la majestuosa puerta principal de madera original del primitivo templo colonial',
        'Epicentro de las tradicionales Fiestas Patronales cada mes de octubre',
      ],
    },
    {
      id: 'estacion-tren',
      name: 'Estación del Tren',
      category: 'Patrimonio Ferroviario',
      isOfficial: true,
      officialBadge: 'Patrimonio Ferroviario Nacional',
      year: '1854 (Proyecto) · Inauguración 25 Dic 1861',
      image: '/lugar-estacion.jpg',
      fallbackImage: '/historia-ferrocarril.jpg',
      location: 'Calle Pedro Juan Caballero y Valois Rivarola (Barrio Bella Vista)',
      schedule: 'Circuito y paseo peatonal histórico: Acceso libre todos los días',
      googleMapsUrl: 'https://goo.gl/maps/mQcAj7A9pMYE6XGH6',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.7501649877352!2d-57.49154170135292!3d-25.26320961513301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da561f09ca0a9%3A0x2c70a08d51bdcce4!2sAntigua%20Estaci%C3%B3n%20del%20Tren!5e0!3m2!1ses!2spy!4v1652831846534!5m2!1ses!2spy',
      paragraphs: [
        'Los ferrocarriles en Paraguay se remontan a 1854, durante la presidencia de Carlos Antonio Lopez quien contrató a ingenieros de Gran Bretaña para su construcción.',
        'El 25 de diciembre de 1.861 fue inaugurado el Ferrocarril C.A. López en su trayecto desde Ybyray (hoy día conocida como Trinidad) hasta Luque,',
        'La estación del tren de Luque forma parte de la rica historia paraguaya. En sus inicios estuvo muy ligado al ferrocarril, así los pueblos se fueron formando a la vera del sistema de rieles que iba desde Asunción.',
      ],
      highlights: [
        'Impulso inicial bajo el gobierno de Don Carlos Antonio López en 1854 con ingeniería británica',
        'Inauguración del tramo Ybyray (Trinidad) a Luque en la Navidad de 1861',
        'Núcleo urbano fundacional que estructuró el crecimiento social y comercial de Luque',
        'Andenes históricos de mampostería, locomotoras a vapor y ciclovía recreativa municipal',
      ],
    },
    {
      id: 'mausoleo-aquino',
      name: 'Mausoleo del Gral. Aquino',
      category: 'Monumentos Cívicos',
      isOfficial: true,
      officialBadge: 'Monumento Cívico Nacional',
      year: 'Héroe Luqueño de la Epopeya Nacional (1835-1866)',
      image: '/lugar-mausoleo.jpg',
      fallbackImage: '/historia-plaza.jpg',
      location: 'Plaza General Elizardo Aquino (Microcentro Cívico de Luque)',
      schedule: 'Espacio público y panteón cívico: Abierto permanentemente',
      googleMapsUrl: 'https://goo.gl/maps/Qe1J32mar2BGcifM6',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.3439607375817!2d-57.4959007566448!3d-25.267401506716517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf8849a449b1%3A0x3a2f2fdcb61496e!2sMauseleo%20del%20Gral.%20Jos%C3%A9%20Elizardo%20Aquino!5e0!3m2!1ses!2spy!4v1652833335189!5m2!1ses!2spy',
      paragraphs: [
        'El Gral. Elizardo Aquino nació en Zárate Isla, compañía de Luque. Se destacó por su brillante inteligencia en la fundición de hierro de Ybycuí. Llegada la guerra grande creó el Cuerpo de Zapadores, trabajó en la fortificación de Humaitá, participó en la Campaña de Riachuelo y su fiereza le llevó a la gloria en Boquerón. Para perpetuar su ilustre memoria se construyó un mausoleo que representa su gloriosa muerte.',
        'Su estructura es una sucesión siete anillos, cada uno simboliza cada gesto glorioso que le toco vivir en aquella epopeya.',
      ],
      highlights: [
        'Ilustre hijo de Zárate Isla (Luque) y artífice de la fundición siderúrgica de Ybycuí',
        'Creador del heroico Cuerpo de Zapadores e ingeniero militar de las fortificaciones de Humaitá',
        'Comandante legendario con actuación inmortalizada en Riachuelo y la Batalla de Boquerón',
        'Estructura arquitectónica con 7 anillos concéntricos que simbolizan cada una de sus hazañas',
        'Panteón central para actos patrióticos y ofrendas de honor cívico',
      ],
    },
    {
      id: 'pesebre-sabate',
      name: 'Pesebre Hidráulico Sabaté',
      category: 'Tradición Popular',
      isOfficial: true,
      officialBadge: 'Tradición Popular e Interés Cultural',
      year: 'Iniciado en 1953 (Más de 70 Años de Vigencia)',
      image: '/lugar-sabate.jpg',
      fallbackImage: '/arpa-luque.jpg',
      location: 'Barrio Bella Vista, Luque (Residencia Familiar Sabaté)',
      schedule: 'Abre del 22 al 30 de diciembre de 18:30 a 22:00 hs (Entrada Libre y Gratuita)',
      googleMapsUrl: 'https://goo.gl/maps/2Evo9VXHbR2MWdmQ7',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.326759175042!2d-57.486010185168595!3d-25.25959118386731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da5c7a7d15073%3A0x72dec063a50da9d1!2sPesebre%20Hidraulico%20Familia%20Sabate!5e0!3m2!1ses!2spy!4v1652833564318!5m2!1ses!2spy',
      paragraphs: [
        'La tradición de la familia Sabaté se remonta a 1953, año donde Don Esteban Sabaté comenzó a prepararlo y armarlo, con la promesa de ir ampliándolo cada año. Es así que con cuidado y devoción cada año presentan para todos los visitantes este pesebre hidráulico en la casa familiar ubicada en el barrio Bella Vista, de Luque. Su hijo comparte no sólo su mismo nombre, sino el mismo espíritu para mantener esta tradición familiar.',
        'Más de cien piezas en las que algunas cobran vida gracias a unos sistemas hidráulicos que le dan movilidad con ayuda de la fuerza el agua, he ahí su nombre y fama.',
        'Abre sus puertas al público de 18:30 a 22:00 hs cada año del 22 al 30 de diciembre.',
      ],
      highlights: [
        'Tradición de más de 70 años fundada por Don Esteban Sabaté y continuada por su familia',
        'Más de 100 piezas autóctonas movilizadas por un ingenioso sistema hidráulico con fuerza del agua',
        'Representación vívida de oficios tradicionales paraguayos, chiperas, campesinos y el nacimiento',
        'Atracción de renombre nacional e internacional visitada anualmente por miles de familias',
        'Acceso libre y solidario que fortalece el espíritu navideño y la identidad comunitaria',
      ],
    },
    {
      id: 'peatonal-historica',
      name: 'Peatonal Histórica y Casonas de 1868',
      category: 'Arquitectura Civil',
      isOfficial: false,
      officialBadge: 'Circuito Histórico Urbano',
      year: 'Siglo XIX · Sede de Gobierno en 1868',
      image: '/historia-vivienda.jpg',
      fallbackImage: '/arpa-luque.jpg',
      location: 'Calle Mariscal López e/ Rosario y Cerro Corá',
      schedule: 'Acceso peatonal libre las 24 horas',
      googleMapsUrl: 'https://goo.gl/maps/Qe1J32mar2BGcifM6',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.3439607375817!2d-57.4959007566448!3d-25.267401506716517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf8849a449b1%3A0x3a2f2fdcb61496e!2sMauseleo%20del%20Gral.%20Jos%C3%A9%20Elizardo%20Aquino!5e0!3m2!1ses!2spy!4v1652833335189!5m2!1ses!2spy',
      paragraphs: [
        'Calle adoquinada que preserva la arquitectura tradicional paraguaya: anchas paredes de adobe, techos de teja y tacuara, y amplias galerías coloniales continuas. Aquí residieron el vicepresidente Sánchez y ministros durante la capitalidad de 1868.',
        'El trazado conecta la Plaza de Armas con los talleres de orfebres y artesanos de filigrana, configurando el corazón patrimonial luqueño.',
      ],
      highlights: [
        'Casonas coloniales con amplias galerías peatonales techadas',
        'Sede histórica de ministerios durante la capital de la República en 1868',
        'Talleres artesanales tradicionales de orfebrería en su recorrido',
        'Iluminación colonial nocturna y paseos culturales guiados',
      ],
    },
    {
      id: 'cerro-koi',
      name: 'Monumento Natural Cerro Kõi',
      category: 'Naturaleza y Geología',
      isOfficial: false,
      officialBadge: 'Patrimonio Natural Protegido',
      year: 'Área Protegida por Ley 179/93',
      image: '/conmebol-luque.jpg',
      fallbackImage: '/farias.jpg',
      location: 'Camino Luque - Areguá (a 5 km del centro de Luque)',
      schedule: 'Martes a domingos de 08:00 a 17:00 hs (Guardaparques)',
      googleMapsUrl: 'https://goo.gl/maps/xD41z2PeWaN2eb8N6',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14432.427298528251!2d-57.50890016555788!3d-25.266991672247233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf897855715d%3A0x645129eb85827454!2sSantuario%20Virgen%20del%20Rosario%2C%20Luque!5e0!3m2!1ses!2spy!4v1652834176976!5m2!1ses!2spy',
      paragraphs: [
        'Rareza geológica de fama mundial declarada Patrimonio Natural. Presenta formaciones de areniscas columnares octogonales semejantes a lápices gigantes verticales, un fenómeno volcánico y sedimentario único en Sudamérica (solo repetido en Sudáfrica).',
        'Cuenta con miradores ecológicos hacia la cuenca del lago Ypacaraí y un centro de interpretación ambiental con guardaparques certificados.',
      ],
      highlights: [
        'Areniscas columnares geométricas octogonales únicas en América del Sur',
        'Mirador panorámico al lago Ypacaraí y a la cordillera de los Altos',
        'Senderos ecológicos interpretativos y visitas educativas guiadas',
        'Monumento natural bajo régimen especial de conservación ambiental',
      ],
    },
  ];

  const categories = [
    'Todos',
    'Patrimonio Oficial',
    'Templos y Fe',
    'Patrimonio Ferroviario',
    'Monumentos Cívicos',
    'Tradición Popular',
    'Arquitectura Civil',
    'Naturaleza y Geología',
  ];

  const filteredPlaces = places.filter((p) => {
    // Filtro por categoría
    if (selectedCategory === 'Patrimonio Oficial' && !p.isOfficial) return false;
    if (selectedCategory !== 'Todos' && selectedCategory !== 'Patrimonio Oficial' && p.category !== selectedCategory) {
      return false;
    }

    // Filtro por búsqueda
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchLoc = p.location.toLowerCase().includes(q);
      const matchText = p.paragraphs.some((para) => para.toLowerCase().includes(q));
      return matchName || matchLoc || matchText;
    }

    return true;
  });

  const toggleMap = (id) => {
    setActiveMapId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="PATRIMONIO CULTURAL Y EDILICIO DE LA CIUDAD"
        title="Lugares y Edificios Históricos"
        subtitle="Conocé los monumentos, templos y sitios emblemáticos que forjaron la identidad luqueña: el Santuario Virgen del Rosario, la primera Estación del Tren, el Mausoleo del Gral. Elizardo Aquino y el tradicional Pesebre Hidráulico Sabaté."
        category="Ciudad"
        badge="Patrimonio Protegido"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Tarjeta de Introducción con Accesos Rápidos a los 4 Sitios Oficiales */}
          <div className="history-intro-card" style={{ marginBottom: '2.5rem' }}>
            <div className="history-intro-content" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span className="eyebrow-accent">CIRCUITO PATRIMONIAL OFICIAL DE SOMOS LUQUE</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Tesoros Vivos de la Identidad Luqueña</h2>
              <p style={{ maxWidth: '900px', marginBottom: '1.5rem', lineHeight: '1.65' }}>
                La Municipalidad de Luque custodia y promueve los espacios arquitectónicos y monumentales que narran
                nuestros más de 250 años de historia cívica, espiritual, ferroviaria y popular. Hacé clic en cualquiera
                de los sitios oficiales para explorar su reseña documentada, fotos de época y ubicación exacta en Google Maps.
              </p>

              {/* Botonera de Salto Rápido a los 4 Sitios Oficiales */}
              <div className="quick-jump-places-grid">
                <a href="#santuario-rosario" className="quick-jump-place-pill">
                  <Church size={16} />
                  <span>Santuario Virgen del Rosario</span>
                </a>
                <a href="#estacion-tren" className="quick-jump-place-pill">
                  <Train size={16} />
                  <span>Estación del Tren</span>
                </a>
                <a href="#mausoleo-aquino" className="quick-jump-place-pill">
                  <Award size={16} />
                  <span>Mausoleo del Gral. Aquino</span>
                </a>
                <a href="#pesebre-sabate" className="quick-jump-place-pill">
                  <Sparkles size={16} />
                  <span>Pesebre Hidráulico Sabaté</span>
                </a>
              </div>
            </div>
          </div>

          {/* Barra de Filtros y Búsqueda */}
          <div className="category-filters-container" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <span className="filter-label" style={{ fontWeight: 700, color: 'var(--primary-blue)' }}>
                  Filtrar sitios históricos:
                </span>
                <div className="search-box-wrap" style={{ position: 'relative', minWidth: '260px' }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
                  <input
                    type="text"
                    placeholder="Buscar monumento o lugar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.45rem 1rem 0.45rem 2.2rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid #c9d8f5',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div className="category-filters" role="tablist">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  let count = 0;
                  if (cat === 'Todos') count = places.length;
                  else if (cat === 'Patrimonio Oficial') count = places.filter((p) => p.isOfficial).length;
                  else count = places.filter((p) => p.category === cat).length;

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
          </div>

          {/* Grilla Detallada de Lugares Históricos */}
          <div className="places-cards-grid">
            {filteredPlaces.map((place) => {
              const isMapOpen = activeMapId === place.id;

              return (
                <article className="place-detail-card" key={place.id} id={place.id}>
                  {/* Imagen y badges de encabezado */}
                  <div className="place-image-wrap">
                    <img
                      src={place.image}
                      alt={place.name}
                      loading="lazy"
                      width="600"
                      height="380"
                      onError={(e) => {
                        if (place.fallbackImage && e.target.src !== place.fallbackImage) {
                          e.target.src = place.fallbackImage;
                        }
                      }}
                    />
                    <span className="place-category-tag">{place.category}</span>
                    {place.isOfficial && <span className="place-official-tag">OFICIAL</span>}
                    <span className="place-year-pill">{place.year}</span>
                  </div>

                  {/* Cuerpo de Contenido */}
                  <div className="place-content-body">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span className="place-badge-type">{place.officialBadge}</span>
                    </div>

                    <h3>{place.name}</h3>

                    {/* Metadatos: Ubicación y Horario */}
                    <div className="place-meta-item">
                      <MapPin size={16} />
                      <span>{place.location}</span>
                    </div>

                    <div className="place-meta-item">
                      <Clock size={16} />
                      <span>{place.schedule}</span>
                    </div>

                    {/* Párrafos Oficiales */}
                    <div className="place-prose">
                      {place.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {/* Recuadro de Puntos Destacados */}
                    <div className="place-highlights-box">
                      <strong>Hitos y Características Destacadas:</strong>
                      <ul>
                        {place.highlights.map((h, i) => (
                          <li key={i}>
                            <ShieldCheck size={14} className="hl-check" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botonera de Acciones: Cómo Llegar y Ver Mapa */}
                    <div className="place-actions-row">
                      <a
                        href={place.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-map-action"
                        title="Abrir ubicación en Google Maps"
                      >
                        <Navigation size={15} />
                        <span>CÓMO LLEGAR</span>
                        <ExternalLink size={13} style={{ marginLeft: '2px', opacity: 0.8 }} />
                      </a>

                      <button
                        type="button"
                        className={`btn-map-toggle ${isMapOpen ? 'active' : ''}`}
                        onClick={() => toggleMap(place.id)}
                        aria-expanded={isMapOpen}
                      >
                        <Map size={15} />
                        <span>{isMapOpen ? 'Ocultar Mapa' : 'Ver Mapa en Pantalla'}</span>
                        {isMapOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>

                    {/* Contenedor del Mapa Interactivo (si está desplegado) */}
                    {isMapOpen && (
                      <div className="place-map-wrapper">
                        <iframe
                          src={place.mapEmbedUrl}
                          className="place-map-iframe"
                          title={`Mapa de ${place.name}`}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div style={{ padding: '0.6rem 0.9rem', background: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#666' }}>
                          <span>Ubicación verificada en Google Maps · Luque, Paraguay</span>
                          <a
                            href={place.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--primary-blue)', fontWeight: 600, textDecoration: 'underline' }}
                          >
                            Abrir en pantalla completa ↗
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Banner de Recomendaciones al Visitante */}
          <div className="tourism-tips-banner">
            <div className="tourism-tips-icon">
              <Compass size={32} />
            </div>
            <div>
              <h3>Circuito Turístico y Patrimonial Municipal</h3>
              <p>
                Los cuatro monumentos históricos oficiales se encuentran convenientemente ubicados en el radio cívico
                y urbano de Luque. Recomendamos iniciar el recorrido en la <strong>Antigua Estación del Tren</strong>,
                visitar el <strong>Mausoleo del Gral. Elizardo Aquino</strong> en la plaza central, ingresar al majestuoso{' '}
                <strong>Santuario Virgen del Rosario</strong> para apreciar su puerta colonial original y, durante las
                festividades de fin de año (22 al 30 de diciembre), concurrir en familia al tradicional{' '}
                <strong>Pesebre Hidráulico Sabaté</strong> en el barrio Bella Vista.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
