import { useState, useMemo } from 'react';
import BarriosMap from '../components/BarriosMap.jsx';
import PageHero from './PageHero.jsx';
import {
  Search,
  MapPin,
  Building2,
  Users,
  HeartPulse,
  GraduationCap,
  CheckCircle2,
  Map,
  Maximize2,
  Table,
  Layers,
  ExternalLink,
  X,
  Compass,
} from 'lucide-react';

export default function BarriosPage({ onBackToHome }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedZone, setSelectedZone] = useState('Todos');
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState('both'); // 'both', 'cards', 'table'

  // Los 28 Barrios Oficiales de Luque según la Ordenanza Municipal y Portal Oficial
  const barrios = [
    {
      num: 1,
      id: 'campo-grande',
      name: 'Campo Grande',
      zone: 'Casco Central / Oeste',
      type: 'Barrio Urbano y Residencial',
      desc: 'Sector residencial y de servicios colindante con el Parque Ñu Guasu y el Aeropuerto Internacional Silvio Pettirossi. Se destaca por sus modernos loteamientos, seguridad y rápidos accesos viales.',
      equipments: ['Parque Ñu Guasu (Sector Luque)', 'Parroquia San Cristóbal', 'Complejos Deportivos', 'Colegios Privados'],
      comisiones: 'Comisión Vecinal Campo Grande',
    },
    {
      num: 2,
      id: 'laurelty',
      name: 'Laurelty',
      zone: 'Zona Sur',
      type: 'Barrio Urbano e Industrial',
      desc: 'Pujante polo comercial, metalúrgico y de calzados que conecta Luque con San Lorenzo. Gran dinamismo vecinal con escuelas y clubes barriales activos.',
      equipments: ['Subcomisaría de Laurelty', 'Escuela San Rafael', 'Centro Comunitario', 'Talleres Manufactureros'],
      comisiones: 'Comisión Barrial Laurelty Seguro',
    },
    {
      num: 3,
      id: 'hugua-de-seda',
      name: 'Hugua de Seda',
      zone: 'Zona Sur',
      type: 'Barrio Residencial Tradicional',
      desc: 'Comunidad residencial de arraigo familiar y calles arboladas, ubicada en la transición entre el casco urbano y el sur del municipio. Fomenta el deporte infantil y juvenil.',
      equipments: ['Plazas Comunitarias', 'Escuela Básica', 'Capilla San Francisco', 'Canchas Deportivas'],
      comisiones: 'Comisión de Fomento Hugua de Seda',
    },
    {
      num: 4,
      id: 'isla-bogado',
      name: 'Isla Bogado',
      zone: 'Zona Sur',
      type: 'Compañía y Barrio del Sur',
      desc: 'Una de las áreas con mayor densidad demográfica y extensión de Luque, con límites hacia Capiatá y San Lorenzo. Intensa vida social y comercial comunitaria.',
      equipments: ['Centro de Salud Isla Bogado', 'Colegio Técnico Comunitario', 'Clubes de Fútbol Barrial', 'Comisarías'],
      comisiones: 'Coordinadora de Comisiones Vecinales de Isla Bogado',
    },
    {
      num: 5,
      id: 'canada-san-rafael',
      name: 'Cañada San Rafael',
      zone: 'Zona Sur',
      type: 'Barrio Residencial y Comunitario',
      desc: 'Barrio con activa organización de base vecinal, cooperativas de ahorro y crédito, y permanente ejecución de empedrados e iluminación comunitaria.',
      equipments: ['Plaza San Rafael', 'Centro Educativo Inicial', 'Salón Multiuso Comunitario', 'Dispensario'],
      comisiones: 'Comisión Vecinal Pro-Progreso San Rafael',
    },
    {
      num: 6,
      id: 'costa-sosa',
      name: 'Costa Sosa',
      zone: 'Zona Sur',
      type: 'Barrio y Compañía en Expansión',
      desc: 'Sector que ha experimentado un fuerte crecimiento urbanístico gracias a nuevas vías de interconexión pavimentadas que unen la autopista con el microcentro.',
      equipments: ['Dispensario Médico Costa Sosa', 'Escuela Graduada', 'Canchas sintéticas recreativas', 'Plazas'],
      comisiones: 'Comisión Pro-Empedrado y Seguridad Costa Sosa',
    },
    {
      num: 7,
      id: 'ycua-dure',
      name: 'Ycuá Duré',
      zone: 'Zona Central / Sur',
      type: 'Barrio Tradicional de Manantiales',
      desc: 'Barrio emblemático y de gran riqueza identitaria luqueña. Su nombre evoca las vertientes históricas que abastecían a la comunidad. Hoy cuenta con colegios y centros de salud.',
      equipments: ['USF Ycuá Duré', 'Colegios Públicos', 'Capilla y Centro Social', 'Polideportivos'],
      comisiones: 'Comisión Vecinal de Fomento Ycuá Duré',
    },
    {
      num: 8,
      id: 'makai',
      name: 'Maka’i',
      zone: 'Zona Sur',
      type: 'Barrio Residencial y Comercial',
      desc: 'Histórico asentamiento que honra al cacique Maka’i. Actualmente es uno de los ejes residenciales más pujantes de la ciudad, con supermercados, farmacias y escuelas.',
      equipments: ['USF Maka’i', 'Colegio Parroquial San José', 'Club Deportivo Maka’i', 'Plaza Comunitaria'],
      comisiones: 'Comisión Pro-Desarrollo Maka’i',
    },
    {
      num: 9,
      id: 'yaguarete-cora',
      name: 'Yaguareté Corá',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Histórica Rural-Urbana',
      desc: 'Tradicional compañía del norte de Luque cuyos antecedentes se remontan a las postas coloniales y áreas de pastoreo del siglo XVIII. Preserva su tranquilidad ambiental.',
      equipments: ['Escuela Básica Comunitaria', 'Capilla Barrial', 'Campos Deportivos', 'Puestos de Salud'],
      comisiones: 'Comisión Vecinal Yaguareté Corá',
    },
    {
      num: 10,
      id: 'marambure',
      name: 'Maramburé',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Tradicional Extensa',
      desc: 'Una de las compañías de mayor superficie y tradición agrícola de Luque, poblada por familias fundadoras y con nuevos desarrollos residenciales arbolados.',
      equipments: ['Puesto de Salud Maramburé', 'Escuela Graduada N° 451', 'Capilla San Blas', 'Subcomisaría Policial'],
      comisiones: 'Comisión Vecinal Unida de Maramburé',
    },
    {
      num: 11,
      id: 'primer-barrio',
      name: 'Primer Barrio',
      zone: 'Casco Central',
      type: 'Barrio Cívico e Histórico Auriazul',
      desc: 'El corazón cívico y deportivo de Luque. Sede oficial del Club Sportivo Luqueño y su mítico Estadio Feliciano Cáceres. Es epicentro de festejos ciudadanos y memoria patriótica.',
      equipments: ['Estadio Feliciano Cáceres', 'Escuela Gral. Elizardo Aquino', 'Sede Sportivo Luqueño', 'Paseos Comerciales'],
      comisiones: 'Comisión Vecinal Auriazul Primer Barrio',
    },
    {
      num: 12,
      id: 'segundo-barrio',
      name: 'Segundo Barrio',
      zone: 'Casco Central',
      type: 'Barrio Artesanal de Orfebres',
      desc: 'Cuna indiscutida de los maestros de la filigrana en oro y plata y luthiers de arpas paraguayas. Calles históricas adoquinadas y casonas de galerías continuas.',
      equipments: ['Talleres Tradicionales de Filigrana', 'Luthiers de Arpas y Guitarras', 'Institutos Educativos'],
      comisiones: 'Comisión de Fomento Segundo Barrio',
    },
    {
      num: 13,
      id: 'tercer-barrio',
      name: 'Tercer Barrio',
      zone: 'Casco Central',
      type: 'Barrio Urbano y Educativo',
      desc: 'Sede de emblemáticos colegios secundarios y dependencias cívicas. Conecta fluidamente el casco antiguo con las salidas hacia San Lorenzo y la ruta a Areguá.',
      equipments: ['Colegio Nacional de Luque', 'USF Tercer Barrio', 'Plazas Barriales', 'Centros Asistenciales'],
      comisiones: 'Comisión de Mejoramiento Barrial Tercer Barrio',
    },
    {
      num: 14,
      id: 'cuarto-barrio',
      name: 'Cuarto Barrio',
      zone: 'Casco Central',
      type: 'Barrio Residencial y Comercial Denso',
      desc: 'Área urbana densamente poblada con intensa actividad comercial de almacenes, farmacias y microempresas familiares, con clubes sociales y centros de salud.',
      equipments: ['Centro de Salud Municipal', 'Club Capitán Andrés Insfrán', 'Escuela Básica N° 267', 'Plazas Recreativas'],
      comisiones: 'Asociación de Vecinos de Cuarto Barrio',
    },
    {
      num: 15,
      id: 'zarate-isla',
      name: 'Zárate Isla',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Heroica y Productiva',
      desc: 'Cuna natal del ilustre héroe nacional Gral. José Elizardo Aquino. Combina huertas tradicionales, granjas y modernos loteamientos cerrados en constante valorización.',
      equipments: ['USF Zárate Isla', 'Capilla Virgen de Fátima', 'Club Social y Deportivo Zárate Isla', 'Colegios'],
      comisiones: 'Comisión Vecinal de Fomento Zárate Isla',
    },
    {
      num: 16,
      id: 'loma-merlo',
      name: 'Loma Merlo',
      zone: 'Casco Central / Oeste',
      type: 'Barrio Corporativo, Turístico y Hotelero',
      desc: 'Estratégico polo internacional de Luque. Concentra la sede de la CONMEBOL, cadenas hoteleras 5 estrellas y modernos edificios corporativos sobre la autopista.',
      equipments: ['Sede Central y Museo de la CONMEBOL', 'Hoteles 5 Estrellas', 'Autopista Silvio Pettirossi'],
      comisiones: 'Asociación de Vecinos Loma Merlo',
    },
    {
      num: 17,
      id: 'ykua-karanday',
      name: 'Ykua Karanda’y',
      zone: 'Zona Central / Sur',
      type: 'Barrio Histórico de Manantiales y Artesanía',
      desc: 'Histórico enclave de nacientes de agua dulce y tejedoras de fibras de palma karanda’y (sombreros, cestos y pantallas tradicionales). Símbolo de laboriosidad comunitaria.',
      equipments: ['Manantial Histórico Ykua', 'Capilla Comunitaria', 'Plazoleta Verde y Canchas', 'Talleres de Artesanía'],
      comisiones: 'Comisión de Rescate Cultural e Hídrico Ykua Karanda’y',
    },
    {
      num: 18,
      id: 'ykaa',
      name: 'Yka’a',
      zone: 'Zona Sur',
      type: 'Barrio Residencial y Productivo',
      desc: 'Nombrado en memoria del antiguo cacique Yka’a. Sector dinámico con talleres de confección textil, carpinterías y una conexión directa hacia el este del departamento.',
      equipments: ['USF Yka’a', 'Escuela Básica Graduada', 'Plaza San Antonio', 'Capillas Tradicionales'],
      comisiones: 'Comisión de Acción Vecinal Yka’a',
    },
    {
      num: 19,
      id: 'mora-kue',
      name: 'Mora Kue',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Residencial y Comercial',
      desc: 'Extensa y poblada compañía del sector norte luqueño. Cuenta con un activo movimiento comercial sobre sus arterias pavimentadas, cooperativas y centros escolares.',
      equipments: ['USF Mora Kue', 'Colegios Públicos y Subvencionados', 'Plaza Deportiva Mora Kue', 'Puestos Policiales'],
      comisiones: 'Comisión Vecinal Pro-Progreso Mora Kue',
    },
    {
      num: 20,
      id: 'canada-garay',
      name: 'Cañada Garay',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Semirrural y Residencial',
      desc: 'Comunidad caracterizada por su tranquilidad campestre, quintas familiares de fin de semana y comités vecinales abocados al mejoramiento de caminos vecinales.',
      equipments: ['Escuela Básica N° 340', 'Capilla San Roque', 'Cancha Comunitaria', 'Salón Vecinal'],
      comisiones: 'Comisión Vecinal Cañada Garay',
    },
    {
      num: 21,
      id: 'yukyry',
      name: 'Yukyry',
      zone: 'Zona Este / Humedales',
      type: 'Compañía Histórica y de Humedales',
      desc: 'Asentamiento histórico a orillas del arroyo de aguas saladas Yukyry, fundamental en los orígenes coloniales de 1537. Importante corredor ecológico de humedales.',
      equipments: ['Puente y Cuenca Yukyry', 'Centro Escolar', 'Capilla Tradicional', 'Puestos de Auxilio'],
      comisiones: 'Comisión Ambiental y Vecinal Yukyry',
    },
    {
      num: 22,
      id: 'ita-angua',
      name: 'Itá Angu’a',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Tradicional',
      desc: 'Compañía de hermosos paisajes serranos y topografía quebrada, con pobladores dedicados a la agricultura familiar, quintas y producción comunitaria.',
      equipments: ['Capilla San Isidro Labrador', 'Escuela Rural', 'Salón Social Barrial', 'Canchas'],
      comisiones: 'Comisión de Vecinos Itá Angu’a',
    },
    {
      num: 23,
      id: 'marin-kaaguy',
      name: 'Marin Ka’aguy',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Ecológica y Rural',
      desc: 'Sector preservado con vegetación nativa y arroyos cristalinos. Destacado por su entorno pacífico, granjas avícolas y fincas de esparcimiento.',
      equipments: ['Escuela Básica', 'Senderos Verdes', 'Comité de Productores', 'Capilla Comunitaria'],
      comisiones: 'Comisión de Fomento Marin Ka’aguy',
    },
    {
      num: 24,
      id: 'tarumandy',
      name: 'Tarumandy',
      zone: 'Zona Norte / Ruta a San Ber',
      type: 'Compañía Turística y Eco-Recreativa',
      desc: 'Eje ecoturístico sobre la ruta Luque - San Bernardino. Ofrece posadas campestres, balnearios naturales sobre arroyos y productores frutihortícolas locales.',
      equipments: ['Puesto de Salud Tarumandy', 'Balnearios y Posadas Turísticas', 'Escuela Rural', 'Capilla San Roque'],
      comisiones: 'Comisión de Turismo y Productores de Tarumandy',
    },
    {
      num: 25,
      id: 'itapuami-1',
      name: 'Itapuamí I',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Agropecuaria y Campestre',
      desc: 'Primera sección de la histórica compañía Itapuamí. Reconocida por sus tambos lecheros tradicionales, huertas orgánicas y apacible vida comunitaria.',
      equipments: ['Capilla San Pedro', 'Escuela Rural N° 812', 'Plaza Itapuamí', 'Comités Agrícolas'],
      comisiones: 'Comité de Vecinos Itapuamí I',
    },
    {
      num: 26,
      id: 'itapuami-2',
      name: 'Itapuamí II',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía Agropecuaria de Altura',
      desc: 'Segunda sección en colindancia con las serranías de la Cordillera de los Altos. Destacan sus panorámicas naturales, pequeñas chacras y cría de animales menores.',
      equipments: ['Escuela Comunitaria', 'Puesto Policial Rural', 'Centro de Acopio Agrícola', 'Capilla'],
      comisiones: 'Comisión Vecinal Itapuamí II',
    },
    {
      num: 27,
      id: 'tarumandy-rio-salado',
      name: 'Tarumandy del Río Salado',
      zone: 'Zona Norte / Cuenca del Lago',
      type: 'Compañía Ribereña y Ecológica',
      desc: 'Sector ribereño sobre las márgenes del Río Salado, afluente del Lago Ypacaraí. Zona de alto valor biológico, pesca artesanal y reservas naturales.',
      equipments: ['Embarcadero y Mirador del Río Salado', 'Escuela Rural', 'Puesto de Guardaparques', 'Capilla'],
      comisiones: 'Comisión de Protección Ribereña Río Salado',
    },
    {
      num: 28,
      id: 'nueva-asuncion',
      name: 'Nueva Asunción',
      zone: 'Zona Norte y Compañías',
      type: 'Compañía en Consolidación Urbana',
      desc: 'Comunidad en constante desarrollo urbanístico, caracterizada por la llegada de nuevas familias, comités pro-empedrado y extensión de redes de servicios básicos.',
      equipments: ['Plaza Comunitaria Nueva Asunción', 'Capilla Vecinal', 'Comité de Mejoramiento Barrial'],
      comisiones: 'Comisión Pro-Desarrollo Nueva Asunción',
    },
  ];

  const zones = ['Todos', 'Casco Central', 'Zona Sur', 'Zona Norte y Compañías'];

  const filteredBarrios = useMemo(() => {
    return barrios.filter((b) => {
      let matchesZone = true;
      if (selectedZone === 'Casco Central') {
        matchesZone = b.zone.includes('Casco Central');
      } else if (selectedZone === 'Zona Sur') {
        matchesZone = b.zone.includes('Zona Sur') || b.zone.includes('Central / Sur');
      } else if (selectedZone === 'Zona Norte y Compañías') {
        matchesZone = b.zone.includes('Zona Norte') || b.zone.includes('Zona Este');
      }

      const cleanTerm = searchTerm.toLowerCase().trim();
      if (!cleanTerm) return matchesZone;

      const numStr = b.num.toString();
      const haystack = (
        b.name +
        ' ' +
        numStr +
        ' ' +
        b.desc +
        ' ' +
        b.type +
        ' ' +
        b.equipments.join(' ') +
        ' ' +
        b.comisiones
      ).toLowerCase();

      return matchesZone && (haystack.includes(cleanTerm) || cleanTerm === numStr);
    });
  }, [searchTerm, selectedZone]);

  const scrollToBarrio = (id) => {
    const el = document.getElementById(`barrio-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('barrio-highlight-pulse');
      setTimeout(() => {
        el.classList.remove('barrio-highlight-pulse');
      }, 2000);
    }
  };

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="DIVISIÓN TERRITORIAL Y COMUNIDAD"
        title="Barrios y Compañías de Luque"
        subtitle="Conocé los 28 barrios y compañías oficiales que componen la estructura municipal de Luque: mapa territorial, nómina oficial, equipamiento comunitario y comisiones vecinales."
        category="Ciudad"
        badge="Nomenclatura Municipal Oficial"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Métricas territoriales */}
          <div className="barrios-stats-grid">
            <div className="barrio-stat-box">
              <Building2 size={24} />
              <div>
                <b>28 Barrios Oficiales</b>
                <span>Estructura municipal homologada</span>
              </div>
            </div>
            <div className="barrio-stat-box">
              <Users size={24} />
              <div>
                <b>+180 Comisiones Vecinales</b>
                <span>Participación comunitaria activa</span>
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

          {/* SECCIÓN PRINCIPAL: TABLA OFICIAL Y MAPA TERRITORIAL */}
          <div className="barrios-official-banner-wrap" style={{ marginBottom: '2.5rem' }}>
            <div className="barrios-layout-split">
              {/* Columna Izquierda: Tabla Oficial de los 28 Barrios (Exacta del Portal Oficial) */}
              <div className="barrios-table-card">
                <div className="barrios-table-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Table size={18} style={{ color: 'var(--accent-yellow)' }} />
                    <span className="barrios-table-eyebrow">NÓMINA INSTITUCIONAL</span>
                  </div>
                  <h3>Barrios de Luque (Oficial N.º 1 al 28)</h3>
                  <p>Hacé clic en cualquier barrio para ubicar su ficha informativa detallada:</p>
                </div>

                <div className="barrios-table-scroll-container">
                  <table className="barrios-wikitable">
                    <thead>
                      <tr>
                        <th style={{ width: '40px', textAlign: 'center' }}>N.º</th>
                        <th>Barrio / Compañía</th>
                        <th style={{ width: '40px', textAlign: 'center' }}>N.º</th>
                        <th>Barrio / Compañía</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: 14 }).map((_, idx) => {
                        const left = barrios[idx];
                        const right = barrios[idx + 14];

                        return (
                          <tr key={idx}>
                            <td className="td-num">
                              <b>{left.num}</b>
                            </td>
                            <td className="td-name">
                              <button
                                type="button"
                                className="table-barrio-link"
                                onClick={() => scrollToBarrio(left.id)}
                                title={`Ver detalles de ${left.name}`}
                              >
                                {left.name}
                              </button>
                            </td>
                            <td className="td-num">
                              <b>{right.num}</b>
                            </td>
                            <td className="td-name">
                              <button
                                type="button"
                                className="table-barrio-link"
                                onClick={() => scrollToBarrio(right.id)}
                                title={`Ver detalles de ${right.name}`}
                              >
                                {right.name}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                <div style={{ padding: '0.75rem 1.25rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', fontSize: '0.78rem', color: '#64748b' }}>
                  <span>* Clasificación oficial según el Catastro Territorial de la Municipalidad de Luque.</span>
                </div>
              </div>

              {/* Columna Derecha: Mapa Territorial Oficial */}
              <div className="barrios-map-card">
                <div className="barrios-map-header">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Map size={18} style={{ color: 'var(--primary-blue)' }} />
                      <span className="barrios-map-eyebrow">PLANO GENERAL DEL DISTRITO</span>
                    </div>
                    <button
                      type="button"
                      className="btn-expand-map"
                      onClick={() => setIsMapModalOpen(true)}
                      title="Ver mapa en pantalla completa"
                    >
                      <Maximize2 size={14} />
                      <span>Pantalla Completa</span>
                    </button>
                  </div>
                  <h3>Mapa de Barrios y Lugares Turísticos</h3>
                </div>

<BarriosMap className="barrios-map-img-frame" style={{ width: '100%', height: '420px' }} />

                <div style={{ padding: '0.85rem 1.25rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontSize: '0.8rem', color: '#475569' }}>
                  <span>División política con límites y principales atractivos</span>
                  <a
                    href="https://www.google.com/maps/place/Luque,+Paraguay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-download-link"
                    style={{ color: 'var(--primary-blue)', fontWeight: 700, textDecoration: 'none' }}
                  >
                    Abrir en Google Maps ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BUSCADOR Y FILTROS POR ZONA */}
          <div className="barrios-search-filter-wrap">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
              <div className="search-field" style={{ flex: '1 1 320px', maxWidth: '500px' }}>
                <Search size={20} className="search-field-icon" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar barrio por nombre, número (1-28) o equipamiento..."
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
                  let count = 0;
                  if (zone === 'Todos') count = barrios.length;
                  else if (zone === 'Casco Central') count = barrios.filter((b) => b.zone.includes('Casco Central')).length;
                  else if (zone === 'Zona Sur') count = barrios.filter((b) => b.zone.includes('Zona Sur') || b.zone.includes('Central / Sur')).length;
                  else if (zone === 'Zona Norte y Compañías') count = barrios.filter((b) => b.zone.includes('Zona Norte') || b.zone.includes('Zona Este')).length;

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
          </div>

          {/* Barra de Resultados */}
          <div className="search-results-bar">
            <span>
              Mostrando <strong>{filteredBarrios.length}</strong> de {barrios.length} barrios y compañías oficiales
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

          {/* GRILLA DE TARJETAS DE LOS 28 BARRIOS */}
          <div className="barrios-cards-grid">
            {filteredBarrios.map((b) => (
              <div className="barrio-detail-card" key={b.id} id={`barrio-${b.id}`}>
                <div className="barrio-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span className="barrio-official-num-pill">N.º {b.num < 10 ? `0${b.num}` : b.num}</span>
                    <span className="barrio-zone-pill">{b.zone}</span>
                  </div>

                  <div className="barrio-title-wrap">
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
                    <small>
                      <b>Organización:</b> {b.comisiones}
                    </small>
                  </div>

                  <a
                    href={`https://www.google.com/maps/search/Luque+Paraguay+Barrio+${encodeURIComponent(b.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="barrio-map-link-btn"
                    title={`Ver ${b.name} en Google Maps`}
                  >
                    <MapPin size={13} />
                    <span>Ubicar en Mapa</span>
                    <ExternalLink size={12} style={{ opacity: 0.7 }} />
                  </a>
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
                La Dirección de Bienestar Social y Participación Ciudadana brinda asesoramiento técnico para el
                reconocimiento municipal oficial, asambleas de renovación de autoridades barriales y presentación
                de proyectos de plazas, empedrados, iluminación y saneamiento ambiental.
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

      {/* MODAL DE MAPA EN PANTALLA COMPLETA */}
      {isMapModalOpen && (
        <div className="barrio-modal-overlay" onClick={() => setIsMapModalOpen(false)}>
          <div className="barrio-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="barrio-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <Map size={20} style={{ color: 'var(--accent-yellow)' }} />
                <h4>Plano Oficial de Barrios y Puntos Turísticos de Luque</h4>
              </div>
              <button
                type="button"
                className="barrio-modal-close-btn"
                onClick={() => setIsMapModalOpen(false)}
                aria-label="Cerrar modal"
              >
                <X size={20} />
              </button>
            </div>
            <div className="barrio-modal-body" style={{ padding: 0 }}>
              <iframe
                src="https://maps.google.com/maps?q=Luque,+Paraguay&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Mapa oficial ampliado de Luque"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                style={{ width: '100%', height: '70vh', minHeight: '420px', border: 0, display: 'block' }}
              ></iframe>
            </div>
            <div className="barrio-modal-footer">
              <span>Municipalidad de Luque · Departamento Central, Paraguay</span>
              <a
                href="https://www.google.com/maps/place/Luque,+Paraguay"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-navy"
                style={{ padding: '0.4rem 0.9rem', fontSize: '0.85rem' }}
              >
                Abrir en Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
