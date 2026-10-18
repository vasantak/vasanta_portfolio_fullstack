// import { useEffect, useRef, useState } from "react";
// import { NAV_LINKS } from "../data/navigation";
// import { SITE } from "../data/site";
// import { useActiveSection } from "../hooks/useActiveSection";
// import { Brand } from "./Brand";

// export function Header() {
//   const [open, setOpen] = useState(false);
//   const toggleRef = useRef<HTMLButtonElement>(null);
//   const active = useActiveSection(NAV_LINKS.map((l) => l.id));

//   useEffect(() => {
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape" && open) {
//         setOpen(false);
//         toggleRef.current?.focus();
//       }
//     };
//     const onResize = () => {
//       if (window.innerWidth > 860) setOpen(false);
//     };
//     document.addEventListener("keydown", onKey);
//     window.addEventListener("resize", onResize);
//     return () => {
//       document.removeEventListener("keydown", onKey);
//       window.removeEventListener("resize", onResize);
//     };
//   }, [open]);

//   return (
//     <header className="site-header" id="top">
//       <div className="wrap header-inner">
//         <Brand label={`${SITE.name}, back to top`} />

//         <button
//           ref={toggleRef}
//           className="nav-toggle"
//           type="button"
//           aria-expanded={open}
//           aria-controls="site-nav"
//           aria-label="Toggle navigation menu"
//           onClick={() => setOpen((v) => !v)}
//         >
//           <svg className="icon-open" viewBox="0 0 24 24" aria-hidden="true">
//             <path d="M4 7h16M4 12h16M4 17h16" />
//           </svg>
//           <svg className="icon-close" viewBox="0 0 24 24" aria-hidden="true">
//             <path d="M6 6l12 12M18 6 6 18" />
//           </svg>
//         </button>

//         <nav className={`nav${open ? " open" : ""}`} id="site-nav" aria-label="Primary">
//           <ul>
//             {NAV_LINKS.map((link, i) => {
//               const isCta = i === NAV_LINKS.length - 1;
//               return (
//                 <li key={link.id}>
//                   <a
//                     className={isCta ? "nav-cta" : undefined}
//                     href={`#${link.id}`}
//                     aria-current={active === link.id ? "true" : undefined}
//                     onClick={() => setOpen(false)}
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               );
//             })}
//             <a className="btn btn--ghost" href="/Vasanta_Kumar_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px", float: "right" }}>
//               Download CV

//             </a>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "../data/navigation";
import { SITE } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import { Brand } from "./Brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="site-header" id="top">
      <div className="wrap header-inner">
        <Brand label={`${SITE.name}, back to top`} />

        <button
          ref={toggleRef}
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="icon-open" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg className="icon-close" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>

        <nav className={`nav${open ? " open" : ""}`} id="site-nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link, i) => {
              const isCta = i === NAV_LINKS.length - 1;
              return (
                <li key={link.id}>
                  <a
                    className={isCta ? "nav-cta" : undefined}
                    href={`#${link.id}`}
                    aria-current={active === link.id ? "true" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href={`${import.meta.env.BASE_URL}Vasanta_B_K_Resume.pdf`}
                download="Vasanta_B_K_Resume.pdf"
                className="nav-cv"
                onClick={() => setOpen(false)}
              >
                Download CV
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}