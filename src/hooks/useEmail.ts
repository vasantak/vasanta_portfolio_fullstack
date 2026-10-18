// import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
// import { EMAIL_BEHAVIOR, SITE } from "../data/site";
// import { useToast } from "../components/Toast";

// /** Id of the element that shows the address, used to select it if copying is refused. */
// export const EMAIL_TEXT_ID = "email-text";

// function selectEmailText() {
//   const el = document.getElementById(EMAIL_TEXT_ID);
//   if (!el) return;
//   try {
//     const range = document.createRange();
//     range.selectNodeContents(el);
//     const selection = window.getSelection();
//     selection?.removeAllRanges();
//     selection?.addRange(range);
//   } catch {
//     /* selection unavailable */
//   }
// }

// /**
//  * Shared behaviour for every email link on the page.
//  * Behaviour is chosen in src/data/site.ts (EMAIL_BEHAVIOR).
//  */
// export function useEmail() {
//   const toast = useToast();
//   const [busy, setBusy] = useState(false);
//   const mounted = useRef(true);

//   useEffect(() => {
//     mounted.current = true;
//     return () => {
//       mounted.current = false;
//     };
//   }, []);

//   const copy = useCallback(async (): Promise<boolean> => {
//     try {
//       await navigator.clipboard.writeText(SITE.email);
//       return true;
//     } catch {
//       selectEmailText();
//       return false;
//     }
//   }, []);

//   const report = useCallback(
//     (ok: boolean) =>
//       toast(
//         ok
//           ? "Email address copied. Paste it into your email app."
//           : "Address selected. Press Ctrl+C or Cmd+C to copy it.",
//       ),
//     [toast],
//   );

//   /** Plain email links (contact list, footer) */
//   const onEmailLinkClick = useCallback(
//     (e: MouseEvent<HTMLElement>) => {
//       if (EMAIL_BEHAVIOR === "mailto") return;
//       e.preventDefault();
//       void copy().then(report);
//     },
//     [copy, report],
//   );

//   /** "Get in Touch" button: shows a loading state while it works */
//   const onGetInTouchClick = useCallback(
//     (e: MouseEvent<HTMLElement>) => {
//       if (busy) {
//         e.preventDefault();
//         return;
//       }
//       setBusy(true);
//       const started = Date.now();
//       const finish = (after: () => void) =>
//         window.setTimeout(() => {
//           if (!mounted.current) return;
//           setBusy(false);
//           after();
//         }, Math.max(0, 900 - (Date.now() - started)));

//       if (EMAIL_BEHAVIOR === "mailto") {
//         // Let the browser follow the mailto: link; just show the loader briefly.
//         finish(() => {});
//         return;
//       }
//       e.preventDefault();
//       void copy().then((ok) => finish(() => report(ok)));
//     },
//     [busy, copy, report],
//   );

//   return { busy, copy, report, onEmailLinkClick, onGetInTouchClick };
// }

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { EMAIL_BEHAVIOR, SITE } from "../data/site";
import { useToast } from "../components/Toast";

/** Id of the element that shows the address, used to select it if copying is refused. */
export const EMAIL_TEXT_ID = "email-text";

function selectEmailText() {
  const el = document.getElementById(EMAIL_TEXT_ID);
  if (!el) return;
  try {
    const range = document.createRange();
    range.selectNodeContents(el);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);
  } catch {
    /* selection unavailable */
  }
}

function openOutlookWeb() {
  const url = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(SITE.email)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Shared behaviour for every email link on the page.
 * Behaviour is chosen in src/data/site.ts (EMAIL_BEHAVIOR).
 */
export function useEmail() {
  const toast = useToast();
  const [busy, setBusy] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const copy = useCallback(async (): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      return true;
    } catch {
      selectEmailText();
      return false;
    }
  }, []);

  const report = useCallback(
    (ok: boolean) =>
      toast(
        ok
          ? "Email address copied. Paste it into your email app."
          : "Address selected. Press Ctrl+C or Cmd+C to copy it.",
      ),
    [toast],
  );

  /** Plain email links (contact list, footer) */
  const onEmailLinkClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (EMAIL_BEHAVIOR === "mailto") return; // the browser follows the mailto: link
      e.preventDefault();
      if (EMAIL_BEHAVIOR === "outlook-web") {
        openOutlookWeb();
        return;
      }
      void copy().then(report);
    },
    [copy, report],
  );

  /** "Get in Touch" button: shows a loading state while it works */
  const onGetInTouchClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (busy) {
        e.preventDefault();
        return;
      }
      setBusy(true);
      const started = Date.now();
      const finish = (after: () => void) =>
        window.setTimeout(
          () => {
            if (!mounted.current) return;
            setBusy(false);
            after();
          },
          Math.max(0, 900 - (Date.now() - started)),
        );

      if (EMAIL_BEHAVIOR === "mailto") {
        // Let the browser follow the mailto: link; just show the loader briefly.
        finish(() => {});
        return;
      }
      e.preventDefault();
      if (EMAIL_BEHAVIOR === "outlook-web") {
        openOutlookWeb();
        finish(() => {});
        return;
      }
      void copy().then((ok) => finish(() => report(ok)));
    },
    [busy, copy, report],
  );

  return { busy, copy, report, onEmailLinkClick, onGetInTouchClick };
}
