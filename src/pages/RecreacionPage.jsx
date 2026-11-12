import { useState, useMemo } from 'react';
import PageHero from './PageHero.jsx';
import {
  TreePine,
  Trophy,
  Bike,
  MapPin,
  Clock,
  Check,
  Heart,
  Shield,
  Compass,
  Search,
  Navigation,
  ExternalLink,
  Map,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';

export default function RecreacionPage({ onBackToHome }) {
  const [activeTab, setActiveTab] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMapId, setActiveMapId] = useState(null);

  const parks = [
    {
      id: 'nu-guasu',
      name: 'Parque Ñu Guasu',
      type: 'Parque Ecológico y Deportivo',
      category: 'Parques y Naturaleza',
      image: '/Parque Ñu guazu.jfif',
      fallbackImage: '/conmebol-luque.jpg',
      extension: 'Más de 150 hectáreas de áreas verdes',
      location: 'Autopista Silvio Pettirossi (Acceso Luque - Asunción)',
      hours: 'Lunes a Domingo de 05:00 a 20:30 hs',
      cost: 'Entrada Libre y Gratuita',
      googleMapsUrl: 'https://maps.google.com/?q=Parque+Nu+Guasu+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.3875323945415!2d-57.53424168498877!3d-25.27438138386008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da79d0f507b9f%3A0xe54d8ec6fe9b50b7!2sParque%20%C3%91u%20Guasu!5e0!3m2!1ses!2spy!4v1652835000000!5m2!1ses!2spy',
      description:
        'El principal pulmón verde y deportivo de Luque. Cuenta con dos extensas lagunas con peces y aves silvestres, circuito de caminata de 5 km, ciclovías pavimentadas exclusivas, gimnasios biosaludables al aire libre y canchas de fútbol, vóley y tenis.',
      facilities: [
        'Circuito aeróbico peatonal de 5 km señalizado',
        'Ciclovía segregada exclusiva para bicicletas y patines',
        'Lagunas con pasarelas de madera y miradores de fauna',
        'Canchas reglamentarias de tenis, básquet y fútbol',
        'Estacionamiento vigilado y puestos de primeros auxilios',
      ],
    },
    {
      id: 'ciclovia-luque',
      name: 'Ciclovía Municipal Valois Rivarola',
      type: 'Circuito Deportivo Urbano',
      category: 'Circuitos Urbanos',
      image: '/ciclovia de luque.jpg',
      fallbackImage: '/lugar-estacion.jpg',
      extension: '2.5 km lineales en el corazón cívico de Luque',
      location: 'Calle Pedro Juan Caballero y Valois Rivarola (Barrio Bella Vista)',
      hours: 'Abierto las 24 horas (Iluminación LED nocturna)',
      cost: 'Acceso Público Gratuito',
      googleMapsUrl: 'https://maps.google.com/?q=Ciclovia+Municipal+de+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.7501649877352!2d-57.49154170135292!3d-25.26320961513301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da561f09ca0a9%3A0x2c70a08d51bdcce4!2sAntigua%20Estaci%C3%B3n%20del%20Tren!5e0!3m2!1ses!2spy!4v1652831846534!5m2!1ses!2spy',
      description:
        'Paseo lineal urbano construido sobre la franja histórica de la antigua estación de tren. Es el punto de encuentro vespertino favorito de los vecinos luqueños para trotar, andar en bicicleta, hacer ejercicios y compartir el tereré.',
      facilities: [
        'Pista iluminada de trote, caminata y patinaje',
        'Parque de calistenia y gimnasio biosaludable al aire libre',
        'Zona de juegos infantiles inclusivos para los más pequeños',
        'Seguridad ciudadana y patrullaje de la Policía Urbana de Luque',
        'Cercanía inmediata a la histórica Estación de Tren',
      ],
    },
    {
      id: 'conmebol-museo',
      name: 'Sede Central y Museo de la CONMEBOL',
      type: 'Atracción Turística Internacional',
      category: 'Complejos Deportivos',
      image: '/conmebol-luque.jpg',
      fallbackImage: '/arpa-luque.jpg',
      extension: 'Centro de Convenciones y Museo Internacional',
      location: 'Autopista Silvio Pettirossi y Valois Rivarola',
      hours: 'Martes a Domingos de 09:00 a 18:00 hs',
      cost: 'Visitas programadas y público general',
      googleMapsUrl: 'https://maps.google.com/?q=Museo+del+Futbol+Sudamericano+CONMEBOL+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8285523945415!2d-57.51950008498877!3d-25.25950008386008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da62a048756c7%3A0x7d6f55e5b3ee581b!2sCONMEBOL!5e0!3m2!1ses!2spy!4v1652835200000!5m2!1ses!2spy',
      description:
        'Sede del gobierno del fútbol sudamericano y su moderno Museo del Fútbol Sudamericano. Ofrece una experiencia interactiva sin igual con trofeos históricos originales (Copa Libertadores, Copa América), salas inmersivas 360°, estatuas de leyendas y cine.',
      facilities: [
        'Museo interactivo con trofeos originales de América y el mundo',
        'Salas de realidad virtual 360° y simuladores de tiro al penal',
        'Tienda oficial de indumentaria deportiva y souvenirs',
        'Paseo de las estrellas del fútbol sudamericano con estatuas de cera',
        'Auditorios de congresos y convenciones internacionales',
      ],
    },
    {
      id: 'parque-olimpico',
      name: 'Parque Olímpico y Comité Olímpico Paraguayo',
      type: 'Complejo de Alto Rendimiento',
      category: 'Complejos Deportivos',
      image: '/comite olimpico.jpg',
      fallbackImage: '/conmebol-luque.jpg',
      extension: '100 hectáreas de infraestructura deportiva federada',
      location: 'Acceso Ñu Guasu (frente a la Fuerza Aérea)',
      hours: 'Todos los días según competencias y entrenamientos',
      cost: 'Acceso a eventos deportivos federados y academias',
      googleMapsUrl: 'https://maps.google.com/?q=Comite+Olimpico+Paraguayo+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4500000000003!2d-57.52850000000000!3d-25.27250000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da79c13d30b69%3A0xe54c12695576a89c!2sComit%C3%A9%20Ol%C3%ADmpico%20Paraguayo!5e0!3m2!1ses!2spy!4v1652835300000!5m2!1ses!2spy',
      description:
        'La máxima infraestructura deportiva de la República del Paraguay. Escenario central de los históricos Juegos Suramericanos ASU 2022 y sede de campeonatos internacionales de atletismo, natación, ciclismo en velódromo, gimnasia y deportes de combate.',
      facilities: [
        'Pista sintética oficial de atletismo de 8 carriles certificados World Athletics',
        'Centro acuático olímpico con piscinas climatizadas reglamentarias',
        'Velódromo techado para ciclismo de pista de clase mundial',
        'Skatepark profesional de nivel internacional',
        'Hotelería deportiva y centro de ciencias aplicadas al deporte',
      ],
    },
    {
      id: 'feliciano-caceres',
      name: 'Estadio Feliciano Cáceres (Sportivo Luqueño)',
      type: 'Templo del Deporte Auriazul',
      category: 'Complejos Deportivos',
      image: '/Estadio de luque.jpg',
      fallbackImage: '/farias.jpg',
      extension: 'Capacidad homologada para 27.000 espectadores',
      location: 'Capitán Bado esq. Sportivo Luqueño (Primer Barrio)',
      hours: 'Días de partidos oficiales APF y visitas institucionales',
      cost: 'Entradas según fixture y sector del estadio',
      googleMapsUrl: 'https://maps.google.com/?q=Estadio+Feliciano+Caceres+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8900000000003!2d-57.49800000000000!3d-25.27000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf8b528b1827%3A0xcda6bce39a8286a1!2sEstadio%20Feliciano%20C%C3%A1ceres!5e0!3m2!1ses!2spy!4v1652835400000!5m2!1ses!2spy',
      description:
        'Escenario emblemático del fútbol paraguayo, subsede de la Copa América 1999 y hogar incondicional del Club Sportivo Luqueño. Con sus gradas azul y oro, es el símbolo viviente de la pasión, el fervor y la identidad deportiva de Luque.',
      facilities: [
        'Césped natural con sistema de drenaje de estándar internacional',
        'Museo de trofeos históricos y sala de prensa del club',
        'Gimnasio de musculación y canchas auxiliares de entrenamiento',
        'Palcos preferenciales climatizados y cabinas de transmisión',
      ],
    },
  ];

  const categories = ['Todos', 'Parques y Naturaleza', 'Complejos Deportivos', 'Circuitos Urbanos'];

  const filteredParks = useMemo(() => {
    return parks.filter((p) => {
      const matchCat = activeTab === 'Todos' || p.category === activeTab;
      const cleanTerm = searchTerm.toLowerCase().trim();
      if (!cleanTerm) return matchCat;

      const haystack = (p.name + ' ' + p.type + ' ' + p.description + ' ' + p.facilities.join(' ') + ' ' + p.location).toLowerCase();
      return matchCat && haystack.includes(cleanTerm);
    });
  }, [parks, activeTab, searchTerm]);

  const toggleMap = (id) => {
    setActiveMapId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="DEPORTE, SALUD Y ESPARCIMIENTO"
        title="Recreación y Espacios Públicos"
        subtitle="Descubrí los grandes pulmones verdes, la ciclovía municipal, los complejos de alto rendimiento olímpico y el emblemático Estadio Feliciano Cáceres en Luque."
        category="Ciudad"
        badge="Bienestar Urbano y Deportivo"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Tarjetas resumen de actividades al aire libre */}
          <div className="recreation-quick-grid">
            <div className="recreation-quick-box">
              <TreePine size={24} />
              <div>
                <b>+150 Hectáreas Verdes</b>
                <span>Parque Ñu Guasu</span>
              </div>
            </div>
            <div className="recreation-quick-box">
              <Bike size={24} />
              <div>
                <b>12 km de Ciclovías</b>
                <span>Circuitos exclusivos y seguros</span>
              </div>
            </div>
            <div className="recreation-quick-box">
              <Trophy size={24} />
              <div>
                <b>Capital del Deporte</b>
                <span>CONMEBOL, COP y Feliciano Cáceres</span>
              </div>
            </div>
          </div>

          {/* Banner de Salto Rápido a los Espacios */}
          <div className="quick-jump-places-grid" style={{ marginBottom: '2rem' }}>
            <a href="#nu-guasu" className="quick-jump-place-pill">
              <TreePine size={15} />
              <span>Parque Ñu Guasu</span>
            </a>
            <a href="#ciclovia-luque" className="quick-jump-place-pill">
              <Bike size={15} />
              <span>Ciclovía Municipal</span>
            </a>
            <a href="#feliciano-caceres" className="quick-jump-place-pill">
              <Trophy size={15} />
              <span>Estadio Feliciano Cáceres</span>
            </a>
            <a href="#conmebol-museo" className="quick-jump-place-pill">
              <Sparkles size={15} />
              <span>CONMEBOL y Museo</span>
            </a>
            <a href="#parque-olimpico" className="quick-jump-place-pill">
              <Shield size={15} />
              <span>Parque Olímpico (COP)</span>
            </a>
          </div>

          {/* Filtros por Categoría y Buscador */}
          <div className="barrios-search-filter-wrap" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
              <div className="search-field" style={{ flex: '1 1 300px', maxWidth: '450px' }}>
                <Search size={18} className="search-field-icon" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar parque, canchas, ciclovía o actividad..."
                  aria-label="Buscar espacio recreativo de Luque"
                />
                {searchTerm && (
                  <button className="clear-search-btn" onClick={() => setSearchTerm('')} aria-label="Limpiar búsqueda">
                    ×
                  </button>
                )}
              </div>

              <div className="category-filters" role="tablist">
                {categories.map((cat) => {
                  const count = cat === 'Todos' ? parks.length : parks.filter((p) => p.category === cat).length;
                  const isActive = activeTab === cat;
                  return (
                    <button
                      key={cat}
                      className={`cat-pill ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveTab(cat)}
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

          {/* Grilla de Espacios Públicos y Complejos */}
          <div className="recreation-cards-grid">
            {filteredParks.map((park) => {
              const isMapOpen = activeMapId === park.id;

              return (
                <article className="recreation-card" key={park.id} id={park.id}>
                  <div className="recreation-image-wrap">
                    <img
                      src={park.image}
                      alt={park.name}
                      loading="lazy"
                      width="600"
                      height="380"
                      onError={(e) => {
                        if (park.fallbackImage && e.target.src !== park.fallbackImage) {
                          e.target.src = park.fallbackImage;
                        }
                      }}
                    />
                    <span className="recreation-badge-pill">{park.type}</span>
                    <span className="recreation-cost-tag">{park.cost}</span>
                  </div>

                  <div className="recreation-card-body">
                    <h3>{park.name}</h3>

                    <div className="place-meta-item">
                      <MapPin size={15} />
                      <span>{park.location}</span>
                    </div>

                    <div className="place-meta-item">
                      <Clock size={15} />
                      <span>{park.hours}</span>
                    </div>

                    <p className="recreation-desc">{park.description}</p>

                    <div className="recreation-facilities-box">
                      <strong>Comodidades e Instalaciones:</strong>
                      <ul>
                        {park.facilities.map((fac, i) => (
                          <li key={i}>
                            <Check size={14} className="hl-check" />
                            <span>{fac}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botonera de Acciones: Cómo Llegar y Ver Mapa */}
                    <div className="place-actions-row">
                      <a
                        href={park.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-map-action"
                        title={`Abrir ${park.name} en Google Maps`}
                      >
                        <Navigation size={15} />
                        <span>CÓMO LLEGAR</span>
                        <ExternalLink size={13} style={{ marginLeft: '2px', opacity: 0.8 }} />
                      </a>

                      <button
                        type="button"
                        className={`btn-map-toggle ${isMapOpen ? 'active' : ''}`}
                        onClick={() => toggleMap(park.id)}
                        aria-expanded={isMapOpen}
                      >
                        <Map size={15} />
                        <span>{isMapOpen ? 'Ocultar Mapa' : 'Ver Mapa en Pantalla'}</span>
                        {isMapOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>

                    {/* Mapa Interactivo Desplegable */}
                    {isMapOpen && (
                      <div className="place-map-wrapper">
                        <iframe
                          src={park.mapEmbedUrl}
                          className="place-map-iframe"
                          title={`Ubicación de ${park.name}`}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div style={{ padding: '0.6rem 0.9rem', background: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#666' }}>
                          <span>Ubicación verificada en Google Maps · Luque</span>
                          <a
                            href={park.googleMapsUrl}
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

          {/* Banner de Cuidado de los Espacios Públicos */}
          <div className="green-care-banner">
            <div className="green-care-icon">
              <Shield size={28} />
            </div>
            <div>
              <h3>Cuidemos Juntos Nuestros Espacios Públicos</h3>
              <p>
                Depositá los residuos en los basureros diferenciados, paseá a tus mascotas con correa y bolsitas
                para desechos, y respetá las velocidades máximas de 20 km/h en las sendas de ciclovía compartida.
                Mantener los parques verdes y seguros es un orgullo y compromiso de todos los luqueños.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
