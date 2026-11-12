import { useState, useMemo } from 'react';
import PageHero from './PageHero.jsx';
import {
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Utensils,
  Music,
  Tag,
  Users,
  Check,
  Search,
  Navigation,
  ExternalLink,
  Map,
  ChevronDown,
  ChevronUp,
  Award,
  Flame,
} from 'lucide-react';

export default function EventosPage({ onBackToHome }) {
  const [selectedFilter, setSelectedFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMapId, setActiveMapId] = useState(null);

  const events = [
    {
      id: 'kure-luque-ara',
      title: 'Kure Luque Ára (El Gran Día del Cerdo Luqueño)',
      category: 'Gastronomía y Tradición',
      period: 'Mes de Julio (Anual)',
      location: 'Ciclovía Municipal de Luque (Barrio Bella Vista)',
      time: 'Desde las 08:00 hasta las 22:00 hs',
      image: '/Kure Luque Ára (El Gran Día del Cerdo Luqueño).jpeg',
      fallbackImage: '/ciclovia de luque.jpg',
      featured: true,
      googleMapsUrl: 'https://maps.google.com/?q=Ciclovia+Municipal+de+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.7501649877352!2d-57.49154170135292!3d-25.26320961513301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da561f09ca0a9%3A0x2c70a08d51bdcce4!2sAntigua%20Estaci%C3%B3n%20del%20Tren!5e0!3m2!1ses!2spy!4v1652831846534!5m2!1ses!2spy',
      summary:
        'La mayor fiesta popular y gastronómica de Luque y del departamento Central. Rinde homenaje al emblemático cerdo luqueño con la preparación de más de 12.000 kilos de carne porcina en todas sus variedades culinarias, atrayendo a más de 50.000 comensales.',
      details: [
        'Asado de cerdo a la estaca, lechón al tatakua tradicional y costillares marinados',
        'Enrollados caseros, morcillas, butifarras luqueñas y chicharõ trenzado',
        'Concurso oficial y premiación del "Kure más pesado" y del "Kure más simpático"',
        'Escenario central con grupos folclóricos, elencos de danza paraguaya y orquestas de cumbia',
        'Gran feria de orfebrería en filigrana de oro y plata y artesanías en cuero',
      ],
    },
    {
      id: 'patronales-rosario',
      title: 'Fiestas Patronales de Nuestra Señora del Rosario',
      category: 'Festividades Religiosas',
      period: '7 de Octubre (Novenario desde el 28 de Septiembre)',
      location: 'Santuario del Rosario y Calles Céntricas de Luque',
      time: 'Misas desde las 06:00 hs / Serenata central a las 20:00 hs',
      image: '/Fiestas Patronales de Nuestra Señora del Rosario.jpg',
      fallbackImage: '/lugar-santuario.jpg',
      featured: true,
      googleMapsUrl: 'https://goo.gl/maps/xD41z2PeWaN2eb8N6',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14432.427298528251!2d-57.50890016555788!3d-25.266991672247233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf897855715d%3A0x645129eb85827454!2sSantuario%20Virgen%20del%20Rosario%2C%20Luque!5e0!3m2!1ses!2spy!4v1652834176976!5m2!1ses!2spy',
      summary:
        'La máxima expresión de fe comunitaria luqueña. Congrega a decenas de miles de peregrinos de todo el Paraguay con misas multitudinarias, procesiones terrestres, la emocionante bendición aérea con lanzamiento de pétalos de rosa y la tradicional procesión de jinetes.',
      details: [
        'Solemne procesión de la imagen sagrada patronal por el casco histórico',
        'Tradicional procesión aérea en helicóptero y bendición mariana sobre toda la ciudad',
        'Gran serenata popular a la Virgen con conjuntos de arpas y la Banda Municipal de Luque',
        'Show de fuegos artificiales de bajo impacto sonoro y cantina parroquial tradicional',
        'Desfile de agrupaciones ecuestres y jinetes luqueños vestidos de azul y oro',
      ],
    },
    {
      id: 'expo-luque',
      title: 'Expo Luque: Feria de Artesanía, Industria y Comercio',
      category: 'Exposiciones y Ferias',
      period: 'Meses de Septiembre / Octubre (10 Días de Muestra)',
      location: 'Plaza Central Mariscal López',
      time: 'Lunes a Domingos de 09:00 a 22:30 hs',
      image: '/Expo Luque Feria de Artesanía, Industria y Comercio.jpg',
      fallbackImage: '/Plaza-Estacion.jpg',
      featured: false,
      googleMapsUrl: 'https://maps.google.com/?q=Plaza+Mariscal+Lopez+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8800000000000!2d-57.49600000000000!3d-25.26750000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf8849a449b1%3A0x3a2f2fdcb61496e!2sPlaza%20Mariscal%20L%C3%B3pez!5e0!3m2!1ses!2spy!4v1652833335189!5m2!1ses!2spy',
      summary:
        'La vitrina emblemática del talento, la manufactura y la innovación luqueña. Más de 120 stands exhiben la más fina orfebrería en filigrana, arpas paraguayas de luthiers certificados, calzados de cuero genuino, gastronomía y tecnología nacional.',
      details: [
        'Exposición y venta directa de filigrana con certificado de pureza garantizado',
        'Demostraciones en vivo de luthiers calibrando y tallando arpas de maderas nobles',
        'Pabellón industrial con empresas metalúrgicas, calzados y servicios del distrito',
        'Patio gastronómico con comidas típicas y cervecerías artesanales de la región',
        'Noches temáticas de conciertos de jazz, música folclórica y orquestas infantojuveniles',
      ],
    },
    {
      id: 'festival-arpa-filigrana',
      title: 'Festival Internacional del Arpa y de la Filigrana',
      category: 'Música y Arte',
      period: 'Mes de Noviembre (Edición Anual)',
      location: 'Centro Cultural y Teatro Municipal Balderrama',
      time: 'Viernes y Sábados a partir de las 19:30 hs',
      image: '/Festival Internacional del Arpa y de la Filigrana.jpeg',
      fallbackImage: '/arpa-luque.jpg',
      featured: false,
      googleMapsUrl: 'https://maps.google.com/?q=Teatro+Municipal+Balderrama+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8500000000000!2d-57.49400000000000!3d-25.26600000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf8849a449b1%3A0x3a2f2fdcb61496e!2sCentro%20Cultural%20Balderrama!5e0!3m2!1ses!2spy!4v1652833335189!5m2!1ses!2spy',
      summary:
        'Homenaje internacional al instrumento rey de nuestra identidad musical y a los artesanos del hilo de plata y oro. Destacados arpistas nacionales y delegaciones extranjeras interpretan polcas, guaranias y melodías clásicas universales.',
      details: [
        'Ensamble monumental de más de 50 arpas paraguayas en escena simultánea',
        'Tributo a los compositores históricos y creadores luqueños de la guarania',
        'Muestra viva del proceso de urdido y soldado de filigrana sobre el escenario',
        'Entrega del galardón de honor al mérito artístico "Filigrana de Oro"',
        'Talleres abiertos de luthería y técnica de ejecución para jóvenes talentos',
      ],
    },
    {
      id: 'san-juan-luqueno',
      title: 'Tradicional San Juan Ára Luqueño',
      category: 'Costumbres y Tradición',
      period: '23 y 24 de Junio (Víspera y Festividad)',
      location: 'Centro Cívico Municipal y Plazas Barriales',
      time: 'Desde las 17:00 hs hasta la medianoche',
      image: '/Tradicional San Juan Ára Luqueño.jpg',
      fallbackImage: '/historia-plaza.jpg',
      featured: false,
      googleMapsUrl: 'https://maps.google.com/?q=Municipalidad+de+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7500000000000!2d-57.49000000000000!3d-25.26500000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da561f09ca0a9%3A0x2c70a08d51bdcce4!2sMunicipalidad%20de%20Luque!5e0!3m2!1ses!2spy!4v1652831846534!5m2!1ses!2spy',
      summary:
        'Una de las fiestas populares más coloridas y concurridas del país. Reúne las delicias gastronómicas tradicionales de San Juan elaboradas por comisiones de vecinos, junto con los juegos autóctonos y representaciones folclóricas llenas de humor.',
      details: [
        'Sabores autóctonos: pajagua maskada, mbeju mestizo al tatakua, pastel mandi\'o y chipa so\'o',
        'Juegos de tradición: Judas Kái, Toro Candil, Yvyra Syĩ (palo enjabonado) y Paila Jeheréi',
        'Juego de las brasas (Tata Ári Jehasa) bajo supervisión y tradición ritual',
        'Divertido casamiento koygua con elenco teatral municipal y música folclórica en vivo',
        'Fondos recaudados destinados a obras sociales y mejoras barriales',
      ],
    },
    {
      id: 'desfile-patrio',
      title: 'Desfile Cívico-Estudiantil de la Independencia',
      category: 'Cívico y Conmemorativo',
      period: '14 y 15 de Mayo (Fiestas Patrias)',
      location: 'Avda. General Aquino (Microcentro de Luque)',
      time: 'A partir de las 07:30 hs',
      image: '/Desfile Cívico-Estudiantil de la Independencia.avif',
      fallbackImage: '/Aniversario-bailarinas-luquenas.jpg',
      featured: false,
      googleMapsUrl: 'https://maps.google.com/?q=Avenida+General+Aquino+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.3439607375817!2d-57.4959007566448!3d-25.267401506716517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf8849a449b1%3A0x3a2f2fdcb61496e!2sMauseleo%20del%20Gral.%20Jos%C3%A9%20Elizardo%20Aquino!5e0!3m2!1ses!2spy!4v1652833335189!5m2!1ses!2spy',
      summary:
        'El desfile cívico y estudiantil más multitudinario del departamento Central. Decenas de colegios públicos y privados, cuerpos de bomberos voluntarios, reservistas y agrupaciones civiles marchan con orgullo rindiendo tributo a la gesta libertaria de 1811.',
      details: [
        'Participación de más de 70 instituciones educativas de Luque y sus 28 barrios',
        'Bandas de gala, liras, tambores y batallones de abanderados escolares',
        'Homenaje solemne con ofrenda floral en el Mausoleo del Gral. Elizardo Aquino',
        'Desfile de honor del Cuerpo de Bomberos Voluntarios y la Policía Municipal',
        'Acompañamiento masivo de familias luqueñas a lo largo de toda la avenida',
      ],
    },
    {
      id: 'aniversario-ciudad',
      title: 'Aniversario de Elevación a Ciudad y Gala Folclórica',
      category: 'Cívico y Conmemorativo',
      period: '27 de Diciembre (Semana Ciudadana)',
      location: 'Peatonal Histórica y Centro Cívico Municipal',
      time: 'A partir de las 19:00 hs',
      image: '/Aniversario-bailarinas-luquenas.jpg',
      fallbackImage: '/farias.jpg',
      featured: false,
      googleMapsUrl: 'https://maps.google.com/?q=Peatonal+Historica+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.3439607375817!2d-57.4959007566448!3d-25.267401506716517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf8849a449b1%3A0x3a2f2fdcb61496e!2sMauseleo%20del%20Gral.%20Jos%C3%A9%20Elizardo%20Aquino!5e0!3m2!1ses!2spy!4v1652833335189!5m2!1ses!2spy',
      summary:
        'Conmemoración solemne del decreto de 1935 que elevó oficialmente a Luque al rango de Ciudad. Una semana de actividades culturales que culmina con una gran gala de ballet folclórico, distinciones cívicas y serenata popular bajo las estrellas.',
      details: [
        'Presentación estelar de la Escuela Municipal de Danza y Ballet Folclórico',
        'Concierto especial de la Orquesta de Cámara y Banda de Músicos de Luque',
        'Entrega de la medalla "Ciudadano Ilustre" a personalidades destacadas',
        'Paseo peatonal adornado con iluminación festiva y ferias gastronómicas',
        'Cierre con fuegos de artificio y serenata comunitaria a la ciudad',
      ],
    },
  ];

  const filterOptions = [
    'Todos',
    'Gastronomía y Tradición',
    'Festividades Religiosas',
    'Exposiciones y Ferias',
    'Música y Arte',
    'Cívico y Conmemorativo',
  ];

  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      const matchCat = selectedFilter === 'Todos' || e.category === selectedFilter;
      const cleanTerm = searchTerm.toLowerCase().trim();
      if (!cleanTerm) return matchCat;

      const haystack = (e.title + ' ' + e.category + ' ' + e.period + ' ' + e.summary + ' ' + e.location + ' ' + e.details.join(' ')).toLowerCase();
      return matchCat && haystack.includes(cleanTerm);
    });
  }, [events, selectedFilter, searchTerm]);

  const toggleMap = (id) => {
    setActiveMapId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="CALENDARIO CULTURAL, ARTÍSTICO Y POPULAR"
        title="Eventos y Festividades"
        subtitle="Viví las celebraciones más emblemáticas de la República de Luque: el Kure Luque Ára, la fiesta patronal de la Virgen del Rosario, la Expo Luque, el Festival del Arpa y las galas cívicas tradicionales."
        category="Ciudad"
        badge="Cultura Viva y Tradición"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Banner de Evento Destacado: Kure Luque Ára */}
          <div className="kure-featured-banner">
            <div className="kure-featured-badge">
              <Sparkles size={16} />
              <span>EL EVENTO MÁS ESPERADO DEL AÑO EN LUQUE</span>
            </div>
            <h2>Kure Luque Ára: El Gran Día del Cerdo Luqueño</h2>
            <p>
              Una celebración multitudinaria que reúne a más de 50.000 visitantes de todo el país en la Ciclovía
              Municipal de Luque. Disfrutá del sabor de nuestra gastronomía, las danzas folclóricas, los concursos tradicionales
              y la inconfundible calidez del pueblo auriazul.
            </p>
            <div className="kure-metrics-row">
              <div className="kure-metric">
                <b>+12.000 kg</b>
                <span>De carne porcina asada</span>
              </div>
              <div className="kure-metric">
                <b>+50.000</b>
                <span>Comensales y visitantes</span>
              </div>
              <div className="kure-metric">
                <b>100%</b>
                <span>Música, danza y tradición</span>
              </div>
            </div>
          </div>

          {/* Botonera de Salto Rápido a los Eventos */}
          <div className="quick-jump-places-grid" style={{ marginBottom: '2rem' }}>
            <a href="#kure-luque-ara" className="quick-jump-place-pill">
              <Sparkles size={15} />
              <span>Kure Luque Ára</span>
            </a>
            <a href="#patronales-rosario" className="quick-jump-place-pill">
              <Award size={15} />
              <span>Virgen del Rosario</span>
            </a>
            <a href="#expo-luque" className="quick-jump-place-pill">
              <Tag size={15} />
              <span>Expo Luque</span>
            </a>
            <a href="#festival-arpa-filigrana" className="quick-jump-place-pill">
              <Music size={15} />
              <span>Festival del Arpa</span>
            </a>
            <a href="#san-juan-luqueno" className="quick-jump-place-pill">
              <Flame size={15} />
              <span>San Juan Ára</span>
            </a>
            <a href="#desfile-patrio" className="quick-jump-place-pill">
              <Users size={15} />
              <span>Desfile de Independencia</span>
            </a>
            <a href="#aniversario-ciudad" className="quick-jump-place-pill">
              <Calendar size={15} />
              <span>Aniversario de Ciudad</span>
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
                  placeholder="Buscar festival, fecha o plato típico..."
                  aria-label="Buscar evento o festividad en Luque"
                />
                {searchTerm && (
                  <button className="clear-search-btn" onClick={() => setSearchTerm('')} aria-label="Limpiar búsqueda">
                    ×
                  </button>
                )}
              </div>

              <div className="category-filters" role="tablist">
                {filterOptions.map((opt) => {
                  const count = opt === 'Todos' ? events.length : events.filter((e) => e.category === opt).length;
                  const isActive = selectedFilter === opt;
                  return (
                    <button
                      key={opt}
                      className={`cat-pill ${isActive ? 'active' : ''}`}
                      onClick={() => setSelectedFilter(opt)}
                      role="tab"
                      aria-selected={isActive}
                    >
                      <span>{opt}</span>
                      <span className="cat-count">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Grilla de Tarjetas de Eventos */}
          <div className="events-cards-grid">
            {filteredEvents.map((ev) => {
              const isMapOpen = activeMapId === ev.id;

              return (
                <article className="event-detail-card" key={ev.id} id={ev.id}>
                  <div className="event-image-wrap">
                    <img
                      src={ev.image}
                      alt={ev.title}
                      loading="lazy"
                      width="600"
                      height="380"
                      onError={(e) => {
                        if (ev.fallbackImage && e.target.src !== ev.fallbackImage) {
                          e.target.src = ev.fallbackImage;
                        }
                      }}
                    />
                    <span className="event-category-badge">{ev.category}</span>
                    <div className="event-date-overlay">
                      <Calendar size={15} />
                      <span>{ev.period}</span>
                    </div>
                  </div>

                  <div className="event-card-body">
                    <h3>{ev.title}</h3>

                    <div className="place-meta-item">
                      <MapPin size={15} />
                      <span>{ev.location}</span>
                    </div>

                    <div className="place-meta-item">
                      <Clock size={15} />
                      <span>{ev.time}</span>
                    </div>

                    <p className="event-summary">{ev.summary}</p>

                    <div className="event-highlights-list">
                      <strong>Atracciones y Programa Destacado:</strong>
                      <ul>
                        {ev.details.map((d, i) => (
                          <li key={i}>
                            <Check size={14} className="hl-check" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botonera de Acciones: Cómo Llegar y Ver Mapa */}
                    <div className="place-actions-row">
                      <a
                        href={ev.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-map-action"
                        title={`Cómo llegar al lugar de ${ev.title}`}
                      >
                        <Navigation size={15} />
                        <span>CÓMO LLEGAR</span>
                        <ExternalLink size={13} style={{ marginLeft: '2px', opacity: 0.8 }} />
                      </a>

                      <button
                        type="button"
                        className={`btn-map-toggle ${isMapOpen ? 'active' : ''}`}
                        onClick={() => toggleMap(ev.id)}
                        aria-expanded={isMapOpen}
                      >
                        <Map size={15} />
                        <span>{isMapOpen ? 'Ocultar Mapa' : 'Ver Ubicación en Mapa'}</span>
                        {isMapOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>

                    {/* Mapa Interactivo Desplegable */}
                    {isMapOpen && (
                      <div className="place-map-wrapper">
                        <iframe
                          src={ev.mapEmbedUrl}
                          className="place-map-iframe"
                          title={`Ubicación de ${ev.title}`}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div style={{ padding: '0.6rem 0.9rem', background: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#666' }}>
                          <span>Ubicación verificada del evento · Luque</span>
                          <a
                            href={ev.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--primary-blue)', fontWeight: 600, textDecoration: 'underline' }}
                          >
                            Abrir en Google Maps ↗
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Invitación a Artistas y Feriantes */}
          <div className="artists-call-card">
            <div className="artists-call-icon">
              <Music size={32} />
            </div>
            <div>
              <h3>¿Sos artista, luthier, orfebre o feriante gastronómico de Luque?</h3>
              <p>
                Inscribite en el registro municipal de artesanos y gestores culturales para participar de los festivales,
                escenarios oficiales y ferias comunitarias organizadas por la Dirección de Cultura y Eventos de la Municipalidad de Luque.
              </p>
              <div className="artists-call-action">
                <a href="#contacto" onClick={onBackToHome} className="btn btn-navy">
                  <span>Contactar con Dirección de Cultura</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
