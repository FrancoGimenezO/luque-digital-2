import { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowUpRight, FileText } from 'lucide-react';
import { services } from '../data/content.js';

const popularKeywords = [
  'Registro de conducir',
  'Habilitación de vehículos',
  'Ordenanza 05/2024',
  'Manual de funciones',
  'Organigrama',
  'PATIP',
  'Ley 5189/14',
  'Ley 7089/23',
  'FONACIDE',
];

const directDocuments = [
  { title: 'Manual de Funciones', href: 'https://www.luque.gov.py/manual-de-funciones/', type: 'Manual institucional' },
  { title: 'Organigrama Municipal', href: 'https://www.luque.gov.py/organigrama-municipal/', type: 'Estructura directiva' },
  { title: 'Ordenanza de Tránsito 05/2024', href: 'https://www.luque.gov.py/ordenanza-de-transito/', type: 'Normativa vial' },
  { title: 'Consejo del FONACIDE', href: 'https://www.luque.gov.py/consejo-de-fonacide/', type: 'Transparencia y Fondos' },
  { title: 'Presupuesto General', href: 'https://www.luque.gov.py/presupuesto-general/', type: 'Finanzas públicas' },
  { title: 'Denuncias O Consultas', href: 'https://www.luque.gov.py/formulario-transparencia/', type: 'Transparencia y Ciudadanía' },
  { title: 'Normativas Legales Vigentes', href: 'https://www.luque.gov.py/normativas-legales-vigentes/', type: 'Marco legal municipal' },
  { title: 'PATIP - Matriz de Seguimiento', href: 'https://www.luque.gov.py/matriz-de-seguimiento-cumplimiento-del-patip/', type: 'Plan Anual de Transparencia' },
  { title: 'Ley 5189/14 - Salarios de Funcionarios', href: 'https://www.luque.gov.py/salarios-de-funcionarios/', type: 'Nómina y Remuneraciones' },
  { title: 'Ley 5282/14 - Libre Acceso a la Información', href: 'https://www.luque.gov.py/ley-5282-14/', type: 'Información Pública' },
  { title: 'LEY 7089/23 - Conflicto de Intereses', href: 'https://www.luque.gov.py/ley-7089-2023/', type: 'Régimen de integridad' },
];

export default function SearchModal({ isOpen, onClose, onSelectService }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSearchTerm('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanTerm = searchTerm.trim().toLowerCase();

  const matchingServices = cleanTerm
    ? services.filter((s) => (s.title + ' ' + s.description + ' ' + s.tag).toLowerCase().includes(cleanTerm))
    : [];

  const matchingDocs = cleanTerm
    ? directDocuments.filter((d) => (d.title + ' ' + d.type).toLowerCase().includes(cleanTerm))
    : [];

  return (
    <div
      className="search-modal active"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Buscador del portal municipal"
    >
      <button
        className="search-close"
        onClick={onClose}
        aria-label="Cerrar buscador"
      >
        <X size={28} />
      </button>

      <div className="search-box" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-wrap">
          <Search size={24} className="search-modal-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="¿Qué trámite, ordenanza o documento buscás?..."
            aria-label="Campo de búsqueda"
          />
        </div>

        {/* Términos populares y atajos */}
        {!cleanTerm && (
          <div className="search-keywords">
            <span>Búsquedas frecuentes:</span>
            {popularKeywords.map((kw) => (
              <button
                key={kw}
                className="kw-tag-btn"
                onClick={() => setSearchTerm(kw)}
              >
                {kw}
              </button>
            ))}
          </div>
        )}

        {/* Resultados en tiempo real si el usuario escribe */}
        {cleanTerm && (
          <div className="search-live-results">
            {matchingDocs.length > 0 && (
              <div className="results-group">
                <span className="results-group-title">Documentos y Normativas Oficiales</span>
                {matchingDocs.map((doc) => (
                  <a
                    key={doc.title}
                    href={doc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="live-result-item"
                  >
                    <div className="live-result-info">
                      <FileText size={16} className="live-icon" />
                      <div>
                        <b>{doc.title}</b>
                        <small>{doc.type}</small>
                      </div>
                    </div>
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            )}

            {matchingServices.length > 0 && (
              <div className="results-group">
                <span className="results-group-title">Trámites y Servicios Ciudadanos</span>
                {matchingServices.map((srv) => (
                  <div
                    key={srv.id}
                    className="live-result-item clickable"
                    onClick={() => {
                      onClose();
                      onSelectService(srv);
                    }}
                  >
                    <div className="live-result-info">
                      <span className="live-emoji">{srv.icon}</span>
                      <div>
                        <b>{srv.title}</b>
                        <small>{srv.tag} · {srv.schedule}</small>
                      </div>
                    </div>
                    <span className="btn-view-pill">Ver requisitos</span>
                  </div>
                ))}
              </div>
            )}

            {matchingDocs.length === 0 && matchingServices.length === 0 && (
              <div className="no-live-results">
                <p>No se encontraron resultados para <strong>"{searchTerm}"</strong>.</p>
                <small>Probá con términos como "licencia", "registro", "ordenanza" o "tributos".</small>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
