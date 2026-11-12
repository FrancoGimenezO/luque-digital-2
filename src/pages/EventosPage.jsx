import { useState } from 'react';
import PageHero from './PageHero.jsx';
import { Calendar, MapPin, Clock, Sparkles, Utensils, Music, Tag, Users, Check } from 'lucide-react';

export default function EventosPage({ onBackToHome }) {
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  const events = [
    {
      id: 'kure-luque-ara',
      title: 'Kure Luque Ára (El Gran Día del Cerdo Luqueño)',
      category: 'Gastronomía y Tradición',
      period: 'Mes de Julio (Anual)',
      location: 'Ciclovía Municipal de Luque (Barrio Bella Vista)',
      time: 'Desde las 08:00 hasta las 22:00 hs',
      image: '/santuario-luque-opt.jpg',
      featured: true,
      summary:
        'La mayor fiesta popular y gastronómica de Luque y del departamento Central. Rinde homenaje al emblemático cerdo luqueño con la preparación de más de 12.000 kilos de carne porcina en todas sus variedades culinarias.',
      details: [
        'Asado de cerdo a la estaca y lechón al tatakua tradicional',
        'Enrollados caseros, morcillas y butifarras luqueñas',
        'Elección del "Kure más pesado" y del "Kure más simpático"',
        'Escenario central con grupos folclóricos, elencos de danza y cumbia',
        'Exposición de orfebrería en filigrana y artesanías en cuero',
      ],
    },
    {
      id: 'patronales-rosario',
      title: 'Fiestas Patronales de Nuestra Señora del Rosario',
      category: 'Festividades Religiosas',
      period: '7 de Octubre (Novenario previo desde el 28 de Septiembre)',
      location: 'Santuario del Rosario y calles céntricas de Luque',
      time: 'Misas desde las 06:00 hs / Serenata central a las 20:00 hs',
      image: '/santuario-luque.jpg',
      featured: true,
      summary:
        'La máxima expresión de fe de la comunidad luqueña. Congrega a decenas de miles de peregrinos de todo el país con procesiones terrestres, la emocionante procesión náutica por el lago Ypacaraí y la tradicional procesión aérea con lanzamiento de pétalos.',
      details: [
        'Solemne procesión de la imagen patronal por las calles de Luque',
        'Tradicional procesión aérea en helicóptero y bendición de la ciudad',
        'Gran serenata a la Virgen con arpas, coros y la Banda Municipal',
        'Juegos pirotécnicos sin ruido y feria de comidas parroquial',
        'Desfile de caballeros jinetes luqueños vestidos de azul y oro',
      ],
    },
    {
      id: 'expo-luque',
      title: 'Expo Luque: Feria de Artesanía, Industria y Comercio',
      category: 'Exposiciones y Ferias',
      period: 'Mes de Septiembre / Octubre',
      location: 'Plaza Central Mariscal López',
      time: 'Lunes a Domingos de 09:00 a 22:00 hs',
      image: '/arpa-luque.jpg',
      featured: false,
      summary:
        'El gran escaparate de la pujanza económica y creativa de Luque. Más de 100 stands exhiben la más fina filigrana de oro y plata de artesanos locales, arpas e instrumentos de luthiers, calzados de alta calidad e industrias tecnológicas.',
      details: [
        'Venta directa de joyas en filigrana con certificación de pureza',
        'Muestra viva de luthiers armando arpas paraguayas en vivo',
        'Patio de comidas con sabores tradicionales y cervezas artesanales',
        'Noches temáticas de jazz, folclore y orquestas juveniles',
      ],
    },
    {
      id: 'festival-arpa-filigrana',
      title: 'Festival Internacional del Arpa y de la Filigrana',
      category: 'Música y Arte',
      period: 'Mes de Noviembre',
      location: 'Teatro Municipal Balderrama / Sede Cultural',
      time: 'Viernes y Sábados a partir de las 19:30 hs',
      image: '/arpa-luque.jpg',
      featured: false,
      summary:
        'Tributo al instrumento rey del folclore paraguayo y a los maestros artesanos. Arpistas de renombre nacional y músicos extranjeros invitados interpretan guaranias, polcas y piezas clásicas ante el público.',
      details: [
        'Concierto monumental de ensamble de arpas paraguayas de Luque',
        'Homenaje a grandes compositores luqueños',
        'Demostración de tejido de filigrana en vivo sobre el escenario',
        'Entrega del galardón de honor "Filigrana de Oro"',
      ],
    },
    {
      id: 'san-juan-luqueno',
      title: 'Tradicional San Juan Ára Luqueño',
      category: 'Costumbres y Tradición',
      period: '23 y 24 de Junio',
      location: 'Plazas barriales y Centro Cívico Municipal',
      time: 'Desde las 17:00 hs',
      image: '/conmebol-luque.jpg',
      featured: false,
      summary:
        'El San Juan más auténtico y alegre de la región central. Reúne las recetas culinarias típicas paraguayas preparadas por comisiones de vecinos y los tradicionales juegos populares.',
      details: [
        'Platos típicos: pajagua maskada, mbeju mestizo, pastel mandi\'o, chipa so\'o',
        'Juegos tradicionales: Judas Kái, Toro Candil, Yvyra Syĩ y Paila Jeheréi',
        'Casamiento koygua y representaciones teatrales populares',
        'Recaudación a beneficio de obras comunitarias barriales',
      ],
    },
    {
      id: 'desfile-patrio',
      title: 'Desfile Cívico-Estudiantil de la Independencia',
      category: 'Cívico y Conmemorativo',
      period: '14 y 15 de Mayo',
      location: 'Avda. General Aquino (Microcentro de Luque)',
      time: 'A partir de las 07:30 hs',
      image: '/farias.jpg',
      featured: false,
      summary:
        'La marcha patriótica más multitudinaria de la ciudad. Más de 60 colegios públicos y privados, el Cuerpo de Bomberos Voluntarios de Luque, la Cruz Roja y organizaciones civiles desfilan con bandas de gala y atuendos típicos.',
      details: [
        'Participación de más de 10.000 estudiantes luqueños',
        'Bandas de liras, tambores y trompetas escolares',
        'Honores a los Próceres de Mayo y al Gral. Elizardo Aquino',
        'Presencia de las autoridades comunales y personalidades destacadas',
      ],
    },
  ];

  const filterOptions = ['Todos', 'Gastronomía y Tradición', 'Festividades Religiosas', 'Exposiciones y Ferias', 'Música y Arte', 'Cívico y Conmemorativo'];

  const filteredEvents = events.filter((e) => {
    if (selectedFilter === 'Todos') return true;
    return e.category === selectedFilter;
  });

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="CALENDARIO CULTURAL Y POPULAR"
        title="Eventos y Festividades"
        subtitle="Viví las celebraciones más emblemáticas de la República de Luque: el Kure Luque Ára, la fiesta de la Virgen del Rosario, la Expo Luque y el Festival del Arpa."
        category="Ciudad"
        badge="Cultura Viva"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Banner de Evento Destacado Kure Luque Ára */}
          <div className="kure-featured-banner">
            <div className="kure-featured-badge">
              <Sparkles size={16} />
              <span>EL EVENTO MÁS ESPERADO DEL AÑO</span>
            </div>
            <h2>Kure Luque Ára: El Gran Día del Cerdo Luqueño</h2>
            <p>
              Una fiesta que reúne a más de 50.000 visitantes cada año en la Ciclovía de Luque.
              Conocé el sabor de nuestra tierra, la alegría de los elencos de danza y la hospitalidad inconfundible del pueblo luqueño.
            </p>
            <div className="kure-metrics-row">
              <div className="kure-metric">
                <b>+12.000 kg</b>
                <span>De carne porcina</span>
              </div>
              <div className="kure-metric">
                <b>+50.000</b>
                <span>Visitantes del país</span>
              </div>
              <div className="kure-metric">
                <b>100%</b>
                <span>Tradición y música</span>
              </div>
            </div>
          </div>

          {/* Filtros por Categoría */}
          <div className="category-filters-container">
            <span className="filter-label">Filtrar festividades:</span>
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

          {/* Grilla de Eventos */}
          <div className="events-cards-grid">
            {filteredEvents.map((ev) => (
              <article className="event-detail-card" key={ev.id}>
                <div className="event-image-wrap">
                  <img src={ev.image} alt={ev.title} loading="lazy" width="600" height="380" />
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
                    <strong>Atracciones del Evento:</strong>
                    <ul>
                      {ev.details.map((d, i) => (
                        <li key={i}>
                          <Check size={14} className="hl-check" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Invitación a Artistas y Feriantes */}
          <div className="artists-call-card">
            <div className="artists-call-icon">
              <Music size={32} />
            </div>
            <div>
              <h3>¿Sos artista, luthier o feriante gastronómico de Luque?</h3>
              <p>
                Inscribite en el registro municipal de artistas y gestores culturales para participar de la cartelera oficial de los
                festivales y ferias de la Dirección de Cultura y Eventos de la Municipalidad de Luque.
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
