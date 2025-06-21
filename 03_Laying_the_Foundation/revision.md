# npm and npx

## What is npm and npx?

**npm** is a package manager for JavaScript. It helps in installing, managing, and sharing packages (libraries or tools) for Node.js and frontend projects.

**npx** is a tool that comes with npm (version 5.2+). It allows you to run Node packages without installing them globally. It temporarily downloads and executes the package.

---

## Running Packages via Scripts (Industry Standard)

Instead of executing packages directly via command line, the **industry standard** is to define and use custom scripts in `package.json`.

Example:

```json
"scripts": {
  "start": "parcel index.html",
  "build": "parcel build index.html"
}

```

# JSX

## What is JSX

**JSX** is not HTML inside Javascript, it's HTML-like syntax
