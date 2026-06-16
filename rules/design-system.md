---
description: React Vite TypeScript Starter Design System & UI Guidelines
globs: **/*.{tsx,ts,css,md}
alwaysApply: true
---

# React Vite TypeScript Starter Design System & UI Guidelines

## Core Aesthetic: "Minimal Terminal Computing"

The React Vite TypeScript Starter aesthetic sits at the intersection of **minimal product UI, developer tooling, terminal interfaces, and computer-native workflows**. It is **"clean interface meets command-line precision."**

The design must instantly communicate four key pillars:

1. **Minimalist Interface:** Remove visual noise. Use precise spacing, restrained hierarchy, neutral colors, and direct content-first layouts.
2. **Light/Dark Native:** Every UI decision must work in both themes through the existing CSS variables and Tailwind theme tokens.
3. **Terminal Identity:** Use monospace details, command-line cues, dashed borders, and compact code-panel patterns to create a developer-first tone.
4. **Computer Utility:** Layouts should feel like focused developer tools, dashboards, IDE panes, system panels, and productive app surfaces.

**Key Visual Metaphors:**

- **The Terminal:** Monospace snippets, prompt-like labels, compact panels, command rows, and dark-mode confidence.
- **The IDE:** File labels, split panes, tabs, bordered sections, structured grids, and code-aware hierarchy.
- **The System Panel:** Dense but readable controls, clear states, exact alignment, and low-distraction surfaces.
- **The Starter Kit:** Clean scaffolding, predictable patterns, practical defaults, and UI that feels ready to extend.

## Design Principles

### 1. Minimalism First

Every element must earn its place. Prefer simple structure over decoration, direct labels over marketing copy, and useful density over empty spectacle.

- Keep page layouts focused and scannable.
- Use whitespace to clarify relationships, not to create oversized hero sections by default.
- Use compact cards, panels, and sections that support real workflows.
- Keep headings restrained inside app surfaces.
- Avoid ornamental backgrounds, decorative blobs, and unnecessary visual flourishes.

### 2. Light/Dark by Default

All components must be designed and reviewed in both light and dark mode.

- Use theme variables and semantic Tailwind tokens: `background`, `foreground`, `card`, `muted`, `border`, `input`, `ring`, and `primary`.
- Prefer `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, and `border-border`.
- Use `dark:` overrides only when semantic tokens do not produce a correct result.
- Avoid hard-coded one-theme colors like `text-gray-500`, `bg-white`, or `bg-black` unless the context explicitly requires them.
- Keep contrast high enough for comfortable reading in both themes.

### 3. Terminal, Not Decorative Console

Terminal inspiration should support structure and clarity. It should not become a gimmick.

- Use `font-mono` for code, IDs, command snippets, technical metadata, route paths, counters, and small system labels.
- Use prompt cues like `$`, `>`, file paths, and command names when they clarify context.
- Use dashed borders and subtle dividers to suggest technical structure.
- Use code panels for command examples, configuration snippets, logs, and implementation previews.
- Do not overuse fake terminal chrome when a normal form, table, or card would be clearer.

### 4. Computer-Native Utility

The UI should feel like a precise tool built for people who work with software.

- Prefer functional layouts: panels, sidebars, toolbars, lists, tables, forms, tabs, and split views.
- Keep interactions predictable and keyboard-friendly.
- Use icons to support commands, status, and recognition.
- Make loading, empty, error, and success states explicit.
- Prioritize responsive behavior so content remains readable and controls remain usable on mobile and desktop.

## Color System

### Near-Monochrome Default

The default palette is neutral, high-contrast, and theme-aware. Color should guide attention, not decorate.

**Preferred tokens:**

- `background` for page backgrounds
- `foreground` for primary text
- `card` and `card-foreground` for panels and cards
- `muted` and `muted-foreground` for secondary surfaces and supporting text
- `border` and `input` for structure
- `ring` for focus states
- `primary` and `primary-foreground` for primary actions

**Semantic color usage:**

- Use destructive colors only for destructive actions, validation failures, and critical errors.
- Use warning, success, or status colors sparingly and only when the state needs immediate recognition.
- Keep semantic color accents small: icons, badges, status dots, messages, or focused inline states.

**Avoid:**

- Loud gradients
- Saturated feature-level palettes
- Decorative purple, blue, orange, or rainbow themes
- Large colored backgrounds that dominate the interface
- Color choices that only work in either light or dark mode

## Typography

### Fonts

Use the existing font stack:

- **Primary UI:** Geist via `font-sans`
- **Technical UI:** Geist Mono via `font-mono`
- **Headings:** Use `font-heading` or `font-sans` unless the component is explicitly code-oriented

### Type Rules

- Use strong hierarchy through weight, size, and spacing, not excessive color.
- Reserve large display text for true page-level entry points.
- Use compact headings inside cards, dialogs, forms, dashboards, and side panels.
- Keep body copy readable with `text-sm`, `leading-6`, and `text-muted-foreground` for supporting content.
- Use `break-words`, `min-w-0`, and responsive wrapping for long paths, commands, labels, email addresses, IDs, and user-generated content.
- Do not use negative letter spacing.
- Do not scale font size with viewport width.

## Spacing and Layout

Follow the standard spacing rules for all UI work.

### Page Container Padding

- Mobile: `px-3 py-4`
- Small: `sm:px-4 sm:py-5`
- Medium: `md:px-6 md:py-6`
- Large: `lg:px-8 lg:py-8`

### Card Component Padding

- Mobile: `p-3`
- Medium: `md:p-4`
- Large: `lg:p-6`

### Grid Gaps

- Mobile: `gap-3`
- Medium: `md:gap-4`
- Large: `lg:gap-6`

### Internal Spacing

- Mobile: `space-y-2`
- Medium: `md:space-y-3`

### Layout Rules

- Use `max-w-7xl` for broad app pages unless a narrower reading or form layout is more appropriate.
- Use `grid` for structured comparison and dashboard layouts.
- Use `flex` for toolbars, headers, inline controls, and compact command groups.
- Use full-width bands or unframed layouts for page sections.
- Use cards only for individual repeated items, tool surfaces, dialogs, and framed panels.
- Do not nest cards inside cards.

## Surfaces and Borders

### Approved Surface Patterns

- `rounded-md border border-border bg-card shadow-xs`
- `rounded-md border border-dashed border-border bg-background/80`
- `rounded-md border border-border bg-background/75`
- `overflow-hidden rounded-md border border-border bg-card`
- `border-y border-dashed border-border`
- `border-b border-dashed border-border`

### Border and Radius Rules

- Default to `rounded-md`.
- Use sharper, modest corners for a technical feel.
- Use `rounded-lg` only when existing shadcn/ui components or larger panels require it.
- Avoid pill shapes except for badges and compact status elements.
- Prefer dashed borders for technical sections, metadata rows, command panels, and divider lines.
- Keep shadows subtle: `shadow-xs` or `shadow-sm`.
- Avoid heavy elevation and floating decorative cards.

## Components and Interaction

### Component Defaults

- Use shadcn/ui components before creating custom primitives.
- Use existing variants from local UI components whenever possible.
- Use Hugeicons or Lucide icons for actions, status, navigation, and tool controls.
- Keep icon buttons square and stable in size.
- Pair unfamiliar icons with accessible labels, `sr-only` text, or tooltips.
- Use `cn()` for conditional classes and follow `rules/styling.md` class grouping guidance.

### Buttons and Controls

- Primary actions should be clear and sparse.
- Use icon + text for important commands.
- Use icon-only buttons for familiar actions like copy, close, refresh, view, edit, delete, or settings.
- Use segmented controls, tabs, toggles, checkboxes, sliders, and menus when they match the interaction.
- Keep disabled, loading, active, hover, focus, and error states visible.

### Forms

- Use React Hook Form and Zod patterns from the project rules.
- Keep labels concise and descriptions practical.
- Use `Field`, `Input`, `Textarea`, `InputGroup`, and existing UI primitives.
- Use validation states that work in both themes.
- Keep form layouts compact, readable, and mobile-safe.

## Terminal and Code Panel Patterns

Use terminal/code panels when showing commands, setup flows, technical previews, configuration, logs, or generated code.

### Approved Pattern

```tsx
<div className="overflow-hidden rounded-md border border-border bg-card shadow-sm">
  <div className="flex items-center justify-between gap-2 border-b border-border bg-muted/70 px-3 py-2 md:px-4">
    <span className="font-mono text-xs text-foreground">starter.config.ts</span>
    <span className="font-mono text-xs text-muted-foreground">local</span>
  </div>
  <div className="overflow-x-auto p-3 md:p-4 lg:p-6">
    <div className="min-w-max space-y-2 font-mono text-xs leading-6 md:text-sm">
      <p>
        <span className="text-muted-foreground">$</span>{' '}
        <span className="text-foreground">pnpm dev</span>
      </p>
    </div>
  </div>
</div>
```

### Rules

- Use horizontal overflow for long code and command content.
- Keep code panel headers compact.
- Use `font-mono text-xs md:text-sm` for code-like content.
- Use muted text for prompts, comments, metadata, and secondary lines.
- Avoid fake syntax highlighting with many colors. Prefer neutral emphasis.

## Motion and Feedback

Motion should feel precise and quiet.

- Use subtle transitions: `transition-all duration-200`, `transition-colors`, or `transition-shadow`.
- Small hover lifts like `hover:-translate-y-0.5` are allowed for interactive cards.
- Use `animate-spin` for loading icons.
- Avoid dramatic page transitions, bouncing, pulsing decoration, or large animated backgrounds.
- Respect clarity over delight when motion could distract from task completion.

## Responsive and Text Safety

Text responsiveness is required for every UI change.

- Use `min-w-0` inside flex and grid children that contain text.
- Use `break-words` for user-generated content, long labels, paths, IDs, and titles.
- Use `truncate` only when losing the hidden text is acceptable or the full value appears elsewhere.
- Keep buttons from overflowing by allowing wrapping or using shorter labels.
- Test compact mobile widths for header actions, cards, forms, and toolbars.
- Ensure text never overlaps icons, controls, or neighboring content.

## Accessibility

- Preserve semantic HTML: headings, lists, forms, buttons, labels, and landmarks.
- Use visible focus states through `focus-visible` and `ring` tokens.
- Provide `aria-label`, `aria-live`, or `sr-only` text where needed.
- Do not rely on color alone for state.
- Keep tap targets comfortable on mobile.
- Make loading, empty, error, and success states understandable to screen readers.

## Anti-Patterns

Do not introduce:

- Loud gradients or saturated theme palettes
- Decorative blobs, orbs, bokeh, or purely atmospheric backgrounds
- Heavy shadows, glassmorphism, or glossy surfaces
- Oversized marketing-style heroes for app workflows
- Nested cards or floating page sections
- Hard-coded light-only or dark-only colors
- Arbitrary new component styles when shadcn/ui and existing tokens are enough
- Excessive terminal decoration that reduces clarity
- Large illustrations that do not help the task
- Text that overflows, overlaps, or depends on viewport-scaled font sizes

## Implementation Checklist

Before shipping any UI/UX change:

- [ ] Read this file and `rules/styling.md`.
- [ ] Use existing shadcn/ui components and local UI primitives first.
- [ ] Use semantic theme tokens instead of hard-coded colors.
- [ ] Verify light and dark mode behavior.
- [ ] Apply the standard page, card, grid, and internal spacing rules.
- [ ] Use terminal/computer metaphors only when they clarify structure.
- [ ] Confirm text responsiveness on mobile and desktop.
- [ ] Keep motion subtle and interaction states visible.
- [ ] Run `pnpm check:types` and `pnpm lint` for code changes.
