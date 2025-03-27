const chatMessages = document.getElementById('chat-messages');
        const messageInput = document.getElementById('message-input');
        const sendButton = document.getElementById('send-button');

        const preguntas = {
            "que es el dengue": "El dengue es una enfermedad infecciosa transmitida por mosquitos del género Aedes, principalmente Aedes aegypti. Es causada por un virus y puede ser potencialmente grave.",
            "sintomas del dengue": "Los síntomas principales incluyen: fiebre alta, dolor de cabeza intenso, dolor detrás de los ojos, dolores musculares y articulares, náuseas, vómitos y erupción cutánea.",
            "como se transmite": "El dengue se transmite a través de la picadura de mosquitos Aedes infectados. Principalmente el Aedes aegypti, que suele picar durante el día.",
            "como prevenir": "Para prevenir el dengue: elimina agua estancada, usa repelente, instala mallas en ventanas, usa ropa que cubra brazos y piernas, y mantén limpios patios y jardines.",
            "tratamiento": "No existe un tratamiento específico. Se recomienda descansar, mantenerse hidratado, tomar medicamentos para bajar la fiebre (siguiendo indicaciones médicas) y consultar a un profesional de salud.",
            "lugares de riesgo": "El dengue es más común en regiones tropicales y subtropicales como América Latina, Sudeste Asiático, y algunas partes de África.",
            "cuando ir al medico": "Debes ir al médico si tienes fiebre alta, signos de deshidratación, dolor abdominal intenso, sangrado o si los síntomas empeoran."
        };

        function agregarMensaje(mensaje, tipo) {
            const mensajeDiv = document.createElement('div');
            mensajeDiv.classList.add(tipo);
            mensajeDiv.textContent = mensaje;
            chatMessages.appendChild(mensajeDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function responderPregunta(pregunta) {
            const preguntaMinusculas = pregunta.toLowerCase();
            let respuesta = "Lo siento, no tengo información específica sobre esa pregunta. ¿Puedes reformularla?";

            for (let key in preguntas) {
                if (preguntaMinusculas.includes(key)) {
                    respuesta = preguntas[key];
                    break;
                }
            }

            return respuesta;
        }

        sendButton.addEventListener('click', enviarMensaje);
        messageInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                enviarMensaje();
            }
        });

        function enviarMensaje() {
            const mensaje = messageInput.value.trim();
            if (mensaje) {
                agregarMensaje(mensaje, 'user-message');
                const respuesta = responderPregunta(mensaje);
                setTimeout(() => {
                    agregarMensaje(respuesta, 'bot-message');
                }, 500);
                messageInput.value = '';
            }
        }