import { SITE } from "../data/site";

export function Brand({ label }: { label: string }) {
  return (
    <a className="brand" href="#top" aria-label={label}>
      <span className="brand-mark" aria-hidden="true">
        VK
      </span>
      <span>{SITE.name}</span>
    </a>
  );
}
