import PageHero from './PageHero.jsx';
import { Calendar, Landmark, Award, Shield, BookOpen, Music, Gem, Flag } from 'lucide-react';

export default function HistoriaPage({ onBackToHome }) {
  const milestones = [
    {
      year: '1635',
      title: 'Concesión Real y Primeros Orígenes',
      desc: 'El gobernador colonial Martín de Ledesma Valderrama otorgó al Capitán Miguel Antón de Luque las tierras que comprendían el paraje original, estableciendo la primera población ganadera y núcleo habitacional hispano.',
      badge: 'Orígenes Coloniales',
      icon: <Landmark size={20} />,
    },
    {
      year: '1750 - 1755',
      title: 'Capilla de la Virgen del Rosario',
      desc: 'Bajo la guía de los misioneros franciscanos se erigió el primer oratorio consagrado a Nuestra Señora del Rosario. La devoción de los lugareños transformó este sitio en el epicentro espiritual y geográfico de la futura ciudad.',
      badge: 'Patrimonio Sacro',
      icon: <Award size={20} />,
    },
    {
      year: '1781',
      title: 'Consolidación Municipal y Villa de Luque',
      desc: 'El gobernador Pedro Melo de Portugal formalizó la ordenación territorial y civil de la villa, delimitando las compañías comunales históricas y asentando las bases institucionales del municipio.',
      badge: 'Fundación Civil',
      icon: <Shield size={20} />,
    },
    {
      year: '25 Dic 1861',
      title: 'Llegada del Primer Ferrocarril',
      desc: 'Inauguración histórica del Ferrocarril Carlos Antonio López que conectó Asunción con Luque. La estación luqueña se convirtió en una de las primeras estaciones férreas de toda Sudamérica y el motor económico del país.',
      badge: 'Hito Ferroviario',
      icon: <Flag size={20} />,
    },
    {
      year: '1868',
      title: 'Segunda Capital de la República del Paraguay',
      desc: 'Durante la Guerra de la Triple Alianza, ante la evacuación de Asunción, el Mariscal Francisco Solano López trasladó la sede del gobierno paraguayo a Luque. Durante meses, la ciudad albergó los ministerios, la vicepresidencia y el corazón de la resistencia nacional.',
      badge: 'Capital Nacional',
      icon: <Landmark size={20} />,
    },
    {
      year: '1921',
      title: 'Nacimiento del Club Sportivo Luqueño',
      desc: 'La fusión patriótica de los tres clubes locales (Marte Atlético, General Aquino y Vencedor) dio vida a la pasión deportiva "Azul y Oro", estandarte popular del fervor y el sentido de pertenencia de toda la comunidad.',
      badge: 'Fervor Auriazul',
      icon: <Award size={20} />,
    },
    {
      year: 'Actualidad',
      title: 'Capital de la Música, la Orfebrería y el Deporte',
      desc: 'Luque es reconocida internacionalmente por sus maestros orfebres en filigrana de oro y plata, sus luthiers de arpas y guitarras paraguayas, y por albergar la sede continental de la CONMEBOL y el Aeropuerto Internacional Silvio Pettirossi.',
      badge: 'Identidad Viva',
      icon: <Gem size={20} />,
    },
  ];

  const pillars = [
    {
      icon: <Gem size={32} />,
      title: 'Filigrana de Oro y Plata',
      text: 'Herencia colonial refinada por generaciones de maestros orfebres luqueños. Cada pieza es elaborada entrelazando finísimos hilos metálicos en joyas únicas admiradas en todo el mundo.',
    },
    {
      icon: <Music size={32} />,
      title: 'Cuna de Arpas y Guitarras',
      text: 'Tierra de luthiers consagrados. Los talleres artesanales de Luque construyen el arpa paraguaya tradicional de 36 cuerdas y guitarras de maderas nobles que recorren los escenarios internacionales.',
    },
    {
      icon: <Shield size={32} />,
      title: 'La "República de Luque"',
      text: 'Una identidad forjada en la bravura, la independencia de espíritu y el color azul y oro. Ser luqueño es un orgullo que trasciende fronteras con una cultura comunitaria solidaria y vibrante.',
    },
  ];

  return (
    <div className="subpage-view">
      <PageHero
        eyebrow="PATRIMONIO, IDENTIDAD Y TRADICIÓN"
        title="Historia de Luque"
        subtitle="Conocé las raíces de nuestra ciudad: desde sus orígenes coloniales hasta su heroico rol como segunda capital de la República en 1868 y capital de la música paraguaya."
        category="Ciudad"
        badge="Memoria Histórica"
        onBackToHome={onBackToHome}
      />

      <section className="section-pad">
        <div className="container">
          {/* Introducción con citas y datos clave */}
          <div className="history-intro-card">
            <div className="history-intro-content">
              <span className="eyebrow-accent">CIUDAD DE NUESTRA SEÑORA DEL ROSARIO DE LUQUE</span>
              <h2>Una Ciudad que Forjó el Destino de la Patria</h2>
              <p>
                Asentada en el corazón del Departamento Central, Luque es hoy la tercera ciudad más poblada del Paraguay y un polo
                neurálgico de cultura, comercio y hospitalidad. Su historia está marcada por la fe inquebrantable a la Virgen del Rosario,
                el paso triunfal del primer tren a vapor y el honor inmenso de haber sostenido los destinos de la República como capital en 1868.
              </p>
              <div className="history-quick-stats">
                <div className="hist-stat">
                  <b>1635</b>
                  <span>Merced colonial</span>
                </div>
                <div className="hist-stat">
                  <b>1861</b>
                  <span>Primer ferrocarril</span>
                </div>
                <div className="hist-stat">
                  <b>1868</b>
                  <span>Capital de la República</span>
                </div>
                <div className="hist-stat">
                  <b>+300.000</b>
                  <span>Habitantes hoy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Línea de Tiempo interactiva */}
          <div className="history-timeline-section">
            <div className="section-header-compact">
              <span className="eyebrow-accent">CRONOLOGÍA OFICIAL</span>
              <h2>Hitos y Fechas Claves de Luque</h2>
              <p>Los acontecimientos más trascendentes que definieron la identidad y el crecimiento de nuestra comunidad.</p>
            </div>

            <div className="timeline-container">
              {milestones.map((item, index) => (
                <div className="timeline-item" key={item.year}>
                  <div className="timeline-marker">
                    <span className="timeline-icon">{item.icon}</span>
                    <span className="timeline-year">{item.year}</span>
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <span className="timeline-badge">{item.badge}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tres Pilares de Identidad */}
          <div className="history-pillars-section">
            <div className="section-header-compact">
              <span className="eyebrow-accent">CULTURA Y SÍMBOLOS</span>
              <h2>Los Tres Pilares de la Identidad Luqueña</h2>
              <p>Valores, artesanías y pasiones que nos distinguen en el Paraguay y el mundo.</p>
            </div>

            <div className="pillars-grid">
              {pillars.map((pillar) => (
                <div className="pillar-card" key={pillar.title}>
                  <div className="pillar-icon-wrap">{pillar.icon}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Héroe Luqueño: Gral. Elizardo Aquino */}
          <div className="hero-aquino-card">
            <div className="hero-aquino-badge">
              <Award size={18} />
              <span>HÉROE NACIONAL LUQUEÑO</span>
            </div>
            <h2>General Elizardo Aquino (1824 - 1866)</h2>
            <p>
              Nacido en Luque, el General Aquino fue una de las mentes militares y técnicas más brillantes de la historia paraguaya.
              Organizador y director de la célebre Fundición de Hierro de Ybycuí y comandante heroico en la batalla de Paso de Patria.
              Sus restos reposan en el Mausoleo Central de la Plaza General Aquino de Luque, rindiéndole guardia cívica permanente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
