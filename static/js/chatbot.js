// import { useReactMediaRecorder } from "react-media-recorder";

function getTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if(hours < 10){
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time
}

function greetingMessage(){
    let firstMessage = 'Hola, ¿en qué te puedo ayudar?'
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $('#chat-timestamp').append(time);

    document.getElementById('userInput').scrollIntoView(false);
}

greetingMessage();

function getHardResponse(userText){

    let botResponse = 'I like turtles!';

    if (userText == ' '){
        botResponse = 'Ingresa un mensaje correctamente. Por favor.'
    }

    if (userText == "Necesito información de una beca"){
        botResponse = '¿Qué tipo de beca te interesa?'
    } else if ( userText == "Beca de Líderes"){
        botResponse = 'Una beca que se les da a los mejores alumnos, excluyendo a Abraham. Ahí sí la cagamos.'
    } else if (userText == "Abraham"){
        botResponse = 'Dice que es el mejor del mundo y nunca le ha ganado a Charlie.'
    }

    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';

    $('#chatbox').append(botHtml);
    document.getElementById('chat-bar-bottom').scrollIntoView(true);
}

function getResponse(){
    let userText = $('#textInput').val();

    if (userText == ''){
        userText = ' ';
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
    $('#textInput').val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText)
    }, 500)
}

function sendToDjango(){

    userText = $('#textInput').val();

    $.ajax({
        type:'POST',
        url: '/test/',
        headers: {'X-CSRFToken': getCookie('csrftoken'),
                'X-Requested-With': 'XMLHttpRequest'
        },
        data: {
            'text': userText
        },
        dataType: 'json'
        }).then(
            function(response){
                console.log(response)
            }
        )
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function sendButton(){
    sendToDjango();
    getResponse();
};

$("#textInput").keypress(function(e){
    if(e.which == 13){
        sendToDjango();
        getResponse();
    }
});