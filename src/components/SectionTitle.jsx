export default function SectionTitle({ eyebrow, title, description, action }) {
  return (
    <div className="section-title">
      <div className="section-title-content">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {action && (
        <a className="text-link action-link" href={action.href} target={action.target || '_self'} rel={action.rel || undefined}>
          <span>{action.label}</span>
          <span className="arrow-icon">↗</span>
        </a>
      )}
    </div>
  );
}
