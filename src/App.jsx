import { useMemo, useState, useEffect, useRef, useCallback } from 'react';
import {
  ArrowUpRight,
  Search,
  CarFront,
  ShieldCheck,
  Building2,
  Newspaper,
  MapPin,
  Phone,
  Mail,
  Clock3,
  ChevronRight,
  ExternalLink,
  ChevronUp,
  FileText,
  BadgeAlert,
  FileCheck2,
  CalendarDays,
  UserCheck,
  BookOpen,
  Network,
  TrafficCone
} from 'lucide-react';

import Header from './components/Header.jsx';
import HeroSlider from './components/HeroSlider.jsx';
import SearchModal from './components/SearchModal.jsx';
import SectionTitle from './components/SectionTitle.jsx';
import ServiceModal from './components/ServiceModal.jsx';
import { services, news, quickLinks, categories, municipalStats, mayorInfo } from './data/content.js';

export default function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [selectedService, setSelectedService] = useState(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const searchInputRef = useRef(null);

  // Escuchar atajo Ctrl+K para abrir el buscador modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && document.activeElement.tagName !== 'INPUT')) {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Botón flotante para volver arriba
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowScrollTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredServices = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    return services.filter((s) => {
      const matchesCategory =
        activeCategory === 'Todos' || s.tag.toLowerCase() === activeCategory.toLowerCase();
      if (!matchesCategory) return false;
      if (!cleanQuery) return true;
      const haystack = (s.title + ' ' + s.description + ' ' + s.tag).toLowerCase();
      return haystack.includes(cleanQuery);
    });
  }, [query, activeCategory]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      {/* Cabecera institucional moderna con menú y enlaces reales de Luque */}
      <Header onOpenSearch={() => setSearchModalOpen(true)} />

      <main id="main-content">
        {/* HERO SLIDER ANIMADO MODERNO (CON FOTOS REALES DE LUQUE Y CONTROLES) */}
        <HeroSlider />

        {/* SECCIÓN 1: DOCUMENTOS Y NORMATIVAS DESTACADAS (CÓDIGO ORIGINAL CON DISEÑO MODERNO) */}
        <section className="featured-docs-section" aria-label="Documentos y normativas de interés">
          <div className="container">
            <div className="section-header-compact">
              <span className="eyebrow-accent">PORTAL MUNICIPAL DE LUQUE</span>
              <h2>Documentos y Disposiciones Oficiales</h2>
              <p>Acceso directo a las normativas, organigramas y reglamentos de la administración pública municipal.</p>
            </div>

            <div className="grid-cards">
              <div className="card">
                <div className="card-top-icon">
                  <BookOpen size={24} />
                </div>
                <h3>📋 Manual de Funciones</h3>
                <p>
                  Descripciones de las actividades que desarrollan cada puesto en todas las unidades
                  misionales y de asesoramiento de la Municipalidad de Luque.
                </p>
                <a
                  className="btn-link"
                  href="https://www.luque.gov.py/manual-de-funciones/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>VER MANUAL</span>
                  <span className="arrow-sym">→</span>
                </a>
              </div>

              <div className="card">
                <div className="card-top-icon">
                  <Network size={24} />
                </div>
                <h3>🏢 Organigrama Municipal</h3>
                <p>
                  Representación gráfica de la estructura municipal y esquema sobre las relaciones
                  jerárquicas, secretarías y direcciones en vigor.
                </p>
                <a
                  className="btn-link"
                  href="https://www.luque.gov.py/organigrama-municipal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>VER ORGANIGRAMA</span>
                  <span className="arrow-sym">→</span>
                </a>
              </div>

              <div className="card">
                <div className="card-top-icon">
                  <TrafficCone size={24} />
                </div>
                <h3>🚦 Ordenanza de Tránsito 05/2024</h3>
                <p>
                  Actualización del Reglamento General de Tránsito con el fin de mejorar la seguridad,
                  el estacionamiento y el bienestar común en Luque.
                </p>
                <a
                  className="btn-link"
                  href="https://www.luque.gov.py/ordenanza-de-transito/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>VER ORDENANZA</span>
                  <span className="arrow-sym">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 2: GESTIONES Y TRÁMITES PARA LA CIUDADANÍA */}
        <section className="services-section section-pad" id="gestiones">
          <div className="container">
            <SectionTitle
              eyebrow="ATENCIÓN AL CONTRIBUYENTE"
              title="Gestiones y Trámites Municipales"
              description="Conocé los requisitos, aranceles, formularios y lugares de gestión para cada trámite en Luque."
            />

            {/* Buscador interactivo de trámites */}
            <div className="search-box-wrap" id="buscar">
              <div className="search-field">
                <Search size={20} className="search-field-icon" />
                <input
                  id="search-input"
                  ref={searchInputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="¿Qué trámite estás buscando? (ej. registro de conducir, habilitación, obras, patentes...)"
                  aria-label="Buscar trámite municipal"
                />
                {query && (
                  <button
                    className="clear-search-btn"
                    onClick={() => setQuery('')}
                    aria-label="Borrar búsqueda"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Categorías de filtro */}
              <div className="category-filters" role="tablist" aria-label="Filtrar trámites por dependencia">
                {categories.map((cat) => {
                  const count =
                    cat === 'Todos'
                      ? services.length
                      : services.filter((s) => s.tag.toLowerCase() === cat.toLowerCase()).length;
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      className={`cat-pill ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat)}
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

            {/* Contador de resultados */}
            <div className="search-results-bar">
              <span>
                Mostrando <strong>{filteredServices.length}</strong> {filteredServices.length === 1 ? 'gestión' : 'gestiones'}
                {activeCategory !== 'Todos' && ` en "${activeCategory}"`}
                {query && ` para "${query}"`}
              </span>
              {(query || activeCategory !== 'Todos') && (
                <button
                  className="btn-reset"
                  onClick={() => {
                    setQuery('');
                    setActiveCategory('Todos');
                  }}
                >
                  Ver todas las gestiones
                </button>
              )}
            </div>

            {/* Grilla de trámites */}
            <div className="services-grid">
              {filteredServices.map((s) => (
                <div
                  className="service-item-card"
                  key={s.id}
                  onClick={() => setSelectedService(s)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedService(s);
                    }
                  }}
                >
                  <div className="service-card-top">
                    <span className="service-icon-emoji" aria-hidden="true">{s.icon}</span>
                    <span className="service-category-badge">{s.tag}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <div className="service-card-bottom">
                    <span className="service-action-link">
                      <span>Ver requisitos y horarios</span>
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="services-external-cta">
              <a
                className="btn btn-outline-navy"
                href="https://www.luque.gov.py/gestiones-municipales/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Consultar el portal de gestiones en luque.gov.py</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: GOBIERNO E INTENDENCIA MUNICIPAL */}
        <section className="mayor-section" id="gobierno" aria-label="Intendencia Municipal de Luque">
          <div className="container mayor-container">
            <div className="mayor-photo-wrap">
              <img
                src={mayorInfo.image}
                alt={`Foto oficial de ${mayorInfo.name}`}
                className="mayor-photo"
                width="280"
                height="340"
                loading="lazy"
                decoding="async"
              />
              <div className="mayor-badge-seal">
                <img src="/escudo-luque.png" alt="Sello de Luque" width="28" height="28" />
                <span>ADMINISTRACIÓN MUNICIPAL</span>
              </div>
            </div>

            <div className="mayor-content">
              <span className="eyebrow-accent">GOBIERNO LOCAL · CIUDAD DE LUQUE</span>
              <h2>{mayorInfo.name}</h2>
              <span className="mayor-position">{mayorInfo.title}</span>
              
              <blockquote className="mayor-quote">
                {mayorInfo.quote}
              </blockquote>

              <div className="mayor-commitments">
                <div className="commitment-item">
                  <FileCheck2 size={18} className="commitment-icon" />
                  <div>
                    <strong>Gobierno Transparente</strong>
                    <small>Rendición de cuentas continua y control interno MECIP</small>
                  </div>
                </div>
                <div className="commitment-item">
                  <UserCheck size={18} className="commitment-icon" />
                  <div>
                    <strong>Cercanía con los Barrios</strong>
                    <small>Atención a comisiones vecinales y presencia en territorio</small>
                  </div>
                </div>
              </div>

              <div className="mayor-actions">
                <a
                  href="https://www.luque.gov.py/junta-municipal/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-navy"
                >
                  <span>Ver Junta Municipal de Luque</span>
                  <ExternalLink size={15} />
                </a>
                <a
                  href="https://www.luque.gov.py/directores/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-navy"
                >
                  <span>Gabinete de Directores</span>
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: LA CIUDAD (HISTORIA, PATRIMONIO Y COMUNIDAD) */}
        <section className="city-heritage-section" id="ciudad">
          <div className="heritage-grid">
            <div className="heritage-image-box">
              <img
                src="/santuario-luque-opt.jpg"
                alt="Santuario Nuestra Señora del Rosario en el centro de Luque"
                loading="lazy"
                decoding="async"
                width="900"
                height="600"
              />
              <div className="heritage-image-caption">
                <b>SANTUARIO NUESTRA SEÑORA DEL ROSARIO</b>
                <span>Patrimonio arquitectónico, histórico y cultural de Luque</span>
              </div>
            </div>

            <div className="heritage-text-box">
              <span className="eyebrow-accent">IDENTIDAD, HISTORIA Y CULTURA</span>
              <h2>Luque: Cuna de la música, el arte de la filigrana y la tradición</h2>
              <p>
                Sede de la histórica primera estación de tren del Paraguay en 1861 y cuna de maestros artesanos,
                Luque es la tercera ciudad más importante de la República.
              </p>
              <p>
                Reconocida por sus orfebres en <strong>filigrana de oro y plata</strong>, la fabricación artesanal de
                <strong>arpas y guitarras</strong>, y la inquebrantable pasión auriazul de su pueblo.
              </p>

              <div className="stats-cards-grid">
                {municipalStats.map((st) => (
                  <div key={st.label} className="stat-box">
                    <b>{st.value}</b>
                    <span className="stat-title">{st.label}</span>
                    <small>{st.desc}</small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: NOTICIAS Y COMUNICADOS MUNICIPALES */}
        <section className="news-municipal-section section-pad" id="noticias">
          <div className="container">
            <SectionTitle
              eyebrow="COMUNICACIÓN CIUDADANA"
              title="Noticias y Actualidad Municipal"
              description="Proyectos en marcha, avisos a la comunidad y actividades culturales en los barrios de Luque."
              action={{
                href: 'https://www.luque.gov.py/',
                label: 'Ver más noticias oficiales',
                target: '_blank',
                rel: 'noreferrer'
              }}
            />

            <div className="news-articles-grid">
              {news.map((n) => (
                <article className="news-item-card" key={n.title}>
                  <a
                    href={n.link}
                    target="_blank"
                    rel="noreferrer"
                    className="news-item-image-wrap"
                    aria-label={`Leer artículo: ${n.title}`}
                  >
                    <img
                      src={n.image}
                      alt={n.title}
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="380"
                    />
                    <span className="news-read-pill">{n.category}</span>
                  </a>
                  <div className="news-item-body">
                    <div className="news-date-row">
                      <CalendarDays size={13} />
                      <small>{n.date} · {n.readTime}</small>
                    </div>
                    <h3>{n.title}</h3>
                    <p>{n.summary}</p>
                    <a
                      className="news-read-more"
                      href={n.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>Leer comunicado</span>
                      <ChevronRight size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 6: TRANSPARENCIA Y CONTROL PÚBLICO (FONACIDE, MECIP, LEY 5282) */}
        <section className="transparency-gov-section" id="transparencia">
          <div className="container transparency-container">
            <div className="transparency-intro">
              <div className="transparency-badge">
                <ShieldCheck size={18} />
                <span>GOBIERNO ABIERTO Y TRANSPARENCIA ACTIVA</span>
              </div>
              <h2>Control Institucional y Acceso a la Información</h2>
              <p>
                Garantizamos el cumplimiento de la <strong>Ley 5282/2014</strong> de Libre Acceso Ciudadano a la Información,
                el destino de los fondos del <strong>FONACIDE</strong> y la rendición periódica del presupuesto municipal.
              </p>
              <div className="transparency-buttons">
                <a
                  className="btn btn-gold"
                  href="https://www.luque.gov.py/control-interno-mecip/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Portal MECIP y Auditorías</span>
                  <ExternalLink size={15} />
                </a>
                <a
                  className="btn btn-transparency"
                  href="https://www.luque.gov.py/fonacide/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Consejo FONACIDE</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            <div className="transparency-links-panel">
              {quickLinks.map(([title, desc]) => (
                <a
                  href="https://www.luque.gov.py/"
                  target="_blank"
                  rel="noreferrer"
                  key={title}
                  className="transparency-row"
                >
                  <div className="transparency-row-text">
                    <b>{title}</b>
                    <small>{desc}</small>
                  </div>
                  <ArrowUpRight className="transparency-row-arrow" size={18} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 7: CONTACTO Y SEDE MUNICIPAL */}
        <section className="contact-gov-section section-pad" id="contacto">
          <div className="container">
            <SectionTitle
              eyebrow="ATENCIÓN AL VECINO"
              title="Sede Municipal y Horarios de Atención"
              description="Conocé las vías oficiales de contacto, mesa de entrada y ubicación de la Municipalidad de Luque."
            />

            <div className="contact-boxes-grid">
              <a
                href="https://maps.google.com/?q=Municipalidad+de+Luque+Guillermo+Leoz"
                target="_blank"
                rel="noreferrer"
                className="contact-box contact-box-link"
              >
                <div className="contact-box-icon">
                  <MapPin size={22} />
                </div>
                <div className="contact-box-content">
                  <b>Sede Central</b>
                  <small>Avda. Guillermo Leoz esq. Pasaje Santa Catalina, Luque</small>
                  <span className="contact-link-action">Abrir mapa en Google Maps ↗</span>
                </div>
              </a>

              <div className="contact-box">
                <div className="contact-box-icon">
                  <Clock3 size={22} />
                </div>
                <div className="contact-box-content">
                  <b>Horario de Atención y Cajas</b>
                  <small>Lunes a viernes de 07:00 a 13:00 hs | Sábados de 07:00 a 11:00 hs</small>
                  <span className="contact-note-tag">Mesa de Entrada y Tránsito abiertas</span>
                </div>
              </div>

              <a href="tel:+59521642215" className="contact-box contact-box-link">
                <div className="contact-box-icon">
                  <Phone size={22} />
                </div>
                <div className="contact-box-content">
                  <b>Central Telefónica</b>
                  <small>+59521 642-215 int.161 / (021) 642 217</small>
                  <span className="contact-link-action">Llamar a la central ↗</span>
                </div>
              </a>

              <div className="contact-box">
                <div className="contact-box-icon">
                  <Mail size={22} />
                </div>
                <div className="contact-box-content">
                  <b>Mesa de Entrada y Correo</b>
                  <small>Consultas y expedientes institucionales</small>
                  <span className="contact-note-tag">contacto@luque.gov.py</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER INSTITUCIONAL CON ESCUDO Y ENLACES OFICIALES */}
      <footer className="footer-gov">
        <div className="container footer-gov-top">
          <div className="footer-brand-column">
            <div className="footer-brand-header">
              <img
                src="/escudo-luque.png"
                alt="Escudo Municipal de Luque"
                className="footer-escudo"
                width="48"
                height="48"
              />
              <div className="footer-brand-title">
                <b>SOMOS LUQUE</b>
                <small>Municipalidad de Luque · República del Paraguay</small>
              </div>
            </div>
            <p className="footer-text">
              Portal ciudadano de la Municipalidad de Luque. Comprometidos con el desarrollo urbano,
              la preservación de nuestra cultura y la transparencia al servicio de cada habitante luqueño.
            </p>
          </div>

          <div className="footer-links-column">
            <h4>Secciones del Portal</h4>
            <ul>
              <li><a href="https://www.luque.gov.py/historia/" target="_blank" rel="noreferrer">Historia y Lugares</a></li>
              <li><a href="https://www.luque.gov.py/intendente-municipal/" target="_blank" rel="noreferrer">Intendente Municipal</a></li>
              <li><a href="https://www.luque.gov.py/junta-municipal/" target="_blank" rel="noreferrer">Junta Municipal</a></li>
              <li><a href="https://www.luque.gov.py/gestiones-municipales/" target="_blank" rel="noreferrer">Gestiones Municipales</a></li>
              <li><a href="https://www.luque.gov.py/transparencia/" target="_blank" rel="noreferrer">Transparencia y FONACIDE</a></li>
            </ul>
          </div>

          <div className="footer-links-column">
            <h4>Enlaces del Estado</h4>
            <ul>
              <li><a href="https://www.luque.gov.py/" target="_blank" rel="noreferrer">Sitio Oficial www.luque.gov.py ↗</a></li>
              <li><a href="https://informacionpublica.paraguay.gov.py/" target="_blank" rel="noreferrer">Portal de Información Pública ↗</a></li>
              <li><a href="https://www.contrataciones.gov.py/" target="_blank" rel="noreferrer">Contrataciones Públicas (DNCP) ↗</a></li>
              <li><a href="https://www.contraloria.gov.py/" target="_blank" rel="noreferrer">Contraloría General (CGR) ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-gov-bottom">
          <div className="container footer-gov-bottom-inner">
            <span>© {new Date().getFullYear()} Municipalidad de Luque. Portal Ciudadano Optimizado.</span>
            <span>Luque, Departamento Central · Paraguay</span>
          </div>
        </div>
      </footer>

      {/* Modal emergente de búsqueda en pantalla completa (Referencia Template 2) */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectService={(service) => setSelectedService(service)}
      />

      {/* Modal interactivo de requisitos y documentación de trámites */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      {/* Botón flotante para volver arriba */}
      {showScrollTop && (
        <button
          className="scroll-top-floating"
          onClick={scrollToTop}
          aria-label="Volver arriba"
          title="Volver arriba"
        >
          <ChevronUp size={22} />
        </button>
      )}
    </>
  );
}
