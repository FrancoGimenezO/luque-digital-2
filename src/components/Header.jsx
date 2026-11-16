import { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, ChevronRight, Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Header({ onOpenSearch }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

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
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (name) => {
    setActiveSubDropdown((prev) => (prev === name ? null : name));
  };

  const handleNavClick = (targetHash) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setActiveSubDropdown(null);
    if (targetHash && window.location.hash === targetHash) {
      window.dispatchEvent(new Event('hashchange'));
    }
  };

  return (
    <>
      {/* Cinta tricolor paraguaya en la parte superior */}
      <div className="national-ribbon" aria-hidden="true">
        <span className="ribbon-red"></span>
        <span className="ribbon-white"></span>
        <span className="ribbon-blue"></span>
      </div>

      {/* BARRA SUPERIOR CON HORARIOS INTERACTIVOS Y DATOS REALES DE LUQUE */}
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
            href="#directores"
            className="btn-direcciones"
            onClick={() => {
              setScheduleOpen(false);
            }}
          >
            Direcciones ▾
          </a>
        </div>
      </aside>

      {/* CABECERA PRINCIPAL Y NAVEGACIÓN */}
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
                  href="#historia"
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
                    <a
                      href="#historia"
                      onClick={() => handleNavClick('#historia')}
                    >
                      Historia
                    </a>
                  </li>
                  <li>
                    <a
                      href="#lugares-historicos"
                      onClick={() => handleNavClick('#lugares-historicos')}
                    >
                      Lugares y Edificios Históricos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#barrios"
                      onClick={() => handleNavClick('#barrios')}
                    >
                      Barrios
                    </a>
                  </li>
                  <li>
                    <a
                      href="#recreacion"
                      onClick={() => handleNavClick('#recreacion')}
                    >
                      Recreación y Espacios Públicos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#eventos"
                      onClick={() => handleNavClick('#eventos')}
                    >
                      Eventos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mercados-ferias"
                      onClick={() => handleNavClick('#mercados-ferias')}
                    >
                      Mercados y Ferias
                    </a>
                  </li>
                </ul>
              </li>

              {/* GOBIERNO ▾ */}
              <li className="nav-item has-dropdown">
                <a
                  href="#intendente"
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
                    <a
                      href="#intendente"
                      onClick={() => handleNavClick('#intendente')}
                    >
                      Intendente Municipal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#junta-municipal"
                      onClick={() => handleNavClick('#junta-municipal')}
                    >
                      Junta Municipal
                    </a>
                  </li>
                  <li>
                    <a
                      href="#directores"
                      onClick={() => handleNavClick('#directores')}
                    >
                      Directores
                    </a>
                  </li>
                </ul>
              </li>

              {/* TRANSPARENCIA ▾ */}
              <li className="nav-item has-dropdown">
                <a
                  href="#ordenanzas-municipales"
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
                  {/* 1. Denuncias O Consultas */}
                  <li>
                    <a
                      href="#denuncias-consultas"
                      onClick={() => handleNavClick('#denuncias-consultas')}
                    >
                      Denuncias O Consultas
                    </a>
                  </li>

                  {/* 2. Ordenanzas Municipales */}
                  <li>
                    <a
                      href="#ordenanzas-municipales"
                      onClick={() => handleNavClick('#ordenanzas-municipales')}
                    >
                      Ordenanzas Municipales
                    </a>
                  </li>

                  {/* 3. Resoluciones Municipales */}
                  <li>
                    <a
                      href="#resoluciones-municipales"
                      onClick={() => handleNavClick('#resoluciones-municipales')}
                    >
                      Resoluciones Municipales
                    </a>
                  </li>

                  {/* 4. Consejo Del FONACIDE */}
                  <li>
                    <a
                      href="#fonacide"
                      onClick={() => handleNavClick('#fonacide')}
                    >
                      Consejo Del FONACIDE
                    </a>
                  </li>

                  {/* 5. Normativas Legales Vigentes */}
                  <li>
                    <a
                      href="#normativas-legales-vigentes"
                      onClick={() => handleNavClick('#normativas-legales-vigentes')}
                    >
                      Normativas Legales Vigentes
                    </a>
                  </li>

                  {/* 6. Presupuesto General */}
                  <li>
                    <a
                      href="#presupuesto-general"
                      onClick={() => handleNavClick('#presupuesto-general')}
                    >
                      Presupuesto General
                    </a>
                  </li>

                  {/* 7. PATIP ▸ */}
                  <li className="has-sub-dropdown">
                    <a
                      href="#patip"
                      onClick={(e) => {
                        if (window.innerWidth <= 960) {
                          e.preventDefault();
                          toggleSubDropdown('patip');
                        } else {
                          handleNavClick('#patip');
                        }
                      }}
                    >
                      <span>PATIP</span>
                      <ChevronRight size={13} className="sub-arrow" />
                    </a>
                    <ul className={`sub-dropdown ${activeSubDropdown === 'patip' ? 'sub-dropdown-open' : ''}`}>
                      <li>
                        <a
                          href="#patip"
                          onClick={() => handleNavClick('#patip')}
                        >
                          Matriz de Seguimiento Cumplimiento
                        </a>
                      </li>
                      <li>
                        <a
                          href="#patip"
                          onClick={() => handleNavClick('#patip')}
                        >
                          Plan Anual de Transparencia (PATIP)
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* 8. Ley 5189/14 ▸ */}
                  <li className="has-sub-dropdown">
                    <a
                      href="#ley-5189"
                      onClick={(e) => {
                        if (window.innerWidth <= 960) {
                          e.preventDefault();
                          toggleSubDropdown('ley5189');
                        } else {
                          handleNavClick('#ley-5189');
                        }
                      }}
                    >
                      <span>Ley 5189/14</span>
                      <ChevronRight size={13} className="sub-arrow" />
                    </a>
                    <ul className={`sub-dropdown ${activeSubDropdown === 'ley5189' ? 'sub-dropdown-open' : ''}`}>
                      <li>
                        <a
                          href="#ley-5189"
                          onClick={() => handleNavClick('#ley-5189')}
                        >
                          Salarios de Funcionarios Ley 5189/14
                        </a>
                      </li>
                      <li>
                        <a
                          href="#ley-5189"
                          onClick={() => handleNavClick('#ley-5189')}
                        >
                          Estructura y Remuneraciones
                        </a>
                      </li>
                    </ul>
                  </li>

                  {/* 9. Ley 5282/14 */}
                  <li>
                    <a
                      href="#ley-5282"
                      onClick={() => handleNavClick('#ley-5282')}
                    >
                      Ley 5282/14
                    </a>
                  </li>

                  {/* 10. LEY 7089/23 ▸ */}
                  <li className="has-sub-dropdown">
                    <a
                      href="#ley-7089"
                      onClick={(e) => {
                        if (window.innerWidth <= 960) {
                          e.preventDefault();
                          toggleSubDropdown('ley7089');
                        } else {
                          handleNavClick('#ley-7089');
                        }
                      }}
                    >
                      <span>LEY 7089/23</span>
                      <ChevronRight size={13} className="sub-arrow" />
                    </a>
                    <ul className={`sub-dropdown ${activeSubDropdown === 'ley7089' ? 'sub-dropdown-open' : ''}`}>
                      <li>
                        <a
                          href="#ley-7089"
                          onClick={() => handleNavClick('#ley-7089')}
                        >
                          Altas y Bajas – Resoluciones Ley 7089/23
                        </a>
                      </li>
                      <li>
                        <a
                          href="#ley-7089"
                          onClick={() => handleNavClick('#ley-7089')}
                        >
                          Marco Legal Conflicto de Intereses
                        </a>
                      </li>
                    </ul>
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
                    <a
                      href="#licencia-conducir"
                      onClick={() => handleNavClick('#licencia-conducir')}
                    >
                      Registro de Conducir
                    </a>
                  </li>
                  <li>
                    <a
                      href="#habilitacion-vehicular"
                      onClick={() => handleNavClick('#habilitacion-vehicular')}
                    >
                      Habilitación de Vehículos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#gestiones"
                      onClick={() => handleNavClick('#gestiones')}
                    >
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
