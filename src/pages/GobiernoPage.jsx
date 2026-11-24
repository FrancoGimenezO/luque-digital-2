import { useState, useEffect, useMemo } from 'react';
import PageHero from './PageHero.jsx';
import {
  UserCheck,
  Users,
  Building,
  Mail,
  Phone,
  Search,
  ExternalLink,
  Flag,
  Calendar,
  MapPin,
  Award,
  ShieldCheck,
  Briefcase,
  ChevronRight,
} from 'lucide-react';
import { mayorInfo } from '../data/content.js';

export default function GobiernoPage({ defaultTab = 'intendente', onBackToHome }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'intendente') window.location.hash = '#intendente';
    if (tab === 'junta') window.location.hash = '#junta-municipal';
    if (tab === 'directores') window.location.hash = '#directores';
  };

  // Estados para Concejales
  const [concejalFilter, setConcejalFilter] = useState('Todos');
  const [concejalSearch, setConcejalSearch] = useState('');

  // Estados para Directores
  const [directorFilter, setDirectorFilter] = useState('Todos');
  const [directorSearch, setDirectorSearch] = useState('');

  // Nómina oficial de los 26 Directores y Encargados de Área de la Municipalidad de Luque
  const directores = [
    {
      id: 'tania-bavera',
      name: 'Dra. Tania Bavera',
      cargo: 'Directora de Gabinete',
      area: 'Gabinete y Finanzas',
      image: '/directores/tania-bavera.png',
      functions:
        'Coordinación ejecutiva del gabinete del Intendente Municipal, planificación estratégica y articulación de políticas públicas entre todas las dependencias.',
    },
    {
      id: 'nelly-gonzalez',
      name: 'Abg. Nelly González',
      cargo: 'Unidad de Transparencia y Anticorrupción',
      area: 'Gabinete y Finanzas',
      image: '/directores/nelly-gonzalez.jpeg',
      functions:
        'Garantía del derecho ciudadano de acceso a la información pública (Ley 5282/14), rendición de cuentas, prevención de conflictos de interés e integridad.',
    },
    {
      id: 'manuel-gonzalez',
      name: 'Abg. Manuel González',
      cargo: 'Dirección de Secretaría General',
      area: 'Gabinete y Finanzas',
      image: '/directores/manuel-gonzalez.jpg',
      functions:
        'Refrendo de resoluciones y decretos del ejecutivo comunal, gestión de expedientes administrativos y custodia del archivo general institucional.',
    },
    {
      id: 'german-espinola',
      name: 'C.P. Germán Espínola',
      cargo: 'Director de Auditoría Interna',
      area: 'Gabinete y Finanzas',
      image: '/directores/german-espinola.jpg',
      functions:
        'Fiscalización y evaluación técnica de los procesos contables, administrativos y cumplimiento del Modelo Estándar de Control Interno (MECIP).',
    },
    {
      id: 'raul-salinas',
      name: 'Abg. Raúl Salinas',
      cargo: 'Director de Asuntos Jurídicos',
      area: 'Gabinete y Finanzas',
      image: '/directores/raul-salinas.jpg',
      functions:
        'Asesoramiento legal al Intendente, defensa patrimonial de los bienes de la comuna luqueña, dictámenes jurídicos y patrocinio en causas institucionales.',
    },
    {
      id: 'armando-maldonado',
      name: 'Dr. Armando Maldonado',
      cargo: 'Director Unidad Operativa de Contrataciones (UOC)',
      area: 'Gabinete y Finanzas',
      image: '/directores/armando-maldonado.jpg',
      functions:
        'Licitaciones públicas, contrataciones directas y concursos de ofertas bajo normativas de la Dirección Nacional de Contrataciones Públicas (DNCP).',
    },
    {
      id: 'joel-coronel',
      name: 'Joel Francisco Coronel Martínez',
      cargo: 'Director de Administración y Finanzas',
      area: 'Gabinete y Finanzas',
      image: '/directores/joel-coronel.jpg',
      functions:
        'Gestión presupuestaria, tesorería comunal, recaudación tributaria, contabilidad fiscal y cumplimiento de pagos a proveedores y obras.',
    },
    {
      id: 'adrian-gonzalez',
      name: 'Arq. Adrián González',
      cargo: 'Director de Obras Públicas Municipales',
      area: 'Obras y Urbanismo',
      image: '/directores/adrian-gonzalez.jpg',
      functions:
        'Ejecución del plan integral de pavimentación asfáltica, empedrados, puentes, canalizaciones pluviales y mejoras viales en los 28 barrios.',
    },
    {
      id: 'viviana-torres',
      name: 'Arq. Viviana Torres',
      cargo: 'Directora de Obras Particulares Municipales',
      area: 'Obras y Urbanismo',
      image: '/directores/viviana-torres.jpg',
      functions:
        'Aprobación de planos arquitectónicos, fiscalización de construcciones civiles y loteamientos conforme al Plan de Ordenamiento Territorial.',
    },
    {
      id: 'francisco-ojeda',
      name: 'Sr. Francisco Ojeda',
      cargo: 'Director de Servicios Generales',
      area: 'Obras y Urbanismo',
      image: '/directores/francisco-ojeda.jpg',
      functions:
        'Mantenimiento continuo de edificios comunales, logística pesada, soporte en operativos comunitarios y provisión de servicios auxiliares.',
    },
    {
      id: 'elena-nunez',
      name: 'Lic. Elena Nuñez',
      cargo: 'Directora de Gestión Ambiental',
      area: 'Ambiente y Salud',
      image: '/directores/elena-nunez.jpg',
      functions:
        'Preservación de cauces hídricos, control de efluentes, arborización con especies nativas, fiscalización ambiental y educación ecológica barrial.',
    },
    {
      id: 'luis-ruiz',
      name: 'Lic. Luis Ruiz',
      cargo: 'Director de Higiene y Salubridad',
      area: 'Ambiente y Salud',
      image: '/directores/luis-ruiz.jpg',
      functions:
        'Inspección bromatológica diaria de carnes y alimentos en mercados, control higiénico comercial y campañas permanentes de vacunación y zoonosis.',
    },
    {
      id: 'pedro-gonzalez',
      name: 'Abg. Pedro González',
      cargo: 'Director de Aseo Urbano',
      area: 'Ambiente y Salud',
      image: '/directores/pedro-gonzalez.jpeg',
      functions:
        'Recolección sistemática de residuos sólidos domiciliarios, barrido continuo de calles y avenidas, y erradicación de vertederos clandestinos.',
    },
    {
      id: 'jose-franco',
      name: 'Dr. José Franco',
      cargo: 'Director de la Clínica Municipal',
      area: 'Ambiente y Salud',
      image: '/directores/jose-franco.jpeg',
      functions:
        'Atención médica comunitaria gratuita, consultas pediátricas, ginecológicas, odontología y entrega asistida de medicamentos esenciales.',
    },
    {
      id: 'christian-gill',
      name: 'Sr. Christian David Gill Chaparro',
      cargo: 'Director de Tránsito',
      area: 'Tránsito y Seguridad',
      image: '/directores/christian-gill.jpg',
      functions:
        'Planificación vial, semaforización inteligente, señalización vial y emisión moderna de licencias de conducir y habilitaciones de rodados.',
    },
    {
      id: 'griselda-ibarrola',
      name: 'Abg. Griselda Ibarrola',
      cargo: 'Directora de Policía Municipal de Tránsito (PMT)',
      area: 'Tránsito y Seguridad',
      image: '/directores/griselda-ibarrola.jpeg',
      functions:
        'Control y ordenamiento del tráfico automotor, patrullajes preventivos en zonas escolares y auxilio permanente en arterias de alto tránsito.',
    },
    {
      id: 'bruno-romero',
      name: 'Cnel. Bruno Romero',
      cargo: 'Director de Seguridad',
      area: 'Tránsito y Seguridad',
      image: '/directores/bruno-romero.jpg',
      functions:
        'Resguardo de dependencias comunales y espacios públicos, coordinación preventiva con la Policía Nacional y centros de monitoreo ciudadano.',
    },
    {
      id: 'daysi-rolon',
      name: 'Lic. Daysi Rolón',
      cargo: 'Directora de Territorio Social',
      area: 'Desarrollo Social',
      image: '/directores/daysi-rolon.jpg',
      functions:
        'Regularización jurídica y dominial de asentamientos, mediación comunitaria y canalización de obras básicas en zonas de urbanización social.',
    },
    {
      id: 'angelica-gimenez',
      name: 'Abg. María Angélica Giménez',
      cargo: 'Directora de Protección de Derecho de la Mujer',
      area: 'Desarrollo Social',
      image: '/directores/angelica-gimenez.jpg',
      functions:
        'Contención integral psicológica y jurídica a mujeres, talleres de empoderamiento laboral y prevención activa de la violencia intrafamiliar.',
    },
    {
      id: 'fernando-sosa',
      name: 'Sr. Fernando Sosa González',
      cargo: 'Director de Promoción y Desarrollo Social',
      area: 'Desarrollo Social',
      image: '/directores/fernando-sosa.jpg',
      functions:
        'Apoyo nutricional a comedores comunitarios barriales, atención inmediata ante emergencias climáticas y programas de inclusión ciudadana.',
    },
    {
      id: 'nadia-vazquez',
      name: 'Lic. Nadia Vázquez',
      cargo: 'Directora de CODENI',
      area: 'Desarrollo Social',
      image: '/directores/nadia-vazquez.jpg',
      functions:
        'Defensa y garantía de los derechos de niños, niñas y adolescentes luqueños conforme a las directrices del Código de la Niñez y la Adolescencia.',
    },
    {
      id: 'belen-villamayor',
      name: 'Lic. Belén Villamayor',
      cargo: 'Directora de Educación y Cultura',
      area: 'Cultura, Deportes y TI',
      image: '/directores/belen-villamayor.jpeg',
      functions:
        'Gestión de la Escuela Municipal de Danza y Arpa, promoción de la filigrana y artesanías, bibliotecas municipales y agenda cultural patriótica.',
    },
    {
      id: 'francisco-guerrero',
      name: 'Francisco Guerrero',
      cargo: 'Director de Deportes',
      area: 'Cultura, Deportes y TI',
      image: '/directores/francisco-guerrero.jpg',
      functions:
        'Coordinación de torneos barriales, escuelas formativas gratuitas de fútbol y atletismo, y acondicionamiento de plazas deportivas y ciclovía.',
    },
    {
      id: 'jessica-gomez',
      name: 'Lic. Jessica Gómez',
      cargo: 'Directora de Gestión y Desarrollo de Personas',
      area: 'Cultura, Deportes y TI',
      image: '/directores/jessica-gomez.jpeg',
      functions:
        'Capacitación y desarrollo profesional del funcionariado comunal, concursos de méritos, bienestar institucional y profesionalización del servicio público.',
    },
    {
      id: 'tomas-servin',
      name: 'Sr. Tomas Servín',
      cargo: 'Director de Gestión y Desarrollo de Mercado',
      area: 'Cultura, Deportes y TI',
      image: '/directores/tomas-servin.jpg',
      functions:
        'Administración y modernización del Mercado Municipal N° 1 y N° 2, ordenamiento de permisionarios y apoyo logístico a ferias agropecuarias.',
    },
    {
      id: 'javier-jacquet',
      name: 'Javier Jacquet',
      cargo: 'Director de Informática',
      area: 'Cultura, Deportes y TI',
      image: '/directores/javier-jacquet.jpg',
      functions:
        'Modernización tecnológica municipal, mantenimiento de la infraestructura de redes y servidores, trámites digitales y portal institucional.',
    },
  ];

  // Nómina oficial de Concejales Municipales de Luque (12 Concejales)
  const concejales = [
    {
      id: 'arnaldo-baeza',
      name: 'Abg. Arnaldo Baeza',
      cargo: 'Presidente',
      isMesaDirectiva: true,
      partido: 'Partido Colorado (ANR)',
      partidoCorto: 'ANR',
      partidoColor: '#dd3333',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Colorado_(Paraguay)',
      image: '/concejales/ABG. ARNALDO BAEZA - COLORADO.jpg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
    {
      id: 'francisca-franco',
      name: 'Francisca Franco',
      cargo: 'Vice Presidenta',
      isMesaDirectiva: true,
      partido: 'Partido Liberal Radical Auténtico (PLRA)',
      partidoCorto: 'PLRA',
      partidoColor: '#1d56c1',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Liberal_Radical_Aut%C3%A9ntico',
      image: '/concejales/MAG. FRANCISCA FRANCO - LIBERAL.jpg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
    {
      id: 'hans-kemper',
      name: 'Abg. Hans Kemper',
      cargo: 'Concejal Municipal',
      isMesaDirectiva: false,
      partido: 'Partido Colorado (ANR)',
      partidoCorto: 'ANR',
      partidoColor: '#dd3333',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Colorado_(Paraguay)',
      image: '/concejales/ABG. HANS KEMPER - COLORADO.jpg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
    {
      id: 'enrique-quintana',
      name: 'Enrique Quintana',
      cargo: 'Concejal Municipal',
      isMesaDirectiva: false,
      partido: 'Partido Colorado (ANR)',
      partidoCorto: 'ANR',
      partidoColor: '#dd3333',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Colorado_(Paraguay)',
      image: '/concejales/ABG. ENRIQUE QUINTANA - CONCEJAL.jpg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
    {
      id: 'ruben-chavez',
      name: 'Rubén G. Chávez',
      cargo: 'Concejal Municipal',
      isMesaDirectiva: false,
      partido: 'Partido Colorado (ANR)',
      partidoCorto: 'ANR',
      partidoColor: '#dd3333',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Colorado_(Paraguay)',
      image: '/concejales/ruben-chavez.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
    {
      id: 'eliseo-fernandez',
      name: 'Eliseo Fernández',
      cargo: 'Concejal Municipal',
      isMesaDirectiva: false,
      partido: 'Partido Colorado (ANR)',
      partidoCorto: 'ANR',
      partidoColor: '#dd3333',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Colorado_(Paraguay)',
      image: '/concejales/eliseo-fernandez.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
    {
      id: 'manuel-achucarro',
      name: 'Abg. Manuel Achucarro',
      cargo: 'Concejal Municipal',
      isMesaDirectiva: false,
      partido: 'Partido Liberal Radical Auténtico (PLRA)',
      partidoCorto: 'PLRA',
      partidoColor: '#1d56c1',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Liberal_Radical_Aut%C3%A9ntico',
      image: '/concejales/manuel-achucarro.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
    {
      id: 'belen-maldonado',
      name: 'Belén Maldonado',
      cargo: 'Concejal Municipal',
      isMesaDirectiva: false,
      partido: 'Partido Liberal Radical Auténtico (PLRA)',
      partidoCorto: 'PLRA',
      partidoColor: '#1d56c1',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Liberal_Radical_Aut%C3%A9ntico',
      image: '/concejales/belen-maldonado.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
    {
      id: 'jose-meza',
      name: 'Dr. José Meza',
      cargo: 'Concejal Municipal',
      isMesaDirectiva: false,
      partido: 'Partido Liberal Radical Auténtico (PLRA)',
      partidoCorto: 'PLRA',
      partidoColor: '#1d56c1',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Liberal_Radical_Aut%C3%A9ntico',
      image: '/concejales/jose-meza.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
    {
      id: 'juan-angel-marecos',
      name: 'Juan Ángel Marecos',
      cargo: 'Concejal Municipal',
      isMesaDirectiva: false,
      partido: 'Partido Colorado (ANR)',
      partidoCorto: 'ANR',
      partidoColor: '#dd3333',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Colorado_(Paraguay)',
      image: '/concejales/ABG. JUAN ÁNGEL MARECOS - COLORADO.jpg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
    {
      id: 'ivan-velazquez',
      name: 'Iván Velázquez',
      cargo: 'Concejal Municipal',
      isMesaDirectiva: false,
      partido: 'Partido Colorado (ANR)',
      partidoCorto: 'ANR',
      partidoColor: '#dd3333',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Colorado_(Paraguay)',
      image: '/concejales/ivan-velazquez.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
    {
      id: 'diego-romero',
      name: 'Diego Romero',
      cargo: 'Concejal Municipal',
      isMesaDirectiva: false,
      partido: 'Partido Colorado (ANR)',
      partidoCorto: 'ANR',
      partidoColor: '#dd3333',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Colorado_(Paraguay)',
      image: '/concejales/diego-romero.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://twitter.com/',
    },
  ];

  // Filtrado de Concejales
  const filteredConcejales = useMemo(() => {
    return concejales.filter((c) => {
      let matchesFilter = true;
      if (concejalFilter === 'Mesa Directiva') {
        matchesFilter = c.isMesaDirectiva;
      } else if (concejalFilter === 'ANR') {
        matchesFilter = c.partidoCorto === 'ANR';
      } else if (concejalFilter === 'PLRA') {
        matchesFilter = c.partidoCorto === 'PLRA';
      }

      if (!matchesFilter) return false;

      if (!concejalSearch.trim()) return true;
      const term = concejalSearch.toLowerCase();
      return (c.name + ' ' + c.cargo + ' ' + c.partido).toLowerCase().includes(term);
    });
  }, [concejales, concejalFilter, concejalSearch]);

  // Filtrado de Directores
  const directorCategories = [
    'Todos',
    'Gabinete y Finanzas',
    'Obras y Urbanismo',
    'Ambiente y Salud',
    'Tránsito y Seguridad',
    'Desarrollo Social',
    'Cultura, Deportes y TI',
  ];

  const filteredDirectores = useMemo(() => {
    return directores.filter((d) => {
      const matchesCategory = directorFilter === 'Todos' || d.area === directorFilter;
      if (!matchesCategory) return false;

      if (!directorSearch.trim()) return true;
      const term = directorSearch.toLowerCase();
      return (d.name + ' ' + d.cargo + ' ' + d.area + ' ' + d.functions).toLowerCase().includes(term);
    });
  }, [directores, directorFilter, directorSearch]);

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="PODER EJECUTIVO Y LEGISLATIVO LOCAL"
        title="Gobierno Municipal de Luque"
        subtitle="Conocé las autoridades constitucionales de la Intendencia, el cuerpo legislativo de la Junta Municipal y el gabinete de Directores."
        category="Gobierno"
        badge="Administración Pública"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Navegación por pestañas de Gobierno */}
          <div className="gobierno-tabs-bar" role="tablist">
            <button
              className={`gobierno-tab-btn ${activeTab === 'intendente' ? 'active' : ''}`}
              onClick={() => handleTabChange('intendente')}
              role="tab"
              aria-selected={activeTab === 'intendente'}
            >
              <UserCheck size={18} />
              <span>Intendente Municipal</span>
            </button>
            <button
              className={`gobierno-tab-btn ${activeTab === 'junta' ? 'active' : ''}`}
              onClick={() => handleTabChange('junta')}
              role="tab"
              aria-selected={activeTab === 'junta'}
            >
              <Users size={18} />
              <span>Junta Municipal</span>
            </button>
            <button
              className={`gobierno-tab-btn ${activeTab === 'directores' ? 'active' : ''}`}
              onClick={() => handleTabChange('directores')}
              role="tab"
              aria-selected={activeTab === 'directores'}
            >
              <Building size={18} />
              <span>Gabinete de Directores ({directores.length})</span>
            </button>
          </div>

          {/* TAB 1: INTENDENTE MUNICIPAL */}
          {activeTab === 'intendente' && (
            <div className="tab-content-panel">
              <div className="mayor-profile-card">
                <div className="mayor-profile-photo-col">
                  <img src={mayorInfo.image} alt={mayorInfo.name} className="mayor-full-photo" />
                  <div className="mayor-flag-ribbon">
                    <img src="/escudo-luque.png" alt="Escudo de Luque" width="36" height="36" />
                    <span>EJECUTIVO MUNICIPAL</span>
                  </div>
                </div>

                <div className="mayor-profile-info-col">
                  <span className="eyebrow-accent">GOBIERNO LOCAL DE LA CIUDAD DE LUQUE</span>
                  <h2>{mayorInfo.name}</h2>
                  <span className="mayor-title-badge">{mayorInfo.title}</span>

                  <blockquote className="mayor-quote-box">{mayorInfo.quote}</blockquote>

                  <div className="mayor-bio-text">
                    <p>
                      La Intendencia Municipal de Luque encabeza el gobierno ejecutivo comunal con la misión de transformar
                      nuestra ciudad en un modelo de infraestructura, sustentabilidad, cercanía ciudadana y transparencia fiscal.
                    </p>
                    <p>
                      Con un enfoque integral que articula obras viales en las 28 compañías, modernización de servicios digitales,
                      salud preventiva y el fortalecimiento incondicional de nuestras tradiciones culturales y deportivas.
                    </p>
                  </div>

                  <div className="mayor-contact-row">
                    <div className="mayor-contact-item">
                      <Mail size={16} />
                      <span>intendencia@luque.gov.py</span>
                    </div>
                    <div className="mayor-contact-item">
                      <Phone size={16} />
                      <span>(021) 642 215 / (021) 642 217</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: JUNTA MUNICIPAL (CONCEJALES MUNICIPALES) */}
          {activeTab === 'junta' && (
            <div className="tab-content-panel">
              <div className="junta-intro-box">
                <span className="eyebrow-accent">ÓRGANO LEGISLATIVO COMUNAL</span>
                <h2>Concejales Municipales de Luque</h2>
                <p>
                  La Junta Municipal es el cuerpo legislativo de la ciudad de Luque, compuesto por 12 concejales electos democráticamente.
                  Cumple la función normativa a través de la sanción de Ordenanzas y Resoluciones, así como el control, fiscalización y
                  aprobación del Presupuesto Municipal para el bienestar de toda la ciudadanía luqueña.
                </p>
                <div className="junta-info-chips">
                  <span>
                    <Calendar size={15} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
                    Sesiones Ordinarias: Todos los Martes 08:30 hs
                  </span>
                  <span>
                    <MapPin size={15} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
                    Sala de Sesiones: Palacio Municipal de Luque (Avda. Guillermo Leoz)
                  </span>
                </div>
              </div>

              {/* Filtros por Bloque Político y Buscador */}
              <div className="barrios-search-filter-wrap" style={{ marginBottom: '1.8rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
                  <div className="search-field" style={{ flex: '1 1 300px', maxWidth: '420px' }}>
                    <Search size={18} className="search-field-icon" />
                    <input
                      type="text"
                      value={concejalSearch}
                      onChange={(e) => setConcejalSearch(e.target.value)}
                      placeholder="Buscar concejal por nombre o cargo..."
                      aria-label="Buscar concejal"
                    />
                    {concejalSearch && (
                      <button className="clear-search-btn" onClick={() => setConcejalSearch('')} aria-label="Limpiar búsqueda">
                        ×
                      </button>
                    )}
                  </div>

                  <div className="category-filters" role="tablist">
                    {[
                      { label: 'Todos', count: concejales.length },
                      { label: 'Mesa Directiva', count: concejales.filter((c) => c.isMesaDirectiva).length },
                      { label: 'ANR', count: concejales.filter((c) => c.partidoCorto === 'ANR').length },
                      { label: 'PLRA', count: concejales.filter((c) => c.partidoCorto === 'PLRA').length },
                    ].map((f) => {
                      const isActive = concejalFilter === f.label;
                      return (
                        <button
                          key={f.label}
                          className={`cat-pill ${isActive ? 'active' : ''}`}
                          onClick={() => setConcejalFilter(f.label)}
                          role="tab"
                          aria-selected={isActive}
                        >
                          <span>{f.label}</span>
                          <span className="cat-count">{f.count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Grilla Oficial de Concejales */}
              <div className="concejales-grid">
                {filteredConcejales.map((c) => {
                  const isPresidente = c.cargo === 'Presidente';
                  const isVice = c.cargo === 'Vice Presidenta';

                  return (
                    <article className="concejal-card" key={c.id}>
                      <div className={`concejal-card-top-accent ${c.partidoCorto === 'ANR' ? 'color-anr' : 'color-plra'}`} />

                      {c.isMesaDirectiva && (
                        <span className="concejal-mesa-badge">
                          <Award size={12} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '3px' }} />
                          Mesa Directiva
                        </span>
                      )}

                      <div className="concejal-card-body">
                        <div className="concejal-photo-wrap">
                          <img
                            src={c.image}
                            alt={c.name}
                            className="concejal-photo-img"
                            loading="lazy"
                            width="108"
                            height="108"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.classList.add('photo-fallback');
                            }}
                          />
                        </div>

                        <div className="concejal-info-block">
                          <h4>{c.name}</h4>
                          <span className={`concejal-cargo-pill ${isPresidente ? 'is-presidente' : isVice ? 'is-vice' : ''}`}>
                            {c.cargo}
                          </span>

                          <div className="concejal-partido-row">
                            <a
                              href={c.partidoWiki}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`concejal-partido-link ${c.partidoCorto === 'ANR' ? 'partido-anr' : 'partido-plra'}`}
                              title={`Ver información sobre ${c.partido}`}
                            >
                              <Flag size={13} style={{ fill: c.partidoColor, stroke: c.partidoColor }} />
                              <span>{c.partidoCorto}</span>
                              <ExternalLink size={11} style={{ opacity: 0.6 }} />
                            </a>
                          </div>

                          <div className="concejal-socials-row">
                            <span style={{ fontSize: '0.72rem', color: '#888', marginRight: '4px', fontWeight: 600 }}>Redes:</span>
                            <a
                              href={c.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="concejal-social-btn facebook"
                              aria-label={`Facebook de ${c.name}`}
                              title="Facebook"
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                              </svg>
                            </a>
                            <a
                              href={c.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="concejal-social-btn instagram"
                              aria-label={`Instagram de ${c.name}`}
                              title="Instagram"
                            >
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                              </svg>
                            </a>
                            <a
                              href={c.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="concejal-social-btn twitter"
                              aria-label={`Twitter de ${c.name}`}
                              title="Twitter / X"
                            >
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: GABINETE DE DIRECTORES MUNICIPALES (26 DIRECTORES) */}
          {activeTab === 'directores' && (
            <div className="tab-content-panel">
              <div className="directores-intro-box">
                <span className="eyebrow-accent">ORGANIZACIÓN EJECUTIVA COMUNAL</span>
                <h2>Gabinete de Directores Municipales</h2>
                <p>
                  Estructura de direcciones operativas, técnicas y administrativas encabezada por los 26 directores y
                  jefes de área de la Municipalidad de Luque, comprometidos con la excelencia en los servicios urbanos,
                  la transparencia y la calidad de vida de cada familia luqueña.
                </p>
                <div className="junta-info-chips">
                  <span>
                    <Building size={15} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
                    Sede Central: Avda. Guillermo Leoz esq. Santa Catalina, Luque
                  </span>
                  <span>
                    <Phone size={15} style={{ display: 'inline', verticalAlign: '-2px', marginRight: '4px' }} />
                    Central Telefónica: +59521 642-215 / 642-217
                  </span>
                </div>
              </div>

              {/* Filtros por Categoría y Buscador de Directores */}
              <div className="barrios-search-filter-wrap" style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
                  <div className="search-field" style={{ flex: '1 1 320px', maxWidth: '440px' }}>
                    <Search size={18} className="search-field-icon" />
                    <input
                      type="text"
                      value={directorSearch}
                      onChange={(e) => setDirectorSearch(e.target.value)}
                      placeholder="Buscar por nombre, cargo o función..."
                      aria-label="Buscar director municipal"
                    />
                    {directorSearch && (
                      <button className="clear-search-btn" onClick={() => setDirectorSearch('')} aria-label="Limpiar búsqueda">
                        ×
                      </button>
                    )}
                  </div>

                  <div className="category-filters" role="tablist">
                    {directorCategories.map((cat) => {
                      const count = cat === 'Todos' ? directores.length : directores.filter((d) => d.area === cat).length;
                      const isActive = directorFilter === cat;

                      return (
                        <button
                          key={cat}
                          className={`cat-pill ${isActive ? 'active' : ''}`}
                          onClick={() => setDirectorFilter(cat)}
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

              {/* Grilla Oficial de los 26 Directores */}
              <div className="directores-grid">
                {filteredDirectores.map((dir) => (
                  <article className="director-detail-card" key={dir.id}>
                    <div className="director-card-header">
                      <div className="director-photo-wrap">
                        <img
                          src={dir.image}
                          alt={dir.name}
                          className="director-photo-img"
                          loading="lazy"
                          width="110"
                          height="110"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.classList.add('photo-fallback');
                          }}
                        />
                      </div>
                      <span className="director-area-tag">{dir.area}</span>
                    </div>

                    <div className="director-card-body">
                      <h3>{dir.name}</h3>
                      <div className="director-cargo-badge">{dir.cargo}</div>
                      <p className="director-functions-text">{dir.functions}</p>
                    </div>

                    <div className="director-card-footer">
                      <a href="#contacto" className="director-contact-btn">
                        <span>Contacto Institucional</span>
                        <ChevronRight size={14} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
