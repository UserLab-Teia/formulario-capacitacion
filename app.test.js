/**
 * @jest-environment jsdom
 */

describe('Application Tests', () => {
    it('should return true for a simple test', () => {
        expect(true).toBe(true);
    });
});

describe('Age Validation Tests', () => {
    beforeEach(() => {
        // Set up the DOM for testing
        document.body.innerHTML = `
            <form id="registroForm">
                <input type="text" id="nombre" name="nombre" required>
                <input type="text" id="apellidoPaterno" name="apellidoPaterno" required>
                <input type="number" id="edad" name="edad" min="0" max="100" required>
                <select id="genero" name="genero" required>
                    <option value="">Seleccione...</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                </select>
                <select id="pais" name="pais" required>
                    <option value="">Seleccione...</option>
                    <option value="México">México</option>
                </select>
                <button type="submit">Registrar</button>
            </form>
            <section id="resultado"></section>
        `;
        
        // Trigger DOMContentLoaded event
        const event = new Event('DOMContentLoaded');
        document.dispatchEvent(event);
        
        // Load the app.js logic by requiring it
        delete require.cache[require.resolve('./app.js')];
        require('./app.js');
        
        // Manually dispatch DOMContentLoaded since it might have been missed
        window.dispatchEvent(new Event('DOMContentLoaded'));
    });

    it('should accept valid age of 50', () => {
        const resultado = document.getElementById('resultado');
        const form = document.getElementById('registroForm');
        
        // Fill in form with valid data
        document.getElementById('nombre').value = 'Juan';
        document.getElementById('apellidoPaterno').value = 'Pérez';
        document.getElementById('edad').value = '50';
        document.getElementById('genero').value = 'masculino';
        document.getElementById('pais').value = 'México';
        
        // Submit form
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(submitEvent);
        
        // Should show success message
        expect(resultado.textContent).toContain('Registro exitoso');
        expect(resultado.style.color).toBe('rgb(0, 120, 212)');
    });

    it('should accept edge case age of 0', () => {
        const resultado = document.getElementById('resultado');
        const form = document.getElementById('registroForm');
        
        // Fill in form with valid data
        document.getElementById('nombre').value = 'Juan';
        document.getElementById('apellidoPaterno').value = 'Pérez';
        document.getElementById('edad').value = '0';
        document.getElementById('genero').value = 'masculino';
        document.getElementById('pais').value = 'México';
        
        // Submit form
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(submitEvent);
        
        // Should show success message
        expect(resultado.textContent).toContain('Registro exitoso');
        expect(resultado.style.color).toBe('rgb(0, 120, 212)');
    });

    it('should accept edge case age of 100', () => {
        const resultado = document.getElementById('resultado');
        const form = document.getElementById('registroForm');
        
        // Fill in form with valid data
        document.getElementById('nombre').value = 'Juan';
        document.getElementById('apellidoPaterno').value = 'Pérez';
        document.getElementById('edad').value = '100';
        document.getElementById('genero').value = 'masculino';
        document.getElementById('pais').value = 'México';
        
        // Submit form
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(submitEvent);
        
        // Should show success message
        expect(resultado.textContent).toContain('Registro exitoso');
        expect(resultado.style.color).toBe('rgb(0, 120, 212)');
    });

    it('should reject age greater than 100', () => {
        const resultado = document.getElementById('resultado');
        const form = document.getElementById('registroForm');
        
        // Fill in form with invalid age
        document.getElementById('nombre').value = 'Juan';
        document.getElementById('apellidoPaterno').value = 'Pérez';
        document.getElementById('edad').value = '101';
        document.getElementById('genero').value = 'masculino';
        document.getElementById('pais').value = 'México';
        
        // Submit form
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(submitEvent);
        
        // Should show error message
        expect(resultado.textContent).toBe('La edad debe estar entre 0 y 100 años.');
        expect(resultado.style.color).toBe('red');
    });

    it('should reject age of 150', () => {
        const resultado = document.getElementById('resultado');
        const form = document.getElementById('registroForm');
        
        // Fill in form with invalid age
        document.getElementById('nombre').value = 'Juan';
        document.getElementById('apellidoPaterno').value = 'Pérez';
        document.getElementById('edad').value = '150';
        document.getElementById('genero').value = 'masculino';
        document.getElementById('pais').value = 'México';
        
        // Submit form
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(submitEvent);
        
        // Should show error message
        expect(resultado.textContent).toBe('La edad debe estar entre 0 y 100 años.');
        expect(resultado.style.color).toBe('red');
    });

    it('should reject negative age', () => {
        const resultado = document.getElementById('resultado');
        const form = document.getElementById('registroForm');
        
        // Fill in form with invalid age
        document.getElementById('nombre').value = 'Juan';
        document.getElementById('apellidoPaterno').value = 'Pérez';
        document.getElementById('edad').value = '-1';
        document.getElementById('genero').value = 'masculino';
        document.getElementById('pais').value = 'México';
        
        // Submit form
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(submitEvent);
        
        // Should show error message
        expect(resultado.textContent).toBe('La edad debe estar entre 0 y 100 años.');
        expect(resultado.style.color).toBe('red');
    });
});