
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    function desenhaCirculo(x, y, raio, cor) {

        pincel.fillStyle = cor;
        pincel.beginPath();
        pincel.arc(x, y, raio, 0, 2 * Math.PI);
        pincel.fill();
    }
    function desenhaTexto(x , y, texto, cor, fonte) {

        var tela = document.querySelector('canvas');
        var pincel = tela.getContext('2d');

        pincel.font='80px Impact';
        pincel.fillStyle= cor;
        pincel.fillText(texto, x, y);    
    }

    pincel.fillStyle = 'lightblue';
    pincel.fillRect(0, 0, 1200, 600);
    desenhaCirculo(100, 50, 30, 'white');
    desenhaCirculo(130, 50, 36, 'white');
    desenhaCirculo(160, 50, 30, 'white');
    desenhaCirculo(170, 59, 40, 'white');
    desenhaCirculo(190, 50, 36, 'white');
    desenhaCirculo(210, 50, 30, 'white');

    desenhaCirculo(300,100, 30, 'white');
    desenhaCirculo(330,105, 38, 'white');
    desenhaCirculo(360,100, 30, 'white');
    desenhaCirculo(370,109, 40, 'white');
    desenhaCirculo(390,100, 34, 'white');
    desenhaCirculo(410,103, 35, 'white');

    desenhaCirculo(1000,110, 35, 'white');
    desenhaCirculo(1030,115, 38, 'white');
    desenhaCirculo(1050,100, 36, 'white');
    desenhaCirculo(1080,109, 40, 'white');
    desenhaCirculo(1100,100, 34, 'white');
    desenhaCirculo(1130,103, 35, 'white');

    desenhaCirculo(800, 57, 30, 'white');
    desenhaCirculo(830, 58, 36, 'white');
    desenhaCirculo(860, 59, 30, 'white');
    desenhaCirculo(870, 59, 40, 'white');
    desenhaCirculo(890, 61, 36, 'white');
    desenhaCirculo(910, 63, 30, 'white');

    desenhaCirculo(250, 1000, 500, 'green');
    desenhaCirculo(500, 1000, 500, 'green');
    desenhaCirculo(750, 1000, 500, 'green');
    desenhaCirculo(1000, 1000, 500, 'green');
    desenhaCirculo(0, 1000, 500, 'green');
    desenhaCirculo(1200, 1000, 500, 'green');

    desenhaCirculo(300, 300, 50, 'red');
    desenhaCirculo(300, 300, 40, 'white');
    desenhaCirculo(300, 300, 30, 'orange');
    desenhaCirculo(300, 300, 20, 'white');
    desenhaCirculo(300, 300, 10, 'red');