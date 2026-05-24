import React from 'react';

type StickerSvgProps = { size?: number };

const StickerFrame: React.FC<React.PropsWithChildren<StickerSvgProps>> = ({ size = 100, children }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none">
    {children}
  </svg>
);

const shine = (cx: number, cy: number) => <circle cx={cx} cy={cy} r={1.25} fill="#ffffff" />;

export const TabbyCat: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M31 73 Q20 58 24 42 Q28 25 50 23 Q72 25 76 42 Q80 58 69 73 Q61 82 50 84 Q40 82 31 73Z" fill="#c8a97a" stroke="#5a3a1a" strokeWidth="3" strokeLinejoin="round" />
    <path d="M29 41 L22 19 L40 32Z" fill="#c8a97a" stroke="#5a3a1a" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M71 41 L78 19 L60 32Z" fill="#c8a97a" stroke="#5a3a1a" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M43 34 Q50 31 57 34 M41 40 Q50 37 59 40" stroke="#8a6040" strokeWidth="1.6" strokeLinecap="round" />
    <ellipse cx="38" cy="48" rx="6" ry="7" fill="#7ab87a" stroke="#2a2a2a" strokeWidth="1.5" />
    <ellipse cx="62" cy="48" rx="6" ry="7" fill="#7ab87a" stroke="#2a2a2a" strokeWidth="1.5" />
    <ellipse cx="38" cy="48" rx="3" ry="5" fill="#141414" /><ellipse cx="62" cy="48" rx="3" ry="5" fill="#141414" />
    {shine(36, 46)}{shine(60, 46)}
    <path d="M47 57 L50 60 L53 57 Q50 55 47 57Z" fill="#e07b90" stroke="#8e4259" strokeWidth="1" />
    <path d="M50 60 Q46 64 43 63 M50 60 Q54 64 57 63" stroke="#5a3a1a" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M20 57 Q32 58 44 60 M21 61 Q33 61 44 62 M80 57 Q68 58 56 60 M79 61 Q67 61 56 62" stroke="#5a3a1a" strokeWidth="1" strokeLinecap="round" />
    <path d="M36 68 Q38 72 40 74 M54 72 Q57 76 60 78 M68 72 Q83 79 80 89 Q78 95 71 90 Q64 86 68 80" stroke="#5a3a1a" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
  </StickerFrame>
);

export const ScruffyDog: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M24 72 Q18 54 25 38 Q30 25 49 22 Q70 24 76 42 Q82 61 70 75 Q60 84 48 84 Q34 83 24 72Z" fill="#b78953" stroke="#4f3117" strokeWidth="3" strokeLinejoin="round" />
    <path d="M28 43 Q16 35 18 24 Q22 15 35 23" fill="#9b6d3f" stroke="#4f3117" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M71 43 Q83 35 82 24 Q78 15 65 23" fill="#9b6d3f" stroke="#4f3117" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    <ellipse cx="39" cy="49" rx="5.8" ry="6.5" fill="#24160a" /><ellipse cx="61" cy="49" rx="5.8" ry="6.5" fill="#24160a" />
    {shine(37, 47)}{shine(59, 47)}
    <path d="M39 60 Q49 67 60 60 Q58 73 49 74 Q40 73 39 60Z" fill="#e4d4bd" stroke="#4f3117" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M44 63 Q49 66 54 63" stroke="#2f1d0f" strokeWidth="2" strokeLinecap="round" />
    <path d="M32 66 Q34 70 37 72 M66 66 Q64 70 61 72 M42 35 Q38 37 36 41 M58 35 Q62 37 64 41" stroke="#6d4826" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M26 70 Q15 76 14 87 M69 74 Q80 77 86 84" stroke="#4f3117" strokeWidth="3" strokeLinecap="round" />
  </StickerFrame>
);

export const Cheeseburger: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M18 57 Q22 35 49 31 Q77 35 82 57 Z" fill="#f4bf65" stroke="#7a441a" strokeWidth="3" strokeLinejoin="round" />
    <path d="M18 57 Q21 61 25 62 Q48 67 75 62 Q79 61 82 57 L82 64 Q79 72 49 74 Q22 72 18 64 Z" fill="#8d4b2a" stroke="#5b2d15" strokeWidth="2.6" strokeLinejoin="round" />
    <path d="M22 62 Q50 69 78 62" stroke="#53a24f" strokeWidth="3" strokeLinecap="round" />
    <path d="M20 52 Q25 54 28 58 M35 48 Q38 51 41 54 M49 45 Q52 49 55 52 M62 49 Q64 52 67 56" stroke="#fff2c4" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M26 66 Q28 72 32 74 M67 66 Q64 72 60 74 M39 60 H59" stroke="#3b2011" strokeWidth="1.4" strokeLinecap="round" />
    {shine(34, 43)}{shine(56, 40)}
  </StickerFrame>
);

export const StormCloud: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M23 63 Q14 56 18 46 Q21 36 33 37 Q34 25 48 24 Q62 23 67 36 Q79 34 82 44 Q86 55 76 62 Q66 69 51 68 Q35 69 23 63Z" fill="#7d8798" stroke="#273142" strokeWidth="3" strokeLinejoin="round" />
    <path d="M43 65 L36 84 L48 78 L45 93 L61 74 L50 78 L57 65Z" fill="#facc15" stroke="#674b08" strokeWidth="2.3" strokeLinejoin="round" />
    <path d="M31 52 Q40 50 50 52 M30 57 Q41 55 51 57 M58 50 Q65 49 72 51 M57 56 Q65 54 73 56" stroke="#4d596c" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M24 69 Q22 75 18 78 M78 67 Q82 72 84 79" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
    {shine(40, 39)}{shine(66, 42)}
  </StickerFrame>
);

export const OakLeaf: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M48 16 Q35 23 30 33 Q21 34 18 46 Q16 58 25 65 Q24 78 34 84 Q42 89 50 84 Q58 89 66 84 Q76 78 75 65 Q84 57 82 46 Q79 34 70 33 Q65 24 52 16 Q50 14 48 16Z" fill="#c96f2c" stroke="#5a2b12" strokeWidth="3" strokeLinejoin="round" />
    <path d="M50 21 Q51 47 50 86" stroke="#6b3515" strokeWidth="2.4" strokeLinecap="round" />
    <path d="M50 37 Q42 34 34 30 M50 45 Q60 42 67 37 M50 55 Q41 54 31 50 M50 63 Q60 61 69 58" stroke="#8f4b20" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M29 66 Q35 67 40 70 M61 69 Q66 69 71 72" stroke="#743917" strokeWidth="1.2" strokeLinecap="round" />
    {shine(43, 30)}
  </StickerFrame>
);

export const TinRobot: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <rect x="29" y="22" width="42" height="31" rx="8" fill="#9ca3af" stroke="#2f3640" strokeWidth="3" />
    <rect x="24" y="53" width="52" height="28" rx="8" fill="#8b949f" stroke="#2f3640" strokeWidth="3" />
    <circle cx="40" cy="37" r="5" fill="#22d3ee" stroke="#1f2937" strokeWidth="2" />
    <circle cx="60" cy="37" r="5" fill="#22d3ee" stroke="#1f2937" strokeWidth="2" />
    <path d="M47 45 H53" stroke="#1f2937" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M34 59 H66 M34 65 H66 M34 71 H66" stroke="#4b5563" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M29 26 L24 19 M71 26 L76 19" stroke="#2f3640" strokeWidth="3" strokeLinecap="round" />
    <circle cx="24" cy="19" r="2" fill="#f43f5e" /><circle cx="76" cy="19" r="2" fill="#f43f5e" />
    {shine(38, 35)}{shine(58, 35)}
  </StickerFrame>
);

export const MiniRocket: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M50 16 Q64 24 66 45 Q64 64 50 77 Q36 64 34 45 Q36 24 50 16Z" fill="#d946ef" stroke="#3b0d4f" strokeWidth="3" strokeLinejoin="round" />
    <path d="M44 52 Q50 58 56 52 Q54 66 50 69 Q46 66 44 52Z" fill="#93c5fd" stroke="#1e3a8a" strokeWidth="1.8" />
    <path d="M34 45 L23 54 L34 57Z M66 45 L77 54 L66 57Z" fill="#f97316" stroke="#7c2d12" strokeWidth="2" strokeLinejoin="round" />
    <path d="M46 77 Q50 88 54 77" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
    <path d="M40 36 H60 M42 41 H58" stroke="#f0abfc" strokeWidth="1.4" strokeLinecap="round" />
    {shine(52, 30)}
  </StickerFrame>
);

export const PalmTree: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M49 36 Q45 50 49 82 Q53 50 51 36" fill="#9a6238" stroke="#4a2b14" strokeWidth="3" strokeLinecap="round" />
    <path d="M50 28 Q35 21 22 26 Q34 30 42 36" fill="#22c55e" stroke="#14532d" strokeWidth="2.6" strokeLinejoin="round" />
    <path d="M50 28 Q64 18 80 24 Q66 31 58 36" fill="#22c55e" stroke="#14532d" strokeWidth="2.6" strokeLinejoin="round" />
    <path d="M50 28 Q38 14 30 11 Q34 25 44 33" fill="#16a34a" stroke="#14532d" strokeWidth="2.4" />
    <path d="M50 28 Q63 12 72 10 Q67 26 56 33" fill="#16a34a" stroke="#14532d" strokeWidth="2.4" />
    <path d="M35 72 Q50 69 65 72" stroke="#14532d" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="46" cy="31" r="2" fill="#7c3aed" /><circle cx="53" cy="31" r="2" fill="#7c3aed" />
    {shine(56, 20)}
  </StickerFrame>
);

export const RedPanda: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M28 72 Q18 58 23 41 Q27 27 50 23 Q72 27 77 41 Q82 58 72 72 Q62 83 50 84 Q38 82 28 72Z" fill="#c65d2d" stroke="#59250f" strokeWidth="3" />
    <path d="M31 40 Q23 29 24 20 Q32 22 38 32 M69 40 Q77 29 76 20 Q68 22 62 32" fill="#d97745" stroke="#59250f" strokeWidth="2.6" />
    <path d="M35 49 Q42 45 50 49 Q58 45 65 49 Q62 59 50 61 Q38 59 35 49Z" fill="#fff1d7" stroke="#7a3a1d" strokeWidth="1.8" />
    <circle cx="40" cy="47" r="3" fill="#1f1a17" /><circle cx="60" cy="47" r="3" fill="#1f1a17" />
    <path d="M47 54 Q50 56 53 54" stroke="#7a3a1d" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M31 66 Q36 71 40 74 M60 74 Q64 71 69 66" stroke="#8e4422" strokeWidth="1.4" strokeLinecap="round" />
    {shine(39, 46)}{shine(59, 46)}
  </StickerFrame>
);

export const Skateboard: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M18 58 Q29 46 49 44 Q68 46 82 58 Q68 71 49 72 Q31 71 18 58Z" fill="#ea580c" stroke="#431407" strokeWidth="3" strokeLinejoin="round" />
    <path d="M24 58 Q49 65 76 58" stroke="#1f2937" strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="29" cy="74" r="5.5" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
    <circle cx="69" cy="74" r="5.5" fill="#0f172a" stroke="#94a3b8" strokeWidth="2" />
    <path d="M33 57 Q41 54 49 57 M49 57 Q57 60 66 57" stroke="#fdba74" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M24 52 L28 49 M72 49 L76 52" stroke="#431407" strokeWidth="2" strokeLinecap="round" />
    {shine(40, 52)}
  </StickerFrame>
);

export const FireDragon: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M20 66 Q22 45 37 33 Q49 23 64 30 Q77 37 75 53 Q73 65 60 71 Q46 77 30 73" fill="#ef4444" stroke="#4c0d0d" strokeWidth="3" strokeLinejoin="round" />
    <path d="M37 33 Q41 18 54 15 Q51 25 56 31" fill="#f97316" stroke="#7c2d12" strokeWidth="2.4" />
    <path d="M62 58 Q74 56 83 63 Q73 67 63 66" fill="#f59e0b" stroke="#7c2d12" strokeWidth="2" />
    <path d="M29 67 Q34 62 40 58 M36 72 Q42 67 49 63 M45 74 Q52 70 59 66" stroke="#fca5a5" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M50 45 Q53 43 56 45 M50 50 Q53 48 56 50 M50 55 Q53 53 56 55" stroke="#7f1d1d" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="59" cy="43" r="2.2" fill="#111" />{shine(58, 42)}
  </StickerFrame>
);

export const Phoenix: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M27 74 Q32 55 45 43 Q54 35 63 35 Q74 36 78 47 Q81 56 73 65 Q62 76 46 79 Q35 80 27 74Z" fill="#fb923c" stroke="#7c2d12" strokeWidth="3" strokeLinejoin="round" />
    <path d="M44 44 Q38 30 45 18 Q52 28 52 40" fill="#facc15" stroke="#7c2d12" strokeWidth="2.4" />
    <path d="M52 50 Q65 47 76 55 Q65 58 57 61" fill="#ef4444" stroke="#7c2d12" strokeWidth="2.2" />
    <path d="M36 65 Q29 60 24 54 Q28 65 34 72" fill="#f97316" stroke="#7c2d12" strokeWidth="2" />
    <path d="M42 66 Q49 60 58 56 M38 71 Q47 65 57 62" stroke="#fecaca" strokeWidth="1.3" strokeLinecap="round" />
    <circle cx="57" cy="45" r="2" fill="#1f2937" />{shine(56, 44)}
  </StickerFrame>
);

export const GalaxyOrb: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <circle cx="50" cy="51" r="29" fill="#1e1b4b" stroke="#a5b4fc" strokeWidth="3" />
    <path d="M27 57 Q41 45 58 50 Q68 53 74 61" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 47 Q43 39 58 42 Q69 44 76 52" stroke="#e879f9" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M35 65 Q49 57 64 61" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="38" cy="50" r="2" fill="#ffffff" /><circle cx="60" cy="45" r="1.8" fill="#ffffff" /><circle cx="56" cy="59" r="1.5" fill="#fde68a" />
    <ellipse cx="50" cy="83" rx="15" ry="4" fill="#312e81" stroke="#818cf8" strokeWidth="1.5" />
  </StickerFrame>
);

export const WhiteTiger: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M28 73 Q18 59 24 41 Q29 26 50 22 Q71 26 76 41 Q82 59 72 73 Q62 83 50 84 Q39 83 28 73Z" fill="#f8fafc" stroke="#334155" strokeWidth="3" />
    <path d="M30 40 L23 23 L39 33 M70 40 L77 23 L61 33" fill="#e2e8f0" stroke="#334155" strokeWidth="2.4" />
    <path d="M42 34 Q46 31 50 34 M50 34 Q54 31 58 34 M37 42 Q41 45 45 46 M63 42 Q59 45 55 46 M35 53 Q42 50 47 52 M65 53 Q58 50 53 52" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
    <ellipse cx="39" cy="49" rx="5" ry="6" fill="#111827" /><ellipse cx="61" cy="49" rx="5" ry="6" fill="#111827" />
    {shine(38, 47)}{shine(60, 47)}
    <path d="M46 58 Q50 61 54 58 Q50 57 46 58Z" fill="#f9a8d4" stroke="#7f1d1d" strokeWidth="1" />
    <path d="M50 61 Q46 65 42 64 M50 61 Q54 65 58 64" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
  </StickerFrame>
);

export const GreatShark: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M15 58 Q33 40 57 40 Q75 40 86 52 Q74 64 57 66 Q36 68 15 58Z" fill="#94a3b8" stroke="#1e293b" strokeWidth="3" strokeLinejoin="round" />
    <path d="M41 41 Q46 29 55 27 Q53 38 57 42" fill="#cbd5e1" stroke="#1e293b" strokeWidth="2" />
    <path d="M64 59 L75 69 L71 56Z" fill="#64748b" stroke="#1e293b" strokeWidth="2" />
    <path d="M25 58 Q36 61 48 60" stroke="#e2e8f0" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M49 60 L53 62 L57 60 L61 62" stroke="#111827" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="58" cy="49" r="2" fill="#0f172a" />{shine(57, 48)}
    <path d="M22 67 Q28 73 36 75" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
  </StickerFrame>
);

export const CyberNinja: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M27 74 Q20 62 24 45 Q29 29 49 23 Q70 29 75 45 Q80 62 73 74 Q64 83 50 84 Q36 83 27 74Z" fill="#18181b" stroke="#701a75" strokeWidth="3" />
    <path d="M31 47 Q40 44 50 47 Q60 44 69 47 Q65 57 50 58 Q35 57 31 47Z" fill="#0ea5e9" stroke="#082f49" strokeWidth="2" />
    <path d="M28 63 Q39 62 50 63 Q61 62 72 63" stroke="#c026d3" strokeWidth="2" strokeLinecap="round" />
    <path d="M39 49 H45 M55 49 H61 M35 69 Q42 72 47 75 M53 75 Q58 72 65 69" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M20 78 L36 70 M80 78 L64 70" stroke="#a855f7" strokeWidth="2.4" strokeLinecap="round" />
    {shine(43, 48)}{shine(57, 48)}
  </StickerFrame>
);

export const GoldenWolf: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M29 73 Q20 60 24 43 Q28 26 49 22 Q69 26 75 43 Q80 60 71 73 Q61 84 49 84 Q38 84 29 73Z" fill="#eab308" stroke="#713f12" strokeWidth="3" />
    <path d="M32 41 L24 24 L40 33 M68 41 L76 24 L60 33" fill="#facc15" stroke="#713f12" strokeWidth="2.5" />
    <path d="M36 51 Q43 48 50 51 Q57 48 64 51 Q61 61 50 63 Q39 61 36 51Z" fill="#fde68a" stroke="#92400e" strokeWidth="1.8" />
    <path d="M35 35 Q42 32 49 35 M51 35 Q58 32 65 35 M31 66 Q36 71 40 74 M59 74 Q63 71 69 66" stroke="#92400e" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="41" cy="48" r="2.5" fill="#1f2937" /><circle cx="59" cy="48" r="2.5" fill="#1f2937" />
    {shine(40, 47)}{shine(58, 47)}
  </StickerFrame>
);

export const CrystalSword: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M50 14 L64 46 L50 78 L36 46 Z" fill="#93c5fd" stroke="#1d4ed8" strokeWidth="3" strokeLinejoin="round" />
    <path d="M50 20 L58 46 L50 70 L42 46 Z" fill="#dbeafe" stroke="#60a5fa" strokeWidth="1.7" />
    <path d="M33 57 H67" stroke="#6d28d9" strokeWidth="5" strokeLinecap="round" />
    <path d="M26 60 Q50 68 74 60" stroke="#4c1d95" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="50" cy="57" r="4" fill="#f0abfc" stroke="#6b21a8" strokeWidth="1.5" />
    <path d="M50 78 Q47 86 50 90 Q53 86 50 78Z" fill="#64748b" stroke="#1e293b" strokeWidth="2" />
    {shine(48, 33)}{shine(53, 40)}
  </StickerFrame>
);

export const StormEagle: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M20 61 Q31 42 49 39 Q67 42 80 60 Q66 72 49 73 Q33 73 20 61Z" fill="#475569" stroke="#0f172a" strokeWidth="3" />
    <path d="M49 39 Q47 28 52 18 Q56 28 54 39" fill="#94a3b8" stroke="#1e293b" strokeWidth="2.2" />
    <path d="M49 56 Q60 55 69 60" stroke="#cbd5e1" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M49 56 Q38 55 29 60" stroke="#cbd5e1" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M55 57 Q70 57 84 65 Q73 68 62 66" fill="#334155" stroke="#0f172a" strokeWidth="2" />
    <path d="M43 65 L35 84 L48 76 L45 90 L58 74 L51 76 L56 64" fill="#38bdf8" stroke="#0c4a6e" strokeWidth="2" />
    <circle cx="57" cy="50" r="2.2" fill="#0f172a" />{shine(56, 49)}
  </StickerFrame>
);

export const CelestialDragon: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M17 67 Q24 41 45 30 Q66 20 81 34 Q87 44 82 57 Q77 70 61 74 Q44 80 26 76" fill="#312e81" stroke="#f59e0b" strokeWidth="3" strokeLinejoin="round" />
    <path d="M44 30 Q41 19 48 12 Q54 20 54 30" fill="#4f46e5" stroke="#f59e0b" strokeWidth="2" />
    <path d="M58 58 Q70 52 83 56" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
    <path d="M31 67 Q38 62 45 58 M40 72 Q48 66 56 62 M50 76 Q58 71 66 66" stroke="#a5b4fc" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="57" cy="43" r="2" fill="#111827" />
    <circle cx="34" cy="43" r="1.5" fill="#ffffff" /><circle cx="48" cy="50" r="1.2" fill="#fde68a" />
    {shine(56, 42)}
  </StickerFrame>
);

export const AncientTitan: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M27 76 Q18 62 23 44 Q27 27 50 22 Q73 27 77 44 Q82 62 73 76 Q63 86 50 86 Q37 86 27 76Z" fill="#78716c" stroke="#292524" strokeWidth="3" />
    <path d="M35 45 Q42 39 50 43 Q58 39 65 45 Q64 58 50 60 Q36 58 35 45Z" fill="#a8a29e" stroke="#44403c" strokeWidth="2" />
    <path d="M31 64 H69 M33 69 H67 M36 74 H64" stroke="#57534e" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M39 32 L34 24 L42 26 M61 32 L66 24 L58 26" stroke="#292524" strokeWidth="2.4" strokeLinecap="round" />
    <circle cx="42" cy="48" r="2.4" fill="#f59e0b" /><circle cx="58" cy="48" r="2.4" fill="#f59e0b" />
    {shine(41, 47)}{shine(57, 47)}
  </StickerFrame>
);

export const CosmicCrown: React.FC<StickerSvgProps> = ({ size }) => (
  <StickerFrame size={size}>
    <path d="M18 68 L25 34 L40 53 L50 28 L60 53 L75 34 L82 68 Q67 76 50 76 Q33 76 18 68Z" fill="#f59e0b" stroke="#78350f" strokeWidth="3" strokeLinejoin="round" />
    <path d="M25 68 Q50 59 75 68" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" />
    <circle cx="25" cy="33" r="4" fill="#a78bfa" stroke="#4c1d95" strokeWidth="1.4" />
    <circle cx="50" cy="27" r="4.5" fill="#38bdf8" stroke="#0c4a6e" strokeWidth="1.4" />
    <circle cx="75" cy="33" r="4" fill="#f472b6" stroke="#831843" strokeWidth="1.4" />
    <path d="M30 63 Q40 58 50 62 M50 62 Q60 58 70 63" stroke="#92400e" strokeWidth="1.3" strokeLinecap="round" />
    {shine(49, 25)}{shine(23, 32)}{shine(73, 32)}
  </StickerFrame>
);

export const StickerSvgMap: Record<string, React.FC<{ size?: number }>> = {
  TabbyCat,
  ScruffyDog,
  Cheeseburger,
  StormCloud,
  OakLeaf,
  TinRobot,
  MiniRocket,
  PalmTree,
  RedPanda,
  Skateboard,
  FireDragon,
  Phoenix,
  GalaxyOrb,
  WhiteTiger,
  GreatShark,
  CyberNinja,
  GoldenWolf,
  CrystalSword,
  StormEagle,
  CelestialDragon,
  AncientTitan,
  CosmicCrown
};
