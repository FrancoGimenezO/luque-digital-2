import { useState } from 'react';
import PageHero from './PageHero.jsx';
import { TreePine, Trophy, Bike, MapPin, Clock, Check, Heart, Shield, Compass } from 'lucide-react';

export default function RecreacionPage({ onBackToHome }) {
  const [activeTab, setActiveTab] = useState('Todos');

  const parks = [
    {
      id: 'nu-guasu',
      name: 'Parque Ñu Guasu',
      type: 'Parque Metropolitano',
      category: 'Parques y Naturaleza',
      image: '/santuario-luque-opt.jpg',
      extension: 'Más de 150 hectáreas',
      location: 'Autopista Silvio Pettirossi (Acceso Luque - Asunción)',
      hours: 'Lunes a Domingo de 05:00 a 20:30 hs',
      cost: 'Entrada Libre y Gratuita',
      description:
        'El principal pulmón verde metropolitano del Paraguay. Cuenta con dos extensas lagunas artificiales con peces y aves silvestres, circuito de caminata de 5 km, ciclovías pavimentadas exclusivas, gimnasios biosaludables al aire libre y canchas de fútbol, vóley y tenis.',
      facilities: [
        'Circuito aeróbico peatonal de 5 km',
        'Ciclovía segregada para bicicletas y patines',
        'Lagunas con pasarelas de madera y miradores',
        'Canchas reglamentarias de tenis, básquet y fútbol',
        'Estacionamiento vigilado y puestos de primeros auxilios',
      ],
    },
    {
      id: 'parque-guasu',
      name: 'Parque Guasu Metropolitano',
      type: 'Reserva y Senderismo Ecológico',
      category: 'Parques y Naturaleza',
      image: '/conmebol-luque.jpg',
      extension: '125 hectáreas de conservación',
      location: 'Avda. Madame Lynch y Autopista Ñu Guasu',
      hours: 'Lunes a Domingo de 05:30 a 20:00 hs',
      cost: 'Entrada Libre y Gratuita',
      description:
        'Área silvestre protegida con densos bosques nativos, humedales y senderos naturales. Ideal para observadores de aves, entrenamiento de fondo, ciclismo de montaña (MTB) y paseos familiares.',
      facilities: [
        'Senderos de tierra apisonada para cross-country',
        'Áreas de avistamiento de aves autóctonas',
        'Pistas amplias para patinaje y rollers',
        'Áreas de picnic a la sombra de árboles nativos',
      ],
    },
    {
      id: 'ciclovia-luque',
      name: 'Ciclovía Municipal Valois Rivarola',
      type: 'Circuito Deportivo Urbano',
      category: 'Circuitos Urbanos',
      image: '/santuario-luque.jpg',
      extension: '2.5 km lineales en el corazón cívico',
      location: 'Calle Pedro Juan Caballero y Valois Rivarola (Barrio Bella Vista)',
      hours: 'Abierto 24 horas (Iluminación LED nocturna)',
      cost: 'Acceso Público Gratuito',
      description:
        'Paseo lineal urbano construido sobre la franja histórica de la antigua estación de tren. Es el punto de encuentro vespertino favorito de los vecinos luqueños para trotar, caminar y compartir el tereré.',
      facilities: [
        'Pista iluminada de trote y caminata',
        'Parque de calistenia y gimnasio biosaludable',
        'Zona de juegos infantiles inclusivos',
        'Seguridad ciudadana de la Policía Urbana de Luque',
      ],
    },
    {
      id: 'conmebol-museo',
      name: 'Sede Central y Museo de la CONMEBOL',
      type: 'Atracción Turística Internacional',
      category: 'Complejos Deportivos',
      image: '/conmebol-luque.jpg',
      extension: 'Centro de Convenciones y Museo 5 Estrellas',
      location: 'Autopista Silvio Pettirossi y Valois Rivarola',
      hours: 'Martes a Domingos de 09:00 a 18:00 hs',
      cost: 'Visitas programadas y público general',
      description:
        'Sede del gobierno del fútbol sudamericano y su flamante Museo del Fútbol Sudamericano. Ofrece una experiencia interactiva sin igual con trofeos históricos originales (Copa Libertadores, Copa América), salas inmersivas 360°, estatuas de leyendas y cine.',
      facilities: [
        'Museo interactivo con trofeos originales',
        'Salas de realidad virtual y simuladores de tiro',
        'Tienda oficial de indumentaria deportiva y souvenirs',
        'Paseo de las estrellas del fútbol sudamericano',
      ],
    },
    {
      id: 'parque-olimpico',
      name: 'Parque Olímpico y Comité Olímpico Paraguayo',
      type: 'Complejo de Alto Rendimiento',
      category: 'Complejos Deportivos',
      image: '/arpa-luque.jpg',
      extension: '100 hectáreas polideportivas',
      location: 'Acceso Ñu Guasu (frente a la Fuerza Aérea)',
      hours: 'Todos los días según competencias y entrenamientos',
      cost: 'Acceso a eventos deportivos federados',
      description:
        'La máxima infraestructura deportiva del Paraguay. Sede de los Juegos Suramericanos ASU 2022 y escenario de campeonatos internacionales de atletismo, natación, skate, tiro con arco y gimnasia.',
      facilities: [
        'Pista sintética oficial de atletismo de 8 carriles',
        'Centro acuático olímpico con piscinas climatizadas',
        'Velódromo techado para ciclismo de pista',
        'Skatepark profesional de nivel internacional',
      ],
    },
    {
      id: 'feliciano-caceres',
      name: 'Estadio Feliciano Cáceres (Sportivo Luqueño)',
      type: 'Templo del Deporte Auriazul',
      category: 'Complejos Deportivos',
      image: '/farias.jpg',
      extension: 'Capacidad para 27.000 espectadores',
      location: 'Capitán Bado esq. Sportivo Luqueño (Primer Barrio)',
      hours: 'Días de partidos y visitas a la sede social',
      cost: 'Entradas según fixture oficial APF',
      description:
        'Escenario emblemático del fútbol paraguayo, subsede de la Copa América 1999 y hogar incondicional del Club Sportivo Luqueño. Con tribunas pintadas de azul y oro, es el símbolo viviente de la identidad luqueña.',
      facilities: [
        'Césped natural con drenaje de estándar internacional',
        'Museo de trofeos y sala de prensa del club',
        'Gimnasio de musculación y canchas auxiliares',
      ],
    },
  ];

  const categories = ['Todos', 'Parques y Naturaleza', 'Complejos Deportivos', 'Circuitos Urbanos'];

  const filteredParks = parks.filter((p) => {
    if (activeTab === 'Todos') return true;
    return p.category === activeTab;
  });

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="DEPORTE, SALUD Y ESPARCIMIENTO"
        title="Recreación y Espacios Públicos"
        subtitle="Descubrí los grandes pulmones verdes, la ciclovía municipal, los complejos de alto rendimiento y el moderno Museo de la CONMEBOL en Luque."
        category="Ciudad"
        badge="Bienestar Urbano"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Tarjetas resumen de actividades al aire libre */}
          <div className="recreation-quick-grid">
            <div className="recreation-quick-box">
              <TreePine size={24} />
              <div>
                <b>+275 Hectáreas Verdes</b>
                <span>Parque Ñu Guasu y Parque Guasu</span>
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

          {/* Filtros por Categoría */}
          <div className="category-filters-container">
            <span className="filter-label">Ver por tipología:</span>
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

          {/* Grilla de Espacios Públicos y Complejos */}
          <div className="recreation-cards-grid">
            {filteredParks.map((park) => (
              <article className="recreation-card" key={park.id}>
                <div className="recreation-image-wrap">
                  <img src={park.image} alt={park.name} loading="lazy" width="600" height="380" />
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
                </div>
              </article>
            ))}
          </div>

          {/* Banner de Cuidado de los Espacios Públicos */}
          <div className="green-care-banner">
            <div className="green-care-icon">
              <Shield size={28} />
            </div>
            <div>
              <h3>Cuidemos Juntos Nuestros Espacios Públicos</h3>
              <p>
                Depositá la basura en los basureros diferenciados, paseá a tus mascotas con correa y bolsitas para desechos, y
                respetá las velocidades máximas en las pistas de ciclovía. El bienestar de Luque es compromiso de todos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
