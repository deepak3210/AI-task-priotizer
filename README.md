# AI-Powered Task Prioritizer

Enterprise-quality React frontend for intelligent task prioritization. Phase 1 — foundation only (no backend).

## Tech Stack

- React 19 · TypeScript · Vite
- React Router v7 · Redux Toolkit · RTK Query (scaffold)
- Tailwind CSS v4 · Material UI v9
- Framer Motion · React Hot Toast · Hero Icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Sign in with the mock login form to access the dashboard shell.

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run lint`  | Run oxlint               |
| `npm run format`| Format with Prettier     |

## Project Structure

```
src/
├── assets/
├── components/
│   ├── common/       # Logo, ThemeToggle, PageHeader, LoadingSpinner
│   ├── layout/       # Sidebar, Navbar, MainContent
│   └── navigation/   # NavItemLink
├── layouts/          # DashboardLayout, AuthLayout
├── pages/            # Route-level pages (lazy loaded)
├── routes/           # Router config, Protected/Public routes
├── redux/            # Store, slices, RTK Query base API
├── services/         # Mock API layer (Step 2+)
├── mock/             # JSON data files (Step 2+)
├── theme/            # MUI theme + dark mode provider
├── hooks/
├── types/
├── constants/
├── utils/
└── styles/
```

## Phase 1 Status

- [x] Vite + React 19 + TypeScript
- [x] Tailwind CSS v4 + MUI theme
- [x] Redux store + RTK Query scaffold
- [x] Protected / Public routing
- [x] Dashboard shell (Sidebar + Navbar + Layout)
- [x] Dark mode toggle
- [x] Placeholder pages
- [ ] Mock JSON + services (Step 2)
- [ ] Dashboard widgets (Step 2)
- [ ] Task management (Step 3)

## Environment

Copy `.env.example` to `.env` when backend is ready:

```
VITE_API_BASE_URL=/api
```
