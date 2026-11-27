import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const slidesData = [
  {
    id: 'santuario',
    image: '/santuario-luque-opt.jpg',
    imageDesktop: '/santuario-luque-opt.jpg',
    title: 'Luque avanza con su gente y su historia',
    titleHtml: 'Luque avanza <br>con su gente <br>y su historia',
    desc: 'Bienvenidos al portal oficial del Gobierno Municipal de la Ciudad de Luque. Gestioná trámites, normativas y servicios cívicos al alcance de cada vecino.',
    btnMainText: 'Explorar Trámites',
    btnMainHref: '#gestiones',
    btnSecText: '▶ Video Institucional',
    btnSecHref: 'https://www.youtube.com/results?search_query=Municipalidad+de+Luque+Paraguay',
  },
  {
    id: 'arpa',
    image: '/arpa-luque.jpg',
    imageDesktop: '/arpa-luque-desktop.jpg',
    title: 'Cuna de la música, el arte y la tradición',
    titleHtml: 'Cuna de la música, <br>el arte y la <br>tradición',
    desc: 'Capital de la orfebrería en filigrana de oro y plata, cuna del arpa paraguaya y tierra de identidad, fe y fervor auriazul.',
    btnMainText: 'Conocer Nuestra Ciudad',
    btnMainHref: '#historia',
    btnSecText: 'Lugares Históricos',
    btnSecHref: '#lugares-historicos',
  },
  {
    id: 'conmebol',
    image: '/Barrios-y-lugares-turisticos-de-LuqueOPC1.jpg',
    imageDesktop: '/Barrios-y-lugares-turisticos-de-LuqueOPC1.jpg',
    title: 'Gestión moderna, cercana y transparente',
    titleHtml: 'Gestión moderna, <br>cercana y <br>transparente',
    desc: 'Optimizamos la atención ciudadana con trámites más ágiles: habilitación de rodados, patentes comerciales y libre acceso a la información pública.',
    btnMainText: 'Gestiones Municipales',
    btnMainHref: '#gestiones',
    btnSecText: 'Portal de Transparencia',
    btnSecHref: '#ordenanzas-municipales',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6500);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
    resetTimer();
  };

  return (
    <section className="hero-slider" id="inicio" aria-label="Carrusel de bienvenida municipal">
      {slidesData.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={index}
            className={`slide slide-${slide.id || index} ${isActive ? 'active' : ''}`}
            style={{
              '--bg-desktop': `url('${slide.imageDesktop || slide.image}')`,
              '--bg-mobile': `url('${slide.image}')`,
              backgroundImage: `url('${slide.imageDesktop || slide.image}')`,
            }}
            aria-hidden={!isActive}
          >
            <div className="slide-content">
              <span className="slide-badge">GOBIERNO MUNICIPAL · CIUDAD DE LUQUE</span>
              <h1
                className="slide-title"
                dangerouslySetInnerHTML={{ __html: slide.titleHtml }}
              />
              <p className="slide-desc">{slide.desc}</p>
              <div className="slide-actions">
                <a href={slide.btnMainHref} className="btn-main">
                  <span>{slide.btnMainText}</span>
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={slide.btnSecHref}
                  target={slide.btnSecHref.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="btn-video"
                >
                  {slide.btnSecText}
                </a>
              </div>
            </div>
          </div>
        );
      })}

      {/* Controles de navegación del slider */}
      <div className="slider-controls">
        <button
          className="slider-btn"
          onClick={prevSlide}
          aria-label="Diapositiva anterior"
          title="Anterior"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="slider-dots">
          {slidesData.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => {
                setCurrentSlide(idx);
                resetTimer();
              }}
              aria-label={`Ir a la diapositiva ${idx + 1}`}
            />
          ))}
        </div>
        <button
          className="slider-btn"
          onClick={nextSlide}
          aria-label="Diapositiva siguiente"
          title="Siguiente"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
