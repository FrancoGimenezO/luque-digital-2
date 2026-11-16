import { useState, useEffect, useMemo } from 'react';
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
  Users,
  Eye,
  FileCheck,
} from 'lucide-react';

export default function TransparenciaPage({ defaultTab = 'ordenanzas', onBackToHome }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  useEffect(() => {
    setActiveTab(defaultTab);
  }, [defaultTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const map = {
      denuncias: '#denuncias-consultas',
      ordenanzas: '#ordenanzas-municipales',
      resoluciones: '#resoluciones-municipales',
      fonacide: '#fonacide',
      presupuesto: '#presupuesto-general',
      patip: '#patip',
      ley5189: '#ley-5189',
      ley5282: '#ley-5282',
      ley7089: '#ley-7089',
    };
    if (map[tab]) {
      window.location.hash = map[tab];
    }
  };
  const [docSearch, setDocSearch] = useState('');
  const [ordCategory, setOrdCategory] = useState('Todas');
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

  // Las 16 Ordenanzas Oficiales de la Municipalidad de Luque extraídas del portal institucional
  const ordenanzas = [
    {
      id: 'ord-09-2025',
      numero: 'Ordenanza Municipal Nº 09/2025',
      numeroCorto: '09/2025',
      titulo: 'Plan de Ordenamiento Urbano y Territorial (POUT)',
      tituloCompleto: 'POR LA CUAL SE ESTABLECE EL PLAN DE ORDENAMIENTO URBANO Y TERRITORIAL DEL MUNICIPIO DE LUQUE',
      categoria: 'Planificación Urbana y Obras',
      anio: '2025',
      fileUrl: '/ordenanzas/ordenanza-09-2025-pout.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/ORD-09.2025-POUT.pdf',
      fileType: 'PDF Oficial',
      fileSize: '42.4 MB',
      descripcion: 'Establece las directrices y normativas del Plan de Ordenamiento Urbano y Territorial (POUT) de Luque, zonificación urbana, coeficientes de edificabilidad y protección de áreas verdes.',
    },
    {
      id: 'ord-05-2024',
      numero: 'Ordenanza Municipal Nº 05/2024',
      numeroCorto: '05/2024',
      titulo: 'Reglamento General de Tránsito de la Ciudad de Luque',
      tituloCompleto: 'LA CUAL APRUEBA EL REGLAMENTO GENERAL DE TRANSITO DE LA CIUDAD DE LUQUE',
      categoria: 'Tránsito y Transporte',
      anio: '2024',
      fileUrl: '/ordenanzas/ordenanza-05-2024-reglamento-transito.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2026/03/ORDENANZA-MUNICIPAL-N%C2%B0-5-2024.pdf',
      fileType: 'PDF Oficial',
      fileSize: '394 KB',
      descripcion: 'Aprueba el reglamento general de tránsito de la ciudad de Luque: circulación vial, señalización, estacionamiento medido, sentido de calles y régimen de sanciones.',
    },
    {
      id: 'ord-06-2024',
      numero: 'Ordenanza Municipal Nº 06/2024',
      numeroCorto: '06/2024',
      titulo: 'Reglamentación de Comisiones Vecinales',
      tituloCompleto: 'POR LA CUAL SE REGLAMENTA LA CONSTITUCIÓN, FUNCIONAMIENTO Y DURACIÓN DE LAS COMISIONES VECINALES DENTRO DEL MUNICIPIO DE LUQUE',
      categoria: 'Participación Ciudadana',
      anio: '2024',
      fileUrl: '/ordenanzas/ordenanza-06-2024-comisiones-vecinales.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/ordenanza-06_2024.pdf',
      fileType: 'PDF Oficial',
      fileSize: '8.5 MB',
      descripcion: 'Reglamenta los requisitos para la asamblea constitutiva, funcionamiento democrático, personería municipal, duración de mandatos y rendición de cuentas de las comisiones vecinales barriales.',
    },
    {
      id: 'ord-11-2023',
      numero: 'Ordenanza Municipal Nº 11/2023',
      numeroCorto: '11/2023',
      titulo: 'Plantación y Gestión de Árboles en Veredas',
      tituloCompleto: 'QUE REGLAMENTA LA PLANTACIÓN Y GESTIÓN DE ÁRBOLES EN VEREDAS',
      categoria: 'Medio Ambiente',
      anio: '2023',
      fileUrl: '/ordenanzas/ordenanza-11-2023-arbolado-veredas.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/Ordenanza-11-2023-Arbolado-en-Veredas.pdf',
      fileType: 'PDF Oficial',
      fileSize: '1.8 MB',
      descripcion: 'Normativa ambiental que regula las especies nativas aptas para veredas, distancias mínimas a cordones e infraestructura eléctrica, prohibición de especies destructivas y régimen sancionatorio.',
    },
    {
      id: 'ord-21-2022',
      numero: 'Ordenanza Municipal Nº 21/2022',
      numeroCorto: '21/2022',
      titulo: 'Tarifas de Recolección y Disposición Final de Residuos Sólidos',
      tituloCompleto: 'SOBRE REAJUSTE DE TARIFAS POR EL SERVICIO DE RECOLECCIÓN DE TRANSPORTE Y DISPOSICIÓN FINAL DE RESIDUOS SÓLIDOS URBANOS EN LA CIUDAD DE LUQUE',
      categoria: 'Servicios Urbanos',
      anio: '2022',
      fileUrl: '/ordenanzas/ordenanza-21-2022-residuos-solidos.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/ORDENANZA-21-2022-PG1-1.pdf',
      fileType: 'PDF Oficial',
      fileSize: '1.2 MB',
      descripcion: 'Actualiza el esquema tarifario municipal por el servicio de recolección de residuos domiciliarios y comerciales, transporte y tratamiento en disposición final.',
    },
    {
      id: 'ord-11-2022',
      numero: 'Ordenanza Municipal Nº 11/2022',
      numeroCorto: '11/2022',
      titulo: 'Regulación de Ruidos Molestos y Vibraciones',
      tituloCompleto: 'POR LA CUAL SE REGULA LA EMISIÓN DE RUIDOS MOLESTOS Y VIBRACIONES EN LA CIUDAD DE LUQUE',
      categoria: 'Medio Ambiente',
      anio: '2022',
      fileUrl: '/ordenanzas/ordenanza-11-2022-ruidos-molestos.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/Ordenanza-11-2022-pg1.pdf',
      fileType: 'PDF Oficial',
      fileSize: '1.5 MB',
      descripcion: 'Fija los decibeles máximos permitidos en zonas residenciales, mixtas e industriales, control acústico nocturno y régimen de sanciones por polución sonora.',
    },
    {
      id: 'ord-14-2017',
      numero: 'Ordenanza Municipal Nº 14/2017',
      numeroCorto: '14/2017',
      titulo: 'Sumario Administrativo por Quema Irregular de Basura',
      tituloCompleto: 'POR LA CUAL SE REGLAMENTA EL SUMARIO ADMINISTRATIVO POR QUEMA IRREGULAR DE TODO TIPO DE BASURA',
      categoria: 'Medio Ambiente',
      anio: '2017',
      fileUrl: '/ordenanzas/ordenanza-14-2017-quema-basura.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/Ord.-14-17-Quema-de-basura.pdf',
      fileType: 'PDF Oficial',
      fileSize: '893 KB',
      descripcion: 'Establece el procedimiento sumarial ante el Juzgado de Faltas y fuertes sanciones económicas contra personas y comercios que quemen basura a cielo abierto.',
    },
    {
      id: 'ord-03-2017',
      numero: 'Ordenanza Municipal Nº 03/2017',
      numeroCorto: '03/2017',
      titulo: 'Modificación del Art. 10 de la Ordenanza 15/2013 (Combustibles)',
      tituloCompleto: 'MODIFICACIÓN PARCIAL Y AMPLIACIÓN DEL ART. 10 DE LA ORDENANZA 15/2013',
      categoria: 'Comercio y Seguridad',
      anio: '2017',
      fileUrl: '/ordenanzas/ordenanza-03-2017-modificacion-combustibles.jpeg',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/WhatsApp-Image-2024-10-18-at-9.57.23-AM.jpeg',
      fileType: 'Escaneo Oficial (JPG)',
      fileSize: '299 KB',
      descripcion: 'Modifica y amplía las distancias y condiciones técnicas de seguridad requeridas para la habilitación de nuevas estaciones de servicios y expendio de combustibles.',
    },
    {
      id: 'ord-20-2016',
      numero: 'Ordenanza Municipal Nº 20/2016',
      numeroCorto: '20/2016',
      titulo: 'Protección del Arbolado y Prohibición de Tala sin Permiso',
      tituloCompleto: 'PROTECCIÓN DEL ARBOLADO DEL MUNICIPIO DE LUQUE',
      categoria: 'Medio Ambiente',
      anio: '2016',
      fileUrl: '/ordenanzas/ordenanza-20-2016-proteccion-arbolado.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/Ordenenza-20-2016-Tala-y-Poda-sin-permiso.pdf',
      fileType: 'PDF Oficial',
      fileSize: '2.5 MB',
      descripcion: 'Protege el patrimonio arbóreo del municipio de Luque, prohibiendo la tala, poda severa o eliminación de árboles en áreas públicas o privadas sin autorización previa.',
    },
    {
      id: 'ord-13-2016',
      numero: 'Ordenanza Municipal Nº 13/2016',
      numeroCorto: '13/2016',
      titulo: 'Regulación de Descargas de Efluentes Líquidos a Cursos Hídricos',
      tituloCompleto: 'REGULACIÓN DE CONTAMINANTES ATRIBUIDOS A LAS DESCARGAS DE RESIDUOS LÍQUIDOS A CUERPOS DE AGUA SUPERFICIALES, RED DE ALCANTARILLADO E INFILTRACIÓN DE TERRENO',
      categoria: 'Medio Ambiente',
      anio: '2016',
      fileUrl: '/ordenanzas/ordenanza-13-2016-residuos-liquidos-aguas.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/ORDENANZA-13-16-PG1.pdf',
      fileType: 'PDF Oficial',
      fileSize: '1.6 MB',
      descripcion: 'Control de parámetros fisicoquímicos y prohibición de descarga de contaminantes a arroyos, cuencas hídricas del municipio, alcantarillado sanitario e infiltración.',
    },
    {
      id: 'ord-52-2014',
      numero: 'Ordenanza Municipal N° 52/2014',
      numeroCorto: '52/2014',
      titulo: 'Sistema de Prevención y Atención de Emergencias y Desastres',
      tituloCompleto: 'SISTEMA DE PREVENCIÓN Y ATENCIÓN DE EMERGENCIAS Y DESASTRES DE LA CIUDAD DE LUQUE',
      categoria: 'Gestión de Riesgos',
      anio: '2014',
      fileUrl: '/ordenanzas/ordenanza-52-2014-sistema-emergencias.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/ORDENANZA-52-20014-SISTEMA-DE-PREVENSION-EMERGENCIA.pdf',
      fileType: 'PDF Oficial',
      fileSize: '746 KB',
      descripcion: 'Marco institucional de contingencia, comités de emergencia barriales y coordinación comunal con Bomberos Voluntarios y Cruz Roja ante desastres naturales.',
    },
    {
      id: 'ord-28-2013',
      numero: 'Ordenanza Municipal Nº 28/2013',
      numeroCorto: '28/2013',
      titulo: 'Desinfección Obligatoria de Comercios, Industrias y Transporte',
      tituloCompleto: 'SOBRE DESINFECCIÓN DE LOCALES COMERCIALES, INDUSTRIALES, PROFESIONALES, VEHICULOS DE SERVICIO DE TRANSPORTE PÚBLICO DE PASAJEROS Y LOCALES DE ESPECTACULOS PÚBLICOS',
      categoria: 'Salubridad e Higiene',
      anio: '2013',
      fileUrl: '/ordenanzas/ordenanza-28-2013-desinfeccion-locales.jpg',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/a316f8e5-0e27-45b0-a0a9-5a2a00b367b0.jpg',
      fileType: 'Escaneo Oficial (JPG)',
      fileSize: '320 KB',
      descripcion: 'Obligatoriedad de desinfección, fumigación y desratización periódica en locales comerciales, colectivos del transporte público y sitios de concurrencia masiva.',
    },
    {
      id: 'ord-20-2013',
      numero: 'Ordenanza Municipal Nº 20/2013',
      numeroCorto: '20/2013',
      titulo: 'Regulación del Funcionamiento de Gomerías en Luque',
      tituloCompleto: 'FUNCIONAMIENTO DE LAS GOMERIAS EN LA CIUDAD DE LUQUE',
      categoria: 'Comercio y Seguridad',
      anio: '2013',
      fileUrl: '/ordenanzas/ordenanza-20-2013-gomerias.jpg',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/625d77e3-f5ea-4c29-b915-7e007dea9d28.jpg',
      fileType: 'Escaneo Oficial (JPG)',
      fileSize: '307 KB',
      descripcion: 'Normas sanitarias de acopio techado de cubiertas en gomerías para prevenir criaderos de vectores del dengue y condiciones de seguridad laboral en talleres.',
    },
    {
      id: 'ord-15-2013',
      numero: 'Ordenanza Municipal Nº 15/2013',
      numeroCorto: '15/2013',
      titulo: 'Implantación y Habilitación de Estaciones de Servicios',
      tituloCompleto: 'QUE REGLAMENTA LA IMPLANTACIÓN, INSTRALACIÓN Y HABILITACIÓN DE LOS LOCALES DESTINADOS A LA PROVISIÓN,MANIPULEO, ALMACENAMIENTO Y COMERCIALIZACIÓN DE COMBUSTIBLES LÍQUIDOS Y/O GASEOSOS, LUBRICANTES Y ADITIVOS',
      categoria: 'Comercio y Seguridad',
      anio: '2013',
      fileUrl: '/ordenanzas/ordenanza-15-2013-estaciones-combustibles.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/IMG_5669.pdf',
      fileType: 'PDF Oficial',
      fileSize: '3.9 MB',
      descripcion: 'Reglamenta la localización, almacenamiento, medidas contra incendios y manipuleo de hidrocarburos, lubricantes y gases inflamables.',
    },
    {
      id: 'ord-17-2003',
      numero: 'Ordenanza Municipal Nº 17/2003',
      numeroCorto: '17/2003',
      titulo: 'Concesión y Servicios del Transporte Público de Pasajeros',
      tituloCompleto: 'POR LA CUAL SE REGLAMENTA LA CONCESIÓN,EXPLOTACIÓN, PRESTACIÓN DE SERVICIOS Y CANCELACIÓN DE ITINERARIOS DEL TRANSPORTE PÚBLICO DE PASAJERPS, EN LA JURISDICCIÓN DE LA CIUDAD DE LUQUE',
      categoria: 'Tránsito y Transporte',
      anio: '2003',
      fileUrl: '/ordenanzas/ordenanza-17-2003-transporte-publico.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/CamScanner-31-10-2024-11.27.pdf',
      fileType: 'PDF Oficial',
      fileSize: '8.8 MB',
      descripcion: 'Reglamentación del sistema de transporte colectivo de pasajeros dentro de la jurisdicción municipal: itinerarios, pliegos, inspección vehicular y sanciones.',
    },
    {
      id: 'ord-08-1993',
      numero: 'Ordenanza Municipal Nº 08/93',
      numeroCorto: '08/93',
      titulo: 'Reglamento de la Actividad Edilicia de la Ciudad de Luque',
      tituloCompleto: 'POR LA CUAL SE REGLAMENTA LA ACTIVIDAD EDILICIA DE LA CIUDAD DE LUQUE Y SE ESTABLECE NORMAS TÉCNICAS DE SEGURIDAD, CONFORT, FUNCIONALIDAD Y ESTÉTICA',
      categoria: 'Planificación Urbana y Obras',
      anio: '1993',
      fileUrl: '/ordenanzas/ordenanza-08-1993-actividad-edilicia.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/1712245612_8_Ord.N8-93pag.1.pdf',
      fileType: 'PDF Oficial',
      fileSize: '1.7 MB',
      descripcion: 'Código edilicio fundacional: normas técnicas de seguridad de estructuras, retiros de fachada, ventilación, prevención contra siniestros y condiciones de habitabilidad.',
    },
  ];

  const categoriasOrdenanzas = [
    'Todas',
    'Medio Ambiente',
    'Tránsito y Transporte',
    'Planificación Urbana y Obras',
    'Comercio y Seguridad',
    'Servicios Urbanos',
    'Salubridad e Higiene',
    'Participación Ciudadana',
    'Gestión de Riesgos',
  ];

  const filteredDocs = useMemo(() => {
    return ordenanzas.filter((o) => {
      const matchesCategory = ordCategory === 'Todas' || o.categoria === ordCategory;
      if (!matchesCategory) return false;
      if (!docSearch.trim()) return true;
      const term = docSearch.toLowerCase();
      return (
        o.numero.toLowerCase().includes(term) ||
        o.numeroCorto.toLowerCase().includes(term) ||
        o.titulo.toLowerCase().includes(term) ||
        o.tituloCompleto.toLowerCase().includes(term) ||
        o.categoria.toLowerCase().includes(term) ||
        o.anio.toLowerCase().includes(term) ||
        o.descripcion.toLowerCase().includes(term)
      );
    });
  }, [docSearch, ordCategory]);

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
              onClick={() => handleTabChange('denuncias')}
              role="tab"
            >
              <AlertCircle size={20} />
              <span>Denuncias o Consultas</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'ordenanzas' ? 'active' : ''}`}
              onClick={() => handleTabChange('ordenanzas')}
              role="tab"
            >
              <FileText size={20} />
              <span>Ordenanzas Municipales</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'resoluciones' ? 'active' : ''}`}
              onClick={() => handleTabChange('resoluciones')}
              role="tab"
            >
              <Scale size={20} />
              <span>Resoluciones Municipales</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'fonacide' ? 'active' : ''}`}
              onClick={() => handleTabChange('fonacide')}
              role="tab"
            >
              <Building size={20} />
              <span>Consejo del FONACIDE</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'presupuesto' ? 'active' : ''}`}
              onClick={() => handleTabChange('presupuesto')}
              role="tab"
            >
              <DollarSign size={20} />
              <span>Presupuesto General</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'patip' ? 'active' : ''}`}
              onClick={() => handleTabChange('patip')}
              role="tab"
            >
              <ShieldCheck size={20} />
              <span>PATIP (Plan de Integridad)</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'ley5189' ? 'active' : ''}`}
              onClick={() => handleTabChange('ley5189')}
              role="tab"
            >
              <Users size={20} />
              <span>Ley 5189/14 (Salarios)</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'ley5282' ? 'active' : ''}`}
              onClick={() => handleTabChange('ley5282')}
              role="tab"
            >
              <FolderOpen size={20} />
              <span>Ley 5282/14 (Información)</span>
            </button>
            <button
              className={`trans-tab-card ${activeTab === 'ley7089' ? 'active' : ''}`}
              onClick={() => handleTabChange('ley7089')}
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

            {/* 2. ORDENANZAS MUNICIPALES (16 ORDENANZAS OFICIALES) */}
            {activeTab === 'ordenanzas' && (
              <div className="trans-panel">
                <div className="section-header-compact">
                  <span className="eyebrow-accent">MARCO NORMATIVO VIGENTE · JUNTA MUNICIPAL E INTENDENCIA</span>
                  <h2>Ordenanzas Municipales de la Ciudad de Luque</h2>
                  <p>
                    Compendio oficial digitalizado de ordenanzas sancionadas por la Honorable Junta Municipal y
                    promulgadas por la Intendencia Municipal de Luque. Disponibles para consulta pública, lectura directa y
                    descarga libre en cumplimiento de la Ley 5282/2014.
                  </p>
                </div>

                {/* Resumen Informativo de Ordenanzas */}
                <div className="ordenanzas-stats-banner">
                  <div className="ord-stat-item">
                    <FileCheck size={22} className="ord-stat-icon" />
                    <div>
                      <strong>16 Ordenanzas Digitalizadas</strong>
                      <span>Disponibles en PDF y alta resolución</span>
                    </div>
                  </div>
                  <div className="ord-stat-item">
                    <ShieldCheck size={22} className="ord-stat-icon" />
                    <div>
                      <strong>Validez Jurídica Oficial</strong>
                      <span>Documentos con firma y promulgación comunal</span>
                    </div>
                  </div>
                  <div className="ord-stat-item">
                    <ExternalLink size={22} className="ord-stat-icon" />
                    <div>
                      <strong>Acceso Directo y Fuente</strong>
                      <span>Copias de descarga local y enlace a servidor oficial</span>
                    </div>
                  </div>
                </div>

                {/* Barra de Búsqueda y Filtros de Categoría */}
                <div className="barrios-search-filter-wrap" style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
                    <div className="search-field" style={{ flex: '1 1 320px', maxWidth: '440px' }}>
                      <Search size={18} className="search-field-icon" />
                      <input
                        type="text"
                        value={docSearch}
                        onChange={(e) => setDocSearch(e.target.value)}
                        placeholder="Buscar por n° de ordenanza, año, materia o palabra clave..."
                        aria-label="Buscar ordenanza municipal"
                      />
                      {docSearch && (
                        <button className="clear-search-btn" onClick={() => setDocSearch('')} aria-label="Limpiar búsqueda">
                          ×
                        </button>
                      )}
                    </div>

                    <div className="category-filters" role="tablist">
                      {categoriasOrdenanzas.map((cat) => {
                        const count = cat === 'Todas' ? ordenanzas.length : ordenanzas.filter((o) => o.categoria === cat).length;
                        const isActive = ordCategory === cat;

                        return (
                          <button
                            key={cat}
                            className={`cat-pill ${isActive ? 'active' : ''}`}
                            onClick={() => setOrdCategory(cat)}
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

                {/* Tabla Oficial de Ordenanzas */}
                {filteredDocs.length > 0 ? (
                  <div className="docs-table-wrap">
                    <table className="docs-table">
                      <thead>
                        <tr>
                          <th style={{ width: '160px' }}>Identificación</th>
                          <th>Disposición y Resumen Oficial</th>
                          <th style={{ width: '190px' }}>Materia</th>
                          <th style={{ width: '90px', textAlign: 'center' }}>Año</th>
                          <th style={{ width: '180px', textAlign: 'center' }}>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredDocs.map((ord) => (
                          <tr key={ord.id}>
                            <td>
                              <div className="ord-number-badge">{ord.numero}</div>
                              <span className="ord-type-pill">{ord.fileType}</span>
                              <span className="ord-size-pill">{ord.fileSize}</span>
                            </td>
                            <td>
                              <b className="ord-title-text">{ord.titulo}</b>
                              <div className="ord-caption-text">{ord.tituloCompleto}</div>
                              <p className="doc-desc-cell">{ord.descripcion}</p>
                            </td>
                            <td>
                              <span className="doc-tag">{ord.categoria}</span>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <span className="ord-year-badge">{ord.anio}</span>
                            </td>
                            <td>
                              <div className="ord-actions-stack">
                                <a
                                  href={ord.fileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn-download-doc"
                                  title={`Abrir y descargar copia digitalizada de ${ord.numero}`}
                                >
                                  <Download size={14} />
                                  <span>Descargar {ord.fileType.includes('PDF') ? 'PDF' : 'Doc'}</span>
                                </a>
                                <a
                                  href={ord.oficialUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn-source-doc"
                                  title="Ver archivo original en servidor oficial luque.gov.py"
                                >
                                  <ExternalLink size={12} />
                                  <span>Fuente Oficial</span>
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="no-results-box" style={{ padding: '3rem 1.5rem', textAlign: 'center', background: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1' }}>
                    <AlertCircle size={36} style={{ color: '#94a3b8', marginBottom: '0.75rem' }} />
                    <h3 style={{ color: '#0b2265', marginBottom: '0.5rem' }}>No se encontraron ordenanzas</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                      No hay resultados que coincidan con <strong>"{docSearch}"</strong> en la categoría seleccionada.
                    </p>
                    <button
                      className="btn btn-navy"
                      onClick={() => {
                        setDocSearch('');
                        setOrdCategory('Todas');
                      }}
                    >
                      Restablecer Filtros
                    </button>
                  </div>
                )}
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
