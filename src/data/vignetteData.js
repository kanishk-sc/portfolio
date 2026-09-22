export const VIGNETTE_DISCLOSURE = "Illustrative demo using synthetic data · not a live service";
export const VIGNETTE_FRAME_DURATION_MS = 1650;

export const vignetteData = {
  pulseforge: {
    title: "PulseForge synthetic event demonstration",
    caption: "Synthetic events → validated operational view",
    descriptions: [
      "Three fictional versioned event envelopes enter Kafka partition lanes; one is labeled order.created version one.",
      "A synthetic event enters Spark schema validation. One record is accepted and a malformed record is rejected with a visible missing order ID reason.",
      "Accepted structured data is written to PostgreSQL while MinIO separately retains raw and cleaned object evidence.",
      "dbt turns accepted records into a compact operational-health table while Airflow coordinates warehouse verification, build and quality summary steps.",
      "A synthetic local snapshot shows a restrained operations view with modeled order activity, successful pipeline state and a data-quality result.",
    ],
  },
  freightiq: {
    title: "FreightIQ sample invoice demonstration",
    caption: "Sample invoice → structured record → deterministic finding",
    descriptions: [
      "A fictional freight invoice labeled SAMPLE enters the upload surface.",
      "MinIO stores the original document, Redis brokers work to Celery, and PostgreSQL separately owns durable queued job state.",
      "Provider-dependent extraction highlights fictional invoice fields and produces neutral vendor, items, subtotal and total fields.",
      "A separate deterministic audit checks the extracted arithmetic and finds that 420 plus 35 does not equal the stated total of 440.",
      "A compact operator review record marks the fictional subtotal discrepancy as flagged.",
    ],
  },
  applypilot: {
    title: "ApplyPilot résumé-to-role demonstration",
    caption: "Résumé + role → explainable evidence and gaps",
    descriptions: [
      "A fictional résumé and generic role description enter side by side and reveal parsed text blocks without personal information.",
      "Each complete input becomes one abstract embedding representation without fabricated vector values.",
      "PostgreSQL with pgvector compares the complete résumé representation with the complete job representation using cosine similarity.",
      "Supported semantic, skills, keyword and experience signals converge into a hybrid match without presenting an ATS accuracy score.",
      "The result separates matched evidence from missing gaps and identifies optional grounded generation as provider-dependent.",
    ],
  },
};
