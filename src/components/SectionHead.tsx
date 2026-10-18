import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  title: string;
  titleId: string;
  children: ReactNode;
  className?: string;
}

export function SectionHead({ eyebrow, title, titleId, children, className = "" }: Props) {
  return (
    <div className={`section-head ${className} reveal`.trim()}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      <p className="lede">{children}</p>
    </div>
  );
}
