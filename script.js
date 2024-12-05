// Datos de las imágenes con sus contraseñas y enlaces
const imageData = {
    image1: { password: "05/08/2004", link: "https://www.canva.com/design/DAGYatuf5zg/A39UlojiDzt9J_m2UpUsUg/view?utm_content=DAGYatuf5zg&utm_campaign=designshare&utm_medium=link&utm_source=editor" }, // "QUERIDA LEIDY"
    image2: { password: "razones123", link: "https://www.canva.com/design/DAGYaC7MkiY/cUPmwuyJaNEqyM3W4zkLQA/view?utm_content=DAGYaC7MkiY&utm_campaign=designshare&utm_medium=link&utm_source=editor" }, // "RAZONES..."
    image3: { password: "zanahoria", link: "https://www.canva.com/design/DAGWmQsHF8k/g3eT5kaZ0UNFbB6Z_WNACg/view?utm_content=DAGWmQsHF8k&utm_campaign=designshare&utm_medium=link&utm_source=editor" } // "CARTA"
};

// Función para solicitar la contraseña y redirigir si es correcta
function promptPassword(imageId) {
    // Mostrar el campo de contraseña en el centro de la pantalla
    const passwordPrompt = document.getElementById('passwordPrompt');
    const passwordInput = document.getElementById('passwordInput');
    const passwordSubmit = document.getElementById('passwordSubmit');
    const passwordFeedback = document.getElementById('passwordFeedback');

    passwordPrompt.style.display = 'block';
    passwordInput.style.display = 'inline-block';
    passwordSubmit.style.display = 'inline-block';
    passwordFeedback.style.display = 'block'; // Mostrar mensaje de feedback

    // Limpiar mensaje previo
    passwordFeedback.textContent = '';

    // Función para manejar el envío de la contraseña
    passwordSubmit.onclick = function() {
        const userPassword = passwordInput.value;
        const imageInfo = imageData[imageId];

        if (userPassword === imageInfo.password) {
            // Cerrar el formulario de contraseña al ser correcta
            passwordPrompt.style.display = 'none';

            // Mostrar el mensaje de éxito
            const feedback = document.getElementById("feedback");
            feedback.textContent = "¡Correcto! Sabía que lo recordarías. 💚";
            feedback.style.color = "green";

            // Redirigir después de mostrar el mensaje
            setTimeout(function () {
                window.location.href = imageInfo.link; // Redirigir al enlace de la imagen
            }, 2000); // Se espera 2 segundos para que el mensaje se vea antes de redirigir
        } else {
            passwordFeedback.textContent = "Contraseña incorrecta. Inténtalo de nuevo."; // Mensaje de error
        }
    };
}

// Verificación de la fecha
let attempts = 0;
function checkDate() {
    const correctDate = "13/05/2024"; // La fecha correcta
    const userDate = document.getElementById("dateInput").value;
    const feedback = document.getElementById("feedback");

    if (userDate === correctDate) {
        window.location.href = "nextPage.html"; // Redirigir si la fecha es correcta
    } else {
        attempts++; // Aumentar los intentos
        switch (attempts) {
            case 1:
                feedback.textContent = "Si lo leíste?? (Te quedan 3 intentos)";
                break;
            case 2:
                feedback.textContent = "¿En serio lo leíste? No te creo (Te quedan 2 intentos)";
                break;
            case 3:
                feedback.textContent = "Si no lo has leído, te entiendo (Te queda 1 intento)";
                break;
            case 4:
                feedback.textContent = "La contraseña es esta: 13/05/2024";
                break;
            default:
                feedback.textContent = "😒 La fecha es esta: 13/05/2024 😒.";
        }

        // Mostrar mensaje de error en el centro de la pantalla
        const messageBox = document.createElement("div");
        messageBox.classList.add("error-message");
        messageBox.textContent = feedback.textContent;
        document.body.appendChild(messageBox);

        // Eliminar el mensaje después de 1.5 segundos
        setTimeout(() => {
            messageBox.remove();
        }, 1500);
    }
}

// Función para mostrar el formulario de contraseña al hacer clic en una imagen
function showPasswordPrompt(imageId) {
    const passwordPrompt = document.getElementById('passwordPrompt');
    const passwordInput = document.getElementById('passwordInput');
    const cancelButton = document.getElementById('cancelButton');
    const passwordFeedback = document.getElementById('passwordFeedback');
    
    // Mostrar el formulario de la contraseña
    passwordPrompt.style.display = 'block';
    passwordInput.focus();
    
    // Añadir el comportamiento del botón "Cancelar"
    cancelButton.onclick = function() {
        passwordPrompt.style.display = 'none';  // Ocultar el formulario de contraseña
        passwordFeedback.textContent = ''; // Limpiar mensaje de error
    };

    // Configurar la acción del botón "Enviar"
    passwordInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') { // Cuando el usuario presiona "Enter"
            const userPassword = passwordInput.value;
            const imageInfo = imageData[imageId];
            
            if (userPassword === imageInfo.password) {
                passwordFeedback.textContent = "¡Contraseña correcta! Redirigiendo...";
                passwordFeedback.style.color = "green";
                
                // Redirigir automáticamente sin esperar a presionar "Aceptar"
                setTimeout(function() {
                    window.location.href = imageInfo.link;
                }, 1000); // 1 segundo de retraso
            } else {
                passwordFeedback.textContent = "Contraseña incorrecta. Inténtalo de nuevo.";
                passwordFeedback.style.color = "red";
            }
        }
    });
}
