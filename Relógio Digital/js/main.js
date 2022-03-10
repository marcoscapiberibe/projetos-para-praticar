setInterval(showTime, 1000);

function showTime () {
    let tempo = new Date(); 
    let hora = tempo.getHours();
    let min = tempo.getMinutes();
    let sec = tempo.getSeconds();
     am_pm = "AM";

    if (hora > 12) {
        hora -= 12;
        am_pm = "PM";
    }
    if (hora == 0) {
        hora = 12;
        am_pm = "AM";
    }

    hora = hora < 10 ? "0" + hora : hora + 10;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec + 10;

    let horaAtual = hora + ":" + min + ":" + sec + am_pm;

    document.getElementById("clock").innerHTML = horaAtual;
}
showTime();