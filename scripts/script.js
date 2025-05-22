window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});



  const fechaObjetivo = new Date(2025, 5, 8, 0, 0, 0); // 1 de junio de 2025

    function sumarDosDias(fechaBase) {
    const nuevaFecha = new Date(fechaBase);
    nuevaFecha.setDate(nuevaFecha.getDate() + 2);
    return nuevaFecha;
    }
    
    function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const diferencia = fechaObjetivo - ahora;

    if (diferencia <= 0) {
    // Reiniciar la cuenta desde ahora + 2 días
    fechaObjetivo = sumarDosDias(new Date());
    return; // Se espera al próximo intervalo para actualizar
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("cuenta").innerHTML =
        `${String(dias).padStart(2, '0')} : ${String(horas).padStart(2, '0')} : ${String(minutos).padStart(2, '0')} : ${String(segundos).padStart(2, '0')}`;
    }

    const intervalo = setInterval(actualizarCuentaRegresiva, 1000);
    actualizarCuentaRegresiva();
