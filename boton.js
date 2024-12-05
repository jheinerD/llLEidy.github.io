window.onload = () => {
    console.log("Página cargada"); // Verificar si la página se carga correctamente

    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const yesMessage = document.getElementById('yesMessage');
    const noMessage = document.getElementById('noMessage');
    const messageContent = document.querySelector('.message-content');
    const questionMessage = document.getElementById('questionMessage');
    const viewOption = document.getElementById('viewOption');
    const nextPage = document.getElementById('nextPage');
    const viewFlowersBtn = document.getElementById('viewFlowersBtn');
    const viewFlowersbtn = document.getElementById('viewFlowersbtn'); // Este es el botón "No" de la sección "¿Quieres ver algo?"

    let noClicks = 0; // Contador de clics en "No"

    // Evento para el botón "Sí"
    yesBtn.addEventListener('click', () => {
        console.log("Botón Sí presionado");
        nextPage.classList.add('hidden');
        yesMessage.classList.remove('hidden');
        setTimeout(() => {
            yesMessage.classList.add('hidden');
            viewOption.classList.remove('hidden');
        }, 2000); // Mostrar la opción después de 2 segundos
    });

    // Evento para el botón "No"
    noBtn.addEventListener('click', () => {
        noClicks++; // Incrementa el contador
        let messageText;
        let imageSrc;

        // Mostrar en la consola cuántas veces se ha presionado el botón "No"
        console.log('Número de clics en NO pagina 1: #',noClicks);

        // Cambiar el mensaje y la imagen según el número de clics
        if (noClicks === 1) {
            messageText = "🥺 En serio no quieres?";
            imageSrc = "Leidydogtora.jpg";
        } else if (noClicks === 2) {
            messageText = "😅 ¿Qué tal si lo reconsideras?";
            imageSrc = "Leidyenf.jpg";
        } else if (noClicks === 3) {
            messageText = "😔 Ok, ya entendí. Pero, ¿estás segura?";
            imageSrc = "Libro.png";
        } else {
            messageText = "💚 Gracias por todo.";
            imageSrc = "Libro.png";
            noClicks = 0; // Reinicia el contador después del último mensaje
        }

        // Mostrar el nuevo mensaje y la imagen
        messageContent.innerHTML = `<img src="${imageSrc}" alt="imagen mensaje"><p>${messageText}</p>`;
        noMessage.classList.remove('hidden'); // Muestra el mensaje
        
        // Animación del mensaje "No"
        noMessage.classList.add('fade'); // Añadimos clase de animación
        setTimeout(() => {
            noMessage.classList.remove('fade'); // Quitamos la animación
            noMessage.classList.add('hidden'); // Ocultamos el mensaje después de 2 segundos
        }, 2000); // Tiempo de animación

        // Obtener la hora y fecha exacta en que se hizo clic
        const now = new Date();
        const timestamp = now.toLocaleString(); // Devuelve la fecha y hora exacta como string

        console.log('Hora exacta de clic en NO:', timestamp); // Muestra la hora en la consola
    });

    // Evento para el botón "Sí" de "¿Quieres ver algo?"
    viewFlowersBtn.addEventListener('click', () => {
        window.location.href = 'flower.html'; // Redirige a otra página donde se muestran flores
    });

    // Evento para el botón "No" de "¿Quieres ver algo?"
    viewFlowersbtn.addEventListener('click', () => {
        const messageBox = document.createElement('div');
        messageBox.classList.add('center-message'); // Establece el estilo del mensaje en el centro

        // Crear el mensaje de "Enserio Leidy?"
        const messageText = document.createElement('p');
        messageText.textContent = 'Enserio Leidy?';
        messageBox.appendChild(messageText);

        // Agregar el mensaje al body
        document.body.appendChild(messageBox);

        // Eliminar el mensaje después de 3 segundos
        setTimeout(() => {
            messageBox.remove();
        }, 3000); // El mensaje desaparecerá después de 3 segundos
    });
};
