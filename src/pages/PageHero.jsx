import { ArrowLeft, Home, ChevronRight } from 'lucide-react';

export default function PageHero({
  eyebrow = 'CIUDAD DE LUQUE',
  title,
  subtitle,
  category = 'Ciudad',
  badge = 'Portal Municipal',
  onBackToHome,
}) {
  const handleHomeClick = (e) => {
    e.preventDefault();
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.location.hash = '#inicio';
    }
  };

  return (
    <div className="subpage-hero">
      <div className="container">
        {/* Barra de Migas de Pan (Breadcrumbs) y Volver */}
        <div className="subpage-nav-bar">
          <button onClick={handleHomeClick} className="btn-back-home" aria-label="Volver al Portal Principal">
            <ArrowLeft size={16} />
            <span>Volver al Inicio</span>
          </button>

          <nav className="subpage-breadcrumbs" aria-label="Ruta de navegación">
            <a href="#inicio" onClick={handleHomeClick} className="breadcrumb-item">
              <Home size={14} />
              <span>Inicio</span>
            </a>
            <ChevronRight size={13} className="breadcrumb-separator" />
            <span className="breadcrumb-item breadcrumb-category">{category}</span>
            <ChevronRight size={13} className="breadcrumb-separator" />
            <span className="breadcrumb-item breadcrumb-current" aria-current="page">
              {title}
            </span>
          </nav>
        </div>

        {/* Contenido Principal del Hero */}
        <div className="subpage-hero-content">
          <div className="subpage-badge">
            <span className="badge-dot"></span>
            <span>{badge}</span>
          </div>
          <span className="subpage-eyebrow">{eyebrow}</span>
          <h1 className="subpage-title">{title}</h1>
          {subtitle && <p className="subpage-subtitle">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
