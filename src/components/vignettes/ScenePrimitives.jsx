export function MiniDocument({ label, stamp, children, className = "" }) {
  return (
    <div className={`mini-document ${className}`.trim()}>
      {stamp ? <span className="document-stamp">{stamp}</span> : null}
      <strong>{label}</strong>
      <div className="document-lines" aria-hidden="true"><span /><span /><span /></div>
      {children}
    </div>
  );
}

export function DataTable({ title, columns, rows, className = "" }) {
  return (
    <div className={`mini-table ${className}`.trim()}>
      <div className="mini-table-title">{title}</div>
      <div className="mini-table-row mini-table-head">
        {columns.map((column) => <span key={column}>{column}</span>)}
      </div>
      {rows.map((row, rowIndex) => (
        <div className="mini-table-row" key={`${title}-${rowIndex}`}>
          {row.map((cell) => <span key={cell}>{cell}</span>)}
        </div>
      ))}
    </div>
  );
}

export function DirectionMark() {
  return (
    <svg className="direction-mark" viewBox="0 0 72 16" aria-hidden="true">
      <path d="M2 8h64M59 2l7 6-7 6" pathLength="1" />
    </svg>
  );
}

export function StatusMark({ tone = "accepted", children }) {
  return <span className={`status-mark is-${tone}`}>{children}</span>;
}
