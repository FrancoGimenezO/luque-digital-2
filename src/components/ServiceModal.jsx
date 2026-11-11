import { useEffect } from 'react';
import { X, CheckCircle2, Clock, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  if (!service) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-badge-row">
            <span className="service-emoji" aria-hidden="true">{service.icon}</span>
            <span className="service-tag">{service.tag}</span>
            {service.onlineAvailable ? (
              <span className="badge-online">Trámite Online Disponible</span>
            ) : (
              <span className="badge-presencial">Trámite Presencial</span>
            )}
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar ventana de requisitos">
            <X size={20} />
          </button>
        </div>

        <h3 id="modal-title" className="modal-title">{service.title}</h3>
        <p className="modal-desc">{service.description}</p>

        <div className="modal-section">
          <h4>Requisitos y Documentación necesaria:</h4>
          <ul className="requirements-list">
            {service.requirements.map((req, idx) => (
              <li key={idx}>
                <CheckCircle2 size={16} className="req-icon" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="modal-meta-grid">
          <div className="modal-meta-item">
            <Clock size={16} />
            <div>
              <strong>Horario de atención</strong>
              <span>{service.schedule}</span>
            </div>
          </div>
          <div className="modal-meta-item">
            <MapPin size={16} />
            <div>
              <strong>Lugar de gestión</strong>
              <span>{service.location}</span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-outline-dark" onClick={onClose}>
            Cerrar
          </button>
          <a
            className="btn btn-primary-dark"
            href="https://www.luque.gov.py/gestiones-municipales/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Ir al trámite oficial</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
