# Copilot Instructions — portfolio-upgraded

Purpose: Give AI coding agents the minimal, actionable context to make correct edits in this Angular resume app.

Quick start (commands)
- Dev server: `npm start` (runs `ng serve`) — open http://localhost:4200/
- Build: `npm run build` (`ng build`)
- Watch: `npm run watch` (`ng build --watch --configuration development`)
- Tests: `npm test` (Karma + Jasmine)

High-level architecture
- Single-page Angular app (Angular 18). Entry under `src/` with app code in `src/app/`.
- Routing: `src/app/app-routing.module.ts` defines the visible pages (`about`, `experience`, `work`, `contact`).
- Root wiring: `src/app/app.module.ts` — declares components, imports Angular Material and FontAwesome, registers icons.
- Data flow: `src/app/data.service.ts` imports static JSON from `src/assets/works.json` and `src/assets/places.json` and exposes `getWorks()` / `getPlaces()` — there is no HTTP backend.

Project-specific conventions & patterns
- Component layout: each feature has a folder with `.component.ts/.html/.css/.spec.ts` (e.g. `src/app/work/`).
- Data models live as simple interfaces: `src/app/work.ts` and `src/app/place.ts` (used by `DataService`).
- Static data: keep resume content in `src/assets/*.json` and update there for content changes (preferred over adding network calls).
- Icon registration: `AppModule` registers FontAwesome icons centrally — add new icons there, not in individual components.

Development notes and gotchas
- No backend: edits to `DataService` should respect existing static-import approach unless adding an HTTP endpoint deliberately.
- Routing changes require edits to `src/app/app-routing.module.ts` and adding the component to `declarations` in `src/app/app.module.ts`.
- The project uses Angular Animations; `provideAnimationsAsync()` is added in providers. There is an unused `provideAnimations()` function declared at the bottom of `app.module.ts` — avoid calling or modifying it without understanding why it was added.

Testing & CI hints
- Unit tests run with Karma (`karma.conf.js`) via `npm test`.
- Tests follow the standard Angular CLI structure (one `.spec.ts` per component/service).

Where to look for common changes
- Add or change resume items: `src/assets/works.json`, `src/assets/places.json` and corresponding interfaces in `src/app/work.ts` and `src/app/place.ts`.
- Add UI components/views: `src/app/<feature>/` + update `app-routing.module.ts` and `app.module.ts`.
- Styling: global `src/styles.css` or component `.component.css` files.

External integrations
- FontAwesome (`@fortawesome/*`) and Angular Material modules are used — imports live in `app.module.ts` and component templates use material tags (e.g., `mat-card`).

If you are unsure
- Prefer minimal, contained edits: update a single component or JSON file, run `npm start`, verify in browser.
- When changing app-wide wiring (routing, modules), run the build (`npm run build`) to catch compilation errors early.

Key files to reference quickly
- `src/app/data.service.ts`
- `src/app/app.module.ts`
- `src/app/app-routing.module.ts`
- `src/assets/works.json`, `src/assets/places.json`
- `src/app/work.ts`, `src/app/place.ts`

If anything here is unclear or you want more examples (typical PR edits, common refactors), tell me which area to expand.
