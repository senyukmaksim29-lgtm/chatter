const chatWindow = document.getElementById('chat-window');
const buttons = document.querySelectorAll('.reply-btn');


const botAnswers = {
    "Привіт! Як справи?": "У мене все чудово, я ж просто код! 🤖 А як твої справи?",
    "Який сьогодні день?": "Сьогодні неймовірний день! На моєму календарі зараз 2026 рік, час кодити щось круте! 🚀",
    "Розкажи анекдот!": "Сидять два рибалки. Один каже:Щось не клює,Може, просто треба було вудки розмотати?!"
    ,"Які ігри порадиш?": "Ось найпопулярніші ігри🎮:Minecraft,Counter strike 2,GTA V,Brawl stars"
    ,"Розкажи цікавий факт!": "Маса Юпітера у 2,5 рази перевищує масу всіх інших планет Сонячної системи, разом узятих"
    ,"Хто ти такий?": "Я просто розумний набір коду😁"
    ,"Дай пораду на день": "Замість того, щоб намагатися зробити все, вибери лише три головні справи на сьогодні."

};

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const userText = this.getAttribute('data-reply');
        
       
        addMessage(userText, 'user');
        
        this.style.display = 'none';

        setTimeout(() => {
            const botText = botAnswers[userText] || "Ой, я не знаю, що відповісти на це... 🤷‍♂️";
            addMessage(botText, 'bot');
        }, 800);
    });
});


function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = text;
    msgDiv.classList.add('message');
    
   
    if (sender === 'user') {
        msgDiv.classList.add('user-msg');
    } else {
        msgDiv.classList.add('bot-msg');
    }
    
    chatWindow.appendChild(msgDiv);
    
    chatWindow.scrollTop = chatWindow.scrollHeight;


}