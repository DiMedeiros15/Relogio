function updateClock() {
    const digitalClock = document.querySelector('.digital');
    const ponteiroSegundos = document.querySelector('.p_s');
    const ponteiroMinutos = document.querySelector('.p_m');
    const ponteiroHoras = document.querySelector('.p_h');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const digitalTime = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;
    digitalClock.textContent = digitalTime;

    function fixZero(time){
        return time < 10 ? `0${time}` : time;
    }

    const segundoGrau = ((360 / 60) * seconds) - 90;
    const minutoGrau = ((360 / 60) * minutes) - 90;
    const horaGrau = ((360 / 12 ) * hours) - 90;

    ponteiroSegundos.style.transform = `rotate(${segundoGrau}deg)`;
    ponteiroMinutos.style.transform = `rotate(${minutoGrau}deg)`;
    ponteiroHoras.style.transform = `rotate(${horaGrau}deg)`;
}

// Atualiza o relógio digital e analógico a cada segundo
setInterval(updateClock, 1000);

// Chama a função uma vez para exibir o tempo imediatamente
updateClock();