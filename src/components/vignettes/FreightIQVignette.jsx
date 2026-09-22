import { DataTable, DirectionMark, MiniDocument, StatusMark } from "./ScenePrimitives";

const invoice = (
  <MiniDocument label="Northline Demo Freight" stamp="SAMPLE" className="invoice-sheet">
    <dl className="invoice-facts"><div><dt>Invoice</dt><dd>INV-SAMPLE-042</dd></div><div><dt>Route</dt><dd>TPA → ATL</dd></div></dl>
  </MiniDocument>
);

const scenes = [
  <div className="vignette-scene freight-upload" key="upload">
    <div className="vignette-enter">{invoice}</div><DirectionMark />
    <div className="upload-surface vignette-enter is-delayed"><span className="scene-kicker">FastAPI upload</span><strong>freight_invoice_sample.pdf</strong><StatusMark>accepted</StatusMark></div>
  </div>,
  <div className="vignette-scene freight-queue" key="queue">
    <div className="storage-roles">
      <div className="role-card vignette-enter"><span>MinIO</span><strong>original PDF</strong><small>object storage</small></div>
      <div className="role-card vignette-enter is-delayed"><span>Redis → Celery</span><strong>brokered work</strong><small>transient delivery</small></div>
      <div className="role-card is-durable vignette-enter is-late"><span>PostgreSQL</span><strong>job: queued</strong><small>durable source of truth</small></div>
    </div>
  </div>,
  <div className="vignette-scene freight-extract" key="extract">
    <div className="invoice-highlight vignette-enter">{invoice}<i className="field-box is-vendor" /><i className="field-box is-total" /></div>
    <DirectionMark />
    <div className="extraction-boundary vignette-enter is-delayed">
      <span className="scene-kicker">Provider-dependent extraction</span>
      <dl><div><dt>vendor</dt><dd>Northline Demo Freight</dd></div><div><dt>items</dt><dd>line haul · fuel</dd></div><div><dt>subtotal</dt><dd>420</dd></div><div><dt>total</dt><dd>440</dd></div></dl>
    </div>
  </div>,
  <div className="vignette-scene freight-audit" key="audit">
    <DataTable title="Schema-validated fields" columns={["field", "value"]} rows={[["subtotal", "420"], ["fees", "35"], ["total", "440"]]} className="vignette-enter" />
    <DirectionMark />
    <div className="audit-surface vignette-enter is-delayed"><span className="scene-kicker">Deterministic audit</span><strong>420 + 35 ≠ 440</strong><StatusMark tone="rejected">subtotal discrepancy</StatusMark><small>calculated by application code</small></div>
  </div>,
  <div className="vignette-scene freight-review" key="review">
    <div className="review-record vignette-enter"><header><div><span>Operator review</span><strong>INV-SAMPLE-042</strong></div><StatusMark tone="rejected">flagged</StatusMark></header><dl><div><dt>Vendor</dt><dd>Northline Demo Freight</dd></div><div><dt>Finding</dt><dd>Subtotal discrepancy</dd></div><div><dt>Job state</dt><dd>PostgreSQL-backed</dd></div></dl></div>
  </div>,
];

export default function FreightIQVignette({ stage }) {
  return scenes[stage];
}
