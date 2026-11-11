import { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Header({ onOpenSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* Cinta tricolor paraguaya en la parte superior */}
      <div className="national-ribbon" aria-hidden="true">
        <span className="ribbon-red"></span>
        <span className="ribbon-white"></span>
        <span className="ribbon-blue"></span>
      </div>

      {/* BARRA SUPERIOR MODERNA CON HORARIOS INTERACTIVOS Y DATOS REALES DE LUQUE */}
      <aside className="top-bar">
        <div className="top-left">
          <span className="top-location">
            <MapPin size={13} />
            <span>Avda. Guillermo Leoz esq Pasaje Santa Catalina, Luque</span>
          </span>
          <a href="mailto:contacto@luque.gov.py" className="top-mail">
            <Mail size={13} />
            <span>contacto@luque.gov.py</span>
          </a>
        </div>

        <div className="top-right">
          <a href="tel:+59521642215" className="top-phone">
            <Phone size={13} />
            <span>+59521 642-215 int.161</span>
          </a>

          {/* Desplegable de Horarios Interactivos */}
          <div
            className="schedule-dropdown"
            onMouseEnter={() => setScheduleOpen(true)}
            onMouseLeave={() => setScheduleOpen(false)}
            onClick={() => setScheduleOpen(!scheduleOpen)}
          >
            <span className="schedule-trigger">
              <Clock size={13} />
              <span>Lun - Vie 7 a 13 h | Sab 7 a 11 h ▾</span>
            </span>
            <ul className={`schedule-list ${scheduleOpen ? 'show' : ''}`}>
              <li className="schedule-header">Horarios de Cajas y Gestiones:</li>
              <li><span>Lunes:</span> <b>07:00 a 13:00 hs</b></li>
              <li><span>Martes:</span> <b>07:00 a 13:00 hs</b></li>
              <li><span>Miércoles:</span> <b>07:00 a 13:00 hs</b></li>
              <li><span>Jueves:</span> <b>07:00 a 13:00 hs</b></li>
              <li><span>Viernes:</span> <b>07:00 a 13:00 hs</b></li>
              <li><span>Sábado:</span> <b>07:00 a 11:00 hs (Guardia)</b></li>
              <li><span>Domingo:</span> <em>Cerrado</em></li>
            </ul>
          </div>

          <a
            href="https://www.luque.gov.py/direcciones/"
            target="_blank"
            rel="noreferrer"
            className="btn-direcciones"
          >
            Direcciones ▾
          </a>
        </div>
      </aside>

      {/* CABECERA PRINCIPAL Y NAVEGACIÓN MODERNA */}
      <header className="main-header">
        <div className="header-container">
          {/* Logotipo institucional con Escudo de Luque */}
          <div className="logo-area">
            <a href="#inicio" className="brand-logo-link">
              <img
                src="/escudo-luque.png"
                alt="Escudo de Luque"
                className="logo-escudo"
                width="48"
                height="48"
              />
              <div className="logo-text-block">
                <span className="logo-brand-title">
                  SOMOS <span>LUQUE</span>
                </span>
                <span className="logo-brand-sub">Municipalidad de Luque · Paraguay</span>
              </div>
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Menú de Navegación con Dropdowns Multinivel */}
          <nav className={`main-nav ${mobileOpen ? 'nav-mobile-open' : ''}`}>
            <ul className="nav-list">
              {/* INICIO */}
              <li className="nav-item">
                <a href="#inicio" onClick={() => setMobileOpen(false)}>
                  INICIO
                </a>
              </li>

              {/* CIUDAD ▾ */}
              <li className="nav-item has-dropdown">
                <a
                  href="https://www.luque.gov.py/"
                  onClick={(e) => {
                    if (window.innerWidth <= 960) {
                      e.preventDefault();
                      toggleDropdown('ciudad');
                    }
                  }}
                >
                  CIUDAD <ChevronDown size={13} className="nav-arrow" />
                </a>
                <ul className={`dropdown ${activeDropdown === 'ciudad' ? 'dropdown-open' : ''}`}>
                  <li>
                    <a href="https://www.luque.gov.py/historia/" target="_blank" rel="noreferrer">
                      Historia
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luque.gov.py/lugares-y-edificios-historicos/" target="_blank" rel="noreferrer">
                      Lugares y Edificios Históricos
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luque.gov.py/barrios/" target="_blank" rel="noreferrer">
                      Barrios
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luque.gov.py/recreacion-y-espacios-publicos/" target="_blank" rel="noreferrer">
                      Recreación y Espacios Públicos
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luque.gov.py/eventos/" target="_blank" rel="noreferrer">
                      Eventos
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luque.gov.py/mercados-y-ferias/" target="_blank" rel="noreferrer">
                      Mercados y Ferias
                    </a>
                  </li>
                </ul>
              </li>

              {/* GOBIERNO ▾ */}
              <li className="nav-item has-dropdown">
                <a
                  href="https://www.luque.gov.py/"
                  onClick={(e) => {
                    if (window.innerWidth <= 960) {
                      e.preventDefault();
                      toggleDropdown('gobierno');
                    }
                  }}
                >
                  GOBIERNO <ChevronDown size={13} className="nav-arrow" />
                </a>
                <ul className={`dropdown ${activeDropdown === 'gobierno' ? 'dropdown-open' : ''}`}>
                  <li>
                    <a href="https://www.luque.gov.py/intendente-municipal/" target="_blank" rel="noreferrer">
                      Intendente Municipal
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luque.gov.py/junta-municipal/" target="_blank" rel="noreferrer">
                      Junta Municipal
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luque.gov.py/directores/" target="_blank" rel="noreferrer">
                      Directores
                    </a>
                  </li>
                </ul>
              </li>

              {/* TRANSPARENCIA ▾ */}
              <li className="nav-item has-dropdown">
                <a
                  href="https://www.luque.gov.py/transparencia/"
                  onClick={(e) => {
                    if (window.innerWidth <= 960) {
                      e.preventDefault();
                      toggleDropdown('transparencia');
                    }
                  }}
                >
                  TRANSPARENCIA <ChevronDown size={13} className="nav-arrow" />
                </a>
                <ul className={`dropdown ${activeDropdown === 'transparencia' ? 'dropdown-open' : ''}`}>
                  <li>
                    <a href="https://www.luque.gov.py/ordenanzas-municipales/" target="_blank" rel="noreferrer">
                      Ordenanzas Municipales
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luque.gov.py/resoluciones-municipales/" target="_blank" rel="noreferrer">
                      Resoluciones Municipales
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luque.gov.py/fonacide/" target="_blank" rel="noreferrer">
                      Consejo del FONACIDE
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luque.gov.py/presupuesto-general/" target="_blank" rel="noreferrer">
                      Presupuesto General
                    </a>
                  </li>
                </ul>
              </li>

              {/* GESTIONES MUNICIPALES ▾ */}
              <li className="nav-item has-dropdown">
                <a
                  href="#gestiones"
                  onClick={(e) => {
                    if (window.innerWidth <= 960) {
                      e.preventDefault();
                      toggleDropdown('gestiones');
                    }
                  }}
                >
                  GESTIONES MUNICIPALES <ChevronDown size={13} className="nav-arrow" />
                </a>
                <ul className={`dropdown ${activeDropdown === 'gestiones' ? 'dropdown-open' : ''}`}>
                  <li>
                    <a href="https://www.luque.gov.py/registro-de-conducir/" target="_blank" rel="noreferrer">
                      Registro de Conducir
                    </a>
                  </li>
                  <li>
                    <a href="https://www.luque.gov.py/habilitacion-de-vehiculos/" target="_blank" rel="noreferrer">
                      Habilitación de Vehículos
                    </a>
                  </li>
                  <li>
                    <a href="#gestiones" onClick={() => setMobileOpen(false)}>
                      Guía Completa de Trámites
                    </a>
                  </li>
                </ul>
              </li>

              {/* CONTACTO */}
              <li className="nav-item">
                <a href="#contacto" onClick={() => setMobileOpen(false)}>
                  CONTACTO
                </a>
              </li>
            </ul>

            {/* BOTÓN BUSCADOR MODERNO */}
            <button
              className="btn-search-trigger"
              onClick={onOpenSearch}
              title="Buscar en el portal"
              aria-label="Abrir buscador emergente"
            >
              <Search size={18} />
              <span className="search-btn-text">Buscar</span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
