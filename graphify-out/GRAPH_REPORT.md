# Graph Report - D:\Profile\My agency\web  (2026-08-12)

## Corpus Check
- Corpus is ~7,826 words - fits in a single context window. You may not need a graph.

## Summary
- 134 nodes · 176 edges · 12 communities (9 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Frontend Pages & Sections
- TypeScript Compiler Options
- Core Dependencies
- Dev Dependencies
- Layout & Global Components
- TS Project Config
- NPM Package Metadata
- Pricing Component UI
- Shared UI Utilities
- ESLint Configuration
- NextJS Configuration
- PostCSS Configuration

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `RevealStagger()` - 9 edges
3. `RevealItem()` - 9 edges
4. `include` - 7 edges
5. `scripts` - 5 edges
6. `GlassCard` - 5 edges
7. `cn()` - 5 edges
8. `lib` - 4 edges
9. `Button` - 3 edges
10. `ConfettiButton()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Button` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/button.tsx → src/lib/utils.ts
- `GlassCard` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/glass-card.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (12 total, 3 thin omitted)

### Community 0 - "Frontend Pages & Sections"
Cohesion: 0.16
Nodes (15): BentoServices(), FAQ(), faqs, Footer(), Hero(), PricingCTA(), Process(), steps (+7 more)

### Community 1 - "TypeScript Compiler Options"
Cohesion: 0.11
Nodes (19): dom, dom.iterable, esnext, compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules (+11 more)

### Community 2 - "Core Dependencies"
Cohesion: 0.12
Nodes (17): clsx, gsap, motion, next, dependencies, clsx, gsap, motion (+9 more)

### Community 3 - "Dev Dependencies"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+9 more)

### Community 4 - "Layout & Global Components"
Cohesion: 0.19
Nodes (9): caveat, inter, metadata, outfit, Navbar(), ConfettiButton(), ConfettiButtonProps, generateParticles() (+1 more)

### Community 5 - "TS Project Config"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 6 - "NPM Package Metadata"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 7 - "Pricing Component UI"
Cohesion: 0.32
Nodes (7): FeatureItem(), generateParticles(), Particle, PlanBlock(), plansData, Pricing(), renderIcon()

### Community 8 - "Shared UI Utilities"
Cohesion: 0.39
Nodes (5): Button, ButtonProps, GlassCard, GlassCardProps, cn()

## Knowledge Gaps
- **64 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+59 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Core Dependencies` to `NPM Package Metadata`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Dev Dependencies` to `NPM Package Metadata`?**
  _High betweenness centrality (0.060) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `TypeScript Compiler Options` to `TS Project Config`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _64 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Compiler Options` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Core Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `Dev Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._