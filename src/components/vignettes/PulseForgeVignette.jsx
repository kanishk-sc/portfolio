import { DataTable, DirectionMark, MiniDocument, StatusMark } from "./ScenePrimitives";

const scenes = [
  <div className="vignette-scene pulseforge-ingest" key="ingest">
    <div className="event-stack vignette-enter">
      <MiniDocument label="order.created · v1" className="event-envelope" />
      <MiniDocument label="shipment.created · v1" className="event-envelope is-secondary" />
      <MiniDocument label="payment.processed · v1" className="event-envelope is-tertiary" />
    </div>
    <DirectionMark />
    <div className="partition-surface vignette-enter is-delayed">
      <span className="scene-kicker">Kafka · commerce.events.v1</span>
      <div className="partition-lane"><i />partition 0</div>
      <div className="partition-lane"><i />partition 1</div>
      <div className="partition-lane"><i />partition 2</div>
    </div>
  </div>,
  <div className="vignette-scene pulseforge-process" key="process">
    <MiniDocument label="order.created · v1" className="vignette-enter event-envelope" />
    <DirectionMark />
    <div className="process-surface vignette-enter is-delayed">
      <span className="scene-kicker">Spark validation</span>
      <div className="validation-line"><span>schema</span><StatusMark>accepted</StatusMark></div>
      <div className="validation-line"><span>event id</span><StatusMark>unique</StatusMark></div>
    </div>
    <div className="rejection-slip vignette-enter is-late">
      <StatusMark tone="rejected">rejected</StatusMark>
      <span>reason</span>
      <strong>missing order_id</strong>
    </div>
  </div>,
  <div className="vignette-scene pulseforge-persist" key="persist">
    <div className="accepted-record vignette-enter"><StatusMark>accepted record</StatusMark><code>evt_sample_014</code></div>
    <DirectionMark />
    <div className="storage-pair vignette-enter is-delayed">
      <DataTable title="PostgreSQL · structured state" columns={["event", "status"]} rows={[["order", "created"], ["payment", "ok"]]} />
      <div className="object-store"><span className="scene-kicker">MinIO · object evidence</span><div>raw/v1</div><div>cleaned/v1</div></div>
    </div>
  </div>,
  <div className="vignette-scene pulseforge-model" key="model">
    <div className="orchestration-strip vignette-enter">
      <span>Airflow</span><strong>verify warehouse</strong><i>→</i><strong>dbt build</strong><i>→</i><strong>quality summary</strong>
    </div>
    <DataTable
      title="dbt · mart_operations_health_hourly"
      columns={["hour", "orders", "quality"]}
      rows={[["09:00", "sample rows", "pass"], ["10:00", "sample rows", "pass"]]}
      className="modeled-table vignette-enter is-delayed"
    />
  </div>,
  <div className="vignette-scene pulseforge-serve" key="serve">
    <div className="operations-view vignette-enter">
      <div className="operations-heading"><span>Synthetic snapshot</span><strong>Operations view</strong></div>
      <div className="mini-chart" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      <div className="operations-facts">
        <div><span>Pipeline</span><StatusMark>successful build</StatusMark></div>
        <div><span>Data quality</span><StatusMark>tests passed</StatusMark></div>
      </div>
    </div>
  </div>,
];

export default function PulseForgeVignette({ stage }) {
  return scenes[stage];
}
