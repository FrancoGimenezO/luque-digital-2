import { useState, useMemo } from 'react';
import PageHero from './PageHero.jsx';
import { Search, MapPin, Building2, Users, HeartPulse, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function BarriosPage({ onBackToHome }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState('Todos');

  const barrios = [
    {
      id: 'centro',
      name: 'Centro (Casco Urbano)',
      zone: 'Casco Central',
      type: 'Barrio Urbano Cívico',
      desc: 'El corazón institucional, comercial y financiero de Luque. Concentra la sede de la Municipalidad, el Santuario Nuestra Señora del Rosario, la comisaría central y el Mercado Municipal N° 1.',
      equipments: ['Palacio Municipal', 'Santuario del Rosario', 'Mercado N° 1', 'Plaza Mcal. López', 'Bancos y Cooperativas'],
      comisiones: 'Comisión de Fomento del Casco Histórico',
    },
    {
      id: 'primer-barrio',
      name: 'Primer Barrio',
      zone: 'Casco Central',
      type: 'Barrio Residencial Tradicional',
      desc: 'Barrio histórico que rodea la sede y estadio del Club Sportivo Luqueño. De fuerte arraigo familiar y tradicionalistas luqueños.',
      equipments: ['Estadio Feliciano Cáceres', 'Escuela General Elizardo Aquino', 'Sede Sportivo Luqueño'],
      comisiones: 'Comisión Vecinal Auriazul',
    },
    {
      id: 'segundo-barrio',
      name: 'Segundo Barrio',
      zone: 'Casco Central',
      type: 'Barrio Urbano y Artesanal',
      desc: 'Reconocido por sus tradicionales orfebres de filigrana y talleres de luthiers. Zona de constante movimiento cívico y comercial.',
      equipments: ['Talleres de Filigrana', 'Colegios Históricos', 'Paseos Comerciales'],
      comisiones: 'Comisión de Vecinos del Segundo Barrio',
    },
    {
      id: 'tercer-barrio',
      name: 'Tercer Barrio',
      zone: 'Casco Central',
      type: 'Barrio Urbano y Educativo',
      desc: 'Sede de emblemáticos colegios públicos y centros de salud primaria. Conexión directa hacia la salida a San Lorenzo y Areguá.',
      equipments: ['Colegio Nacional de Luque', 'USF Tercer Barrio', 'Plazas Barriales'],
      comisiones: 'Comisión de Mejoramiento Barrial',
    },
    {
      id: 'cuarto-barrio',
      name: 'Cuarto Barrio',
      zone: 'Casco Central',
      type: 'Barrio Residencial Denso',
      desc: 'Una de las áreas con mayor densidad poblacional del casco urbano, con pujante comercio vecinal, clubes deportivos sociales y escuelas.',
      equipments: ['Centro de Salud Municipal', 'Club Capitán Andrés Insfrán', 'Escuela Básica N° 267'],
      comisiones: 'Asociación de Vecinos de Cuarto Barrio',
    },
    {
      id: 'bella-vista',
      name: 'Bella Vista',
      zone: 'Casco Central',
      type: 'Barrio Histórico y Recreativo',
      desc: 'Alberga la histórica Estación de Tren Carlos Antonio López y el circuito de la Ciclovía Municipal Valois Rivarola. Espacio verde y deportivo predilecto de las familias.',
      equipments: ['Estación del Ferrocarril', 'Ciclovía Municipal', 'Pista Atlética', 'Plazas con juegos'],
      comisiones: 'Comisión Ecológica y Deportiva Bella Vista',
    },
    {
      id: 'makai',
      name: 'Maka\'i',
      zone: 'Zona Sur',
      type: 'Barrio Residencial y Comercial',
      desc: 'Sector dinámico con gran crecimiento demográfico, comercios barriales activos, supermercados y canchas de fútbol de salón tradicionales.',
      equipments: ['USF Maka\'i', 'Colegio Parroquial San José', 'Plaza Comunitaria Maka\'i'],
      comisiones: 'Comisión Pro-Desarrollo Maka\'i',
    },
    {
      id: 'marambure',
      name: 'Maramburé',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Tradicional',
      desc: 'Extensa y apacible compañía caracterizada por sus calles arboladas, quintas familiares y nuevos barrios cerrados en expansión.',
      equipments: ['Puesto de Salud Maramburé', 'Escuela Graduada N° 451', 'Capilla San Blas', 'Comisaría Sub-Subseccional'],
      comisiones: 'Comisión Vecinal Unida de Maramburé',
    },
    {
      id: 'zarate-isla',
      name: 'Zárate Isla',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Histórica y Productiva',
      desc: 'Histórica compañía cuna de destacados deportistas y personalidades. Mezcla de zonas agrícolas tradicionales con modernas urbanizaciones.',
      equipments: ['USF Zárate Isla', 'Capilla Virgen de Fátima', 'Club Social Zárate Isla'],
      comisiones: 'Comisión Vecinal de Fomento Zárate Isla',
    },
    {
      id: 'isla-bogado',
      name: 'Isla Bogado',
      zone: 'Zona Sur',
      type: 'Compañía y Barrio del Sur',
      desc: 'Una de las comunidades más extensas en el límite con Capiatá y San Lorenzo. Vigorosa organización comunitaria y centros deportivos barriales.',
      equipments: ['Centro de Salud Isla Bogado', 'Colegio Técnico Comunitario', 'Parque Infantil y Canchas'],
      comisiones: 'Coordinadora de Comisiones Vecinales de Isla Bogado',
    },
    {
      id: 'laurelty',
      name: 'Laurelty',
      zone: 'Zona Sur',
      type: 'Barrio Industrial y Urbano',
      desc: 'Importante corredor industrial y comercial sobre la ruta Luque - San Lorenzo. Sede de fábricas de calzados, metalúrgicas y colegios técnicos.',
      equipments: ['Subcomisaría Laurelty', 'Escuela San Rafael', 'Centro Comunitario'],
      comisiones: 'Comisión Barrial Laurelty Seguro',
    },
    {
      id: 'ykaa',
      name: 'Yka\'a',
      zone: 'Zona Sur',
      type: 'Barrio Residencial y Productivo',
      desc: 'Barrio activo con talleres de confección, luthería y pequeñas industrias familiares. Cuenta con vías de salida rápida hacia Areguá.',
      equipments: ['USF Yka\'a', 'Escuela Básica', 'Plaza San Antonio'],
      comisiones: 'Comisión de Acción Vecinal Yka\'a',
    },
    {
      id: 'tarumandy',
      name: 'Tarumandy',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Rural y Turística',
      desc: 'Zona de exuberante naturaleza sobre la ruta eco-turística Luque - San Bernardino. Fincas recreativas, balnearios naturales y productores de frutas.',
      equipments: ['Puesto de Salud Tarumandy', 'Escuela Rural', 'Capilla San Roque'],
      comisiones: 'Comisión de Productores de Tarumandy',
    },
    {
      id: 'canada-san-rafael',
      name: 'Cañada San Rafael',
      zone: 'Zona Sur',
      type: 'Barrio Residencial',
      desc: 'Comunidad residencial pujante, caracterizada por cooperativas activas, comités de mujeres emprendedoras y pavimentación comunitaria.',
      equipments: ['Plaza San Rafael', 'Centro Educativo Inicial', 'Salón Comunitario'],
      comisiones: 'Comisión Vecinal San Rafael',
    },
    {
      id: 'costa-sosa',
      name: 'Costa Sosa',
      zone: 'Zona Sur',
      type: 'Compañía en Crecimiento',
      desc: 'Sector que ha experimentado un vertiginoso desarrollo vial e inmobiliario con nuevas avenidas que conectan con la autopista y el centro.',
      equipments: ['Dispensario Médico Costa Sosa', 'Escuela Graduada', 'Canchas sintéticas'],
      comisiones: 'Comisión Pro-Empedrado y Seguridad Costa Sosa',
    },
    {
      id: 'itapuami',
      name: 'Itapuamí',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Tradicional del Norte',
      desc: 'Compañía de serena belleza campestre, con pequeñas granjas agropecuarias que abastecen de hortalizas y lácteos frescos a la ciudad.',
      equipments: ['Capilla San Pedro', 'Escuela Rural N° 812', 'Plaza Itapuamí'],
      comisiones: 'Comité de Vecinos Itapuamí',
    },
    {
      id: 'yuquyry',
      name: 'Yuquyry',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Limítrofe del Humedal',
      desc: 'Ubicada en el límite con Areguá, rodeada de humedales y esteros ricos en biodiversidad. Punto clave en la preservación de cuencas hídricas.',
      equipments: ['Centro Escolar Yuquyry', 'Puesto Policial', 'Club Deportivo Yuquyry'],
      comisiones: 'Comisión Ambiental y Vecinal Yuquyry',
    },
    {
      id: 'campo-grande',
      name: 'Campo Grande (Luque)',
      zone: 'Casco Central',
      type: 'Barrio Urbano de Alta Plusvalía',
      desc: 'Zona residencial contigua al Parque Ñu Guasu y el Aeropuerto Silvio Pettirossi. Destacada por su infraestructura moderna y residencias familiares.',
      equipments: ['Parque Ñu Guasu (Sector Luque)', 'Parroquia San Cristóbal', 'Complejos Deportivos'],
      comisiones: 'Junta Vecinal Campo Grande',
    },
    {
      id: 'loma-merlo',
      name: 'Loma Merlo',
      zone: 'Casco Central',
      type: 'Barrio Corporativo y Residencial',
      desc: 'Sede de hoteles internacionales, centros corporativos y la proximidad con la CONMEBOL. Punto estratégico de la entrada a Luque.',
      equipments: ['Sede CONMEBOL', 'Hoteles 5 estrellas', 'Autopista Internacional'],
      comisiones: 'Asociación de Fomento Loma Merlo',
    },
    {
      id: 'ykua-karanday',
      name: 'Ykuá Karanda\'y',
      zone: 'Zona Sur',
      type: 'Barrio Histórico de Manantiales',
      desc: 'Famoso históricamente por sus vertientes y manantiales naturales donde se reunían las lavanderas y artesanos de la cestería de karanda\'y.',
      equipments: ['Manantial Histórico Ykuá', 'Capilla Comunitaria', 'Plazoleta Verde'],
      comisiones: 'Comisión de Rescate Cultural Ykuá Karanda\'y',
    },
  ];

  const zones = ['Todos', 'Casco Central', 'Zona Sur', 'Zona Norte y Compañías'];

  const filteredBarrios = useMemo(() => {
    return barrios.filter((b) => {
      const matchesZone = selectedZone === 'Todos' || b.zone === selectedZone;
      const cleanTerm = searchTerm.toLowerCase().trim();
      if (!cleanTerm) return matchesZone;
      const haystack = (b.name + ' ' + b.desc + ' ' + b.type + ' ' + b.equipments.join(' ')).toLowerCase();
      return matchesZone && haystack.includes(cleanTerm);
    });
  }, [searchTerm, selectedZone]);

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="DIVISIÓN TERRITORIAL Y COMUNIDAD"
        title="Barrios y Compañías de Luque"
        subtitle="Conocé los 28 barrios y compañías que componen el municipio de Luque: equipamiento comunitario, centros de salud, escuelas y comisiones vecinales activas."
        category="Ciudad"
        badge="Territorio Comunal"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Métricas territoriales */}
          <div className="barrios-stats-grid">
            <div className="barrio-stat-box">
              <Building2 size={24} />
              <div>
                <b>28 Barrios y Compañías</b>
                <span>Estructura municipal integrada</span>
              </div>
            </div>
            <div className="barrio-stat-box">
              <Users size={24} />
              <div>
                <b>+180 Comisiones Vecinales</b>
                <span>Participación ciudadana activa</span>
              </div>
            </div>
            <div className="barrio-stat-box">
              <HeartPulse size={24} />
              <div>
                <b>22 Unidades de Salud (USF)</b>
                <span>Atención primaria en territorio</span>
              </div>
            </div>
            <div className="barrio-stat-box">
              <GraduationCap size={24} />
              <div>
                <b>+90 Instituciones Educativas</b>
                <span>Escuelas y colegios públicos</span>
              </div>
            </div>
          </div>

          {/* Buscador de Barrios */}
          <div className="barrios-search-filter-wrap">
            <div className="search-field">
              <Search size={20} className="search-field-icon" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar por barrio, compañía, equipamiento o servicio..."
                aria-label="Buscar barrio de Luque"
              />
              {searchTerm && (
                <button className="clear-search-btn" onClick={() => setSearchTerm('')} aria-label="Limpiar búsqueda">
                  ×
                </button>
              )}
            </div>

            <div className="category-filters" role="tablist">
              {zones.map((zone) => {
                const count = zone === 'Todos' ? barrios.length : barrios.filter((b) => b.zone === zone).length;
                const isActive = selectedZone === zone;
                return (
                  <button
                    key={zone}
                    className={`cat-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedZone(zone)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <span>{zone}</span>
                    <span className="cat-count">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Resultados de Barrios */}
          <div className="search-results-bar">
            <span>
              Mostrando <strong>{filteredBarrios.length}</strong> de {barrios.length} barrios y compañías
              {selectedZone !== 'Todos' && ` en "${selectedZone}"`}
              {searchTerm && ` para "${searchTerm}"`}
            </span>
            {(searchTerm || selectedZone !== 'Todos') && (
              <button
                className="btn-reset"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedZone('Todos');
                }}
              >
                Ver todos los barrios
              </button>
            )}
          </div>

          {/* Grilla de Tarjetas de Barrios */}
          <div className="barrios-cards-grid">
            {filteredBarrios.map((b) => (
              <div className="barrio-detail-card" key={b.id}>
                <div className="barrio-card-header">
                  <div className="barrio-title-wrap">
                    <span className="barrio-zone-pill">{b.zone}</span>
                    <h3>{b.name}</h3>
                    <span className="barrio-type-label">{b.type}</span>
                  </div>
                </div>

                <p className="barrio-desc">{b.desc}</p>

                <div className="barrio-equipments-box">
                  <strong>Equipamiento e Hitos Comunitarios:</strong>
                  <div className="barrio-tags-wrap">
                    {b.equipments.map((eq, i) => (
                      <span className="barrio-equipment-tag" key={i}>
                        <CheckCircle2 size={12} />
                        <span>{eq}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="barrio-footer-info">
                  <div className="barrio-comision-row">
                    <Users size={14} />
                    <small><b>Organización:</b> {b.comisiones}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Banner de Participación Vecinal */}
          <div className="vecinos-participation-card">
            <div className="vecinos-card-icon">
              <Users size={32} />
            </div>
            <div className="vecinos-card-text">
              <h3>¿Formás parte de una Comisión Vecinal en Luque?</h3>
              <p>
                La Dirección de Bienestar Social y Participación Ciudadana brinda asesoramiento para el reconocimiento oficial,
                renovación de autoridades y presentación de proyectos comunitarios para plazas y empedrados.
              </p>
              <div className="vecinos-card-cta">
                <a href="#contacto" onClick={onBackToHome} className="btn btn-navy">
                  <span>Mesa de Atención a Comisiones Vecinales</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
