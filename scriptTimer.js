
//funzione

document.addEventListener("DOMContentLoaded", function () {
    const timerTextElement = document.getElementById("timer-text");
    const progressCircle = document.getElementById("progress");
    const totalTime = 10; // Tempo totale in secondi
    let timeRemaining = totalTime;

    const circumference = 2 * Math.PI * 45; // Calcola la circonferenza del cerchio
    progressCircle.style.strokeDasharray = circumference;

    function updateTimer() {
        if (timeRemaining <= 0) {
            timerTextElement.textContent = "Time stop";
            clearInterval(timerInterval); // Ferma il timer
            return;
        }
        timerTextElement.textContent = `Time remaining: ${timeRemaining} seconds`;

        // Aggiorna il progresso del cerchio
        const progress = (timeRemaining / totalTime) * circumference;
        progressCircle.style.strokeDashoffset = progress;

        timeRemaining--;
    }

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
});
