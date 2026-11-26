export const services = [
  {
    id: 'licencia-conducir',
    title: 'Licencia de conducir',
    description: 'Expedición, renovación quinquenal y revalidación anual de registros particulares y profesionales.',
    icon: '🚘',
    tag: 'Tránsito y Seguridad',
    requirements: [
      'Cédula de Identidad policial vigente (original y fotocopia)',
      'Certificado de vida y residencia expedido por la comisaría de Luque',
      'Certificado de primeros auxilios (Cruz Roja o Bomberos Voluntarios de Luque)',
      'Aprobación de examen psicotécnico y vista en el local municipal',
      'Test teórico y práctico en la pista de tránsito municipal'
    ],
    schedule: 'Lunes a viernes de 07:00 a 13:00',
    location: 'Dirección de Tránsito y Seguridad Vial (Sede Central)',
    onlineAvailable: false,
  },
  {
    id: 'habilitacion-vehicular',
    title: 'Habilitación de rodados',
    description: 'Inspección técnica municipal, pago de patentes y emisión de habilitación anual de vehículos.',
    icon: '🚗',
    tag: 'Tránsito y Seguridad',
    requirements: [
      'Cédula verde del vehículo (título de propiedad original)',
      'Última boleta de habilitación al día',
      'Cédula de Identidad del propietario',
      'Inspección visual técnica realizada en el tinglado municipal'
    ],
    schedule: 'Lunes a viernes de 07:00 a 13:00',
    location: 'Ventanilla Única de Tránsito y Cajas',
    onlineAvailable: true,
  },
  {
    id: 'impuesto-inmobiliario',
    title: 'Impuesto inmobiliario',
    description: 'Liquidación y pago del impuesto territorial, tasas de recolección y conservación de pavimentos.',
    icon: '🏠',
    tag: 'Recaudaciones',
    requirements: [
      'Número de cuenta corriente catastral del inmueble en Luque',
      'Cédula del titular o comprobante de pago del año anterior',
      'Descuentos por pago al contado en los primeros meses del año'
    ],
    schedule: 'Lunes a viernes de 07:00 a 13:00',
    location: 'Dirección de Recaudaciones e Impuesto Inmobiliario',
    onlineAvailable: true,
  },
  {
    id: 'patentes-comerciales',
    title: 'Patentes comerciales e industriales',
    description: 'Apertura, renovación y fiscalización de comercios, industrias y profesionales independientes.',
    icon: '🏪',
    tag: 'Recaudaciones',
    requirements: [
      'Copia de RUC emitido por la DNIT / SET',
      'Contrato de locación o título del inmueble comercial en Luque',
      'Constancia de no adeudar tributos municipales',
      'Inspección de salubridad y seguridad contra incendios'
    ],
    schedule: 'Lunes a viernes de 07:00 a 13:00',
    location: 'Departamento de Patentes Comerciales',
    onlineAvailable: false,
  },
  {
    id: 'obras-particulares',
    title: 'Aprobación de planos y obras',
    description: 'Permiso municipal de edificación, regularización de construcciones y certificados catastrales.',
    icon: '🏗️',
    tag: 'Obras y Urbanismo',
    requirements: [
      '3 juegos de planos arquitectónicos firmados por profesional habilitado',
      'Título del inmueble o constancia de posesión municipal',
      'Impuesto inmobiliario cancelado al año vigente',
      'Formulario de solicitud de permiso de construcción'
    ],
    schedule: 'Lunes a viernes de 07:00 a 12:30',
    location: 'Dirección de Obras Particulares y Catastro',
    onlineAvailable: false,
  },
  {
    id: 'informacion-publica',
    title: 'Acceso a la información pública',
    description: 'Solicitud ciudadana de datos, presupuestos y resoluciones conforme a la Ley Nacional 5282/2014.',
    icon: '📄',
    tag: 'Transparencia',
    requirements: [
      'Solicitud mediante el formulario oficial o portal digital unificado',
      'Descripción puntual de la información o documento requerido',
      'Identificación del solicitante (garantía de gratuidad conforme a la ley)'
    ],
    schedule: 'Recepción digital 24/7 / Atención presencial 07:00 a 13:00',
    location: 'Oficina de Acceso a la Información Pública (OIP)',
    onlineAvailable: true,
  },
  {
    id: 'aseo-urbano',
    title: 'Aseo urbano y reclamos vecinales',
    description: 'Canal oficial para denuncias de baches, luminarias rotas, podas y recolección de residuos.',
    icon: '🚜',
    tag: 'Servicios Urbanos',
    requirements: [
      'Dirección o referencia exacta de la calle y barrio de Luque',
      'Descripción del inconveniente (bache, basura acumulada, desagüe)',
      'Teléfono de contacto para seguimiento de cuadrilla municipal'
    ],
    schedule: 'Lunes a viernes de 07:00 a 13:00 / Guardias de emergencia',
    location: 'Dirección de Servicios Urbanos y Gestión Ambiental',
    onlineAvailable: true,
  },
  {
    id: 'cementerio-municipal',
    title: 'Patrimonio y cementerios',
    description: 'Arrendamiento de parcelas, mantenimiento y gestiones del Cementerio Municipal N° 1 y N° 2.',
    icon: '🏛️',
    tag: 'Servicios Urbanos',
    requirements: [
      'Certificado de defunción expedido por el Registro Civil',
      'Copia de cédula del titular del arrendamiento',
      'Comprobante de tasas de inhumación y mantenimiento al día'
    ],
    schedule: 'Atención administrativa: 07:00 a 13:00 / Visitas: 07:00 a 17:30',
    location: 'Administración de Cementerios Municipales',
    onlineAvailable: false,
  },
];

export const categories = [
  'Todos',
  'Tránsito y Seguridad',
  'Recaudaciones',
  'Obras y Urbanismo',
  'Transparencia',
  'Servicios Urbanos',
];

export const news = [
  {
    category: 'Obras y Vialidad',
    date: 'Gestión Municipal',
    title: 'Plan Integral de pavimentación y canalización pluvial en barrios de Luque',
    summary: 'Las cuadrillas municipales avanzan con trabajos de recapado asfáltico y construcción de desagües en arterias claves de Isla Bogado, Laurelty y Cuarto Barrio.',
    image: '/santuario-luque-opt.jpg',
    readTime: '3 min de lectura',
    link: 'https://www.luque.gov.py/',
  },
  {
    category: 'Cultura y Tradición',
    date: 'Identidad Luqueña',
    title: 'Luque, Capital de la Música: Convocatoria abierta en la Escuela Municipal de Arte',
    summary: 'Clases gratuitas de arpa paraguaya, guitarra y orfebrería en filigrana para niños y jóvenes en el Centro Cultural Municipal Balderrama.',
    image: '/arpa-luque.jpg',
    readTime: '2 min de lectura',
    link: 'https://www.luque.gov.py/',
  },
  {
    category: 'Desarrollo Urbano',
    date: 'Comunidad',
    title: 'Luque se consolida como polo turístico, deportivo y de convenciones',
    summary: 'Con la presencia de la sede de la CONMEBOL y el Aeropuerto Silvio Pettirossi, la ciudad atrae inversiones estratégicas y fomenta el empleo local.',
    image: '/Barrios-y-lugares-turisticos-de-LuqueOPC1.jpg',
    readTime: '4 min de lectura',
    link: '#barrios',
  },
];

export const quickLinks = [
  ['Control Interno MECIP', 'Informes del Modelo Estándar de Control Interno para Instituciones Públicas'],
  ['Ley 5189/14 (Nóminas y Salarios)', 'Publicación mensual de remuneraciones, viáticos y nómina de funcionarios'],
  ['Licitaciones y Contrataciones (DNCP)', 'Procesos de compras públicas transparentes para obras y suministros'],
  ['Ordenanzas y Resoluciones', 'Normativas de tránsito, ordenamiento territorial y tributos vigentes'],
];

export const municipalStats = [
  { value: '+300.000', label: 'Vecinos Luqueños', desc: 'Tercera ciudad más poblada de la República' },
  { value: '28', label: 'Barrios y Compañías', desc: 'Integrados con servicios y obras comunitarias' },
  { value: '1861', label: 'Historia y Patrimonio', desc: 'Primera estación de tren del Paraguay y tradición' },
  { value: 'Azul y Oro', label: 'Pasión e Identidad', desc: 'Capital de la filigrana, el arpa y el deporte' },
];

export const mayorInfo = {
  name: 'Abg. Hugo Aldolfo Farías Aquino',
  title: 'Intendente Municipal de Luque',
  period: 'Período Constitucional de Gobierno',
  quote: '"Hugo Adolfo Farías Aquino es abogado, empresario y servidor público luqueño, profundamente identificado con su ciudad, su historia y sus tradiciones. Proviene de una familia de arraigadas raíces luqueñas.
Es hijo de Osvaldo Ramón Farías Vergara y Aida Dianora Aquino de Farías. Creció junto a sus hermanos Osvaldo, Christian y Gustavo, en un entorno familiar estrechamente vinculado a la comunidad luqueña. Es padre de Hugo Sebastián y Hugo Jesús Farías.
Formación y trayectoria profesional
Abogado formado en la Universidad Nacional de Asunción, cuenta con experiencia tanto en el sector empresarial privado como en la administración pública.
Durante 14 años se desempeñó como juez de Faltas de la Municipalidad de Luque, función que le permitió conocer el funcionamiento institucional, la normativa municipal y distintas realidades de la comunidad. Posteriormente, renunció al cargo para dedicarse plenamente a su candidatura a la Intendencia Municipal.
Trayectoria y compromiso con Luque
Su vínculo con Luque está marcado por una historia familiar de varias generaciones, un profundo sentido de pertenencia y el compromiso de contribuir al desarrollo de la comunidad.
El 4 de octubre de 2026 fue electo intendente municipal de Luque mediante el voto ciudadano y asumió oficialmente sus funciones el 3 de noviembre de ese mismo año, para el periodo constitucional 2026–2031.
Visión de gestión
Al frente de la Municipalidad de Luque, orienta su gestión hacia el fortalecimiento de los servicios públicos, la modernización institucional, el desarrollo urbano y una administración cercana a la ciudadanía. Su visión se fundamenta en la responsabilidad, la transparencia, la planificación y el diálogo con los distintos sectores de la comunidad.
Con el orgullo de sus raíces y la responsabilidad de representar a su ciudad, Hugo Adolfo Farías Aquino asume el compromiso de trabajar por Un Luque Mejor, honrando su historia y proyectando su desarrollo hacia el futuro.
"',
  image: '/Hugo Farias.jpeg',
};
