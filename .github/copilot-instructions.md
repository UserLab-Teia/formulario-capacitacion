# Copilot Instructions for formulario-capacitacion

## Overview
This project is a simple web application for user registration via a form. It consists of static HTML, CSS, and JavaScript files, with a focus on client-side validation and user feedback. There is no backend or build step required.

## Key Files
- `index.html`: Main HTML file. Contains the registration form with fields for name, last name, age, and gender. Links to `styles.css` and `app.js`.
- `styles.css`: Styles for the form and page layout. Uses a clean, centered card design.
- `app.js`: Handles form submission, client-side validation, and result display. All logic is executed on DOMContentLoaded.
- `app.test.js`: Contains Jest-based tests. Example test included; expand as needed.
- `jest.config.js`: Jest configuration for running tests in Node environment.

## Architecture & Data Flow
- The form in `index.html` posts data to the same page. `app.js` intercepts the submit event, validates input, and displays a result message in the `#resultado` section.
- No data is persisted or sent to a server. All logic is client-side.

## Developer Workflows
- **Run locally:** Open `index.html` in a browser. No server or build step is required.
- **Testing:**
  - Install dependencies: `npm install --save-dev jest`
  - Run tests: `npx jest` or `npm test` (if script is added to `package.json`)
- **Debugging:** Use browser dev tools for client-side JS. No source maps or transpilation.

## Project Conventions
- All form fields are required and validated both via HTML attributes and JavaScript.
- Use `DOMContentLoaded` to ensure DOM is ready before attaching event listeners.
- Use `trim()` and `parseInt` for input normalization.
- Result messages are shown in the `#resultado` element, with color indicating success or error.

## Integration & Dependencies
- No external libraries or frameworks are used for the main app.
- Jest is used for testing only.

## Patterns & Examples
- Example user object creation in `app.js`:
  ```js
  var usuario = {
    nombre: nombreInput.value.trim(),
    apellidoPaterno: apellidoPaternoInput.value.trim(),
    edad: parseInt(edadInput.value, 10),
    genero: generoInput.value
  };
  ```
- Example test in `app.test.js`:
  ```js
  describe('Application Tests', () => {
    it('should return true for a simple test', () => {
      expect(true).toBe(true);
    });
  });
  ```

## Additional Notes
- Do not add backend logic or dependencies unless explicitly required.
- Keep all logic in the provided files unless expanding the project structure is requested.
- Update this file if project conventions or structure change.
