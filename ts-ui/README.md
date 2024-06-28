# Practice UI Components

## Directory Structure

- `app`: Provide a default view
    - `[...item]/page.tsx`: `/[...item]` route's page view.
        - Render the component that matches the `key` in `routes`.
    - `layout.tsx`: Configuring HTML
    - `page.tsx`: The page view of `/` route. Shows `/README.md`.
    - `global.scss`: Styel of App
    - `gnb.tsx`: Left Menu Components
- `components`
    - `vanillaWrapper.ts`: Wrapper components in an independent VanillaJS environment
- `routes.ts`: Configure a route

## Getting Started

```bash
$ npm install
$ npm run dev
```

- [Access in your browser](http://localhost:3000) to view the results.
