import { DirectionMark, MiniDocument, StatusMark } from "./ScenePrimitives";

function VectorMarks({ label }) {
  return <div className="vector-card"><span>{label}</span><div aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div><small>complete input</small></div>;
}

const scenes = [
  <div className="vignette-scene apply-parse" key="parse">
    <MiniDocument label="Fictional résumé" stamp="SAMPLE" className="vignette-enter"><div className="parsed-blocks"><span>skills</span><span>experience</span><span>projects</span></div></MiniDocument>
    <MiniDocument label="Generic role" className="vignette-enter is-delayed"><div className="parsed-blocks"><span>responsibilities</span><span>requirements</span></div></MiniDocument>
  </div>,
  <div className="vignette-scene apply-represent" key="represent">
    <VectorMarks label="Résumé representation" /><DirectionMark /><VectorMarks label="Role representation" />
  </div>,
  <div className="vignette-scene apply-compare" key="compare">
    <VectorMarks label="Whole résumé" />
    <div className="compare-core vignette-enter is-delayed"><span>PostgreSQL · pgvector</span><strong>cosine comparison</strong><small>one complete-input embedding each</small></div>
    <VectorMarks label="Whole role" />
  </div>,
  <div className="vignette-scene apply-score" key="score">
    <div className="signal-list vignette-enter"><span>semantic</span><span>skills</span><span>keywords</span><span>experience</span></div>
    <DirectionMark />
    <div className="hybrid-result vignette-enter is-delayed"><span className="scene-kicker">Hybrid match</span><strong>Explainable components</strong><small>not ATS accuracy</small></div>
  </div>,
  <div className="vignette-scene apply-explain" key="explain">
    <div className="evidence-columns vignette-enter"><section><span>Matched evidence</span><strong>Python services</strong><strong>PostgreSQL</strong><StatusMark>supported</StatusMark></section><section><span>Missing gaps</span><strong>role-specific gap</strong><strong>review before drafting</strong><StatusMark tone="neutral">explicit</StatusMark></section></div>
    <div className="provider-note vignette-enter is-delayed"><span>Optional generation</span><strong>Provider-dependent · grounded in supplied résumé</strong></div>
  </div>,
];

export default function ApplyPilotVignette({ stage }) {
  return scenes[stage];
}
