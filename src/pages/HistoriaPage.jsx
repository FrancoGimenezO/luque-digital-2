import PageHero from './PageHero.jsx';
import { Calendar, Landmark, Award, Shield, BookOpen, Music, Gem, Flag, MapPin, Sparkles, Train, Flame } from 'lucide-react';

export default function HistoriaPage({ onBackToHome }) {
  const timelineMilestones = [
    {
      year: '1537',
      title: 'Mba’e Yñu y Primeros Pobladores Guaraníes',
      desc: 'Meses después de fundarse Asunción, los españoles exploraron la comarca de Mba’e Yñu, liderada por los caciques Yka’a, Maka’i, Marambu y Jaguarete, abundante en arroyos salados y karanday.',
      badge: 'Orígenes Autóctonos',
      icon: <Sparkles size={18} />,
    },
    {
      year: '1635',
      title: 'Donación al Capitán Miguel Antón de Luque',
      desc: 'El Gobernador Martín Ledesma de Valderrama cedió 2 leguas de tierra en el Valle de las Salinas al Capitán Miguel Antón de Luque, instalando estanzuelas de ganado vacuno.',
      badge: 'Merced Colonial',
      icon: <Landmark size={18} />,
    },
    {
      year: 'Siglo XVIII',
      title: 'Capilla de la Virgen del Rosario y Fusión de Sangre',
      desc: 'El heredero Don Miguel de Luque autorizó construir la capilla de la Virgen del Rosario con fuerte de vigilancia, frailes franciscanos y chozas nativas, dando origen al mestizaje luqueño.',
      badge: 'Cuna Espiritual',
      icon: <Award size={18} />,
    },
    {
      year: '1781',
      title: 'Creación Oficial del "Partido de Luque"',
      desc: 'El Gobernador Pedro Melo de Portugal realizó la primera delimitación jurisdiccional de la provincia, consagrando formalmente al distrito como "Partido de Luque".',
      badge: 'Institución Civil',
      icon: <Shield size={18} />,
    },
    {
      year: '1811',
      title: 'Gesta Libertaria de la Independencia',
      desc: 'Los ciudadanos del Partido de Luque tuvieron una activa y valiente participación en el proceso que dio nacimiento a la República independiente del Paraguay.',
      badge: 'Independencia Patria',
      icon: <Flame size={18} />,
    },
    {
      year: '1861',
      title: 'Llegada Histórica del Primer Ferrocarril',
      desc: 'El ferrocarril Carlos Antonio López llegó a la estación de Luque, consolidando a la localidad como punto geopolítico y comercial clave de comunicación con el interior del país.',
      badge: 'Hito Ferroviario',
      icon: <Train size={18} />,
    },
    {
      year: 'Feb 1868',
      title: 'Luque: Sede de Gobierno y Segunda Capital',
      desc: 'Durante la Guerra de la Triple Alianza, Luque acogió a los compatriotas evacuados de Asunción y se convirtió en Sede de Gobierno y bastión de la resistencia patria.',
      badge: 'Capital de la República',
      icon: <Flag size={18} />,
    },
    {
      year: '1870 en adelante',
      title: 'Cuna de la Filigrana, Arpas y Guitarras',
      desc: 'Los luqueños afirmaron su querencia por la tierra organizándose en talleres artesanales. Destacaron mundialmente por la filigrana en oro y plata y la luthería de instrumentos de cuerda.',
      badge: 'Arte y Tradición',
      icon: <Gem size={18} />,
    },
    {
      year: '27 Dic 1935',
      title: 'Elevación Oficial a la Categoría de Ciudad',
      desc: 'El crecimiento demográfico y el incremento sostenido de la recaudación municipal motivaron al Poder Ejecutivo a elevar oficialmente a Luque al rango de Ciudad.',
      badge: 'Ciudad de Luque',
      icon: <Landmark size={18} />,
    },
    {
      year: '1940 a Hoy',
      title: 'Fábrica de Embutidos, Kuré Luqueño y Fervor Auriazul',
      desc: 'La radicación de familias productoras de chacinados y la distribución en tren popularizó la tradición porcina del Kuré Luqueño, unida a la pasión del Sportivo Luqueño.',
      badge: 'Identidad Propia',
      icon: <Music size={18} />,
    },
  ];

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="PATRIMONIO, IDENTIDAD Y TRADICIÓN OFICIAL"
        title="Historia de la Ciudad de Luque"
        subtitle="Recorré los anales históricos oficiales de nuestra querida ciudad: desde las tierras de Mba’e Yñu y la capilla franciscana, hasta su rol heroico como Sede de Gobierno en 1868 y capital de la música y la filigrana."
        category="Ciudad"
        badge="Documento Histórico Oficial"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Tarjeta de Introducción con Datos Claves */}
          <div className="history-intro-card">
            <div className="history-intro-content">
              <span className="eyebrow-accent">RESEÑA INSTITUCIONAL DE NUESTRA TIERRA</span>
              <h2>La Forja Heroica del Pueblo Luqueño</h2>
              <p>
                La historia de Luque es un testimonio viviente de laboriosidad, fe mariana, coraje patrio e identidad comunitaria propia.
                Fundada sobre el fluido relacionamiento de los conquistadores ibéricos y los valerosos caciques originarios de Mba’e Yñu,
                Luque creció al abrigo de la Virgen del Rosario, fue punta de riel del primer ferrocarril sudamericano y albergó la capitalidad
                de la República del Paraguay en sus horas más decisivas.
              </p>
              <div className="history-quick-stats">
                <div className="hist-stat">
                  <b>1537</b>
                  <span>Mba’e Yñu Guaraní</span>
                </div>
                <div className="hist-stat">
                  <b>1781</b>
                  <span>Partido de Luque</span>
                </div>
                <div className="hist-stat">
                  <b>1861</b>
                  <span>Primer Ferrocarril</span>
                </div>
                <div className="hist-stat">
                  <b>1868</b>
                  <span>Sede de Gobierno</span>
                </div>
                <div className="hist-stat">
                  <b>1935</b>
                  <span>Rango de Ciudad</span>
                </div>
              </div>
            </div>
          </div>

          {/* CAPÍTULOS HISTÓRICOS OFICIALES CON LAS FOTOS HISTÓRICAS DE LA MUNICIPALIDAD */}
          <div className="history-chapters-wrap">
            {/* CAPÍTULO 1: Orígenes, Mba'e Yñu y la Donación Colonial */}
            <article className="history-chapter-card">
              <div className="history-chapter-grid">
                <div className="history-chapter-image-col">
                  <div className="hist-img-frame">
                    <img
                      src="/historia-vivienda.jpg"
                      alt="Casonas coloniales y orígenes del Valle de Luque"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                    <span className="hist-img-tag">Siglo XVI - XVII</span>
                  </div>
                </div>

                <div className="history-chapter-text-col">
                  <div className="chapter-badge">Capítulo I · Orígenes Coloniales</div>
                  <h3>De la Comarca Indígena al Valle de las Salinas</h3>
                  <div className="chapter-prose">
                    <p>
                      Meses después de la Fundación del Fuerte de la Asunción en 1537 los conquistadores españoles visualizaron una amplia virgen comarca habitada por nativos llamada por los nativos <strong>Mba’e Yñu</strong> lideradas por los caciques <strong>Yka’a, Maka’i, Marambu y Jaguarete</strong>.
                    </p>
                    <p>
                      Encontrando en ella abundaban árboles frutales, plantas de <strong>karanday</strong> y arroyos ricos en sal. Los españoles instalaron unas estanzuelas donde criaron ganado vacuno cuyo engorde se vio favorecido por el arroyo de agua salada.
                    </p>
                    <p>
                      Fueron arrebatados de su virginal selva convirtiéndose en esclavos, los frailes franciscanos imponían y evangelizaban a los nativos. Demostrando su poder los conquistadores construyeron fuertes de vigilancia uno de ellos en la cercanía del <strong>Arroyo Yukyry</strong>.
                    </p>
                    <p>
                      Después de casi 100 años el entonces Gobernador de esta región <strong>Martín Ledesma de Valderrama</strong>, cedía en donación 2 leguas de tierra en el Valle de las Salinas al <strong>Capitán Miguel Antón de Luque</strong> asentado hace tiempo en la zona.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* CAPÍTULO 2: La Capilla de la Virgen del Rosario y el Partido de Luque */}
            <article className="history-chapter-card">
              <div className="history-chapter-grid reverse">
                <div className="history-chapter-image-col">
                  <div className="hist-img-frame">
                    <img
                      src="/historia-iglesia.jpg"
                      alt="Santuario Nuestra Señora del Rosario en Luque"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                    <span className="hist-img-tag">Siglo XVIII · 1781</span>
                  </div>
                </div>

                <div className="history-chapter-text-col">
                  <div className="chapter-badge">Capítulo II · Fe y Consolidación Civil</div>
                  <h3>La Capilla de la Virgen del Rosario y el Partido de Luque</h3>
                  <div className="chapter-prose">
                    <p>
                      Luego de 1 siglo de la donación de las 2 leguas al Capitán, el heredero <strong>Don Miguel de Luque</strong> autorizó la construcción de una capilla consagrada a la <strong>Virgen del Rosario</strong>.
                    </p>
                    <p>
                      Alrededor de la capilla construyeron un gran fuerte de vigilancia; dentro del mismo edificaron casas-habitaciones para las autoridades, separadamente para los soldados así como para los frailes franciscanos, y zonificaron para cementerio y caballerizas… fuera del fuerte delimitaron el área de uso para las chozas de los nativos.
                    </p>
                    <p>
                      La cercanía de las viviendas de los nativos y españoles permitió el fluido relacionamiento que facilitó el inicio de la unión de sangre y las costumbres, dando origen a los mestizos con la mezcla de la raza ibérica con los nativos.
                    </p>
                    <p>
                      El crecimiento poblacional dio origen a la comunidad luqueña alrededor de la capilla en el Valle de Luque. En <strong>1781</strong> el Gobernador <strong>Pedro Melo de Portugal</strong> hizo la primera distribución jurisdiccional de la provincia, consagrando oficialmente a este distrito con el nombre <strong>Partido de Luque</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* CAPÍTULO 3: Mayo de 1811, el Ferrocarril y Sede de Gobierno en 1868 */}
            <article className="history-chapter-card">
              <div className="history-chapter-grid">
                <div className="history-chapter-image-col">
                  <div className="hist-img-frame">
                    <img
                      src="/historia-plaza.jpg"
                      alt="Plaza Central y arquitectura cívica histórica de Luque"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                    <span className="hist-img-tag">1811 - 1868</span>
                  </div>
                </div>

                <div className="history-chapter-text-col">
                  <div className="chapter-badge">Capítulo III · Heroísmo Nacional</div>
                  <h3>Gesta Libertaria, el Tren y Capital de la República</h3>
                  <div className="chapter-prose">
                    <p>
                      Transcurrieron años y hechos históricos que dieron pie al golpe libertario de <strong>Mayo de 1811</strong>. El Partido de Luque tuvo protagonismo a través de sus ciudadanos en el proceso independentista de una República que estaba naciendo.
                    </p>
                    <p>
                      Cincuenta años después, en <strong>1861</strong>, el ferrocarril hizo su primera llegada a la estación del Partido de Luque, convirtiéndolo en un sitio geopolíticamente clave para el Paraguay, por ser la localidad que comunicaba con las localidades del interior; en consecuencia las actividades comerciales incrementaron velozmente.
                    </p>
                    <p>
                      Siete años pasaron y se inició la <strong>Guerra de la Triple Alianza</strong>. En febrero de <strong>1868</strong> el Partido de Luque se convirtió en <strong>Sede de Gobierno</strong> acogiendo a los compatriotas evacuados de Asunción. En esta contienda bélica los luqueños tuvieron una relevante y heroica participación en la defensa nacional.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* CAPÍTULO 4: Reconstrucción, Filigrana, Categoría de Ciudad y Tradición del Kuré */}
            <article className="history-chapter-card">
              <div className="history-chapter-grid reverse">
                <div className="history-chapter-image-col">
                  <div className="hist-img-frame">
                    <img
                      src="/historia-ferrocarril.jpg"
                      alt="Antigua Estación del Ferrocarril e identidad artesanal"
                      loading="lazy"
                      width="800"
                      height="600"
                    />
                    <span className="hist-img-tag">1870 - 1935 - Hoy</span>
                  </div>
                </div>

                <div className="history-chapter-text-col">
                  <div className="chapter-badge">Capítulo IV · Identidad y Pujanza</div>
                  <h3>Artesanía, Elevación a Ciudad y la Pasión Auriazul</h3>
                  <div className="chapter-prose">
                    <p>
                      Desde <strong>1870</strong> los ciudadanos afirman su querencia hacia la tierra que les vio nacer, fortaleciendo vínculos familiares y comerciales organizándose. Los luqueños demostraron gran destreza en la elaboración de productos artesanales como guitarras, arpas y joyas, agregándoles un toque distintivo.
                    </p>
                    <p>
                      En la orfebrería se destacaban en las <strong>joyas de filigrana de oro y plata</strong>, y las <strong>guitarras y arpas</strong> destacándose por su pureza de sonoridad y exquisito diseño.
                    </p>
                    <p>
                      El incremento de la recaudación municipal fue determinante para que el Ejecutivo disponga a Luque a la <strong>categoría de Ciudad el 27 de diciembre de 1935</strong>.
                    </p>
                    <p>
                      Desde <strong>1940</strong> aparecieron la familia alemana <strong>Kininger y Schulz</strong> quienes instalaron una fábrica de embutidos artesanales a base de carne porcina. Luque se convirtió en la mayor productora y proveedora de embutidos, distribuyéndolos a través del ferrocarril a todo el país. Los luqueños empleados en la fábrica, al ver el potencial financiero de estos productos, empezaron a criar, engordar y faenar en sus domicilios para luego elaborar los embutidos.
                    </p>
                    <p>
                      Hoy día Luque es respetada por su <strong>identidad propia</strong> impuesta por su misma población a través de la <strong>Música, la Artesanía, los colores auriazules del club deportivo junto a su mascota el Kuré</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* CRONOLOGÍA DETALLADA */}
          <div className="history-timeline-section" style={{ marginTop: '4rem' }}>
            <div className="section-header-compact">
              <span className="eyebrow-accent">LÍNEA DE TIEMPO OFICIAL</span>
              <h2>Hitos Claves de la Historia de Luque</h2>
              <p>Resumen cronológico de los sucesos fundamentales que forjaron la identidad luqueña.</p>
            </div>

            <div className="timeline-container">
              {timelineMilestones.map((item, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-marker">
                    <span className="timeline-icon">{item.icon}</span>
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <span className="timeline-badge">{item.badge}</span>
                      <span className="timeline-year-tag">{item.year}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PILARES IDENTITARIOS */}
          <div className="history-pillars-section">
            <div className="section-header-compact">
              <span className="eyebrow-accent">SÍMBOLOS Y TRADICIONES INALTERABLES</span>
              <h2>Pilares de la "República de Luque"</h2>
              <p>Las tres señas de identidad que llenan de orgullo a más de 300.000 habitantes.</p>
            </div>

            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Gem size={32} />
                </div>
                <h3>Filigrana de Oro y Plata</h3>
                <p>
                  El refinado arte de transformar hilos milimétricos en piezas únicas. Joyería reconocida a nivel nacional e internacional como símbolo de la maestría orfebre luqueña.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Music size={32} />
                </div>
                <h3>Arpas y Guitarras de Concierto</h3>
                <p>
                  Tierra de consagrados luthiers que dan forma al arpa paraguaya tradicional de 36 cuerdas, instrumento que lleva el alma de nuestra música a todos los continentes.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Shield size={32} />
                </div>
                <h3>La Tradición del Kuré y el Azul y Oro</h3>
                <p>
                  Desde la fábrica de embutidos de 1940 y la fundación del Sportivo Luqueño, el cerdo (Kuré) y los colores auriazules encarnan la tenacidad, el trabajo y la alegría del pueblo.
                </p>
              </div>
            </div>
          </div>

          {/* MENCIÓN DE HONOR: GRAL. ELIZARDO AQUINO */}
          <div className="hero-aquino-card">
            <div className="hero-aquino-badge">
              <Award size={18} />
              <span>HÉROE NACIONAL LUQUEÑO</span>
            </div>
            <h2>General Elizardo Aquino (1824 - 1866)</h2>
            <p>
              Nacido en Luque, fue una de las figuras cívico-militares más insignes de la historia paraguaya.
              Genio técnico que organizó y dirigió los talleres de la Fundición de Hierro de Ybycuí y comandante heroico en la batalla de Paso de Patria.
              Sus restos reposan en el Mausoleo Central de la Plaza General Aquino de Luque con guardia cívica permanente de la ciudadanía.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
