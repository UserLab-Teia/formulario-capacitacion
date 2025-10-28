// app.js
window.addEventListener('DOMContentLoaded', function () {
    // Manejo del formulario de registro
    var formulario = document.getElementById('registroForm');
    var resultado = document.getElementById('resultado');
    formulario.addEventListener('submit', function (event) {
        // Validaciones previas antes de preventDefault
        event.preventDefault();
        // Obtener valores de los campos del formulario
        var nombreInput = document.getElementById('nombre');
        var apellidoPaternoInput = document.getElementById('apellidoPaterno');
        var edadInput = document.getElementById('edad');
        var generoInput = document.getElementById('genero');

        // Crear objeto usuario con los datos del formulario
        /**
         * Represents a user object with personal information.
         * @typedef {Object} Usuario
         * @property {string} nombre - The user's first name, trimmed of whitespace.
         * @property {string} apellidoPaterno - The user's paternal last name, trimmed of whitespace.
         * @property {number} edad - The user's age as an integer. NaN if not provided.
         * @property {string} genero - The user's gender.
         */
        var usuario = {
            nombre: nombreInput ? nombreInput.value.trim() : "",
            apellidoPaterno: apellidoPaternoInput ? apellidoPaternoInput.value.trim() : "",
            edad: edadInput ? parseInt(edadInput.value, 10) : NaN,
            genero: generoInput ? generoInput.value : ""
        };
        // Validar longitud del nombre
        if (usuario.nombre.length > 50) {
            resultado.textContent = 'El nombre no puede tener más de 50 caracteres.';
            resultado.style.color = 'red';
            return;
        }
        // Validar que todos los campos estén completos
        if (!usuario.nombre || !usuario.apellidoPaterno || isNaN(usuario.edad) || !usuario.genero) {
            resultado.textContent = 'Por favor, complete todos los campos correctamente.';
            resultado.style.color = 'red';
            return;
        }
        // Mostrar resultado del registro
        resultado.textContent = "Registro exitoso: ".concat(usuario.nombre, " ").concat(usuario.apellidoPaterno, ", Edad: ").concat(usuario.edad, ", Género: ").concat(usuario.genero);
        resultado.style.color = '#0078d4';
    });
});
