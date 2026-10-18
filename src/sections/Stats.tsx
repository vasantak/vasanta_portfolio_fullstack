import { STATS } from "../data/stats";
import { CountUp } from "../components/CountUp";
import { useInView } from "../hooks/useInView";

export function Stats() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.35 });

  return (
    <section className="stats" aria-labelledby="stats-title" ref={ref}>
      <div className="wrap">
        <h2 className="sr-only" id="stats-title">
          Professional statistics
        </h2>
        <ul className="metrics">
          {STATS.map((stat, i) => (
            <li className="metric" key={stat.label}>
              <p className="metric-value" aria-hidden="true">
                {stat.value.map((part, j) =>
                  "count" in part ? (
                    <CountUp key={j} end={part.count} start={inView} delay={i * 120} />
                  ) : (
                    <span key={j} className="accent">
                      {part.text}
                    </span>
                  ),
                )}
              </p>
              <p className="metric-label">
                <span className="sr-only">{stat.spoken}</span>
                {stat.label}
              </p>
              <p className="metric-note">{stat.note}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
