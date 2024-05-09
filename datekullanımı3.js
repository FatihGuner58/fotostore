const name = prompt("Lütfen isminizi girin:");

const welcomeMessage = document.createElement("div");
welcomeMessage.textContent = `Merhaba, ${name}! Hoş geldiniz.`;
document.body.appendChild(welcomeMessage);

function showTime() {
    const now = new Date();
    const day = now.toLocaleDateString('tr-TR', { weekday: 'long' });
    const time = now.toLocaleTimeString('tr-TR');
    const clock = document.createElement("div");
    clock.textContent = `Bugün ${day}, Saat ${time}`;
    
    
    const existingClock = document.getElementById("clock");
    if (existingClock) {
        document.body.replaceChild(clock, existingClock);
    } else {
        clock.id = "clock";
        document.body.appendChild(clock);
    }
}

showTime();
// setInterval(showTime, 1000); BU KOD İSE SANİYEYİ HER SEFERİNDE 1 ER 1 ER ARTIRIR