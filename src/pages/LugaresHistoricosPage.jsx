import { useState } from 'react';
import PageHero from './PageHero.jsx';
import {
  MapPin,
  Calendar,
  Clock,
  Compass,
  Landmark,
  Camera,
  ExternalLink,
  ShieldCheck,
  Map,
  Navigation,
  Sparkles,
  Train,
  Church,
  Award,
  ChevronDown,
  ChevronUp,
  Search,
  Building,
  Plane,
  Trophy,
  Gem,
} from 'lucide-react';

export default function LugaresHistoricosPage({ onBackToHome }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeMapId, setActiveMapId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const places = [
    {
      id: 'santuario-rosario',
      name: 'Santuario Virgen del Rosario',
      category: 'Templos y Fe',
      isOfficial: true,
      officialBadge: 'Monumento y Templo Histórico',
      year: '1750 (Capilla) · 1928 - 1939 (Templo Actual)',
      image: '/lugar-santuario.jpg',
      fallbackImage: '/historia-iglesia.jpg',
      location: 'Avda. Corrales esq. Rosario (frente a la Plaza Central de Luque)',
      schedule: 'Misas y visitas: Lunes a Domingo de 06:30 a 19:30 hs',
      googleMapsUrl: 'https://goo.gl/maps/xD41z2PeWaN2eb8N6',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14432.427298528251!2d-57.50890016555788!3d-25.266991672247233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf897855715d%3A0x645129eb85827454!2sSantuario%20Virgen%20del%20Rosario%2C%20Luque!5e0!3m2!1ses!2spy!4v1652834176976!5m2!1ses!2spy',
      paragraphs: [
        'Entre los años 1750 y 1755 se erigió una capilla bajo el nombre de Virgen de Rosario, a cargo del Convento de San Francisco. Ese fue el origen de la edificación actual que contaba con torres hechas en maderos y en 1839 fue sustituido por materiales cocidos.',
        'Ya en 1920 y con el nombramiento de un nuevo cura párroco, comenzaron las tratativas para construir un nuevo y colosal templo. No fue hasta 1928 donde recién se pudo comenzar la construcción de la iglesia que hoy conocemos.',
        'En 1932 la obra fue detenida por el conflicto de la Guerra del Chaco, y continuó en 1934, donde se consiguió que varios prisioneros de guerra trabajen en la demolición del viejo campanario de más de un siglo y la nave del templo.',
        'En la post-guerra, el cura párroco retoma las actividades espirituales para con el pueblo por lo que las obras avanzan muy lentamente.',
        'En 1939 finalmente se termina de construir. La puerta principal de este templo es la puerta original del antiguo.',
      ],
      highlights: [
        'Capilla original franciscana de 1750-1755 y posterior torre de materiales cocidos (1839)',
        'Construcción monumental iniciada en 1928 tras gestiones comunitarias del curato parroquial',
        'Participación de prisioneros de la Guerra del Chaco en la demolición del antiguo campanario',
        'Conserva intacta la majestuosa puerta principal de madera original del primitivo templo colonial',
        'Epicentro de las tradicionales Fiestas Patronales cada mes de octubre',
      ],
    },
    {
      id: 'estacion-tren',
      name: 'Estación del Tren',
      category: 'Patrimonio Ferroviario',
      isOfficial: true,
      officialBadge: 'Patrimonio Ferroviario Nacional',
      year: '1854 (Proyecto) · Inauguración 25 Dic 1861',
      image: '/lugar-estacion.jpg',
      fallbackImage: '/historia-ferrocarril.jpg',
      location: 'Calle Pedro Juan Caballero y Valois Rivarola (Barrio Bella Vista)',
      schedule: 'Circuito y paseo peatonal histórico: Acceso libre todos los días',
      googleMapsUrl: 'https://goo.gl/maps/mQcAj7A9pMYE6XGH6',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.7501649877352!2d-57.49154170135292!3d-25.26320961513301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da561f09ca0a9%3A0x2c70a08d51bdcce4!2sAntigua%20Estaci%C3%B3n%20del%20Tren!5e0!3m2!1ses!2spy!4v1652831846534!5m2!1ses!2spy',
      paragraphs: [
        'Los ferrocarriles en Paraguay se remontan a 1854, durante la presidencia de Carlos Antonio Lopez quien contrató a ingenieros de Gran Bretaña para su construcción.',
        'El 25 de diciembre de 1.861 fue inaugurado el Ferrocarril C.A. López en su trayecto desde Ybyray (hoy día conocida como Trinidad) hasta Luque,',
        'La estación del tren de Luque forma parte de la rica historia paraguaya. En sus inicios estuvo muy ligado al ferrocarril, así los pueblos se fueron formando a la vera del sistema de rieles que iba desde Asunción.',
      ],
      highlights: [
        'Impulso inicial bajo el gobierno de Don Carlos Antonio López en 1854 con ingeniería británica',
        'Inauguración del tramo Ybyray (Trinidad) a Luque en la Navidad de 1861',
        'Núcleo urbano fundacional que estructuró el crecimiento social y comercial de Luque',
        'Andenes históricos de mampostería, locomotoras a vapor y ciclovía recreativa municipal',
      ],
    },
    {
      id: 'mausoleo-aquino',
      name: 'Mausoleo del Gral. Aquino',
      category: 'Monumentos Cívicos',
      isOfficial: true,
      officialBadge: 'Monumento Cívico Nacional',
      year: 'Héroe Luqueño de la Epopeya Nacional (1835-1866)',
      image: '/lugar-mausoleo.jpg',
      fallbackImage: '/historia-plaza.jpg',
      location: 'Plaza General Elizardo Aquino (Microcentro Cívico de Luque)',
      schedule: 'Espacio público y panteón cívico: Abierto permanentemente',
      googleMapsUrl: 'https://goo.gl/maps/Qe1J32mar2BGcifM6',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.3439607375817!2d-57.4959007566448!3d-25.267401506716517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf8849a449b1%3A0x3a2f2fdcb61496e!2sMauseleo%20del%20Gral.%20Jos%C3%A9%20Elizardo%20Aquino!5e0!3m2!1ses!2spy!4v1652833335189!5m2!1ses!2spy',
      paragraphs: [
        'El Gral. Elizardo Aquino nació en Zárate Isla, compañía de Luque. Se destacó por su brillante inteligencia en la fundición de hierro de Ybycuí. Llegada la guerra grande creó el Cuerpo de Zapadores, trabajó en la fortificación de Humaitá, participó en la Campaña de Riachuelo y su fiereza le llevó a la gloria en Boquerón. Para perpetuar su ilustre memoria se construyó un mausoleo que representa su gloriosa muerte.',
        'Su estructura es una sucesión siete anillos, cada uno simboliza cada gesto glorioso que le toco vivir en aquella epopeya.',
      ],
      highlights: [
        'Ilustre hijo de Zárate Isla (Luque) y artífice de la fundición siderúrgica de Ybycuí',
        'Creador del heroico Cuerpo de Zapadores e ingeniero militar de las fortificaciones de Humaitá',
        'Comandante legendario con actuación inmortalizada en Riachuelo y la Batalla de Boquerón',
        'Estructura arquitectónica con 7 anillos concéntricos que simbolizan cada una de sus hazañas',
        'Panteón central para actos patrióticos y ofrendas de honor cívico',
      ],
    },
    {
      id: 'pesebre-sabate',
      name: 'Pesebre Hidráulico Sabaté',
      category: 'Tradición Popular',
      isOfficial: true,
      officialBadge: 'Tradición Popular e Interés Cultural',
      year: 'Iniciado en 1953 (Más de 70 Años de Vigencia)',
      image: '/lugar-sabate.jpg',
      fallbackImage: '/arpa-luque.jpg',
      location: 'Barrio Bella Vista, Luque (Residencia Familiar Sabaté)',
      schedule: 'Abre del 22 al 30 de diciembre de 18:30 a 22:00 hs (Entrada Libre y Gratuita)',
      googleMapsUrl: 'https://goo.gl/maps/2Evo9VXHbR2MWdmQ7',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.326759175042!2d-57.486010185168595!3d-25.25959118386731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da5c7a7d15073%3A0x72dec063a50da9d1!2sPesebre%20Hidraulico%20Familia%20Sabate!5e0!3m2!1ses!2spy!4v1652833564318!5m2!1ses!2spy',
      paragraphs: [
        'La tradición de la familia Sabaté se remonta a 1953, año donde Don Esteban Sabaté comenzó a prepararlo y armarlo, con la promesa de ir ampliándolo cada año. Es así que con cuidado y devoción cada año presentan para todos los visitantes este pesebre hidráulico en la casa familiar ubicada en el barrio Bella Vista, de Luque. Su hijo comparte no sólo su mismo nombre, sino el mismo espíritu para mantener esta tradición familiar.',
        'Más de cien piezas en las que algunas cobran vida gracias a unos sistemas hidráulicos que le dan movilidad con ayuda de la fuerza el agua, he ahí su nombre y fama.',
        'Abre sus puertas al público de 18:30 a 22:00 hs cada año del 22 al 30 de diciembre.',
      ],
      highlights: [
        'Tradición de más de 70 años fundada por Don Esteban Sabaté y continuada por su familia',
        'Más de 100 piezas autóctonas movilizadas por un ingenioso sistema hidráulico con fuerza del agua',
        'Representación vívida de oficios tradicionales paraguayos, chiperas, campesinos y el nacimiento',
        'Atracción de renombre nacional e internacional visitada anualmente por miles de familias',
        'Acceso libre y solidario que fortalece el espíritu navideño y la identidad comunitaria',
      ],
    },
    {
      id: 'monumento-residentas',
      name: 'Monumento a Las Residentas',
      category: 'Monumentos Cívicos',
      isOfficial: true,
      officialBadge: 'Monumento Cívico y Escultórico Nacional',
      year: 'Inaugurado en 1979 · Homenaje a la Mujer Paraguaya',
      image: '/Monumento de la Residentas.jpg',
      fallbackImage: '/historia-plaza.jpg',
      location: 'Rotonda de Acceso Luque - Asunción (Autopista Silvio Pettirossi y Avda. Gral. Aquino)',
      schedule: 'Espacio público y monumento histórico: Acceso libre permanente las 24 hs',
      googleMapsUrl: 'https://maps.google.com/?q=Monumento+a+las+Residentas+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.7245523945415!2d-57.53420008498877!3d-25.26380008386008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da77f0c507b9f%3A0xe54d8ec6fe9b50b7!2sMonumento%20a%20las%20Residentas!5e0!3m2!1ses!2spy!4v1652836100000!5m2!1ses!2spy',
      paragraphs: [
        'Majestuosa obra escultórica creada por el notable artista plástico paraguayo Francisco Báez Rolón e inaugurada en 1979. Rinde un sentido y eterno homenaje a las mujeres paraguayas conocidas como "Las Residentas", quienes con heroísmo sobrehumano sostuvieron a la nación y reconstruyeron la patria tras la Guerra de la Triple Alianza.',
        'Emplazado en el portal de entrada principal a la ciudad de Luque, el conjunto de figuras de bronce y cemento retrata a las abnegadas matronas en marcha hacia el destino nacional, portando herramientas de labranza, cántaros y bultos con sus pertenencias.',
        'El monumento está rodeado por un parque ajardinado, palmeras autóctonas y una fuente de agua que jerarquiza el acceso vial más transitado entre la capital y Luque.',
      ],
      highlights: [
        'Obra cumbre del célebre escultor paraguayo Francisco Báez Rolón inaugurada en 1979',
        'Homenaje imperecedero al sacrificio, abnegación y valentía de la mujer paraguaya',
        'Escultura monumental con expresivas figuras de mujeres en actitud de marcha y refundación',
        'Postal icónica de bienvenida situada en la rotonda de ingreso de la Autopista Silvio Pettirossi',
      ],
    },
    {
      id: 'casona-julio-correa',
      name: 'Centro Cultural y Casona Museo Julio Correa',
      category: 'Arquitectura Civil',
      isOfficial: true,
      officialBadge: 'Monumento Histórico y Cultural Nacional',
      year: 'Construcción c. 1930 · Cuna del Teatro Guaraní',
      image: '/Casona Julio Correa.jpg',
      fallbackImage: '/historia-vivienda.jpg',
      location: 'Calle Antequera e/ Julio Correa (Barrio Julio Correa, Luque)',
      schedule: 'Lunes a Viernes de 07:00 a 17:00 hs | Sábados de 08:00 a 12:00 hs',
      googleMapsUrl: 'https://maps.google.com/?q=Centro+Cultural+Julio+Correa+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1200000000000!2d-57.48260000000000!3d-25.26780000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da55555555555%3A0x1111111111111111!2sCentro%20Cultural%20Julio%20Correa!5e0!3m2!1ses!2spy!4v1652836200000!5m2!1ses!2spy',
      paragraphs: [
        'Histórica casona solariega donde residió, compuso y actuó Don Julio Correa (1890-1953), insigne dramaturgo, poeta y actor luqueño, unánimemente proclamado como el creador y padre del Teatro en Lengua Guaraní con obras inmortales como "Sandia Ko\'e", "Guerra Aja" y "Tereho Jeý Frantépe".',
        'El inmueble preserva con fidelidad la arquitectura típica de las quintas suburbanas paraguayas de inicios del siglo XX: corredores jere perimetrales con pilares de madera labrada, techos de tejas coloniales con tacuara y pisos artesanales, rodeada de un añoso patio arbolado.',
        'Hoy funciona como Centro Cultural y Museo Municipal, albergando la sala teatral "Julio Correa", colecciones de manuscritos, vestuarios originales de sus elencos de época, retratos familiares y mobiliario histórico.',
      ],
      highlights: [
        'Residencia y taller creativo de Don Julio Correa, prócer indiscutido del teatro en guaraní',
        'Auténtica edificación de arquitectura vernácula con amplios corredores jere y patio tradicional',
        'Acervo patrimonial con libretos originales, fotos históricas, vestuario y enseres personales',
        'Sede activa de talleres municipales de actuación, peñas literarias y festivales teatrales',
      ],
    },
    {
      id: 'museo-conmebol',
      name: 'Museo del Fútbol Sudamericano (CONMEBOL)',
      category: 'Museos y Cultura',
      isOfficial: true,
      officialBadge: 'Museo Deportivo Internacional',
      year: 'Inaugurado en 2009 · Modernización Total 2024',
      image: '/Museo de la conmebol.jpg',
      fallbackImage: '/conmebol-luque.jpg',
      location: 'Autopista Silvio Pettirossi y Valois Rivarola (Sede Central CONMEBOL, Luque)',
      schedule: 'Lunes a Viernes de 09:00 a 18:00 hs | Sábados de 09:00 a 14:00 hs (Entrada con agendamiento)',
      googleMapsUrl: 'https://maps.google.com/?q=Museo+del+Futbol+Sudamericano+CONMEBOL+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8285523945415!2d-57.51950008498877!3d-25.25950008386008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da62a048756c7%3A0x7d6f55e5b3ee581b!2sCONMEBOL!5e0!3m2!1ses!2spy!4v1652835200000!5m2!1ses!2spy',
      paragraphs: [
        'El Museo del Fútbol Sudamericano, ubicado en el complejo de la CONMEBOL en Luque, es el epicentro de la memoria viva del deporte más apasionante del continente. Tras su completa renovación en 2024, ofrece una de las experiencias museísticas interactivas más avanzadas del mundo.',
        'En sus salas se exponen con custodia los trofeos originales de mayor prestigio del fútbol universal: la mítica Copa Libertadores de América, la Copa Sudamericana y la centenaria Copa América, así como balones históricos y camisetas de campeones mundiales.',
        'Cuenta con estaciones de realidad virtual inmersiva 360°, salas audiovisuales envolventes, estatuas hiperrealistas de íconos del fútbol como Pelé, Diego Armando Maradona y Lionel Messi, y muros interactivos que repasan la trayectoria de cada una de las asociaciones miembro.',
      ],
      highlights: [
        'Trofeos originales de la Copa Libertadores, Copa América y Copa Sudamericana en exhibición',
        'Estatuas realistas a escala natural de leyendas continentales (Pelé, Maradona, Messi)',
        'Salas de tecnología inmersiva 360°, simuladores de penales y pantallas táctiles interactivas',
        'Polo turístico y deportivo internacional de máxima jerarquía situado en Luque',
      ],
    },
    {
      id: 'aeropuerto-pettirossi',
      name: 'Aeropuerto Internacional Silvio Pettirossi',
      category: 'Monumentos Cívicos',
      isOfficial: true,
      officialBadge: 'Principal Portal Aéreo de la República',
      year: 'Inaugurado en 1980 · Homenaje al Héroe de la Aviación Paraguaya',
      image: '/Aeropuerto Silvio Pettirosis.jpg',
      fallbackImage: '/historia-plaza.jpg',
      location: 'Autopista Silvio Pettirossi (Territorio y Jurisdicción Municipal de Luque)',
      schedule: 'Terminal de pasajeros y operaciones comerciales: Abierto 24 horas, los 365 días',
      googleMapsUrl: 'https://maps.google.com/?q=Aeropuerto+Internacional+Silvio+Pettirossi+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6800000000003!2d-57.51920000000000!3d-25.23990000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da6f8566a5e0b%3A0x6b631f4961502476!2sAeropuerto%20Internacional%20Silvio%20Pettirossi!5e0!3m2!1ses!2spy!4v1652836300000!5m2!1ses!2spy',
      paragraphs: [
        'Principal aeropuerto internacional de la República del Paraguay, emplazado en el distrito de Luque. Rinde honor con su nombre a Don Silvio Pettirossi (1887-1916), pionero genial de la aviación paraguaya y figura ilustre de la aviación acrobática mundial que asombró a Europa y América a inicios del siglo XX.',
        'La actual aeroestación fue habilitada el 20 de marzo de 1980, destacándose por su imponente torre de control, sus amplios espigones de embarque y una pista principal de 3.353 metros de longitud apta para aeronaves de fuselaje ancho.',
        'Es el portal de bienvenida que recibe anualmente a más de un millón de pasajeros, albergando en sus pasillos monumentos conmemorativos a la aviación, exposiciones de artesanía de filigrana luqueña y centros de información turística.',
      ],
      highlights: [
        'Mayor complejo aeroportuario internacional del país ubicado íntegramente en Luque',
        'Homenaje permanente a Silvio Pettirossi, héroe civil y pionero de la aeronáutica internacional',
        'Pista de 3.353 metros y arquitectura emblemática con torre de control panorámica',
        'Punto neurálgico de conectividad aérea, turismo y logística de carga nacional',
      ],
    },
    {
      id: 'museo-olimpico',
      name: 'Museo Olímpico Paraguayo',
      category: 'Museos y Cultura',
      isOfficial: true,
      officialBadge: 'Patrimonio y Archivo Histórico del Deporte Nacional',
      year: 'Parque Olímpico Fundado en 2017 · Sede de los Juegos ASU 2022',
      image: '/comite olimpico.jpg',
      fallbackImage: '/conmebol-luque.jpg',
      location: 'Parque Olímpico - Acceso Ñu Guasu (Predio del Comité Olímpico Paraguayo, Luque)',
      schedule: 'Lunes a Viernes de 08:00 a 16:30 hs (Visitas guiadas para colegios y público general)',
      googleMapsUrl: 'https://maps.google.com/?q=Comite+Olimpico+Paraguayo+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.4500000000003!2d-57.52850000000000!3d-25.27250000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da79c13d30b69%3A0xe54c12695576a89c!2sComit%C3%A9%20Ol%C3%ADmpico%20Paraguayo!5e0!3m2!1ses!2spy!4v1652835300000!5m2!1ses!2spy',
      paragraphs: [
        'Emplazado en el moderno predio del Parque Olímpico de Luque, el Museo Olímpico Paraguayo preserva, documenta y celebra las mayores glorias y epopeyas deportivas de la historia de la nación.',
        'Entre sus tesoros más preciados custodia la histórica Medalla de Plata Olímpica conquistada por la Selección Paraguaya de Fútbol en los Juegos Olímpicos de Atenas 2004, antorchas de diversas ediciones olímpicas, diplomas de honor y uniformes de los atletas que representaron a Paraguay en citas ecuménicas.',
        'El museo rinde homenaje a los héroes de los Juegos Suramericanos ASU 2022, donde Luque fue la sede principal del evento multidisciplinario más importante jamás organizado en el país, inspirando a las nuevas generaciones hacia los ideales de superación y juego limpio.',
      ],
      highlights: [
        'Custodia de la Medalla de Plata Olímpica de Atenas 2004, máxima proeza del deporte nacional',
        'Colección oficial de antorchas olímpicas, indumentarias históricas y medallas continentales',
        'Homenaje a los Juegos Suramericanos ASU 2022 y atletas olímpicos paraguayos',
        'Espacio educativo y motivacional para academias juveniles y visitas escolares',
      ],
    },
    {
      id: 'asora-py',
      name: 'Centro Cultural y Museo de la Joyería - Asora Py',
      category: 'Tradición Popular',
      isOfficial: true,
      officialBadge: 'Patrimonio Vivo de la Filigrana Luqueña',
      year: 'Asociación Fundada en 2018 · Saber Artesanal Ancestral',
      image: '/AsoraPy.jpg',
      fallbackImage: '/arpa-luque.jpg',
      location: 'Calle Pedro Juan Caballero c/ Valois Rivarola (Microcentro Histórico de Luque)',
      schedule: 'Lunes a Sábados de 08:00 a 18:00 hs (Talleres demostrativos y sala de exposiciones)',
      googleMapsUrl: 'https://maps.google.com/?q=Asora+Py+Luque',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1752.7501649877352!2d-57.49154170135292!3d-25.26320961513301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da561f09ca0a9%3A0x2c70a08d51bdcce4!2sAntigua%20Estaci%C3%B3n%20del%20Tren!5e0!3m2!1ses!2spy!4v1652831846534!5m2!1ses!2spy',
      paragraphs: [
        'Luque ostenta con legítimo orgullo el título de "Capital de la Música y la Filigrana". La Asociación de Joyeros, Orfebres y Afines (Asora Py) congrega a los más virtuosos artesanos que mantienen vivo el arte secular de tejer hebras de plata y oro, declarado Patrimonio Cultural Inmaterial de la Nación.',
        'En su sede y centro cultural, los visitantes pueden apreciar en vivo a los maestros orfebres trabajando con sopletes, pinzas y crisoles, transformando hilos de metal noble en flores de mburucuyá, arpas en miniatura, pendientes coloniales y relicarios.',
        'El espacio dispone de una sala de museo con piezas maestras laureadas en ferias internacionales, un centro de formación para jóvenes orfebres y un salón de venta directa de joyas con sello de autenticidad luqueña.',
      ],
      highlights: [
        'Custodia y promoción del arte de la filigrana luqueña en plata y oro',
        'Taller viviente: observación directa del proceso de hilado, moldeado y soldado artesanal',
        'Museo de orfebrería con piezas exclusivas premiadas a nivel nacional e internacional',
        'Venta directa con certificado de origen y pureza del metal de orfebres luqueños',
      ],
    },
    {
      id: 'peatonal-historica',
      name: 'Peatonal Histórica y Casonas de 1868',
      category: 'Arquitectura Civil',
      isOfficial: false,
      officialBadge: 'Circuito Histórico Urbano',
      year: 'Siglo XIX · Sede de Gobierno en 1868',
      image: '/Peatonal Histórica y Casonas.jpg',
      fallbackImage: '/historia-vivienda.jpg',
      location: 'Calle Mariscal López e/ Rosario y Cerro Corá',
      schedule: 'Acceso peatonal libre las 24 horas',
      googleMapsUrl: 'https://goo.gl/maps/Qe1J32mar2BGcifM6',
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.3439607375817!2d-57.4959007566448!3d-25.267401506716517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf8849a449b1%3A0x3a2f2fdcb61496e!2sMauseleo%20del%20Gral.%20Jos%C3%A9%20Elizardo%20Aquino!5e0!3m2!1ses!2spy!4v1652833335189!5m2!1ses!2spy',
      paragraphs: [
        'Calle adoquinada que preserva la arquitectura tradicional paraguaya: anchas paredes de adobe, techos de teja y tacuara, y amplias galerías coloniales continuas. Aquí residieron el vicepresidente Sánchez y ministros durante la capitalidad de 1868.',
        'El trazado conecta la Plaza de Armas con los talleres de orfebres y artesanos de filigrana, configurando el corazón patrimonial luqueño.',
      ],
      highlights: [
        'Casonas coloniales con amplias galerías peatonales techadas',
        'Sede histórica de ministerios durante la capital de la República en 1868',
        'Talleres artesanales tradicionales de orfebrería en su recorrido',
        'Iluminación colonial nocturna y paseos culturales guiados',
      ],
    },
  ];

  const categories = [
    'Todos',
    'Patrimonio Oficial',
    'Templos y Fe',
    'Patrimonio Ferroviario',
    'Monumentos Cívicos',
    'Tradición Popular',
    'Arquitectura Civil',
    'Museos y Cultura',
  ];

  const filteredPlaces = places.filter((p) => {
    // Filtro por categoría
    if (selectedCategory === 'Patrimonio Oficial' && !p.isOfficial) return false;
    if (selectedCategory !== 'Todos' && selectedCategory !== 'Patrimonio Oficial' && p.category !== selectedCategory) {
      return false;
    }

    // Filtro por búsqueda
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchLoc = p.location.toLowerCase().includes(q);
      const matchText = p.paragraphs.some((para) => para.toLowerCase().includes(q));
      return matchName || matchLoc || matchText;
    }

    return true;
  });

  const toggleMap = (id) => {
    setActiveMapId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="PATRIMONIO CULTURAL Y EDILICIO DE LA CIUDAD"
        title="Lugares y Edificios Históricos"
        subtitle="Conocé los monumentos, templos, museos y sitios emblemáticos que forjaron la identidad luqueña: el Santuario Virgen del Rosario, la Estación del Tren, el Mausoleo del Gral. Aquino, el Monumento a Las Residentas, la Casona Julio Correa, el Museo de la CONMEBOL, el Aeropuerto Silvio Pettirossi, el Museo Olímpico y Asora Py."
        category="Ciudad"
        badge="Patrimonio Protegido"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Tarjeta de Introducción con Accesos Rápidos a Sitios Emblemáticos */}
          <div className="history-intro-card" style={{ marginBottom: '2.5rem' }}>
            <div className="history-intro-content" style={{ width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <span className="eyebrow-accent">CIRCUITO PATRIMONIAL OFICIAL DE SOMOS LUQUE</span>
              </div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Tesoros Vivos de la Identidad Luqueña</h2>
              <p style={{ maxWidth: '900px', marginBottom: '1.5rem', lineHeight: '1.65' }}>
                La Municipalidad de Luque custodia y promueve los espacios arquitectónicos y monumentales que narran
                nuestros más de 250 años de historia cívica, espiritual, ferroviaria y popular. Hacé clic en cualquiera
                de los sitios oficiales para explorar su reseña documentada, fotos de época y ubicación exacta en Google Maps.
              </p>

              {/* Botonera de Salto Rápido a Sitios Emblemáticos */}
              <div className="quick-jump-places-grid">
                <a href="#santuario-rosario" className="quick-jump-place-pill">
                  <Church size={16} />
                  <span>Santuario Virgen del Rosario</span>
                </a>
                <a href="#estacion-tren" className="quick-jump-place-pill">
                  <Train size={16} />
                  <span>Estación del Tren</span>
                </a>
                <a href="#mausoleo-aquino" className="quick-jump-place-pill">
                  <Award size={16} />
                  <span>Mausoleo Gral. Aquino</span>
                </a>
                <a href="#monumento-residentas" className="quick-jump-place-pill">
                  <Landmark size={16} />
                  <span>Monumento Las Residentas</span>
                </a>
                <a href="#casona-julio-correa" className="quick-jump-place-pill">
                  <Building size={16} />
                  <span>Casona Julio Correa</span>
                </a>
                <a href="#museo-conmebol" className="quick-jump-place-pill">
                  <Trophy size={16} />
                  <span>Museo de la CONMEBOL</span>
                </a>
                <a href="#aeropuerto-pettirossi" className="quick-jump-place-pill">
                  <Plane size={16} />
                  <span>Aeropuerto Pettirossi</span>
                </a>
                <a href="#museo-olimpico" className="quick-jump-place-pill">
                  <Sparkles size={16} />
                  <span>Museo Olímpico</span>
                </a>
                <a href="#asora-py" className="quick-jump-place-pill">
                  <Gem size={16} />
                  <span>Asora Py Filigrana</span>
                </a>
                <a href="#pesebre-sabate" className="quick-jump-place-pill">
                  <Sparkles size={16} />
                  <span>Pesebre Sabaté</span>
                </a>
              </div>
            </div>
          </div>

          {/* Barra de Filtros y Búsqueda */}
          <div className="category-filters-container" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <span className="filter-label" style={{ fontWeight: 700, color: 'var(--primary-blue)' }}>
                  Filtrar sitios históricos:
                </span>
                <div className="search-box-wrap" style={{ position: 'relative', minWidth: '260px' }}>
                  <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888' }} />
                  <input
                    type="text"
                    placeholder="Buscar monumento o lugar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.45rem 1rem 0.45rem 2.2rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid #c9d8f5',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div className="category-filters" role="tablist">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  let count = 0;
                  if (cat === 'Todos') count = places.length;
                  else if (cat === 'Patrimonio Oficial') count = places.filter((p) => p.isOfficial).length;
                  else count = places.filter((p) => p.category === cat).length;

                  return (
                    <button
                      key={cat}
                      className={`cat-pill ${isActive ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
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

          {/* Grilla Detallada de Lugares Históricos */}
          <div className="places-cards-grid">
            {filteredPlaces.map((place) => {
              const isMapOpen = activeMapId === place.id;

              return (
                <article className="place-detail-card" key={place.id} id={place.id}>
                  {/* Imagen y badges de encabezado */}
                  <div className="place-image-wrap">
                    <img
                      src={place.image}
                      alt={place.name}
                      loading="lazy"
                      width="600"
                      height="380"
                      onError={(e) => {
                        if (place.fallbackImage && e.target.src !== place.fallbackImage) {
                          e.target.src = place.fallbackImage;
                        }
                      }}
                    />
                    <span className="place-category-tag">{place.category}</span>
                    {place.isOfficial && <span className="place-official-tag">OFICIAL</span>}
                    <span className="place-year-pill">{place.year}</span>
                  </div>

                  {/* Cuerpo de Contenido */}
                  <div className="place-content-body">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span className="place-badge-type">{place.officialBadge}</span>
                    </div>

                    <h3>{place.name}</h3>

                    {/* Metadatos: Ubicación y Horario */}
                    <div className="place-meta-item">
                      <MapPin size={16} />
                      <span>{place.location}</span>
                    </div>

                    <div className="place-meta-item">
                      <Clock size={16} />
                      <span>{place.schedule}</span>
                    </div>

                    {/* Párrafos Oficiales */}
                    <div className="place-prose">
                      {place.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {/* Recuadro de Puntos Destacados */}
                    <div className="place-highlights-box">
                      <strong>Hitos y Características Destacadas:</strong>
                      <ul>
                        {place.highlights.map((h, i) => (
                          <li key={i}>
                            <ShieldCheck size={14} className="hl-check" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Botonera de Acciones: Cómo Llegar y Ver Mapa */}
                    <div className="place-actions-row">
                      <a
                        href={place.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-map-action"
                        title="Abrir ubicación en Google Maps"
                      >
                        <Navigation size={15} />
                        <span>CÓMO LLEGAR</span>
                        <ExternalLink size={13} style={{ marginLeft: '2px', opacity: 0.8 }} />
                      </a>

                      <button
                        type="button"
                        className={`btn-map-toggle ${isMapOpen ? 'active' : ''}`}
                        onClick={() => toggleMap(place.id)}
                        aria-expanded={isMapOpen}
                      >
                        <Map size={15} />
                        <span>{isMapOpen ? 'Ocultar Mapa' : 'Ver Mapa en Pantalla'}</span>
                        {isMapOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </button>
                    </div>

                    {/* Contenedor del Mapa Interactivo (si está desplegado) */}
                    {isMapOpen && (
                      <div className="place-map-wrapper">
                        <iframe
                          src={place.mapEmbedUrl}
                          className="place-map-iframe"
                          title={`Mapa de ${place.name}`}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div style={{ padding: '0.6rem 0.9rem', background: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.78rem', color: '#666' }}>
                          <span>Ubicación verificada en Google Maps · Luque, Paraguay</span>
                          <a
                            href={place.googleMapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--primary-blue)', fontWeight: 600, textDecoration: 'underline' }}
                          >
                            Abrir en pantalla completa ↗
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Banner de Recomendaciones al Visitante */}
          <div className="tourism-tips-banner">
            <div className="tourism-tips-icon">
              <Compass size={32} />
            </div>
            <div>
              <h3>Circuito Turístico y Patrimonial Municipal</h3>
              <p>
                Los cuatro monumentos históricos oficiales se encuentran convenientemente ubicados en el radio cívico
                y urbano de Luque. Recomendamos iniciar el recorrido en la <strong>Antigua Estación del Tren</strong>,
                visitar el <strong>Mausoleo del Gral. Elizardo Aquino</strong> en la plaza central, ingresar al majestuoso{' '}
                <strong>Santuario Virgen del Rosario</strong> para apreciar su puerta colonial original y, durante las
                festividades de fin de año (22 al 30 de diciembre), concurrir en familia al tradicional{' '}
                <strong>Pesebre Hidráulico Sabaté</strong> en el barrio Bella Vista.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
