/** Inner SVG markup (viewBox 0 0 400 250) for the abstract project thumbnails. Not screenshots. */
export const ILLUSTRATIONS = {
  startHub: `
    <rect class="il-fill il-line" x="40" y="36" width="130" height="72" rx="8"/>
    <rect class="il-fill il-line" x="186" y="36" width="84" height="72" rx="8"/>
    <rect class="il-orfill il-or" x="286" y="36" width="74" height="72" rx="8"/>
    <path class="il-line" d="M56 58h60M56 74h96M56 90h40"/>
    <rect class="il-fill il-line" x="40" y="124" width="96" height="90" rx="8"/>
    <rect class="il-fill il-line" x="152" y="124" width="118" height="40" rx="8"/>
    <rect class="il-fill il-line" x="152" y="174" width="118" height="40" rx="8"/>
    <ellipse class="il-orfill il-or" cx="323" cy="150" rx="32" ry="10"/>
    <path class="il-or" d="M291 150v44c0 6 14 10 32 10s32-4 32-10v-44"/>
    <path class="il-or" d="M291 172c0 6 14 10 32 10s32-4 32-10"/>
    <path class="il-line il-dash" d="M270 144h18M270 194h18"/>
    <circle class="il-dot" cx="100" cy="169" r="4"/>`,
  helloSpoke: `
    <circle class="il-line il-dash" cx="200" cy="112" r="92"/>
    <circle class="il-line" cx="200" cy="112" r="62"/>
    <circle class="il-fill il-line" cx="200" cy="112" r="32"/>
    <circle class="il-dot" cx="200" cy="112" r="7"/>
    <circle class="il-orfill il-or" cx="262" cy="112" r="9"/>
    <circle class="il-fill il-line" cx="146" cy="66" r="9"/>
    <circle class="il-fill il-line" cx="150" cy="170" r="9"/>
    <circle class="il-orfill il-or" cx="292" cy="40" r="6"/>
    <path class="il-line" d="M90 218v-16M110 218v-28M130 218v-10M150 218v-34M170 218v-22M190 218v-40M210 218v-18M230 218v-30M250 218v-12M270 218v-26M290 218v-16M310 218v-8"/>`,
  cya: `
    <rect class="il-fill il-line" x="150" y="20" width="100" height="210" rx="18"/>
    <path class="il-line" d="M184 32h32"/>
    <path class="il-or" d="M166 74v-14h14M234 74v-14h-14M166 150v14h14M234 150v14h-14"/>
    <rect class="il-line" x="176" y="84" width="20" height="20" rx="2"/>
    <rect class="il-line" x="204" y="84" width="20" height="20" rx="2"/>
    <rect class="il-line" x="176" y="112" width="20" height="20" rx="2"/>
    <rect class="il-orfill" x="206" y="114" width="6" height="6"/>
    <rect class="il-orfill" x="216" y="124" width="6" height="6"/>
    <path class="il-line" d="M166 190h68M166 204h44"/>
    <path class="il-line" d="M60 92v50M70 92v50M78 92v50M90 92v50M98 92v50M108 92v50"/>
    <path class="il-or il-orfill" d="M310 96c-13 0-22 9-22 21 0 15 22 36 22 36s22-21 22-36c0-12-9-21-22-21z"/>
    <circle class="il-dot" cx="310" cy="117" r="6"/>
    <path class="il-line il-dash" d="M120 118h26M254 118h30"/>`,
  mentorz: `
    <circle class="il-fill il-line" cx="96" cy="86" r="30"/>
    <circle class="il-dot" cx="96" cy="76" r="9"/>
    <path class="il-line" d="M78 100c4-9 32-9 36 0"/>
    <circle class="il-orfill il-or" cx="304" cy="86" r="30"/>
    <circle class="il-dot" cx="304" cy="76" r="9"/>
    <path class="il-or" d="M286 100c4-9 32-9 36 0"/>
    <path class="il-line il-dash" d="M130 86h140"/>
    <circle class="il-dot" cx="200" cy="86" r="6"/>
    <rect class="il-fill il-line" x="80" y="146" width="240" height="84" rx="10"/>
    <path class="il-line" d="M80 170h240M140 146v84M200 146v84M260 146v84M80 200h240"/>
    <rect class="il-orfill il-or" x="144" y="174" width="52" height="22" rx="4"/>
    <rect class="il-fill il-line" x="204" y="204" width="52" height="22" rx="4"/>`,
} as const;

export type IllustrationName = keyof typeof ILLUSTRATIONS;
