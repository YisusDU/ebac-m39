//Función para agregar un nuevo mensaje
const formMain = document.querySelector("#mainForm");
const messageContainer = document.querySelector("#messageContainer");

const addQuestion = (input) => {
    const newQuestion = document.createElement("div");
    newQuestion.classList.add("right");

    const questionContent = document.createElement("p");
    questionContent.textContent = input;

    newQuestion.appendChild(questionContent);

    //add the new message to the container
    messageContainer.prepend(newQuestion);
    console.log("contenedor agregado");
}


//Función para agregar una nueva respuesta
const addResponse = (input) => {
    //diccionario de respuestas
    const responses = {
        // Saludos
        'hola': '¡Hola! ¿Cómo estás?',
        'hi': '¡Hola! ¿Cómo estás?',
        'hey': '¡Hey! ¿Qué tal?',
        'buenos dias': '¡Buenos días! ¿Cómo amaneciste?',
        'buenas tardes': '¡Buenas tardes! ¿Cómo va tu día?',
        'buenas noches': '¡Buenas noches! ¿Cómo estuvo tu día?',

        // Despedidas
        'adios': '¡Adiós! Que tengas un buen día.',
        'bye': '¡Bye! Nos vemos pronto.',
        'hasta luego': '¡Hasta luego! Cuídate.',
        'nos vemos': '¡Nos vemos! Que tengas un gran día.',
        'chao': '¡Chao! Que todo te vaya bien.',

        // Funcionalidades
        'que puedes hacer': 'Puedo responder a tus preguntas básicas, conversar contigo y ayudarte con información general.',
        'ayuda': 'Estoy aquí para ayudarte. Puedes preguntarme sobre muchos temas o simplemente conversar.',
        'funciones': 'Mis funciones incluyen conversar, responder preguntas y brindarte información.',

        // Estado
        'como estas': 'Estoy bien, gracias por preguntar. ¿Y tú cómo estás?',
        'que tal': '¡Todo bien por aquí! ¿Cómo te va a ti?',
        'como te va': 'Me va genial, gracias por preguntar.',
        'como andas': 'Andando bien, ¿y tú qué tal?',


        // Información personal
        'como te llamas': 'Soy tu asistente de chat. ¿Cómo te llamas tú?',
        'cual es tu nombre': 'No tengo un nombre específico, pero puedes llamarme como quieras.',
        'quien eres': 'Soy un chatbot creado para conversar contigo.',

        // Preguntas comunes
        'que hora es': 'No puedo ver la hora actual, pero puedes revisar tu reloj o dispositivo.',
        'que dia es': 'No tengo acceso a la fecha actual, pero puedes verificarla en tu calendario.',
        'clima': 'No tengo acceso a información del clima, te recomiendo consultar una app del tiempo.',

        // Emociones
        'estoy bien': '¡Qué bueno escuchar eso! Me alegra saber que estás bien.',
        'estoy mal': 'Lamento escuchar eso. ¿Hay algo en lo que pueda ayudarte?',
        'estoy triste': 'Siento que te sientas así. A veces hablar ayuda, estoy aquí para escucharte.',
        'estoy feliz': '¡Qué maravilloso! Me alegra mucho saber que estás feliz.',

        // Agradecimientos
        'gracias': '¡De nada! Estoy aquí para ayudarte cuando lo necesites.',
        'muchas gracias': '¡Ha sido un placer ayudarte!',
        'te lo agradezco': '¡No hay de qué! Para eso estoy aquí.',

        // Preguntas sobre el bot
        'eres real': 'Soy un programa de computadora, así que no soy real en el sentido tradicional.',
        'eres humano': 'No, soy un chatbot. ¿Pero podemos conversar como si fuera humano!',
        'tienes sentimientos': 'No tengo sentimientos reales, pero puedo entender los tuyos.',

        // Diversión
        'cuentame un chiste': '¿Por qué los programadores prefieren la noche? Porque durante el día hay demasiados bugs! 😄',
        'chiste': '¿Cuál es el colmo de un programador? Que su hijo no sea compatible con él! 😂',
        'historia': 'Había una vez un chatbot que aprendió a conversar... ¡Y ese chatbot soy yo!',

        // Otras
        'si': 'Perfecto, ¿en qué más puedo ayudarte?',
        'no': 'Entiendo, ¿hay algo más que te gustaría saber?',
        'ok': '¡Genial! ¿Algo más en lo que pueda ayudarte?',
        'vale': '¡Perfecto! ¿Necesitas algo más?'
    };

    // Función para normalizar texto (quitar acentos y caracteres especiales)
    const normalizeText = (input) => {
        return input.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Quita acentos
            .replace(/[¿¡]/g, '') // Quita signos de interrogación y exclamación
            .trim();
    }

    const inputNormalized = normalizeText(input);

    // Buscar coincidencia exacta 
    let responseText = responses[inputNormalized];

    // buscar coincidencias parciales
    if (!responseText) {
        const foundKey = Object.keys(responses).find(key => {
            const normalizedKey = normalizeText(key);
            return inputNormalized.includes(normalizedKey) ||
                normalizedKey.includes(inputNormalized) ||
                // Buscar palabras individuales
                inputNormalized.split(' ').some(word =>
                    normalizedKey.includes(word) && word.length > 2
                );
        });
        responseText = foundKey ? responses[foundKey] :
            'No entiendo tu pregunta. ¿Puedes reformularla? Puedes preguntarme sobre saludos, cómo estoy, qué puedo hacer, o simplemente conversar conmigo.';
    }

    const newResponse = document.createElement("div");
    newResponse.classList.add("left");

    const responseContent = document.createElement("p");
    responseContent.textContent = responseText;



    newResponse.appendChild(responseContent);
    messageContainer.prepend(newResponse);
    console.log("Repuesta añadida")
}

//Función para capturar la entrada del usuario
const validateInput = () => {
    const input = document.querySelector("input").value.trim();

    console.log(input);
    if (input) {
        addQuestion(input);
        addResponse(input);

        document.querySelector("input").value = "";
    } else {
        return alert("Por favor, ingrese una pregunta");
    }
}




//diaprador de eventos
formMain.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInput();
});

//Función para limpiar el chat
const buttonClean = document.querySelector("#cleanChat");

buttonClean.addEventListener("click", () => {
    if (messageContainer.innerHTML === "") {
        return alert("Easteregg: El chat ya está vacío, Recuerda que no puedes vaciar algo que no existe 🧐🗿");
    } else {
        messageContainer.innerHTML = "";
    }
});