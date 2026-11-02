window.BASICS = {
  consts: [
    ["Avogadrova konštanta", "N<sub>A</sub> = 6,022 · 10<sup>23</sup> mol<sup>-1</sup>"],
    ["Molárny objem plynu (normálne podmienky)", "V<sub>m</sub> = 22,4 l/mol = 22,4 dm<sup>3</sup>/mol"],
    ["Atómová hmotnostná konštanta", "u = 1,66 · 10<sup>-27</sup> kg = 1,66 · 10<sup>-24</sup> g"],
    ["Plynová konštanta (v teste)", "R = 8,32 J · K<sup>-1</sup> · mol<sup>-1</sup>"],
    ["Teplota v kelvinoch", "T = t (°C) + 273 &nbsp;(25 °C = 298 K, 37 °C = 310 K)"],
    ["Iónový súčin vody", "pH + pOH = 14"]
  ],
  units: [
    ["1 l = 1 dm<sup>3</sup> = 1000 ml", "1 ml = 1 cm<sup>3</sup>"],
    ["1 g = 1000 mg = 10<sup>6</sup> μg", "1 kg = 1000 g, 1 t = 1000 kg"],
    ["1 mol = 1000 mmol = 10<sup>6</sup> μmol", "mol/l = mol · dm<sup>-3</sup> = mmol/ml"],
    ["hustota g/cm<sup>3</sup> = g/ml = kg/l", "w = 15 % → w = 0,15"]
  ],
  masses: "H 1 · C 12 · N 14 · O 16 · Na 23 · Mg 24 · Al 27 · P 31 · S 32 · Cl 35,5 · K 39 · Ca 40 · Fe 56 · Cu 63,5 · Zn 65 · Br 80 · Ag 108 · Ba 137 · Pb 207",
  core: [
    ["Látkové množstvo", "n = m / M"],
    ["Počet častíc", "N = n · N<sub>A</sub>"],
    ["Plyn za normálnych podmienok", "n = V / 22,4"],
    ["Molárna koncentrácia", "c = n / V"],
    ["Hmotnostný zlomok", "w = m<sub>látky</sub> / m<sub>roztoku</sub>"],
    ["Hustota", "ρ = m / V"],
    ["Prepočet w → c", "c = (1000 · ρ · w) / M"],
    ["pH silnej kyseliny", "pH = −log [H<sub>3</sub>O<sup>+</sup>]"],
    ["Osmotický tlak", "π = i · c · R · T"]
  ]
};

window.GUIDES = {
  mol: {
    t: "Látkové množstvo, hmotnosť, počet častíc", s: "che",
    when: "V zadaní je hmotnosť, moly alebo počet molekúl/atómov a máš prepočítať jedno na druhé. Alebo „hmotnosť jednej molekuly/atómu“.",
    f: ["n = m / M", "N = n · N<sub>A</sub>", "m(1 častice) = M / N<sub>A</sub> &nbsp;[g]"],
    steps: [
      "Spočítaj molárnu hmotnosť M zo vzorca (súčet A<sub>r</sub> všetkých atómov).",
      "Ak máš hmotnosť a chceš moly: n = m / M.",
      "Ak chceš počet častíc: N = n · N<sub>A</sub>.",
      "Hmotnosť jednej molekuly: M / 6,022 · 10<sup>23</sup> (vyjde v gramoch).",
      "Nakoniec skontroluj jednotky v možnostiach (g ↔ kg, mol ↔ mmol). Často sú správne dve možnosti, ktoré sú to isté v iných jednotkách."
    ],
    ex: { n: 1097, q: "Aké látkové množstvo predstavuje 100 g vody?", sol: [
      "M(H<sub>2</sub>O) = 2 · 1 + 16 = 18 g/mol",
      "n = 100 / 18 = 5,56 mol",
      "5,56 mol = 5,56 · 10<sup>3</sup> mmol → správne A aj B"
    ]},
    pit: ["Hmotnosť molekuly v kg je 1000× menšie číslo ako v g (10<sup>-27</sup> kg = 10<sup>-24</sup> g).", "Zápis 30 · 10<sup>23</sup> = 3 · 10<sup>24</sup>. Porovnávaj hodnotu, nie tvar."]
  },
  prvok: {
    t: "Obsah prvku v zlúčenine, hmotnostné %", s: "che",
    when: "„Koľko kyslíka/dusíka obsahuje X mg látky“ alebo „hmotnostné percentá prvkov v zlúčenine“.",
    f: ["w(prvok) = (počet atómov · A<sub>r</sub>) / M<sub>r</sub>", "m(prvok) = m(látka) · w(prvok)"],
    steps: [
      "Napíš vzorec látky a spočítaj, koľko atómov daného prvku obsahuje (pozor na zátvorky: Ca(NO<sub>2</sub>)<sub>2</sub> má 4 O).",
      "Hmotnosť prvku v 1 mole = počet atómov · A<sub>r</sub>.",
      "Podiel w = (hmotnosť prvku) / M<sub>r</sub> zlúčeniny.",
      "Vynásob hmotnosťou vzorky. Jednotka zostáva rovnaká (mg → mg)."
    ],
    ex: { n: 1100, q: "Koľko kyslíka obsahuje 26,4 mg dusitanu vápenatého (M<sub>r</sub> = 132)?", sol: [
      "Dusitan vápenatý = Ca(NO<sub>2</sub>)<sub>2</sub> → 4 atómy O → 4 · 16 = 64",
      "w(O) = 64 / 132",
      "m(O) = 26,4 · 64 / 132 = 12,8 mg → A"
    ]},
    pit: ["Názvy: dusitan = NO<sub>2</sub><sup>−</sup>, dusičnan = NO<sub>3</sub><sup>−</sup>, uhličitan = CO<sub>3</sub><sup>2−</sup>, hydrogénfosforečnan amónny = (NH<sub>4</sub>)<sub>2</sub>HPO<sub>4</sub> (9 H).", "Pyrimidín C<sub>4</sub>H<sub>4</sub>N<sub>2</sub> a purín C<sub>5</sub>H<sub>4</sub>N<sub>4</sub>: počet N si zapamätaj (2 a 4). Lyzín má 2 N, arginín 4 N."]
  },
  plyn: {
    t: "Plyny za normálnych podmienok", s: "che",
    when: "Objem plynu v litroch alebo ml a slová „za normálnych podmienok“.",
    f: ["n = V / 22,4 &nbsp;(V v litroch)", "V = n · 22,4", "22,4 ml = 1 mmol"],
    steps: [
      "Objem prepočítaj na moly: n = V / 22,4. Ak je objem v ml, vyjdú mmol.",
      "Moly prepočítaj na hmotnosť: m = n · M.",
      "Pri dvojatómových plynoch (N<sub>2</sub>, O<sub>2</sub>, F<sub>2</sub>, Cl<sub>2</sub>, H<sub>2</sub>) ber M molekuly: N<sub>2</sub> = 28, F<sub>2</sub> = 38."
    ],
    ex: { n: 1109, q: "22,4 ml dusíka má za normálnych podmienok hmotnosť:", sol: [
      "22,4 ml = 1 mmol",
      "M(N<sub>2</sub>) = 28 g/mol → 1 mmol = 28 mg → C"
    ]},
    pit: ["Dusík a fluór sú molekuly N<sub>2</sub> a F<sub>2</sub>, nie atómy.", "Trik: ml / 22,4 = mmol, l / 22,4 = mol."]
  },
  teplo: {
    t: "Termochémia: reakčné teplo", s: "che",
    when: "ΔH alebo „uvoľní sa X kJ · mol<sup>-1</sup>“ a máš vypočítať teplo pre dané množstvo látky.",
    f: ["Q = n · ΔH", "n = Q / ΔH"],
    steps: [
      "ΔH platí pre 1 mol (pre koeficienty v rovnici).",
      "Množstvo látky prepočítaj na moly (z hmotnosti cez M, z objemu cez 22,4).",
      "Vynásob: Q = n · ΔH. Výsledok je v kJ (nie kJ/mol!).",
      "Ak hľadáš ΔH: ΔH = Q / n a jednotka je kJ · mol<sup>-1</sup>."
    ],
    ex: { n: 1115, q: "Teplo na výrobu 100 kg CaO z CaCO<sub>3</sub>, ΔH = +178 kJ/mol", sol: [
      "n(CaO) = 100 000 g / 56 = 1786 mol",
      "Q = 1786 · 178 = 317 860 kJ = 317,86 MJ → C"
    ]},
    pit: ["Celkové teplo má jednotku kJ alebo MJ, molárne reakčné teplo kJ · mol<sup>-1</sup>. Možnosti sa často líšia práve jednotkou.", "1 MJ = 1000 kJ."]
  },
  rychlost: {
    t: "Rýchlosť reakcie pri zmene koncentrácie", s: "che",
    when: "Daný vzťah v = k · c<sub>A</sub><sup>a</sup> · c<sub>B</sub><sup>b</sup> a koncentrácie sa zmenia x-krát.",
    f: ["nová rýchlosť = (zmena A)<sup>a</sup> · (zmena B)<sup>b</sup>"],
    steps: [
      "Každú zmenu koncentrácie umocni na exponent danej látky.",
      "Výsledky vynásob.",
      "Zmenšenie na polovicu = ½, zväčšenie dvojnásobne = 2."
    ],
    ex: { n: 1120, q: "v = k · c<sub>A</sub><sup>2</sup> · c<sub>B</sub><sup>3</sup>; A zvýšime 2×, B 3×", sol: [
      "2<sup>2</sup> · 3<sup>3</sup> = 4 · 27 = 108 → rýchlosť sa zvýši 108× → D"
    ]},
    pit: ["Nesčítavaj, násob.", "Exponent pri látke = jej koeficient v rovnici (pri jednoduchých reakciách)."]
  },
  rovnica: {
    t: "Výpočty z chemickej rovnice", s: "che",
    when: "Reagujú dve látky, máš zistiť, koľko vznikne produktu, koľko treba reaktantu alebo čo je v nadbytku.",
    f: ["n(A) : n(B) = koeficient A : koeficient B", "výťažok: n<sub>skutočné</sub> = n<sub>teoretické</sub> · η"],
    steps: [
      "Napíš a vyčísli rovnicu (horenie uhľovodíka: C<sub>x</sub>H<sub>y</sub> + O<sub>2</sub> → x CO<sub>2</sub> + y/2 H<sub>2</sub>O).",
      "Všetko, čo je zadané, prepočítaj na moly.",
      "Pomer mólov = pomer koeficientov. Ak máš dva reaktanty, zisti, ktorý sa minie skôr (je v nedostatku), a rátaj z neho.",
      "Výsledné moly prepočítaj na to, čo sa pýtajú (g, l, mol).",
      "Ak je výťažok menší ako 100 %, vynásob ním."
    ],
    ex: { n: 1148, q: "5 g K + 6 g HCl → KCl. Koľko KCl vznikne a čo je v nadbytku?", sol: [
      "2 K + 2 HCl → 2 KCl + H<sub>2</sub> (pomer 1 : 1)",
      "n(K) = 5 / 39 = 0,128 mol; n(HCl) = 6 / 36,5 = 0,164 mol → HCl je v nadbytku",
      "n(KCl) = 0,128 mol → m = 0,128 · 74,5 = 9,5 g",
      "Nezreagovalo HCl: (0,164 − 0,128) · 36,5 = 1,3 g → A, B, C"
    ]},
    pit: ["Pri spaľovaní 1 mol pentánu C<sub>5</sub>H<sub>12</sub> treba 8 mol O<sub>2</sub>. Kyslík = (x + y/4) molov.", "Vzduch obsahuje 21 % kyslíka: V<sub>vzduch</sub> = V<sub>O2</sub> / 0,21.", "Pri reakciách plynov sa pomer mólov = pomer objemov (7 l C<sub>2</sub>H<sub>2</sub> → 17,5 l O<sub>2</sub>)."]
  },
  w: {
    t: "Hmotnostný zlomok a príprava roztoku", s: "che",
    when: "Percentá (%) alebo w, máš pripraviť roztok, zistiť koľko látky/vody treba alebo aký je zlomok.",
    f: ["w = m<sub>látky</sub> / m<sub>roztoku</sub>", "m<sub>látky</sub> = w · m<sub>roztoku</sub>", "m<sub>vody</sub> = m<sub>roztoku</sub> − m<sub>látky</sub>"],
    steps: [
      "Zisti, koľko čistej látky musí byť v hotovom roztoku: m = w · m<sub>roztoku</sub>.",
      "Ak berieš látku z koncentrovanejšieho roztoku (napr. 75 %), vydeľ jeho w: m<sub>konc</sub> = m<sub>látky</sub> / w<sub>konc</sub>.",
      "Ak berieš hydrát (napr. ZnSO<sub>4</sub> · 5 H<sub>2</sub>O), prepočítaj cez pomer M<sub>hydrátu</sub> / M<sub>bezvodej soli</sub>.",
      "Vodu dopočítaj ako rozdiel."
    ],
    ex: { n: 1130, q: "Koľko gramov 75 % uhličitanu sodného treba na 800 g 5 % roztoku?", sol: [
      "Čistej látky treba: 0,05 · 800 = 40 g",
      "Zo 75 % látky: 40 / 0,75 = 53,33 g → D"
    ]},
    pit: ["Hmotnostný zlomok je číslo (0,116), hmotnostné percento je to isté × 100 (11,6 %). Často sú správne oba.", "Hydrát: 90 g ZnSO<sub>4</sub> zodpovedá 90 · 251,5 / 161,4 = 140,2 g ZnSO<sub>4</sub> · 5 H<sub>2</sub>O."]
  },
  riedenie: {
    t: "Riedenie, zmiešavanie, odparovanie", s: "che",
    when: "K roztoku sa pridá voda, odparí sa voda, zmiešajú sa dva roztoky alebo vykryštalizuje soľ.",
    f: ["m<sub>látky</sub> sa nemení: w<sub>1</sub> · m<sub>1</sub> = w<sub>2</sub> · m<sub>2</sub>", "pre koncentrácie: c<sub>1</sub> · V<sub>1</sub> = c<sub>2</sub> · V<sub>2</sub>", "zmiešavacia rovnica: m<sub>1</sub>w<sub>1</sub> + m<sub>2</sub>w<sub>2</sub> = (m<sub>1</sub> + m<sub>2</sub>) · w"],
    steps: [
      "Spočítaj hmotnosť (alebo moly) rozpustenej látky na začiatku: w · m.",
      "Zisti novú hmotnosť roztoku: pri pridaní vody pripočítaj, pri odparení odpočítaj, pri vykryštalizovaní odpočítaj aj látku.",
      "Nová koncentrácia = látka / nový roztok.",
      "Ak hľadáš, koľko vody pridať: m<sub>2</sub> = w<sub>1</sub>m<sub>1</sub> / w<sub>2</sub>, voda = m<sub>2</sub> − m<sub>1</sub>."
    ],
    ex: { n: 1134, q: "Koľko vody treba pridať k 150 g 35 % NaOH, aby vznikol 12 % roztok?", sol: [
      "NaOH: 0,35 · 150 = 52,5 g",
      "Nový roztok: 52,5 / 0,12 = 437,5 g",
      "Voda: 437,5 − 150 = 287,5 g → C"
    ]},
    pit: ["Ak je zadaný objem a hustota, najprv m = ρ · V.", "Pri vykryštalizovaní ubudne látka aj z roztoku: odpočítaj ju z čitateľa aj z menovateľa.", "Rozpustnosť „50 g v 100 g vody“ znamená 50 g v 150 g roztoku."]
  },
  c: {
    t: "Molárna koncentrácia a prepočet w ↔ c", s: "che",
    when: "Jednotky mol/l, mol · dm<sup>-3</sup>, prípadne percentá spolu s hustotou.",
    f: ["c = n / V", "n = c · V", "m = c · V · M", "c = 1000 · ρ · w / M &nbsp;(ρ v g/cm<sup>3</sup>)"],
    steps: [
      "Objem prepočítaj na litre (350 ml = 0,35 l).",
      "n = c · V, potom m = n · M.",
      "Ak treba odmerať z koncentrovaného roztoku: m<sub>roztoku</sub> = m<sub>látky</sub> / w, V = m<sub>roztoku</sub> / ρ.",
      "Prepočet % na mol/l: zober 1 liter (1000 ml), jeho hmotnosť = 1000 · ρ, látky = 1000 · ρ · w, moly = to / M."
    ],
    ex: { n: 1141, q: "Koncentrácia 15 % MgSO<sub>4</sub> s hustotou 1,05 g/cm<sup>3</sup>?", sol: [
      "1 liter roztoku má 1050 g",
      "MgSO<sub>4</sub>: 0,15 · 1050 = 157,5 g",
      "M = 120,4 → n = 157,5 / 120,4 = 1,31 mol → c = 1,31 mol/dm<sup>3</sup> → A"
    ]},
    pit: ["mol/dm<sup>3</sup> = mmol/cm<sup>3</sup>. Tie isté čísla v inom zápise bývajú obe správne.", "Fyziologický roztok má c(NaCl) = 0,15 mol/l (asi 0,9 %).", "„V 1 litri vody“ ≠ „v 1 litri roztoku“. Koncentrácia sa vždy vzťahuje na roztok."]
  },
  neutral: {
    t: "Neutralizácia", s: "che",
    when: "Kyselina + zásada, „úplná neutralizácia“, „koľko zásady treba“ alebo čo zostane po reakcii.",
    f: ["n(H<sup>+</sup>) = n(OH<sup>−</sup>)", "n(H<sup>+</sup>) = n(kyseliny) · počet H, ktoré odovzdá", "n(OH<sup>−</sup>) = n(zásady) · počet OH"],
    steps: [
      "Zisti sýtnosť kyseliny: HCl, HNO<sub>3</sub>, HClO<sub>4</sub>, trichlóroctová = 1; H<sub>2</sub>SO<sub>4</sub>, H<sub>2</sub>SO<sub>3</sub>, malónová = 2; H<sub>3</sub>PO<sub>4</sub>, citrónová = 3.",
      "Zisti počet OH v zásade: NaOH, KOH = 1; Ca(OH)<sub>2</sub>, Mg(OH)<sub>2</sub> = 2; Bi(OH)<sub>3</sub>, Fe(OH)<sub>3</sub> = 3.",
      "Porovnaj moly H<sup>+</sup> a OH<sup>−</sup>. Pri úplnej neutralizácii sa rovnajú.",
      "Ak niečoho je viac, zvyšok určí, či je roztok kyslý alebo zásaditý a jeho koncentráciu."
    ],
    ex: { n: 1161, q: "Aký objem H<sub>2</sub>SO<sub>4</sub> (c = 0,2 mol/l) zneutralizuje 30 ml KOH (c = 0,15 mol/l)?", sol: [
      "n(OH<sup>−</sup>) = 0,03 · 0,15 = 0,0045 mol",
      "H<sub>2</sub>SO<sub>4</sub> dáva 2 H<sup>+</sup> → n(H<sub>2</sub>SO<sub>4</sub>) = 0,00225 mol",
      "V = 0,00225 / 0,2 = 0,01125 l = 11,25 ml → A aj C"
    ]},
    pit: ["Pozor na sýtnosť: 1 mol H<sub>2</sub>SO<sub>4</sub> potrebuje 2 mol NaOH, ale len 1 mol Ca(OH)<sub>2</sub>.", "Metyloranž: v kyslom červená, v zásaditom žltá. Fenolftaleín: v zásaditom fialový, inak bezfarebný."]
  },
  ph: {
    t: "pH a pOH", s: "che",
    when: "Máš vypočítať pH/pOH roztoku silnej kyseliny alebo zásady, prípadne po zriedení či zmiešaní.",
    f: ["pH = −log c(H<sub>3</sub>O<sup>+</sup>)", "pOH = −log c(OH<sup>−</sup>)", "pH + pOH = 14", "c(OH<sup>−</sup>) z Ca(OH)<sub>2</sub> = 2 · c"],
    steps: [
      "Zisti koncentráciu látky v mol/l (z hmotnosti cez M a objem).",
      "Pre kyselinu je c(H<sup>+</sup>) = c · sýtnosť, pre zásadu c(OH<sup>−</sup>) = c · počet OH.",
      "Ak je c = 10<sup>-x</sup>, tak pH (alebo pOH) = x. Inak použi logaritmy zo zadania: −log(a · 10<sup>-x</sup>) = x − log a.",
      "Druhú hodnotu dopočítaj: 14 − prvá.",
      "Pri zmiešaní kyseliny a zásady najprv odpočítaj, čo sa zneutralizuje, a zvyšok vydeľ celkovým objemom."
    ],
    ex: { n: 1174, q: "pH a pOH roztoku, ktorý v 800 ml obsahuje 3,82 g NaOH (log 1,19 = 0,076)", sol: [
      "n = 3,82 / 40 = 0,0955 mol → c = 0,0955 / 0,8 = 0,119 mol/l",
      "pOH = −log(1,19 · 10<sup>-1</sup>) = 1 − 0,076 = 0,924",
      "pH = 14 − 0,924 = 13,076 → C aj D"
    ]},
    pit: ["Zriedenie silnej kyseliny 10× zvýši pH o 1 (100× o 2). pOH sa pritom zníži o rovnakú hodnotu.", "0,1 mmol/dm<sup>3</sup> = 10<sup>-4</sup> mol/dm<sup>3</sup> → pH = 4."]
  },
  ks: {
    t: "Súčin rozpustnosti", s: "che",
    when: "K<sub>s</sub>, „nasýtený roztok“, „zrazenina“.",
    f: ["AB → A<sup>+</sup> + B<sup>−</sup>: K<sub>s</sub> = s<sup>2</sup>", "AB<sub>2</sub> alebo A<sub>2</sub>B: K<sub>s</sub> = 4s<sup>3</sup>", "s = rozpustnosť v mol/l"],
    steps: [
      "Hmotnosť rozpustenej látky prepočítaj na mol/l: s = (m / M) / V.",
      "Podľa vzorca soli dosaď: AgBr → s · s; Ag<sub>2</sub>S → (2s)<sup>2</sup> · s = 4s<sup>3</sup>; PbF<sub>2</sub> → s · (2s)<sup>2</sup> = 4s<sup>3</sup>.",
      "Opačne: z K<sub>s</sub> vypočítaj s (odmocnina), potom hmotnosť = s · M · V.",
      "Zrazenina vznikne, ak súčin koncentrácií iónov po zmiešaní je väčší ako K<sub>s</sub> (pri zmiešaní rovnakých objemov sa koncentrácie zmenšia na polovicu)."
    ],
    ex: { n: 1182, q: "500 ml nasýteného roztoku obsahuje 6,58 · 10<sup>-5</sup> g AgBr. K<sub>s</sub> = ?", sol: [
      "M(AgBr) = 188 → n = 3,5 · 10<sup>-7</sup> mol v 0,5 l → s = 7,0 · 10<sup>-7</sup> mol/l",
      "K<sub>s</sub> = s<sup>2</sup> = 4,9 · 10<sup>-13</sup> → A"
    ]},
    pit: ["Pri iónoch s koeficientom 2 nezabudni koncentráciu aj umocniť: [F<sup>−</sup>] = 2s.", "Pri hydroxidoch: z pH zisti pOH, [OH<sup>−</sup>] = 10<sup>-pOH</sup>."]
  },
  k: {
    t: "Rovnovážna konštanta", s: "che",
    when: "„Rovnovážne koncentrácie“, „vypočítajte K“ alebo „počiatočné koncentrácie“.",
    f: ["aA + bB ⇄ cC + dD: K = [C]<sup>c</sup>[D]<sup>d</sup> / ([A]<sup>a</sup>[B]<sup>b</sup>)", "počiatočná = rovnovážna + zreagovaná"],
    steps: [
      "Napíš K: produkty hore, reaktanty dole, každú koncentráciu umocni na jej koeficient.",
      "Dosaď rovnovážne koncentrácie a vypočítaj K.",
      "Počiatočné koncentrácie reaktantov: k rovnovážnej pripočítaj, koľko zreagovalo. To zistíš z množstva produktu cez pomer koeficientov.",
      "Ak poznáš K a počiatočné koncentrácie: zreagované označ x, dosaď do K a vyrieš (často stačí odmocnina z oboch strán)."
    ],
    ex: { n: 1185, q: "2 SO<sub>2</sub> + O<sub>2</sub> ⇄ 2 SO<sub>3</sub>; [SO<sub>3</sub>] = 4,5; [O<sub>2</sub>] = 1,5; [SO<sub>2</sub>] = 2,5", sol: [
      "K = 4,5<sup>2</sup> / (2,5<sup>2</sup> · 1,5) = 20,25 / 9,375 = 2,16",
      "Vzniklo 4,5 mol SO<sub>3</sub> → zreagovalo 4,5 SO<sub>2</sub> a 2,25 O<sub>2</sub>",
      "Počiatočné: SO<sub>2</sub> = 2,5 + 4,5 = 7; O<sub>2</sub> = 1,5 + 2,25 = 3,75 → A aj B"
    ]},
    pit: ["Koeficienty v rovnici idú do exponentov.", "Pri esterifikácii s K = 4: x<sup>2</sup> / (5 − x)<sup>2</sup> = 4 → x / (5 − x) = 2 → x = 3,33."]
  },
  osmo: {
    t: "Osmotický tlak a izotonické roztoky", s: "che",
    when: "Izotonický/hypertonický roztok, osmotický tlak, „určte o akú látku ide“.",
    f: ["π = i · c · R · T", "i = počet iónov po disociácii (glukóza 1, NaCl 2, CaCl<sub>2</sub> 3, AlCl<sub>3</sub> 4)", "osmotická koncentrácia = i · c", "M = m · R · T / (π · V)"],
    steps: [
      "Pre každý roztok vypočítaj i · c (koľko častíc reálne pláva v roztoku).",
      "Rovnaké i · c = izotonické; väčšie = hypertonický; menšie = hypotonický.",
      "Pri výpočte tlaku: c v mol/l, T v kelvinoch, R = 8,32 → π vyjde v kPa.",
      "Ak hľadáš molárnu hmotnosť neelektrolytu: M = m · R · T / (π · V), V v litroch, π v kPa."
    ],
    ex: { n: 1190, q: "Izotonické roztoky k NiCl<sub>2</sub> s c = 0,3 mol/l", sol: [
      "NiCl<sub>2</sub> → 3 ióny → 0,9",
      "glukóza 0,1 → 0,1; FeCl<sub>3</sub> 0,1 · 4 = 0,4; Na<sub>2</sub>SO<sub>4</sub> 0,3 · 3 = 0,9; ZnI<sub>2</sub> 0,2 · 3 = 0,6",
      "Izotonický je len Na<sub>2</sub>SO<sub>4</sub> → C"
    ]},
    pit: ["Cukry (glukóza, fruktóza, sacharóza) nedisociujú, i = 1.", "Octan hlinitý (CH<sub>3</sub>COO)<sub>3</sub>Al má i = 4.", "M = 150 → ribóza, M = 180 → glukóza alebo fruktóza, M = 46 → etanol."]
  },
  mendel: {
    t: "Mendelovské kríženie", s: "bio",
    when: "Kríženie homozygotov a heterozygotov v jednom znaku, štiepne pomery.",
    f: ["Aa × Aa → AA : Aa : aa = 1 : 2 : 1", "Aa × aa → Aa : aa = 1 : 1", "AA × aa → 100 % Aa"],
    steps: [
      "Zapíš genotypy rodičov (heterozygot Aa, dominantný homozygot AA, recesívny aa).",
      "Nakresli Punnettov štvorec 2 × 2 a vypíš 4 kombinácie.",
      "Genotypový pomer: spočítaj AA, Aa a aa.",
      "Fenotypový pomer: pri úplnej dominancii AA aj Aa vyzerajú rovnako (3 : 1). Pri neúplnej dominancii má Aa medzifenotyp (ružová, šedá), takže fenotyp = genotyp (1 : 2 : 1)."
    ],
    ex: { n: 551, q: "Čierna je neúplne dominantná voči bielej. Biela sliepka × šedý kohút?", sol: [
      "biela = aa, šedý = Aa",
      "aa × Aa → Aa : aa = 1 : 1 → šedé a biele 1 : 1 → B"
    ]},
    pit: ["Genotypový a fenotypový pomer sa líšia pri úplnej dominancii, zhodujú sa pri neúplnej dominancii.", "Homozygot × heterozygot = vždy 1 : 1."]
  },
  krv: {
    t: "Krvné skupiny a dedičnosť viazaná na pohlavie", s: "bio",
    when: "Krvné skupiny rodičov a pravdepodobnosť skupiny dieťaťa, hemofília alebo daltonizmus.",
    f: ["A = I<sup>A</sup>I<sup>A</sup> alebo I<sup>A</sup>i; B = I<sup>B</sup>I<sup>B</sup> alebo I<sup>B</sup>i; AB = I<sup>A</sup>I<sup>B</sup>; 0 = ii", "hemofília: X<sup>h</sup> (recesívna, na X)"],
    steps: [
      "Napíš možné genotypy rodičov.",
      "Urob Punnettov štvorec.",
      "Pre pohlavne viazané znaky zapisuj X a Y zvlášť: muž X<sup>h</sup>Y, žena prenášačka X<sup>H</sup>X<sup>h</sup>.",
      "Spočítaj podiel požadovaného výsledku zo 4 políčok."
    ],
    ex: { n: 562, q: "Rodičia AB a 0. Pravdepodobnosť dieťaťa s krvnou skupinou A?", sol: [
      "I<sup>A</sup>I<sup>B</sup> × ii → I<sup>A</sup>i, I<sup>A</sup>i, I<sup>B</sup>i, I<sup>B</sup>i",
      "Skupina A = 2/4 = 50 % → A. Skupina 0 aj AB = 0 %."
    ]},
    pit: ["Syn dostáva X vždy od matky, preto po otcovi hemofíliu nezdedí.", "Muž hemofilik × žena prenášačka: 25 % zdravý syn, 25 % chorý syn, 25 % dcéra prenášačka, 25 % chorá dcéra."]
  },
  hw: {
    t: "Populačná genetika (Hardy–Weinberg)", s: "bio",
    when: "Frekvencia alel alebo genotypov v populácii, percento recesívnych jedincov.",
    f: ["p + q = 1", "p<sup>2</sup> + 2pq + q<sup>2</sup> = 1", "AA = p<sup>2</sup>, Aa = 2pq, aa = q<sup>2</sup>"],
    steps: [
      "Ak poznáš recesívnych homozygotov (aa), q = √(aa). Napríklad 16 % → q = √0,16 = 0,4.",
      "p = 1 − q.",
      "Dominantní homozygoti = p<sup>2</sup>, heterozygoti = 2pq.",
      "Nositelia dominantného znaku = p<sup>2</sup> + 2pq = 1 − q<sup>2</sup>."
    ],
    ex: { n: 631, q: "rh<sup>−</sup>rh<sup>−</sup> = 16 %. Koľko je heterozygotov?", sol: [
      "q = √0,16 = 0,4; p = 0,6",
      "2pq = 2 · 0,6 · 0,4 = 0,48 = 48 % → A aj B"
    ]},
    pit: ["Výsledok býva správny ako desatinné číslo aj v percentách (0,25 aj 25 %).", "p × p je to isté ako p<sup>2</sup>, (p · q) + (p · q) = 2pq."]
  },
  h2: {
    t: "Koeficient dedivosti", s: "bio",
    when: "h<sup>2</sup> alebo podiel genotypu a prostredia na znaku.",
    f: ["h<sup>2</sup> = podiel genotypu (0 až 1)", "vplyv prostredia = 1 − h<sup>2</sup>"],
    steps: [
      "h<sup>2</sup> = 0,7 znamená, že znak na 70 % závisí od genotypu a na 30 % od prostredia.",
      "Ak je vplyv prostredia 75 %, h<sup>2</sup> = 0,25.",
      "Ide o kvantitatívne (polygénne) znaky."
    ],
    ex: { n: 641, q: "Prostredie ovplyvňuje znak na 75 %", sol: [
      "h<sup>2</sup> = 1 − 0,75 = 0,25 → A; ide o kvantitatívny znak → C; premenlivosť 75 % → D"
    ]},
    pit: ["Nezamieňaj h<sup>2</sup> s vplyvom prostredia."]
  }
};
