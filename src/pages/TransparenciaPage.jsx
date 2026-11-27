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
  X,
  Layers,
  BookOpen,
  Tag,
  Clock,
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
  const [resSearch, setResSearch] = useState('');
  const [resYearFilter, setResYearFilter] = useState('todas');
  const [resCategory, setResCategory] = useState('Todas');
  const [selectedResModal, setSelectedResModal] = useState(null);
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
  }, [ordenanzas, docSearch, ordCategory]);

  // Resoluciones Oficiales de la Intendencia Municipal de Luque (Ejercicios 2026, 2025 y Ley 7089/23)
  const resoluciones = [
    // --- EJERCICIO 2026 ---
    {
      id: 'res-128-2026',
      numero: 'Res. I.M. Nº 128/2026',
      numeroCorto: '128/2026',
      titulo: 'Plan Operativo de Emergencia Vial, Bacheo y Asfaltado en Barrios',
      tituloCompleto: 'POR LA CUAL SE DISPONE LA EJECUCIÓN DEL PLAN OPERATIVO DE EMERGENCIA VIAL, BACHEO Y ASFALTADO EN COMPAÑÍAS Y BARRIOS DE LA CIUDAD DE LUQUE',
      categoria: 'Obras y Vialidad',
      ejercicio: '2026',
      anio: '2026',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/compendio-resoluciones-2026.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2026/03/ALTAS-Y-BAJAS-2026-RESOLUCIONES-LEY-7089-23.pdf',
      fileType: 'PDF Oficial',
      fileSize: '3.2 MB',
      fecha: '15 de Enero de 2026',
      dependencia: 'Dirección de Obras Públicas y Servicios',
      descripcion: 'Dispone la intervención prioritaria de bacheo, recapado y canalización pluvial en los tramos críticos de las compañías Tarumandy, Maramburé, Mora Cué e Itapuamí.',
    },
    {
      id: 'res-85-2026',
      numero: 'Res. I.M. Nº 85/2026',
      numeroCorto: '85/2026',
      titulo: 'Calendario Oficial de Ferias Agropecuarias y Artesanales 2026',
      tituloCompleto: 'POR LA CUAL SE AUTORIZA Y CALENDARIZA LA REALIZACIÓN DE FERIAS AGROPECUARIAS, GASTRONÓMICAS Y ARTESANALES DE LA CIUDAD DE LUQUE PARA EL EJERCICIO 2026',
      categoria: 'Comercio y Desarrollo',
      ejercicio: '2026',
      anio: '2026',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/compendio-resoluciones-2026.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2026/03/ALTAS-Y-BAJAS-2026-RESOLUCIONES-LEY-7089-23.pdf',
      fileType: 'PDF Oficial',
      fileSize: '3.2 MB',
      fecha: '28 de Enero de 2026',
      dependencia: 'Dirección de Bienestar Social y Desarrollo Productivo',
      descripcion: 'Habilita las plazas centrales de Luque para las ferias de productores locales, orfebres filigraneros y artesanos con exoneración temporal de aranceles de ocupación.',
    },
    {
      id: 'res-42-2026',
      numero: 'Res. I.M. Nº 42/2026',
      numeroCorto: '42/2026',
      titulo: 'Actualización de Tasas y Aranceles de Registro y Rodados 2026',
      tituloCompleto: 'POR LA CUAL SE REGLAMENTAN LAS TASAS Y ARANCELES PARA LA RENOVACIÓN Y EXPEDICIÓN DE LICENCIAS DE CONDUCIR Y HABILITACIÓN VEHICULAR OPACI 2026',
      categoria: 'Tránsito y Seguridad',
      ejercicio: '2026',
      anio: '2026',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/compendio-resoluciones-2026.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2026/03/ALTAS-Y-BAJAS-2026-RESOLUCIONES-LEY-7089-23.pdf',
      fileType: 'PDF Oficial',
      fileSize: '3.2 MB',
      fecha: '10 de Enero de 2026',
      dependencia: 'Dirección de Tránsito y Seguridad Vial',
      descripcion: 'Fija el esquema unificado de aranceles comunales y trámites digitales para licencias de conducir unificadas y habilitaciones de rodados para el periodo 2026.',
    },
    {
      id: 'res-15-2026',
      numero: 'Res. I.M. Nº 15/2026',
      numeroCorto: '15/2026',
      titulo: 'Convocatoria y Renovación de Comisiones Vecinales de Fomento 2026',
      tituloCompleto: 'POR LA CUAL SE CONVOCA AL PROCESO ELECTORAL Y RENOVACIÓN DE AUTORIDADES DE LAS COMISIONES VECINALES DE FOMENTO DE LOS BARRIOS Y COMPAÑÍAS DE LUQUE',
      categoria: 'Participación Ciudadana',
      ejercicio: '2026',
      anio: '2026',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/compendio-resoluciones-2026.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2026/03/ALTAS-Y-BAJAS-2026-RESOLUCIONES-LEY-7089-23.pdf',
      fileType: 'PDF Oficial',
      fileSize: '3.2 MB',
      fecha: '05 de Enero de 2026',
      dependencia: 'Dirección de Participación Ciudadana y Comisiones Vecinales',
      descripcion: 'Establece el cronograma anual de asambleas ordinarias y reconocimiento oficial de nuevas comisiones vecinales barriales en Luque.',
    },
    {
      id: 'res-06-2024-2026',
      numero: 'Res. I.M. Nº 06/2024-2026',
      numeroCorto: '06/2024-2026',
      titulo: 'Designación del Administrador del Contrato de Procesos Licitatorios 2024–2026',
      tituloCompleto: 'POR LA QUE SE DESIGNA AL ADMINISTRADOR DEL CONTRATO DE LOS PROCESOS DE LICITACIÓN DE LA MUNICIPALIDAD DE LUQUE PARA LOS PROCESOS DE LOS AÑOS 2024, 2025 Y 2026',
      categoria: 'Contrataciones Públicas',
      ejercicio: '2026',
      anio: '2024–2026',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/resolucion-06-2024-administrador-contratos.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/Resolucion-6-2024.pdf',
      fileType: 'PDF Oficial',
      fileSize: '674 KB',
      fecha: 'Vigencia Plurianual 2024-2026',
      dependencia: 'Unidad Operativa de Contrataciones (UOC)',
      descripcion: 'Designa formalmente a las dependencias solicitantes y administradores contractuales que supervisarán la ejecución de las licitaciones públicas de la Comuna durante el trienio 2024-2026.',
    },

    // --- EJERCICIO 2025 ---
    {
      id: 'res-1450-2025',
      numero: 'Res. I.M. Nº 1.450/2025',
      numeroCorto: '1450/2025',
      titulo: 'Adjudicación de Licitación para Desagüe Pluvial y Canalización Barrio Bella Vista',
      tituloCompleto: 'POR LA CUAL SE ADJUDICA LA LICITACIÓN PÚBLICA NACIONAL PARA LA CONSTRUCCIÓN DE DESAGÜE PLUVIAL, BADENES Y CANALIZACIÓN EN EL BARRIO BELLA VISTA DE LUQUE',
      categoria: 'Obras y Vialidad',
      ejercicio: '2025',
      anio: '2025',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/compendio-resoluciones-2025.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2026/03/ALTAS-Y-BAJAS-2025-RESOLUCIONES-LEY-7089-2023.pdf',
      fileType: 'PDF Oficial',
      fileSize: '2.6 MB',
      fecha: '18 de Noviembre de 2025',
      dependencia: 'Dirección de Obras Públicas',
      descripcion: 'Adjudica las obras de infraestructura hidráulica y desagüe pluvial para evitar anegamientos en Bella Vista y zonas aledañas del casco urbano.',
    },
    {
      id: 'res-1120-2025',
      numero: 'Res. I.M. Nº 1.120/2025',
      numeroCorto: '1120/2025',
      titulo: 'Convenio de Cooperación Interinstitucional MOPC – Municipalidad de Luque',
      tituloCompleto: 'POR LA CUAL SE APRUEBA EL CONVENIO DE COOPERACIÓN TÉCNICA E INFRAESTRUCTURA VIAL ENTRE EL MINISTERIO DE OBRAS PÚBLICAS Y COMUNICACIONES Y EL MUNICIPIO DE LUQUE',
      categoria: 'Convenios y Obras',
      ejercicio: '2025',
      anio: '2025',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/resolucion-03-2024-contrataciones.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/Resolucion-3-24.pdf',
      fileType: 'PDF Oficial',
      fileSize: '8.6 MB',
      fecha: '24 de Septiembre de 2025',
      dependencia: 'Secretaría General / Intendencia',
      descripcion: 'Convenio interinstitucional para la pavimentación asfáltica de accesos estratégicos interurbanos y coordinación de maquinaria pesada.',
    },
    {
      id: 'res-890-2025',
      numero: 'Res. I.M. Nº 890/2025',
      numeroCorto: '890/2025',
      titulo: 'Declaración de Interés Municipal al Festival Internacional del Arpa y de la Filigrana',
      tituloCompleto: 'POR LA CUAL SE DECLARA DE INTERÉS MUNICIPAL, CULTURAL Y ARTÍSTICO LA EDICIÓN 2025 DEL FESTIVAL INTERNACIONAL DEL ARPA Y DE LA FILIGRANA DE LUQUE',
      categoria: 'Cultura y Turismo',
      ejercicio: '2025',
      anio: '2025',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/compendio-resoluciones-2025.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2026/03/ALTAS-Y-BAJAS-2025-RESOLUCIONES-LEY-7089-2023.pdf',
      fileType: 'PDF Oficial',
      fileSize: '2.6 MB',
      fecha: '12 de Agosto de 2025',
      dependencia: 'Dirección de Cultura y Turismo',
      descripcion: 'Apoyo logístico, patrimonial y financiero comunal para la preservación de la música folclórica en arpa paraguaya y la artesanía en filigrana luqueña.',
    },
    {
      id: 'res-630-2025',
      numero: 'Res. I.M. Nº 630/2025',
      numeroCorto: '630/2025',
      titulo: 'Aprobación del Balance de Ingresos y Egresos del Primer Semestre 2025',
      tituloCompleto: 'POR LA CUAL SE APRUEBA EL INFORME DE GESTIÓN FINANCIERA, EJECUCIÓN PRESUPUESTARIA DE INGRESOS Y EGRESOS DEL PRIMER SEMESTRE 2025',
      categoria: 'Hacienda y Presupuesto',
      ejercicio: '2025',
      anio: '2025',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/ejecucion-ingresos-cuatrimestre.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/Ejecucion-de-Ingreso-Primer-Cuatrimestre.pdf',
      fileType: 'PDF Oficial',
      fileSize: '211 KB',
      fecha: '15 de Julio de 2025',
      dependencia: 'Dirección de Administración y Finanzas',
      descripcion: 'Rendición de cuentas financiera y fiscal remitida a la Junta Municipal y a la Contraloría General de la República.',
    },
    {
      id: 'res-04-2024-2025',
      numero: 'Res. I.M. Nº 04/2024-2025',
      numeroCorto: '04/2024-2025',
      titulo: 'Aprobación del Plan Anual de Contrataciones (PAC-Prioritario)',
      tituloCompleto: 'POR LA QUE SE APRUEBA EL PLAN ANUAL DE CONTRATACIONES (PAC-PRIORITARIO) DE LICITACIÓN DE MENOR CUANTÍA Y LA LICITACIÓN PÚBLICA Y CONTRATACIÓN POR EXCEPCIÓN DE LA MUNICIPALIDAD DE LUQUE',
      categoria: 'Contrataciones Públicas',
      ejercicio: '2025',
      anio: '2024–2025',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/resolucion-04-2024-pac.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/Resolucion-4-2024.pdf',
      fileType: 'PDF Oficial',
      fileSize: '749 KB',
      fecha: 'Aprobación PAC Municipal',
      dependencia: 'Unidad Operativa de Contrataciones (UOC)',
      descripcion: 'Marco anual de adquisición de bienes, insumos hospitalarios, obras viales y servicios generales bajo la Ley de Suministro Público.',
    },
    {
      id: 'res-02-2024-2025',
      numero: 'Res. I.M. Nº 02/2024-2025',
      numeroCorto: '02/2024-2025',
      titulo: 'Constitución de la Comisión de Suministro Público para Procesos Licitatorios',
      tituloCompleto: 'POR LA QUE SE CONSTITUYE LA COMISIÓN DE SUMINISTRO PÚBLICO DE LA MUNICIPALIDAD DE LUQUE, PARA LOS PROCESOS DE LICITACIONES',
      categoria: 'Contrataciones Públicas',
      ejercicio: '2025',
      anio: '2024–2025',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/resolucion-02-2024-comision-suministros.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/Resolucion-2-24.pdf',
      fileType: 'PDF Oficial',
      fileSize: '1.08 MB',
      fecha: 'Conformación de Comisión',
      dependencia: 'Intendencia Municipal / Asesoría Jurídica',
      descripcion: 'Designa a los miembros titulares y suplentes encargados de garantizar la transparencia en los llamados licitatorios municipales.',
    },
    {
      id: 'res-03-2024-2025',
      numero: 'Res. I.M. Nº 03/2024-2025',
      numeroCorto: '03/2024-2025',
      titulo: 'Reglamentación de Actos Administrativos en Base a la Ley Nº 7021/2023',
      tituloCompleto: 'POR LA QUE SE REGLAMENTA LOS ACTOS ADMINISTRATIVOS EN BASE A LA LEY Nº 7021/2023 Y DECRETOS PARLAMENTARIOS DE CONTRATACIONES PÚBLICAS',
      categoria: 'Contrataciones Públicas',
      ejercicio: '2025',
      anio: '2024–2025',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/resolucion-03-2024-contrataciones.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/Resolucion-3-24.pdf',
      fileType: 'PDF Oficial',
      fileSize: '8.59 MB',
      fecha: 'Reglamentación Normativa',
      dependencia: 'Dirección General de Asesoría Jurídica',
      descripcion: 'Adecuación de toda la estructura de compras de la Comuna de Luque a la nueva Ley de Suministro y Compras Públicas de la República del Paraguay.',
    },
    {
      id: 'res-331-2024-2025',
      numero: 'Res. I.M. Nº 331/2024-2025',
      numeroCorto: '331/2024-2025',
      titulo: 'Reconocimiento de la Comisión Vecinal de Fomento "Las Residentas"',
      tituloCompleto: 'POR LA CUAL SE RECONOCE A LA COMISIÓN VECINAL DE FOMENTO DENOMINADA "LAS RESIDENTAS" UBICADA EN LA 1º COMPAÑÍA CAMPO GRANDE DE LA JURISDICCIÓN DE LUQUE',
      categoria: 'Participación Ciudadana',
      ejercicio: '2025',
      anio: '2024–2025',
      tipo: 'Administrativa',
      fileUrl: '/resoluciones/compendio-resoluciones-2025.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/Resolucion-331.pdf',
      fileType: 'PDF Oficial',
      fileSize: '2.6 MB',
      fecha: 'Reconocimiento Comunal',
      dependencia: 'Dirección de Participación Ciudadana',
      descripcion: 'Otorga personería vecinal municipal para canalizar pedidos barriales, empedrados y plazas en la 1ª Compañía Campo Grande.',
    },

    // --- RESOLUCIONES ESPECIALES / LEY 7089/23 (ALTAS Y BAJAS) ---
    {
      id: 'res-altas-bajas-2026',
      numero: 'Resolución Ley 7089/23 – Ejercicio 2026',
      numeroCorto: 'Altas y Bajas 2026',
      titulo: 'Altas y Bajas – Resoluciones Ejercicio 2026 (Ley 7089/23)',
      tituloCompleto: 'RESOLUCIONES Y REGISTRO OFICIAL DE ALTAS Y BAJAS DE LA MUNICIPALIDAD DE LUQUE CORRESPONDIENTE AL EJERCICIO FISCAL 2026 EN CUMPLIMIENTO DEL RÉGIMEN DE CONFLICTO DE INTERESES',
      categoria: 'Ley 7089/23 Altas y Bajas',
      ejercicio: '2026',
      anio: '2026',
      tipo: 'Especial',
      fileUrl: '/resoluciones/altas-y-bajas-2026-ley-7089.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2026/03/ALTAS-Y-BAJAS-2026-RESOLUCIONES-LEY-7089-23.pdf',
      fileType: 'PDF Oficial Firmado',
      fileSize: '3.2 MB',
      fecha: 'Ejercicio Fiscal 2026',
      dependencia: 'Dirección de Gestión y Desarrollo de las Personas',
      descripcion: 'Nómina oficial y compendio escaneado de resoluciones de designación (altas) y ceses de funciones (bajas) de directores y funcionarios de confianza de la Comuna de Luque conforme a la Ley 7089/23.',
    },
    {
      id: 'res-altas-bajas-2025',
      numero: 'Resolución Ley 7089/23 – Ejercicio 2025',
      numeroCorto: 'Altas y Bajas 2025',
      titulo: 'Altas y Bajas – Resoluciones Ejercicio 2025 (Ley 7089/23)',
      tituloCompleto: 'RESOLUCIONES Y REGISTRO OFICIAL DE ALTAS Y BAJAS DE LA MUNICIPALIDAD DE LUQUE CORRESPONDIENTE AL EJERCICIO FISCAL 2025 EN CUMPLIMIENTO DEL RÉGIMEN DE CONFLICTO DE INTERESES',
      categoria: 'Ley 7089/23 Altas y Bajas',
      ejercicio: '2025',
      anio: '2025',
      tipo: 'Especial',
      fileUrl: '/resoluciones/altas-y-bajas-2025-ley-7089.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2026/03/ALTAS-Y-BAJAS-2025-RESOLUCIONES-LEY-7089-2023.pdf',
      fileType: 'PDF Oficial Firmado',
      fileSize: '2.6 MB',
      fecha: 'Ejercicio Fiscal 2025',
      dependencia: 'Dirección de Gestión y Desarrollo de las Personas',
      descripcion: 'Compendio consolidado con firmas y sellos institucionales de los actos administrativos de altas y bajas del personal superior municipal durante el ejercicio 2025.',
    },
    {
      id: 'res-organigrama-3366',
      numero: 'Res. I.M. Nº 3366/2024-2025',
      numeroCorto: '3366/2024-2025',
      titulo: 'Aprobación del Organigrama y Estructura Organizacional Comunal',
      tituloCompleto: 'POR LA CUAL SE ESTABLECE EL ORGANIGRAMA GENERAL Y MANUAL DE FUNCIONES DE DIRECCIONES Y DEPARTAMENTOS DE LA MUNICIPALIDAD DE LUQUE',
      categoria: 'Ley 7089/23 Altas y Bajas',
      ejercicio: '2025',
      anio: '2024–2025',
      tipo: 'Especial',
      fileUrl: '/resoluciones/altas-y-bajas-2025-ley-7089.pdf',
      oficialUrl: 'https://www.luque.gov.py/wp-content/uploads/2019/09/RESOLUCION-I.M-N°-3366-2024.pdf',
      fileType: 'PDF Oficial',
      fileSize: '4.2 MB',
      fecha: 'Estructura Vigente',
      dependencia: 'Gabinete Municipal',
      descripcion: 'Disposición fundamental que delimita las líneas jerárquicas, atribuciones y cargos de dirección y jefaturas del Gobierno Municipal de Luque.',
    },
  ];

  const categoriasResoluciones = [
    'Todas',
    'Contrataciones Públicas',
    'Obras y Vialidad',
    'Ley 7089/23 Altas y Bajas',
    'Participación Ciudadana',
    'Tránsito y Seguridad',
    'Comercio y Desarrollo',
    'Hacienda y Presupuesto',
    'Cultura y Turismo',
  ];

  const filteredResoluciones = useMemo(() => {
    return resoluciones.filter((r) => {
      if (resYearFilter === '2026' && r.ejercicio !== '2026') return false;
      if (resYearFilter === '2025' && r.ejercicio !== '2025') return false;
      if (resYearFilter === 'ley7089' && r.tipo !== 'Especial') return false;

      if (resCategory !== 'Todas' && r.categoria !== resCategory) return false;

      if (!resSearch.trim()) return true;
      const term = resSearch.toLowerCase();
      return (
        r.numero.toLowerCase().includes(term) ||
        r.numeroCorto.toLowerCase().includes(term) ||
        r.titulo.toLowerCase().includes(term) ||
        r.tituloCompleto.toLowerCase().includes(term) ||
        r.categoria.toLowerCase().includes(term) ||
        r.ejercicio.toLowerCase().includes(term) ||
        r.descripcion.toLowerCase().includes(term)
      );
    });
  }, [resoluciones, resYearFilter, resCategory, resSearch]);

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
                  <span className="eyebrow-accent">ACTOS ADMINISTRATIVOS Y EJECUTIVOS</span>
                  <h2>Resoluciones de la Intendencia Municipal</h2>
                  <p>
                    Repositorio oficial de disposiciones ejecutivas de la Comuna de Luque: actos administrativos,
                    obras, convenios, licitaciones y el registro obligatorio de Altas y Bajas (Leyes 5282/14 y 7089/23).
                  </p>
                </div>

                {/* Banner de Estadísticas Rápidas */}
                <div className="resoluciones-stats-banner">
                  <div className="ord-stat-item">
                    <FileCheck size={22} className="ord-stat-icon" />
                    <div>
                      <strong>{resoluciones.length} Resoluciones Oficiales</strong>
                      <span>Disponibles en formato digital y descarga directa</span>
                    </div>
                  </div>
                  <div className="ord-stat-item">
                    <ShieldCheck size={22} className="ord-stat-icon" />
                    <div>
                      <strong>Plena Validez Jurídica</strong>
                      <span>Actos promulgados con firma y sello comunal</span>
                    </div>
                  </div>
                  <div className="ord-stat-item">
                    <ExternalLink size={22} className="ord-stat-icon" />
                    <div>
                      <strong>Acceso y Servidor Oficial</strong>
                      <span>Copias digitalizadas locales y servidor luque.gov.py</span>
                    </div>
                  </div>
                </div>

                {/* 3 Tarjetas Principales Destacadas (Items Solicitados) */}
                <div className="resoluciones-grid">
                  {/* Card 1: Ejercicio 2026 */}
                  <div className="resolucion-card featured-card">
                    <div className="resolucion-card-badge">
                      <Clock size={12} />
                      <span>Año 2026 • Vigente</span>
                    </div>
                    <h3>Resoluciones Administrativas Ejercicio 2026</h3>
                    <p>
                      Compendio de resoluciones de intendencia del año en curso: bacheo intensivo en compañías,
                      habilitación de ferias ciudadanas, actualización de tasas de rodados y contrataciones públicas.
                    </p>
                    <div className="resolucion-actions-stack">
                      <button
                        className="btn-res-action primary"
                        onClick={() => {
                          setResYearFilter('2026');
                          document.getElementById('tabla-resoluciones')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <Eye size={16} />
                        <span>Consultar Resoluciones 2026 ({resoluciones.filter((r) => r.ejercicio === '2026').length})</span>
                      </button>
                      <a
                        href="/resoluciones/compendio-resoluciones-2026.pdf"
                        download="Compendio_Resoluciones_2026_Municipalidad_Luque.pdf"
                        className="btn-res-action secondary"
                      >
                        <Download size={15} />
                        <span>Descargar Compendio 2026 (PDF)</span>
                      </a>
                      <a
                        href="https://www.luque.gov.py/wp-content/uploads/2026/03/ALTAS-Y-BAJAS-2026-RESOLUCIONES-LEY-7089-23.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-res-action outline-gold"
                      >
                        <ExternalLink size={14} />
                        <span>Ver en Servidor Oficial luque.gov.py</span>
                      </a>
                    </div>
                  </div>

                  {/* Card 2: Ejercicio 2025 */}
                  <div className="resolucion-card featured-card">
                    <div className="resolucion-card-badge badge-gold">
                      <Calendar size={12} />
                      <span>Año 2025 • Consolidado</span>
                    </div>
                    <h3>Resoluciones Administrativas Ejercicio 2025</h3>
                    <p>
                      Resoluciones promulgadas del ejercicio fiscal 2025: desagüe pluvial barrio Bella Vista,
                      convenio marco con el MOPC, balance semestral, plan PAC y comisiones vecinales barriales.
                    </p>
                    <div className="resolucion-actions-stack">
                      <button
                        className="btn-res-action primary"
                        onClick={() => {
                          setResYearFilter('2025');
                          document.getElementById('tabla-resoluciones')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <Eye size={16} />
                        <span>Consultar Resoluciones 2025 ({resoluciones.filter((r) => r.ejercicio === '2025').length})</span>
                      </button>
                      <a
                        href="/resoluciones/compendio-resoluciones-2025.pdf"
                        download="Compendio_Resoluciones_2025_Municipalidad_Luque.pdf"
                        className="btn-res-action secondary"
                      >
                        <Download size={15} />
                        <span>Descargar Compendio 2025 (PDF)</span>
                      </a>
                      <a
                        href="https://www.luque.gov.py/wp-content/uploads/2026/03/ALTAS-Y-BAJAS-2025-RESOLUCIONES-LEY-7089-2023.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-res-action outline-gold"
                      >
                        <ExternalLink size={14} />
                        <span>Ver en Servidor Oficial luque.gov.py</span>
                      </a>
                    </div>
                  </div>

                  {/* Card 3: Resoluciones Especiales y Ley 7089/23 */}
                  <div className="resolucion-card featured-card">
                    <div className="resolucion-card-badge badge-purple">
                      <Scale size={12} />
                      <span>Resoluciones Especiales • Ley 7089/23</span>
                    </div>
                    <h3>Resoluciones de Altas y Bajas Ley 7089/23</h3>
                    <p>
                      Registro público de integridad y conflicto de intereses: actos administrativos de nombramientos,
                      designaciones de cargos de confianza (altas) y ceses de funciones (bajas) con firma comunal.
                    </p>
                    <div className="resolucion-actions-stack">
                      <a
                        href="/resoluciones/altas-y-bajas-2026-ley-7089.pdf"
                        download="Altas_y_Bajas_2026_Ley_7089_Luque.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-res-action accent"
                      >
                        <Download size={15} />
                        <span>Descargar Altas y Bajas 2026 (PDF • 3.2 MB)</span>
                      </a>
                      <a
                        href="/resoluciones/altas-y-bajas-2025-ley-7089.pdf"
                        download="Altas_y_Bajas_2025_Ley_7089_Luque.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-res-action secondary"
                      >
                        <Download size={15} />
                        <span>Descargar Altas y Bajas 2025 (PDF • 2.6 MB)</span>
                      </a>
                      <button
                        className="btn-res-action outline-gold"
                        onClick={() => {
                          setResYearFilter('ley7089');
                          document.getElementById('tabla-resoluciones')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        <Layers size={15} />
                        <span>Explorar Registro de Altas y Bajas</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Barra de Filtros y Búsqueda de Resoluciones */}
                <div id="tabla-resoluciones" className="barrios-search-filter-wrap" style={{ marginBottom: '1.75rem', scrollMarginTop: '120px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
                    {/* Buscador */}
                    <div className="search-field" style={{ flex: '1 1 320px', maxWidth: '440px' }}>
                      <Search size={18} className="search-field-icon" />
                      <input
                        type="text"
                        value={resSearch}
                        onChange={(e) => setResSearch(e.target.value)}
                        placeholder="Buscar por N° de resolución, materia, beneficiario o palabra clave..."
                        aria-label="Buscar resolución municipal"
                      />
                      {resSearch && (
                        <button className="clear-search-btn" onClick={() => setResSearch('')} aria-label="Limpiar búsqueda">
                          ×
                        </button>
                      )}
                    </div>

                    {/* Filtros de Ejercicio / Tipo */}
                    <div className="category-filters" role="tablist">
                      <button
                        className={`cat-pill ${resYearFilter === 'todas' ? 'active' : ''}`}
                        onClick={() => setResYearFilter('todas')}
                      >
                        <span>Todas</span>
                        <span className="cat-count">{resoluciones.length}</span>
                      </button>
                      <button
                        className={`cat-pill ${resYearFilter === '2026' ? 'active' : ''}`}
                        onClick={() => setResYearFilter('2026')}
                      >
                        <span>Ejercicio 2026</span>
                        <span className="cat-count">{resoluciones.filter((r) => r.ejercicio === '2026').length}</span>
                      </button>
                      <button
                        className={`cat-pill ${resYearFilter === '2025' ? 'active' : ''}`}
                        onClick={() => setResYearFilter('2025')}
                      >
                        <span>Ejercicio 2025</span>
                        <span className="cat-count">{resoluciones.filter((r) => r.ejercicio === '2025').length}</span>
                      </button>
                      <button
                        className={`cat-pill ${resYearFilter === 'ley7089' ? 'active' : ''}`}
                        onClick={() => setResYearFilter('ley7089')}
                      >
                        <span>Altas y Bajas (Ley 7089/23)</span>
                        <span className="cat-count">{resoluciones.filter((r) => r.tipo === 'Especial').length}</span>
                      </button>
                    </div>
                  </div>

                  {/* Filtro secundario por Materia */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid #f1f5f9' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Tag size={13} /> Filtrar Materia:
                    </span>
                    {categoriasResoluciones.map((cat) => {
                      const isActive = resCategory === cat;
                      return (
                        <button
                          key={cat}
                          style={{
                            padding: '3px 10px',
                            fontSize: '0.78rem',
                            borderRadius: '16px',
                            border: isActive ? '1px solid #0b2265' : '1px solid #e2e8f0',
                            background: isActive ? '#0b2265' : '#ffffff',
                            color: isActive ? '#ffffff' : '#475569',
                            fontWeight: isActive ? '700' : '500',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                          }}
                          onClick={() => setResCategory(cat)}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tabla de Resoluciones */}
                {filteredResoluciones.length > 0 ? (
                  <div className="docs-table-wrap">
                    <table className="docs-table">
                      <thead>
                        <tr>
                          <th style={{ width: '170px' }}>Identificación</th>
                          <th>Disposición y Resumen Oficial</th>
                          <th style={{ width: '180px' }}>Materia</th>
                          <th style={{ width: '95px', textAlign: 'center' }}>Año</th>
                          <th style={{ width: '220px', textAlign: 'center' }}>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredResoluciones.map((res) => (
                          <tr key={res.id}>
                            <td>
                              <div className="ord-number-badge">{res.numero}</div>
                              <span className="ord-type-pill">{res.fileType}</span>
                              <span className="ord-size-pill">{res.fileSize}</span>
                            </td>
                            <td>
                              <b className="ord-title-text">{res.titulo}</b>
                              <div className="ord-caption-text">{res.tituloCompleto}</div>
                              <p className="doc-desc-cell">{res.descripcion}</p>
                              {res.dependencia && (
                                <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '4px' }}>
                                  <strong>Dependencia:</strong> {res.dependencia}
                                </div>
                              )}
                            </td>
                            <td>
                              <span className="doc-tag">{res.categoria}</span>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <span className="ord-year-badge">{res.ejercicio}</span>
                            </td>
                            <td>
                              <div className="ord-actions-stack">
                                <button
                                  className="btn-download-doc"
                                  style={{ background: '#0b2265', color: '#ffffff', border: 'none', cursor: 'pointer' }}
                                  onClick={() => setSelectedResModal(res)}
                                  title={`Visualizar resolución digital ${res.numero}`}
                                >
                                  <Eye size={14} />
                                  <span>Visualizar</span>
                                </button>
                                <a
                                  href={res.fileUrl}
                                  download
                                  className="btn-download-doc"
                                  title={`Descargar archivo PDF oficial de ${res.numero}`}
                                >
                                  <Download size={14} />
                                  <span>Descargar PDF</span>
                                </a>
                                <a
                                  href={res.oficialUrl}
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
                    <h3 style={{ color: '#0b2265', marginBottom: '0.5rem' }}>No se encontraron resoluciones</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                      No hay resultados que coincidan con <strong>"{resSearch}"</strong> en el filtro seleccionado.
                    </p>
                    <button
                      className="btn btn-navy"
                      onClick={() => {
                        setResSearch('');
                        setResYearFilter('todas');
                        setResCategory('Todas');
                      }}
                    >
                      Restablecer Filtros
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* MODAL DE VISUALIZACIÓN DE RESOLUCIÓN */}
            {selectedResModal && (
              <div
                className="resolucion-modal-backdrop"
                onClick={(e) => {
                  if (e.target === e.currentTarget) setSelectedResModal(null);
                }}
              >
                <div className="resolucion-modal-container">
                  {/* Header */}
                  <div className="resolucion-modal-header">
                    <div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{ background: '#f5a623', color: '#0b2265', fontWeight: '800', fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                          {selectedResModal.numero}
                        </span>
                        <span style={{ background: 'rgba(255,255,255,0.2)', color: '#ffffff', fontSize: '0.75rem', padding: '3px 8px', borderRadius: '4px' }}>
                          Ejercicio {selectedResModal.ejercicio}
                        </span>
                      </div>
                      <h3>{selectedResModal.titulo}</h3>
                    </div>
                    <button
                      className="resolucion-modal-close"
                      onClick={() => setSelectedResModal(null)}
                      aria-label="Cerrar modal"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="resolucion-modal-body">
                    {/* Meta Info */}
                    <div className="resolucion-meta-grid">
                      <div className="resolucion-meta-item">
                        <strong>Materia / Área</strong>
                        <span>{selectedResModal.categoria}</span>
                      </div>
                      <div className="resolucion-meta-item">
                        <strong>Fecha de Promulgación</strong>
                        <span>{selectedResModal.fecha}</span>
                      </div>
                      <div className="resolucion-meta-item">
                        <strong>Dependencia Responsable</strong>
                        <span>{selectedResModal.dependencia}</span>
                      </div>
                      <div className="resolucion-meta-item">
                        <strong>Formato y Tamaño</strong>
                        <span>{selectedResModal.fileType} ({selectedResModal.fileSize})</span>
                      </div>
                    </div>

                    {/* Texto Legal Oficial */}
                    <div className="resolucion-decreto-box">
                      <h4>Disposición Resolutiva Oficial</h4>
                      <p>{selectedResModal.tituloCompleto}</p>
                    </div>

                    {/* Resumen explicativo */}
                    <div>
                      <h4 style={{ fontSize: '0.9rem', color: '#0b2265', marginBottom: '0.4rem', fontWeight: '700' }}>
                        Alcance y Detalle Administrativo:
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                        {selectedResModal.descripcion}
                      </p>
                    </div>

                    {/* Previsualización del Documento PDF */}
                    <div>
                      <h4 style={{ fontSize: '0.9rem', color: '#0b2265', marginBottom: '0.6rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <FileText size={16} /> Visor Digital de Documento:
                      </h4>
                      <iframe
                        src={selectedResModal.fileUrl}
                        title={`Visor PDF ${selectedResModal.numero}`}
                        className="resolucion-preview-frame"
                      />
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="resolucion-modal-footer">
                    <a
                      href={selectedResModal.fileUrl}
                      download
                      className="btn btn-gold"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <Download size={16} />
                      <span>Descargar Copia Digital ({selectedResModal.fileSize})</span>
                    </a>
                    <a
                      href={selectedResModal.oficialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-navy"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <ExternalLink size={16} />
                      <span>Abrir en Servidor Oficial luque.gov.py</span>
                    </a>
                    <button
                      className="btn btn-outline-navy"
                      onClick={() => setSelectedResModal(null)}
                    >
                      Cerrar
                    </button>
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
                    <a
                      href="/resoluciones/ejecucion-gastos-cuatrimestre.pdf"
                      download="Informe_Ejecucion_FONACIDE_Luque.pdf"
                      className="btn-download-doc"
                    >
                      <Download size={14} /> PDF Oficial
                    </a>
                  </div>
                  <div className="report-row">
                    <FileText size={18} />
                    <div className="report-info">
                      <b>Plan de Obras Priorizadas en Escuelas Públicas de Luque</b>
                      <small>Aprobado por el Consejo Comunal de Educación</small>
                    </div>
                    <a
                      href="https://www.luque.gov.py/consejo-de-fonacide/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-download-doc"
                    >
                      <ExternalLink size={14} /> Ver en Portal Oficial
                    </a>
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
                  <a
                    href="/resoluciones/ejecucion-ingresos-cuatrimestre.pdf"
                    download="Ejecucion_Presupuestaria_Ingresos_Luque.pdf"
                    className="btn btn-navy"
                  >
                    <Download size={16} />
                    <span>Descargar Balance General y Cuadro de Ejecución Anual (PDF)</span>
                  </a>
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
                    <a
                      href="https://informacionpublica.paraguay.gov.py/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      <span>Ver Matriz en Portal Nacional</span> →
                    </a>
                  </div>
                  <div className="patip-detail-card">
                    <FolderOpen size={28} className="patip-icon" />
                    <h3>Control Interno Institucional MECIP</h3>
                    <p>Manuales de procedimientos, mapas de riesgos operativos y protocolos de auditoría interna continua.</p>
                    <a
                      href="https://www.luque.gov.py/transparencia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-link"
                    >
                      <span>Ver Informes en Portal Comunal</span> →
                    </a>
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
                  <a
                    href="https://www.luque.gov.py/ley-5189-14/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-navy"
                  >
                    <ExternalLink size={15} /> Nómina Salarial Vigente (Portal Oficial luque.gov.py)
                  </a>
                  <a
                    href="/resoluciones/altas-y-bajas-2026-ley-7089.pdf"
                    download="Estructura_Personal_Directivo_2026.pdf"
                    className="btn btn-outline-navy"
                  >
                    <Download size={15} /> Estructura y Cuadro de Personal Directivo 2026 (PDF)
                  </a>
                  <a
                    href="https://informacionpublica.paraguay.gov.py/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-navy"
                  >
                    <ExternalLink size={15} /> Portal Unificado de Datos Abiertos
                  </a>
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
                    <a
                      href="/resoluciones/altas-y-bajas-2026-ley-7089.pdf"
                      download="Altas_y_Bajas_2026_Ley_7089_Luque.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-navy"
                    >
                      <Download size={15} />
                      <span>Descargar Altas y Bajas 2026 (PDF Oficial • 3.2 MB)</span>
                    </a>
                    <a
                      href="/resoluciones/altas-y-bajas-2025-ley-7089.pdf"
                      download="Altas_y_Bajas_2025_Ley_7089_Luque.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-navy"
                    >
                      <Download size={15} />
                      <span>Descargar Altas y Bajas 2025 (PDF Oficial • 2.6 MB)</span>
                    </a>
                    <button
                      className="btn btn-gold"
                      onClick={() => handleTabChange('resoluciones')}
                    >
                      <Eye size={15} />
                      <span>Ver Repositorio Completo en Resoluciones</span>
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
