# Architecture

This is an outline of the codebase. It helps with navigation.

## 1. Project Structure

This section talks briefly about various important files & directories.

```
[Project Root]/
├── docs/                 # Important notes & decisions
├── src/
│   ├── lib/              # Components & logic
│   │   ├── ui/           # Generic UI components
│   │   └── services/     # Domain-specific logic
│   │
│   ├── css/              # Stylesheets
│   │
│   ├── routes/           # Pages & data loaders
│   │
│   └── app.html          # HTML template
│
├── package.json
└── README.md             # Project overview
```

## 2. Code Map

This section explains the important parts of the codebase in more depth. You can
reference it as you're poking around.

### 2.1 CSS

We follow the [CUBE CSS](https://cube.fyi) methodology:

- **Global CSS**: Global styles and design tokens. Located in `@kochav/css` or
  `css/base`.
- **Composition**: Flexible, component-agnostic layouts blocks. Located in
  `@kochav/css`.
- **Utility**: Helper classes, often to abstract repeated code. Located in
  `@kochav/css` or `css/utility`.
- **Blocks**: Once the above 3 layers are applied, a block contains any code
  that only applies in a specific context (e.g. card, button). Located next to
  corresponding Svelte components, or in `css/block`.

### 2.2 Routes

Each route segment (page) has a dedicated folder. It can contain the view,
layout, data loader(s) and more. These files are **layout + composition**, not
logic-heavy.

You can also colocate components here, but limit it to domain-specific blocks
that wouldn't make sense on any other page.

`+page.svelte`

- Loads data from `+page.ts`
- Renders components

`+page.ts`

- Calls the store
- Sends data to `+page.svelte`
- Avoids deep business logic

`+layout.svelte`

- Renders shared UI
- Applies to all child routes (pages & layouts)

`+layout.ts`

- functions like `+page.ts` for the layout
- defines data for all child routes

### 2.3 Components

Split into generic & domain-specific components.

**Examples**:

```
lib/ui/button.svelte
routes/header.svelte
```

### 2.4 Services

This folder keeps logic out of UI. It's split into folders based on domain.
Inside the folders, each file has a single responsibility.

**Examples**:

- `models.ts` - Defines the shape of the data
- `store.ts` - Holds reactive state
- `validation.ts` - Contains rules for validating user input
