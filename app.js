numeroPregunta = 0;

facultades = {
    economia: { puntos: 0, nombre: 'Economía' },
    ingenieria: { puntos: 0, nombre: 'Ingeniería' },
    artes: { puntos: 0, nombre: 'Artes' },
    medicina: { puntos: 0, nombre: 'Medicina' },
    humanidades: { puntos: 0, nombre: 'Humanidades' }
}

preguntas = [
    p1 = {
        pregunta: 'De las computadoras, lo que más me motiva es:',
        aDesc: 'Hacer negocios vía Internet ',
        aFacultad: 'Economia',
        bDesc: 'Programas computacionales en mi equipo',
        bFacultad: 'Ingenieria'
    },
    p2 = {
        pregunta: 'Mejor tener:',
        aDesc: 'Una calculadora financiera ',
        aFacultad: 'Economia',
        bDesc: 'Un microscopio',
        bFacultad: 'Medicina'
    },
    p3 = {
        pregunta: 'Si tuviera la oportunidad de viajar, prefiero conocer:',
        aDesc: 'La bolsa de valores de Nueva York ',
        aFacultad: 'Economia',
        bDesc: 'El Museo del Louvre de Paris',
        bFacultad: 'Humanidades'
    },
    p4 = {
        pregunta: 'Me gusta más: ',
        aDesc: 'Hacer experimentos en un laboratorio químico: ',
        aFacultad: 'Medicina',
        bDesc: 'Armar y desarmar computadores',
        bFacultad: 'Ingenieria'
    },
    p5 = {
        pregunta: 'Las ideas más interesantes están relacionadas con:',
        aDesc: 'La Computación',
        aFacultad: 'Ingenieria',
        bDesc: 'El arte',
        bFacultad: 'Artes'
    },
    p6 = {
        pregunta: 'En una salida a terreno, me interesaría conocer:',
        aDesc: 'El museo de Arte Contemporáneo ',
        aFacultad: 'Artes',
        bDesc: 'El Instituto Médico Legal',
        bFacultad: 'Medicina'
    },
    p7 = {
        pregunta: 'Como tema de conversación preﬁero:',
        aDesc: 'Las diferencias y alcances entre la música clásica y el jazz:',
        aFacultad: 'Artes',
        bDesc: 'El aumento del dólar y como afecta el mundo',
        bFacultad: 'Economia'
    },
    p8 = {
        pregunta: 'Para conocer el desarrollo de una cultura, observaría de preferencia:',
        aDesc: 'El desarrollo del pensamiento ﬁlosóﬁco',
        aFacultad: 'Humanidades',
        bDesc: 'El desarrollo de las artes',
        bFacultad: 'Artes'
    },
    p9 = {
        pregunta: 'Si tuviese que trabajar en el área agrícola, elegiría ser:',
        aDesc: 'Supervisor y encargado de recursos humanos y capacitación  ',
        aFacultad: 'Humanidades',
        bDesc: 'Planiﬁcador de un sistema de riego eﬁciente',
        bFacultad: 'Ingenieria'
    },
    p10 = {
        pregunta: 'Si tuviera que presentar un proyecto artístico, probablemente sería:',
        aDesc: 'Un modelo anatómico',
        aFacultad: 'Medicina',
        bDesc: 'Un robot musical',
        bFacultad: 'Ingenieria'
    }

]

console.log(preguntas[0]);

function next() {

    if (numeroPregunta <= preguntas.length - 1) {


        //Actualizar pregunta
        let pregunta = document.querySelector('.pregunta');
        pregunta.innerHTML = preguntas[numeroPregunta].pregunta;

        //Actualizar descripciones
        let descA = document.querySelector('.adescription');
        descA.innerHTML = preguntas[numeroPregunta].aDesc;
        let descB = document.querySelector('.bdescription');
        descB.innerHTML = preguntas[numeroPregunta].bDesc;

        //Actualizar imágenes
        let imagenA = document.getElementById('a');
        let imagenB = document.getElementById('b');

        switch (numeroPregunta) {
            case 0:
                imagenA.style.backgroundImage = "url(" + "assets/" + "P1A.jpg" + ")"
                imagenB.style.backgroundImage = "url(" + "assets/" + "P1B.jpeg" + ")"
                break;
            case 1:
                imagenA.style.backgroundImage = "url(" + "assets/" + "P2A.jpeg" + ")"
                imagenB.style.backgroundImage = "url(" + "assets/" + "P2B.jpeg" + ")"
                break;
            case 2:
                imagenA.style.backgroundImage = "url(" + "assets/" + "P3A.jpg" + ")"
                imagenB.style.backgroundImage = "url(" + "assets/" + "P3B.jpeg" + ")"
                break;
            case 3:
                imagenA.style.backgroundImage = "url(" + "assets/" + "P4A.jpg" + ")"
                imagenB.style.backgroundImage = "url(" + "assets/" + "P4B.jpg" + ")"
                break;
            case 4:
                imagenA.style.backgroundImage = "url(" + "assets/" + "P5A.jpg" + ")"
                imagenB.style.backgroundImage = "url(" + "assets/" + "P5B.jpg" + ")"
                break;
            case 5:
                imagenA.style.backgroundImage = "url(" + "assets/" + "P6A.jpg" + ")"
                imagenB.style.backgroundImage = "url(" + "assets/" + "P6B.png" + ")"
                break;
            case 6:
                imagenA.style.backgroundImage = "url(" + "assets/" + "P7A.jpg" + ")"
                imagenB.style.backgroundImage = "url(" + "assets/" + "P7B.jpeg" + ")"
                break;
            case 7:
                imagenA.style.backgroundImage = "url(" + "assets/" + "P8A.jpg" + ")"
                imagenB.style.backgroundImage = "url(" + "assets/" + "P8B.jpg" + ")"
                break;
            case 8:
                imagenA.style.backgroundImage = "url(" + "assets/" + "P9A.jpg" + ")"
                imagenB.style.backgroundImage = "url(" + "assets/" + "P9B.jpg" + ")"
                break;
            case 9:
                imagenA.style.backgroundImage = "url(" + "assets/" + "P10A.jpg" + ")"
                imagenB.style.backgroundImage = "url(" + "assets/" + "P10B.png" + ")"
                break;

            default:
                break;
        }

    }
}

function onclickA() {
    if (numeroPregunta <= preguntas.length - 1) {
        switch (preguntas[numeroPregunta].aFacultad) {
            case 'Economia':

                facultades.economia.puntos++;
                break;
            case 'Ingenieria':
                facultades.ingenieria.puntos++;
                break;
            case 'Medicina':
                facultades.medicina.puntos++;
                break;
            case 'Artes':
                facultades.artes.puntos++;
                break;
            case 'Humanidades':
                facultades.humanidades.puntos++;
                break;
            default:
                break;
        }
        next();

    }
    if (numeroPregunta == preguntas.length) {
        result();
    }
    numeroPregunta++;
}

function onclickB() {
    if (numeroPregunta <= preguntas.length - 1) {
        switch (preguntas[numeroPregunta].bFacultad) {
            case 'Economia':

                facultades.economia.puntos++;
                break;
            case 'Ingenieria':
                facultades.ingenieria.puntos++;
                break;
            case 'Medicina':
                facultades.medicina.puntos++;
                break;
            case 'Artes':
                facultades.artes.puntos++;
                break;
            case 'Humanidades':
                facultades.humanidades.puntos++;
                break;
            default:
                break;
        }
        next();

    }
    if (numeroPregunta == preguntas.length) {
        result();
    }
    numeroPregunta++;
}

function result() {
    var name = null;
    var max = 0;
    for (const facultad of Object.keys(facultades)) {
        if (facultades[facultad] != null) {
            if (facultades[facultad].puntos > max) {
                max = facultades[facultad].puntos;
                name = facultades[facultad].nombre;
            }
        }
    }

    var strGanador = `La facultad con que tienes mayor afinidad es: ${name}`
    console.log(strGanador);
    let overlayWin = document.querySelector(".overlayWin");
    overlayWin.style.display = (overlayWin.style.display != "block") ? "block" : "none";
    let popupWin = document.querySelector(".popupWin > h2");
    popupWin.innerHTML = strGanador;

    console.log("La facultad con que tienes mayor afinidad es: " + name);
}
