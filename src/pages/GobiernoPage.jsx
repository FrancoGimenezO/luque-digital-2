import { useState, useMemo } from 'react';
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
} from 'lucide-react';
import { mayorInfo } from '../data/content.js';

export default function GobiernoPage({ defaultTab = 'intendente', onBackToHome }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [concejalFilter, setConcejalFilter] = useState('Todos');
  const [concejalSearch, setConcejalSearch] = useState('');

  const directores = [
    {
      area: 'Secretaría General',
      head: 'Abg. Enrique Sandoval',
      functions: 'Coordinación del gabinete ejecutivo, refrendo de resoluciones y custodia del archivo general municipal.',
    },
    {
      area: 'Dirección de Administración y Finanzas',
      head: 'Lic. Gladys Rodríguez',
      functions: 'Gestión contable, tesorería, ejecución presupuestaria, compras y suministros institucionales.',
    },
    {
      area: 'Dirección de Obras Públicas y Vialidad',
      head: 'Ing. Francisco Servín',
      functions: 'Ejecución del plan de recapado asfáltico, empedrados, puentes y mantenimiento vial urbano.',
    },
    {
      area: 'Dirección de Tránsito y Seguridad Vial',
      head: 'Abg. Mario Silvero',
      functions: 'Fiscalización vial, emisión de licencias de conducir, habilitaciones e ingeniería de tráfico.',
    },
    {
      area: 'Dirección de Gestión Ambiental y Aseo Urbano',
      head: 'Ing. Elena Bogado',
      functions: 'Recolección de residuos, barrido y limpieza, control de efluentes y protección de cauces hídricos.',
    },
    {
      area: 'Dirección de Bienestar Social y Participación',
      head: 'Lic. Silvia Benítez',
      functions: 'Asistencia social comunitaria, comedores barriales, programas de inclusión y comisiones vecinales.',
    },
    {
      area: 'Dirección de Salubridad e Higiene',
      head: 'Dr. Víctor Amarilla',
      functions: 'Inspección bromatológica, fiscalización de mercados, control sanitario y vacunación animal.',
    },
    {
      area: 'Dirección de Asesoría Jurídica',
      head: 'Abg. Roberto Cantero',
      functions: 'Defensa de los derechos patrimoniales municipales, dictámenes jurídicos y patrocinio legal.',
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
      image: '/concejales/arnaldo-baeza.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://www.twitter.com/',
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
      image: '/concejales/francisca-franco.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://www.twitter.com/',
    },
    {
      id: 'romulo-perez',
      name: 'Ing. Rómulo Pérez',
      cargo: 'Concejal Municipal',
      isMesaDirectiva: false,
      partido: 'Partido Liberal Radical Auténtico (PLRA)',
      partidoCorto: 'PLRA',
      partidoColor: '#1d56c1',
      partidoWiki: 'https://es.wikipedia.org/wiki/Partido_Liberal_Radical_Aut%C3%A9ntico',
      image: '/concejales/romulo-perez.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://www.twitter.com/',
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
      image: '/concejales/enrique-quintana.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://www.twitter.com/',
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
      twitter: 'https://www.twitter.com/',
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
      twitter: 'https://www.twitter.com/',
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
      twitter: 'https://www.twitter.com/',
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
      twitter: 'https://www.twitter.com/',
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
      twitter: 'https://www.twitter.com/',
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
      image: '/concejales/juan-angel-marecos.jpeg',
      facebook: 'https://www.facebook.com/',
      instagram: 'https://www.instagram.com/',
      twitter: 'https://www.twitter.com/',
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
      twitter: 'https://www.twitter.com/',
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
      twitter: 'https://www.twitter.com/',
    },
  ];

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
              onClick={() => setActiveTab('intendente')}
              role="tab"
              aria-selected={activeTab === 'intendente'}
            >
              <UserCheck size={18} />
              <span>Intendente Municipal</span>
            </button>
            <button
              className={`gobierno-tab-btn ${activeTab === 'junta' ? 'active' : ''}`}
              onClick={() => setActiveTab('junta')}
              role="tab"
              aria-selected={activeTab === 'junta'}
            >
              <Users size={18} />
              <span>Junta Municipal</span>
            </button>
            <button
              className={`gobierno-tab-btn ${activeTab === 'directores' ? 'active' : ''}`}
              onClick={() => setActiveTab('directores')}
              role="tab"
              aria-selected={activeTab === 'directores'}
            >
              <Building size={18} />
              <span>Gabinete de Directores</span>
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

                  <blockquote className="mayor-quote-box">
                    {mayorInfo.quote}
                  </blockquote>

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
                      {/* Borde superior de acento según bloque */}
                      <div
                        className={`concejal-card-top-accent ${c.partidoCorto === 'ANR' ? 'color-anr' : 'color-plra'}`}
                      />

                      {c.isMesaDirectiva && (
                        <span className="concejal-mesa-badge">
                          <Award size={12} style={{ display: 'inline', verticalAlign: '-1px', marginRight: '3px' }} />
                          Mesa Directiva
                        </span>
                      )}

                      <div className="concejal-card-body">
                        {/* Foto del concejal */}
                        <div className="concejal-photo-wrap">
                          <img
                            src={c.image}
                            alt={c.name}
                            className="concejal-photo-img"
                            loading="lazy"
                            width="108"
                            height="108"
                            onError={(e) => {
                              // Fallback elegante
                              e.target.style.display = 'none';
                              e.target.parentElement.classList.add('photo-fallback');
                            }}
                          />
                        </div>

                        {/* Nombre y Cargo */}
                        <div className="concejal-info-block">
                          <h4>{c.name}</h4>
                          <span
                            className={`concejal-cargo-pill ${isPresidente ? 'is-presidente' : isVice ? 'is-vice' : ''}`}
                          >
                            {c.cargo}
                          </span>

                          {/* Partido Político con enlace */}
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

                          {/* Botones de Redes Sociales Oficiales */}
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
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
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
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
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

          {/* TAB 3: GABINETE DE DIRECTORES */}
          {activeTab === 'directores' && (
            <div className="tab-content-panel">
              <div className="directores-intro-box">
                <span className="eyebrow-accent">ORGANIZACIÓN EJECUTIVA</span>
                <h2>Gabinete de Directores Municipales</h2>
                <p>
                  Estructura de direcciones operativas y de asesoramiento que llevan adelante las políticas públicas,
                  la prestación de servicios urbanos y la atención diaria a cada contribuyente luqueño.
                </p>
              </div>

              <div className="directores-grid">
                {directores.map((dir, i) => (
                  <div className="director-card" key={i}>
                    <div className="director-card-top">
                      <Building size={20} className="dir-icon" />
                      <span className="dir-area-badge">Dirección Municipal</span>
                    </div>
                    <h3>{dir.area}</h3>
                    <strong className="dir-head-name">{dir.head}</strong>
                    <p className="dir-functions">{dir.functions}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
