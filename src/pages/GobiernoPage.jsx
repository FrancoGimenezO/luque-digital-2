import { useState } from 'react';
import PageHero from './PageHero.jsx';
import { UserCheck, Users, Building, ShieldCheck, Mail, Phone, ExternalLink, Award, FileText } from 'lucide-react';
import { mayorInfo } from '../data/content.js';

export default function GobiernoPage({ defaultTab = 'intendente', onBackToHome }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

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

  const concejales = [
    { name: 'Abg. Diego Romero', cargo: 'Presidente de la Junta Municipal', partido: 'ANR' },
    { name: 'Lic. Arnaldo Baeza', cargo: 'Vicepresidente de la Junta Municipal', partido: 'PLRA' },
    { name: 'Ing. Enrique Quintana', cargo: 'Concejal Municipal', partido: 'ANR' },
    { name: 'Dra. Francisca Franco', cargo: 'Concejal Municipal', partido: 'PLRA' },
    { name: 'Abg. Rubén González Chaves', cargo: 'Concejal Municipal', partido: 'ANR' },
    { name: 'Lic. Belén Maldonado', cargo: 'Concejal Municipal', partido: 'PLRA' },
    { name: 'Sr. Eliseo Fernández', cargo: 'Concejal Municipal', partido: 'ANR' },
    { name: 'Lic. Manuel Achucarro', cargo: 'Concejal Municipal', partido: 'PLRA' },
    { name: 'Abg. Juan Ángel Marecos', cargo: 'Concejal Municipal', partido: 'ANR' },
    { name: 'Prof. Rómulo Pérez', cargo: 'Concejal Municipal', partido: 'PLRA' },
    { name: 'Lic. Silverio Mosqueira', cargo: 'Concejal Municipal', partido: 'ANR' },
    { name: 'Sr. Iván Velázquez', cargo: 'Concejal Municipal', partido: 'Patria Querida' },
  ];

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

          {/* TAB 2: JUNTA MUNICIPAL */}
          {activeTab === 'junta' && (
            <div className="tab-content-panel">
              <div className="junta-intro-box">
                <span className="eyebrow-accent">ÓRGANO LEGISLATIVO COMUNAL</span>
                <h2>Junta Municipal de la Ciudad de Luque</h2>
                <p>
                  La Junta Municipal es el cuerpo legislativo comunal integrado por 12 concejales electos por sufragio directo.
                  Ejerce la función normativa comunal a través de Ordenanzas y Resoluciones, y cumple el rol de fiscalización
                  y aprobación del Presupuesto General de Gastos de la Municipalidad.
                </p>
                <div className="junta-info-chips">
                  <span>📅 Sesiones Ordinarias: Todos los Martes 08:30 hs</span>
                  <span>📍 Sala de Sesiones: Palacio Municipal de Luque</span>
                </div>
              </div>

              <div className="concejales-grid">
                {concejales.map((c, i) => (
                  <div className="concejal-card" key={i}>
                    <div className="concejal-avatar">
                      <Users size={22} />
                    </div>
                    <div className="concejal-info">
                      <h4>{c.name}</h4>
                      <span className="concejal-cargo">{c.cargo}</span>
                      <span className="concejal-partido-tag">{c.partido}</span>
                    </div>
                  </div>
                ))}
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
