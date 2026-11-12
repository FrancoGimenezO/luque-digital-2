import { useState, useMemo } from 'react';
import PageHero from './PageHero.jsx';
import {
  ShieldCheck,
  FileText,
  Search,
  Download,
  CheckCircle,
  ExternalLink,
  AlertCircle,
  FolderOpen,
  Calendar,
  Building,
  DollarSign,
  Scale,
  Send,
} from 'lucide-react';

export default function TransparenciaPage({ defaultTab = 'ordenanzas', onBackToHome }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const [docSearch, setDocSearch] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [complaintForm, setComplaintForm] = useState({
    nombre: '',
    cedula: '',
    telefono: '',
    email: '',
    tipo: 'Denuncia por Servicios',
    barrio: 'Centro',
    detalle: '',
  });

  const ordenanzas = [
    {
      numero: 'Ordenanza N° 05/2024',
      titulo: 'Reglamento General de Tránsito y Seguridad Vial',
      categoria: 'Tránsito y Transporte',
      fecha: '2024',
      descripcion: 'Actualización integral de normas viales, estacionamiento tarifado, límites de velocidad y sanciones en el ejido urbano de Luque.',
    },
    {
      numero: 'Ordenanza N° 01/2024',
      titulo: 'Ordenanza General Tributaria y Tarifario de Tasas',
      categoria: 'Tributaria y Finanzas',
      fecha: '2024',
      descripcion: 'Fijación de alícuotas para el impuesto inmobiliario, patentes comerciales, tasas de recolección y conservación de pavimentos.',
    },
    {
      numero: 'Ordenanza N° 18/2023',
      titulo: 'Plan de Ordenamiento Urbano y Territorial (POUT)',
      categoria: 'Obras y Urbanismo',
      fecha: '2023',
      descripcion: 'Delimitación de zonas residenciales, comerciales e industriales, coeficientes de edificación y protección de áreas verdes.',
    },
    {
      numero: 'Ordenanza N° 12/2023',
      titulo: 'Reglamentación de Gestión Integral de Residuos Sólidos Urbanos',
      categoria: 'Medio Ambiente',
      fecha: '2023',
      descripcion: 'Normas para la recolección diferenciada, prohibición de quema de basuras y sanciones a vertederos clandestinos en Luque.',
    },
    {
      numero: 'Ordenanza N° 08/2022',
      titulo: 'Protección y Salvaguarda del Patrimonio Histórico y Cultural',
      categoria: 'Cultura y Patrimonio',
      fecha: '2022',
      descripcion: 'Declaración de sitios históricos protegidos, casonas coloniales y fomento a la artesanía de filigrana y luthería.',
    },
  ];

  const filteredDocs = useMemo(() => {
    if (!docSearch.trim()) return ordenanzas;
    const term = docSearch.toLowerCase();
    return ordenanzas.filter((o) => (o.numero + ' ' + o.titulo + ' ' + o.categoria + ' ' + o.descripcion).toLowerCase().includes(term));
  }, [docSearch]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="GOBIERNO ABIERTO Y RENDICIÓN DE CUENTAS"
        title="Portal de Transparencia"
        subtitle="Acceso irrestricto a los documentos oficiales de la Municipalidad de Luque en cumplimiento de las Leyes 5282/14, 5189/14, 7089/23 y FONACIDE."
        category="Transparencia"
        badge="Ley 5282 / 2014"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Navegación por Módulos de Transparencia */}
          <div className="transparency-tabs-grid" role="tablist">
            <button
              className={`trans-tab-card ${activeTab === 'denuncias' ? 'active' : ''}`}
              onClick={() => setActiveTab('denuncias')}
              role="tab"
            >
              <AlertCircle size={20} />
              <span>Denuncias o Consultas</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'ordenanzas' ? 'active' : ''}`}
              onClick={() => setActiveTab('ordenanzas')}
              role="tab"
            >
              <FileText size={20} />
              <span>Ordenanzas Municipales</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'resoluciones' ? 'active' : ''}`}
              onClick={() => setActiveTab('resoluciones')}
              role="tab"
            >
              <Scale size={20} />
              <span>Resoluciones Municipales</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'fonacide' ? 'active' : ''}`}
              onClick={() => setActiveTab('fonacide')}
              role="tab"
            >
              <Building size={20} />
              <span>Consejo del FONACIDE</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'presupuesto' ? 'active' : ''}`}
              onClick={() => setActiveTab('presupuesto')}
              role="tab"
            >
              <DollarSign size={20} />
              <span>Presupuesto General</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'patip' ? 'active' : ''}`}
              onClick={() => setActiveTab('patip')}
              role="tab"
            >
              <ShieldCheck size={20} />
              <span>PATIP (Plan de Integridad)</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'ley5189' ? 'active' : ''}`}
              onClick={() => setActiveTab('ley5189')}
              role="tab"
            >
              <Users size={20} />
              <span>Ley 5189/14 (Salarios)</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'ley5282' ? 'active' : ''}`}
              onClick={() => setActiveTab('ley5282')}
              role="tab"
            >
              <FolderOpen size={20} />
              <span>Ley 5282/14 (Información)</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'ley7089' ? 'active' : ''}`}
              onClick={() => setActiveTab('ley7089')}
              role="tab"
            >
              <CheckCircle size={20} />
              <span>Ley 7089/23 (Conflicto)</span>
            </button>
          </div>

          {/* CONTENIDO SEGÚN PESTAÑA */}
          <div className="trans-content-area">
            {/* 1. DENUNCIAS O CONSULTAS */}
            {activeTab === 'denuncias' && (
              <div className="trans-panel">
                <div className="section-header-compact">
                  <span className="eyebrow-accent">CANAL CIUDADANO DIRECTO</span>
                  <h2>Formulario Oficial de Denuncias, Reclamos y Consultas</h2>
                  <p>Tu reporte es recibido y procesado por la Unidad de Transparencia y Auditoría Interna de la Municipalidad.</p>
                </div>

                {formSubmitted ? (
                  <div className="success-submission-card">
                    <CheckCircle size={48} className="success-icon" />
                    <h3>¡Tu comunicación ha sido registrada con éxito!</h3>
                    <p>
                      Se ha generado tu número de expediente de seguimiento: <strong>#LUQ-2026-{Math.floor(1000 + Math.random() * 9000)}</strong>.
                      Un funcionario de la Unidad de Transparencia se comunicará contigo vía correo o teléfono en un plazo máximo de 48 horas hábiles.
                    </p>
                    <button className="btn btn-navy" onClick={() => setFormSubmitted(false)}>
                      Cargar otra consulta o denuncia
                    </button>
                  </div>
                ) : (
                  <form className="complaint-form-box" onSubmit={handleFormSubmit}>
                    <div className="form-grid-2">
                      <div className="form-group">
                        <label>Nombre y Apellidos (*)</label>
                        <input
                          type="text"
                          required
                          value={complaintForm.nombre}
                          onChange={(e) => setComplaintForm({ ...complaintForm, nombre: e.target.value })}
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div className="form-group">
                        <label>N° Cédula de Identidad (*)</label>
                        <input
                          type="text"
                          required
                          value={complaintForm.cedula}
                          onChange={(e) => setComplaintForm({ ...complaintForm, cedula: e.target.value })}
                          placeholder="Ej. 3.456.789"
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label>Teléfono o Celular (*)</label>
                        <input
                          type="tel"
                          required
                          value={complaintForm.telefono}
                          onChange={(e) => setComplaintForm({ ...complaintForm, telefono: e.target.value })}
                          placeholder="0981 123 456"
                        />
                      </div>
                      <div className="form-group">
                        <label>Correo Electrónico (*)</label>
                        <input
                          type="email"
                          required
                          value={complaintForm.email}
                          onChange={(e) => setComplaintForm({ ...complaintForm, email: e.target.value })}
                          placeholder="tucorreo@ejemplo.com"
                        />
                      </div>
                    </div>

                    <div className="form-grid-2">
                      <div className="form-group">
                        <label>Tipo de Requerimiento</label>
                        <select
                          value={complaintForm.tipo}
                          onChange={(e) => setComplaintForm({ ...complaintForm, tipo: e.target.value })}
                        >
                          <option>Denuncia por Servicios Públicos (Baches, Basura)</option>
                          <option>Reclamo por Tránsito o Estacionamiento</option>
                          <option>Denuncia sobre Conducta Funcional / Ética</option>
                          <option>Solicitud de Información Pública (Ley 5282)</option>
                          <option>Consulta General de Tasas o Trámites</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Barrio o Compañía de Luque</label>
                        <input
                          type="text"
                          value={complaintForm.barrio}
                          onChange={(e) => setComplaintForm({ ...complaintForm, barrio: e.target.value })}
                          placeholder="Ej. Cuarto Barrio, Isla Bogado..."
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Descripción Detallada del Reclamo o Denuncia (*)</label>
                      <textarea
                        rows="5"
                        required
                        value={complaintForm.detalle}
                        onChange={(e) => setComplaintForm({ ...complaintForm, detalle: e.target.value })}
                        placeholder="Indicá con la mayor precisión posible la ubicación, fecha, funcionarios intervinientes o situación ocurrida..."
                      ></textarea>
                    </div>

                    <div className="form-actions-row">
                      <button type="submit" className="btn btn-navy">
                        <Send size={16} />
                        <span>Enviar Formulario Seguro</span>
                      </button>
                      <span className="privacy-note">🔒 Tus datos son resguardados bajo estricta reserva institucional.</span>
                    </div>
                  </form>
                )}
              </div>
            )}

            {/* 2. ORDENANZAS MUNICIPALES */}
            {activeTab === 'ordenanzas' && (
              <div className="trans-panel">
                <div className="section-header-compact">
                  <span className="eyebrow-accent">MARCO NORMATIVO VIGENTE</span>
                  <h2>Ordenanzas Municipales de la Ciudad de Luque</h2>
                  <p>Disposiciones dictadas por la Junta Municipal y promulgadas por la Intendencia.</p>
                </div>

                <div className="search-field" style={{ marginBottom: '1.5rem' }}>
                  <Search size={20} className="search-field-icon" />
                  <input
                    type="text"
                    value={docSearch}
                    onChange={(e) => setDocSearch(e.target.value)}
                    placeholder="Buscar por número de ordenanza, año o palabra clave..."
                  />
                  {docSearch && (
                    <button className="clear-search-btn" onClick={() => setDocSearch('')}>
                      ×
                    </button>
                  )}
                </div>

                <div className="docs-table-wrap">
                  <table className="docs-table">
                    <thead>
                      <tr>
                        <th>Identificación</th>
                        <th>Título de la Ordenanza</th>
                        <th>Materia</th>
                        <th>Año</th>
                        <th>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredDocs.map((ord, idx) => (
                        <tr key={idx}>
                          <td><strong>{ord.numero}</strong></td>
                          <td>
                            <b>{ord.titulo}</b>
                            <p className="doc-desc-cell">{ord.descripcion}</p>
                          </td>
                          <td><span className="doc-tag">{ord.categoria}</span></td>
                          <td>{ord.fecha}</td>
                          <td>
                            <button
                              className="btn-download-doc"
                              onClick={() => alert(`Descargando copia oficial digitalizada de: ${ord.numero}`)}
                            >
                              <Download size={14} />
                              <span>Descargar PDF</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* 3. RESOLUCIONES MUNICIPALES */}
            {activeTab === 'resoluciones' && (
              <div className="trans-panel">
                <div className="section-header-compact">
                  <span className="eyebrow-accent">ACTOS ADMINISTRATIVOS</span>
                  <h2>Resoluciones de la Intendencia Municipal</h2>
                  <p>Disposiciones ejecutivas para la gestión municipal, contrataciones y nombramientos.</p>
                </div>

                <div className="resoluciones-grid">
                  <div className="resolucion-card">
                    <span className="resolucion-date">Año 2026</span>
                    <h3>Resoluciones Administrativas Ejercicio 2026</h3>
                    <p>Compendio mensual de resoluciones de intendencia, habilitación de ferias y designaciones.</p>
                    <div className="resolucion-actions">
                      <button className="btn-link" onClick={() => alert('Abriendo repositorio oficial de resoluciones 2026')}>
                        <span>Consultar Resoluciones 2026</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>

                  <div className="resolucion-card">
                    <span className="resolucion-date">Año 2025</span>
                    <h3>Resoluciones Administrativas Ejercicio 2025</h3>
                    <p>Resoluciones promulgadas de transferencias, obras viales barriales y licitaciones adjudicadas.</p>
                    <div className="resolucion-actions">
                      <button className="btn-link" onClick={() => alert('Abriendo repositorio oficial de resoluciones 2025')}>
                        <span>Consultar Resoluciones 2025</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>

                  <div className="resolucion-card">
                    <span className="resolucion-date">Resoluciones Especiales</span>
                    <h3>Resoluciones de Altas y Bajas Ley 7089/23</h3>
                    <p>Registro público obligatorio de designaciones y ceses de cargos directivos.</p>
                    <div className="resolucion-actions">
                      <button className="btn-link" onClick={() => alert('Descargando archivo consolidado de Altas y Bajas')}>
                        <span>Ver Registro de Altas y Bajas</span>
                        <span>→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. CONSEJO DEL FONACIDE */}
            {activeTab === 'fonacide' && (
              <div className="trans-panel">
                <div className="section-header-compact">
                  <span className="eyebrow-accent">INVERSIÓN EN EDUCACIÓN PÚBLICA</span>
                  <h2>Consejo Municipal del FONACIDE</h2>
                  <p>Destino, ejecución y rendición de cuentas de los recursos para infraestructura escolar y alimentación escolar.</p>
                </div>

                <div className="fonacide-summary-grid">
                  <div className="fonacide-card">
                    <b>50% Infraestructura</b>
                    <span>Construcción de aulas, sanitarios sexados y tinglados en escuelas vulnerables de Luque.</span>
                  </div>
                  <div className="fonacide-card">
                    <b>30% Almuerzo Escolar</b>
                    <span>Distribución diaria de raciones alimentarias balanceadas a niños del nivel inicial y básico.</span>
                  </div>
                  <div className="fonacide-card">
                    <b>20% Proyectos Educativos</b>
                    <span>Equipamiento de salas de informática, mobiliario pedagógico y material didáctico.</span>
                  </div>
                </div>

                <div className="fonacide-reports-list">
                  <h3>Informes de Gestión y Actas del Consejo</h3>
                  <div className="report-row">
                    <FileText size={18} />
                    <div className="report-info">
                      <b>Informe Trimestral de Ejecución FONACIDE - Cuarto Trimestre</b>
                      <small>Enviado a la Contraloría General de la República y Ministerio de Economía</small>
                    </div>
                    <button className="btn-download-doc" onClick={() => alert('Descargando informe')}>
                      <Download size={14} /> PDF
                    </button>
                  </div>
                  <div className="report-row">
                    <FileText size={18} />
                    <div className="report-info">
                      <b>Plan de Obras Priorizadas en Escuelas Públicas de Luque</b>
                      <small>Aprobado por el Consejo Comunal de Educación</small>
                    </div>
                    <button className="btn-download-doc" onClick={() => alert('Descargando plan')}>
                      <Download size={14} /> PDF
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 5. PRESUPUESTO GENERAL */}
            {activeTab === 'presupuesto' && (
              <div className="trans-panel">
                <div className="section-header-compact">
                  <span className="eyebrow-accent">EQUILIBRIO FISCAL Y RECURSOS</span>
                  <h2>Presupuesto General de la Municipalidad de Luque</h2>
                  <p>Detalle de ingresos genuinos, transferencias del Estado paraguayo y destino del gasto social y de capital.</p>
                </div>

                <div className="presupuesto-grid">
                  <div className="presupuesto-box">
                    <span className="presupuesto-label">Ingresos Genuinos Corrientes</span>
                    <b>+Gs. 115.000 Millones</b>
                    <small>Impuesto inmobiliario, patentes, rodados y tasas de servicios</small>
                  </div>
                  <div className="presupuesto-box">
                    <span className="presupuesto-label">Inversión en Obras de Capital</span>
                    <b>+Gs. 45.000 Millones</b>
                    <small>Pavimentación asfáltica, empedrados, puentes y desagües pluviales</small>
                  </div>
                  <div className="presupuesto-box">
                    <span className="presupuesto-label">Servicios Personales y Salud</span>
                    <b>Gs. 38.000 Millones</b>
                    <small>Cuadrillas de aseo urbano, policía de tránsito y centros USF</small>
                  </div>
                </div>

                <div className="presupuesto-download-cta">
                  <p>Descargá el Balance General y Estado de Resultados consolidado dictaminado por auditoría externa.</p>
                  <button className="btn btn-navy" onClick={() => alert('Descargando Balance General')}>
                    <Download size={16} />
                    <span>Descargar Balance General y Cuadro de Ejecución Anual</span>
                  </button>
                </div>
              </div>
            )}

            {/* 6. PATIP (PLAN ANUAL DE TRANSPARENCIA) */}
            {activeTab === 'patip' && (
              <div className="trans-panel">
                <div className="section-header-compact">
                  <span className="eyebrow-accent">INTEGRIDAD Y CONTROL INTERNO</span>
                  <h2>PATIP: Plan Anual de Transparencia e Integridad Pública</h2>
                  <p>Monitoreo del MECIP y la Secretaría Nacional Anticorrupción (SENAC) para prevenir irregularidades.</p>
                </div>

                <div className="patip-cards-row">
                  <div className="patip-detail-card">
                    <ShieldCheck size={28} className="patip-icon" />
                    <h3>Matriz de Cumplimiento PATIP</h3>
                    <p>Evaluación semestral de los 10 estándares de integridad pública, canales de denuncia y código de ética.</p>
                    <button className="btn-link" onClick={() => alert('Descargando Matriz')}>
                      <span>Ver Matriz de Cumplimiento</span> →
                    </button>
                  </div>
                  <div className="patip-detail-card">
                    <FolderOpen size={28} className="patip-icon" />
                    <h3>Control Interno Institucional MECIP</h3>
                    <p>Manuales de procedimientos, mapas de riesgos operativos y protocolos de auditoría interna continua.</p>
                    <button className="btn-link" onClick={() => alert('Descargando manual MECIP')}>
                      <span>Ver Informes MECIP</span> →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 7. LEY 5189/14 (SALARIOS Y REMUNERACIONES) */}
            {activeTab === 'ley5189' && (
              <div className="trans-panel">
                <div className="section-header-compact">
                  <span className="eyebrow-accent">TRANSPARENCIA RETRIBUTIVA</span>
                  <h2>Cumplimiento de la Ley 5189/2014</h2>
                  <p>Publicación periódica y obligatoria de la estructura orgánica, nómina completa y salarios de funcionarios.</p>
                </div>

                <div className="ley-info-banner">
                  <CheckCircle size={24} />
                  <div>
                    <b>Publicación Actualizada Mensualmente</b>
                    <p>Contiene la lista nominal de funcionarios nombrados y contratados, cargo, dependencia y remuneración bruta/neta percibida.</p>
                  </div>
                </div>

                <div className="salary-month-buttons">
                  <button className="btn btn-outline-navy" onClick={() => alert('Descargando nómina Marzo 2026')}>
                    <Download size={15} /> Nómina Salarial Marzo 2026
                  </button>
                  <button className="btn btn-outline-navy" onClick={() => alert('Descargando nómina Febrero 2026')}>
                    <Download size={15} /> Nómina Salarial Febrero 2026
                  </button>
                  <button className="btn btn-outline-navy" onClick={() => alert('Descargando nómina Enero 2026')}>
                    <Download size={15} /> Nómina Salarial Enero 2026
                  </button>
                </div>
              </div>
            )}

            {/* 8. LEY 5282/14 (ACCESO A LA INFORMACIÓN PÚBLICA) */}
            {activeTab === 'ley5282' && (
              <div className="trans-panel">
                <div className="section-header-compact">
                  <span className="eyebrow-accent">DERECHO CIUDADANO FUNDAMENTAL</span>
                  <h2>Ley 5282/2014 de Libre Acceso Ciudadano a la Información</h2>
                  <p>Toda persona tiene derecho a solicitar y recibir información completa, veraz, adecuada y oportuna de las fuentes públicas.</p>
                </div>

                <div className="ley5282-steps-card">
                  <h3>¿Cómo realizar una solicitud formal bajo la Ley 5282?</h3>
                  <ol>
                    <li>Ingresá al Portal Nacional de Información Pública del Paraguay o presentá una nota física en Mesa de Entrada de Luque.</li>
                    <li>Describí con claridad el documento, presupuesto o resolución que necesitás consultar.</li>
                    <li>La Municipalidad de Luque tiene un plazo legal máximo improrrogable de 15 días hábiles para dar respuesta formal.</li>
                    <li>El trámite es completamente gratuito en formato digital (PDF / Datos Abiertos).</li>
                  </ol>
                  <a
                    href="https://informacionpublica.paraguay.gov.py/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-navy"
                  >
                    <span>Ir al Portal Unificado de Información Pública (informacionpublica.paraguay.gov.py)</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            )}

            {/* 9. LEY 7089/23 (CONFLICTO DE INTERESES) */}
            {activeTab === 'ley7089' && (
              <div className="trans-panel">
                <div className="section-header-compact">
                  <span className="eyebrow-accent">RÉGIMEN DE INTEGRIDAD</span>
                  <h2>Ley N° 7089/2023 de Conflicto de Intereses</h2>
                  <p>Mecanismos de prevención, control y sanción de conflictos de intereses en la función pública municipal.</p>
                </div>

                <div className="ley7089-content-box">
                  <div className="ley7089-item">
                    <b>Declaraciones Juradas de Intereses</b>
                    <p>Presentadas ante la Contraloría General de la República por el Intendente, Concejales y Directores.</p>
                  </div>
                  <div className="ley7089-item">
                    <b>Registro de Altas y Bajas</b>
                    <p>Publicación de resoluciones de designación, cese y parentesco conforme al artículo 14 de la Ley 7089.</p>
                  </div>
                  <div className="ley7089-actions">
                    <button className="btn btn-outline-navy" onClick={() => alert('Descargando Resoluciones Altas y Bajas 2026')}>
                      <Download size={14} /> Resoluciones Altas y Bajas 2026 (PDF)
                    </button>
                    <button className="btn btn-outline-navy" onClick={() => alert('Descargando Resoluciones Altas y Bajas 2025')}>
                      <Download size={14} /> Resoluciones Altas y Bajas 2025 (PDF)
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
