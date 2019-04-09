
var escenaNro = 0;

var transiciones = {

    transicion1: {
        animEscenaSale: '',
        animEscenaEntra: '<a-animation attribute="scale" direction="alternate" dur="4000" easing="ease-in" from="0 0 0" to="10 10 -10" repeat="0"></a-animation>' +
            '<a-animation attribute="position" direction="alternate" dur="4000" easing="ease-out" from="0 1.5 -12" to="0 1.5 0" repeat="0"></a-animation>' +
            '<a-animation attribute="rotation" direction="alternate" dur="5000" easing="ease-out" from="-260 0 0" to="0 430 0" repeat="0"></a-animation>',
        posPortal: [3, 0, -2.5],
        rotPortal: [0, -20, 0],
        pathSrc: '#pathEscena1',

        contSubtitulo1: 'Antigua Biblioteca Nacional',
        contSubtitulo2: 'México 564, Monserrat',
        contSubtitulo3: 'Buenos Aires.',
        contSubtitulo4: '',
        contSubtitulo5: '',
        contSubtitulo6: '',
        contSubtitulo7: '',
        posSubtitulo1: [-1.5, 3, -2],
        posSubtitulo2: [-1.2, 2.5, -3],
        posSubtitulo3: [-.8, 2, -3],
        posSubtitulo4: [0, 0, 0],
        posSubtitulo5: [0, 0, 0],
        posSubtitulo6: [0, 0, 0],
        posSubtitulo7: [0, 0, 0],
        rotSubtitulo1: [0, 0, 0],
        rotSubtitulo2: [0, 0, 0],
        rotSubtitulo3: [0, 0, 0],
        rotSubtitulo4: [0, 0, 0],
        rotSubtitulo5: [0, 0, 0],
        rotSubtitulo6: [0, 0, 0],
        rotSubtitulo7: [0, 0, 0],

        audioSrc: '<a-entity sound="src: sound/audio-1_borges.mp3; autoplay: true; volume: 3;"></a-entity>'
    },

    transicion2: {
        animEscenaSale: '<a-animation attribute="scale" begin="1500" dur="0" easing="linear" to="0 0 0" repeat="0"></a-animation>',
        animEscenaEntra: '<a-animation attribute="scale" dur="0" easing="linear" to="9 9 -9" repeat="0"></a-animation>' +
            '<a-animation attribute="position" direction="alternate" dur="2000" easing="linear" to="0 0 0" repeat="0"></a-animation>',
        posPortal: [4, -2, 4.2],
        rotPortal: [0, 80, 0],
        pathSrc: '#pathEscena2',

        contSubtitulo1: 'Fue inaugurada en 1902 por el',
        contSubtitulo2: 'presidente Julio Argentino Roca.',

        contSubtitulo3: 'El edificio originalmente fue',
        contSubtitulo4: 'creado para ubicar a la',
        contSubtitulo5: 'Lotería de Beneficencia.',
        contSubtitulo6: 'Por eso, hasta ahora, la escalera',
        contSubtitulo7: 'está decorada con bolilleros.',
        posSubtitulo1: [0.5, 3, -2],
        posSubtitulo2: [0.5, 2.5, -2],
        posSubtitulo3: [6, 1, 0],
        posSubtitulo4: [6, .5, 0],
        posSubtitulo5: [6, 0, 0],
        posSubtitulo6: [6, -.5, 0],
        posSubtitulo7: [6, -1, 0],
        rotSubtitulo1: [0, -17, 0],
        rotSubtitulo2: [0, -17, 0],
        rotSubtitulo3: [0, -60, 0],
        rotSubtitulo4: [0, -60, 0],
        rotSubtitulo5: [0, -60, 0],
        rotSubtitulo6: [0, -60, 0],
        rotSubtitulo7: [0, -60, 0],

        audioSrc: '<a-entity sound="src: sound/audio-2_borges.mp3; autoplay: true; volume: 3;"></a-entity>'
    },

    transicion3: {
        animEscenaSale: '<a-animation attribute="opacity" dur="1500" easing="linear" to="0" repeat="0"></a-animation>' +
            '<a-animation attribute="scale" dur="1000" easing="linear" to="0 0 0" repeat="0"></a-animation>',
        animEscenaEntra: '<a-animation attribute="scale" direction="alternate" dur="2000" easing="linear" to="9 9 -9" repeat="0"></a-animation>' +
            '<a-animation attribute="position" direction="alternate" dur="2000" easing="linear" to="0 0 0" repeat="0"></a-animation>',
        posPortal: [-8, 0, 2],
        rotPortal: [0, 90, 0],
        pathSrc: '#pathEscena3',

        contSubtitulo1: 'En 1955, Jorge Luis Borges fue nombrado',
        contSubtitulo2: 'director de la biblioteca.',
        contSubtitulo3: 'Trabajó en este lugar durante 18 años.',
        contSubtitulo4: '',
        contSubtitulo5: '',
        contSubtitulo6: '',
        contSubtitulo7: '',
        posSubtitulo1: [-2.8, 2.3, 0],
        posSubtitulo2: [-2, 2, 0],
        posSubtitulo3: [-2.7, 1.7, 0],
        posSubtitulo4: [0, 0, 0],
        posSubtitulo5: [0, 0, 0],
        posSubtitulo6: [0, 0, 0],
        posSubtitulo7: [0, 0, 0],
        rotSubtitulo1: [0, 0, 0],
        rotSubtitulo2: [0, 0, 0],
        rotSubtitulo3: [0, 0, 0],
        rotSubtitulo4: [0, 0, 0],
        rotSubtitulo5: [0, 0, 0],
        rotSubtitulo6: [0, 0, 0],
        rotSubtitulo7: [0, 0, 0],

        audioSrc: '<a-entity sound="src: sound/audio-3_borges.mp3; autoplay: true; volume: 3;"></a-entity>'
    },

    transicion4: {
        animEscenaSale: '<a-animation attribute="material.opacity" direction="alternate" begin="2000" dur="1000" easing="linear" to="0" repeat="0"></a-animation>',
        animEscenaEntra: '<a-animation attribute="scale" direction="alternate" dur="3000" easing="linear" to="10 10 -10" repeat="0"></a-animation>' +
            '<a-animation attribute="position" direction="alternate" dur="3000" easing="linear" to="0 0 0" repeat="0"></a-animation>',
        posPortal: [.8, 0, -8],
        rotPortal: [0, 0, 0],
        pathSrc: '#pathEscena4',

        contSubtitulo1: 'Mirá con atención.',
        contSubtitulo2: 'En uno de los anaqueles de',
        contSubtitulo3: 'esta sala puede estar',
        contSubtitulo4: '“El libro de arena”.',
        contSubtitulo5: '',
        contSubtitulo6: '',
        contSubtitulo7: '',
        posSubtitulo1: [3, 2, 2],
        posSubtitulo2: [5, 1.5, .8],
        posSubtitulo3: [5, 1, 1.1],
        posSubtitulo4: [5, .5, 1.1],
        posSubtitulo5: [0, 0, 0],
        posSubtitulo6: [0, 0, 0],
        posSubtitulo7: [0, 0, 0],
        rotSubtitulo1: [0, -75, 0],
        rotSubtitulo2: [0, -75, 0],
        rotSubtitulo3: [0, -75, 0],
        rotSubtitulo4: [0, -75, 0],
        rotSubtitulo5: [0, 0, 0],
        rotSubtitulo6: [0, 0, 0],
        rotSubtitulo7: [0, 0, 0],

        audioSrc: '<a-entity sound="src: sound/audio-4_borges.mp3; autoplay: true; volume: 3;"></a-entity>'
    },

    transicion5: {
        animEscenaSale: '<a-animation attribute="scale" direction="alternate" dur="2000" easing="linear" to="0 0 0" repeat="0"></a-animation>' +
            '<a-animation attribute="position"  direction="alternate" dur="2000" easing="linear" to="15 0 -9" repeat="0"></a-animation>',
        animEscenaEntra: '',
        posPortal: [0, 0, 0],
        rotPortal: [0, 0, 0],
        pathSrc: '',
        contSubtitulo1: 'Mirá con atención.',
        contSubtitulo2: 'En uno de los anaqueles de',
        contSubtitulo3: 'esta sala puede estar',
        contSubtitulo4: '“El libro de arena”.',
        contSubtitulo5: '',
        contSubtitulo6: '',
        contSubtitulo7: '',
        posSubtitulo1: [0, 0, 0],
        posSubtitulo2: [0, 0, 0],
        posSubtitulo3: [0, 0, 0],
        posSubtitulo4: [0, 0, 0],
        posSubtitulo5: [0, 0, 0],
        posSubtitulo6: [0, 0, 0],
        posSubtitulo7: [0, 0, 0],
        rotSubtitulo1: [0, 0, 0],
        rotSubtitulo2: [0, 0, 0],
        rotSubtitulo3: [0, 0, 0],
        rotSubtitulo4: [0, 0, 0],
        rotSubtitulo5: [0, 0, 0],
        rotSubtitulo6: [0, 0, 0],
        rotSubtitulo7: [0, 0, 0],
        audioSrc: ''
    }

};

function cambioEscena() {

    console.log('escenaNro ' + escenaNro);

    cursor.setAttribute('opacity', 1);
    portal.setAttribute('scale', {
        x: 0,
        y: 0,
        z: 0
    });

    if (escenaNro === 0) {
        setTimeout(function() {
            path.setAttribute('scale', {
                x: 1,
                y: 1,
                z: 1
            });
        }, 5000);
    }

    if (escenaNro === 4) {

        cursor.setAttribute('opacity', 0);
        path.setAttribute('scale', {
            x: 0,
            y: 0,
            z: 0
        });

        subtitulo1.setAttribute('scale', {
            x: 0,
            y: 0,
            z: 0
        });
        subtitulo2.setAttribute('scale', {
            x: 0,
            y: 0,
            z: 0
        });
        subtitulo3.setAttribute('scale', {
            x: 0,
            y: 0,
            z: 0
        });
        subtitulo4.setAttribute('scale', {
            x: 0,
            y: 0,
            z: 0
        });

        var posicion = Object.keys(transiciones)[escenaNro];
        document.getElementsByClassName("escena")[(escenaNro - 1)].innerHTML = transiciones[posicion].animEscenaSale;

        tituloCierre.setAttribute('scale', {
            x: 1,
            y: 1,
            z: 1
        });
        tituloCierre.innerHTML =
            '<a-animation attribute="opacity" from="0" to="1" dur="5000"></a-animation>' +
            '<a-animation attribute="opacity" from="1" to="0" begin="5000" dur="5000"></a-animation>';

        var cierres = document.querySelectorAll('.cierre');
        for (var i = 0; i < cierres.length; i++) {
            cierres[i].setAttribute('scale', {
                x: 1,
                y: 1,
                z: 1
            });
            cierres[i].innerHTML =
                '<a-animation attribute="opacity" from="0" to="1" begin="10000" dur="5000"></a-animation>' +
                '<a-animation attribute="visible" begin="10000" to="true"></a-animation>' +
                '<a-animation attribute="opacity" from="1" to="0" begin="20000" dur="5000"></a-animation>';
        }

        return false;
    }

    var posicion = Object.keys(transiciones)[escenaNro];
    aEscena(
        transiciones[posicion].animEscenaSale,
        transiciones[posicion].animEscenaEntra,
        transiciones[posicion].posPortal,
        transiciones[posicion].rotPortal,
        transiciones[posicion].pathSrc,

        transiciones[posicion].contSubtitulo1,
        transiciones[posicion].contSubtitulo2,
        transiciones[posicion].contSubtitulo3,
        transiciones[posicion].contSubtitulo4,
        transiciones[posicion].contSubtitulo5,
        transiciones[posicion].contSubtitulo6,
        transiciones[posicion].contSubtitulo7,

        transiciones[posicion].posSubtitulo1,
        transiciones[posicion].posSubtitulo2,
        transiciones[posicion].posSubtitulo3,
        transiciones[posicion].posSubtitulo4,
        transiciones[posicion].posSubtitulo5,
        transiciones[posicion].posSubtitulo6,
        transiciones[posicion].posSubtitulo7,

        transiciones[posicion].rotSubtitulo1,
        transiciones[posicion].rotSubtitulo2,
        transiciones[posicion].rotSubtitulo3,
        transiciones[posicion].rotSubtitulo4,
        transiciones[posicion].rotSubtitulo5,
        transiciones[posicion].rotSubtitulo6,
        transiciones[posicion].rotSubtitulo7,

        transiciones[posicion].audioSrc
    );
    escenaNro++;
}

function mostrarPortal() {
    portal.setAttribute('scale', {
        x: 1,
        y: 1,
        z: 1
    });
}

function aEscena(animEscenaSale, animEscenaEntra, posPortal, rotPortal, pathSrc,

    contSubtitulo1,
    contSubtitulo2,
    contSubtitulo3,
    contSubtitulo4,
    contSubtitulo5,
    contSubtitulo6,
    contSubtitulo7,

    posSubtitulo1,
    posSubtitulo2,
    posSubtitulo3,
    posSubtitulo4,
    posSubtitulo5,
    posSubtitulo6,
    posSubtitulo7,

    rotSubtitulo1,
    rotSubtitulo2,
    rotSubtitulo3,
    rotSubtitulo4,
    rotSubtitulo5,
    rotSubtitulo6,
    rotSubtitulo7,

    audioSrc) {

    if (escenaNro > 0) document.getElementsByClassName("escena")[(escenaNro - 1)].innerHTML = animEscenaSale;
    document.getElementsByClassName("escena")[escenaNro].innerHTML = animEscenaEntra;

    path.setAttribute('src', pathSrc);

    subtitulo1.setAttribute('text', 'text:' + contSubtitulo1 + '; size:0.15; font: Droid Sans Mono;');
    subtitulo1.setAttribute('position', {
        x: posSubtitulo1[0],
        y: posSubtitulo1[1],
        z: posSubtitulo1[2]
    });
    subtitulo1.setAttribute('position', {
        x: posSubtitulo1[0],
        y: posSubtitulo1[1],
        z: posSubtitulo1[2]
    });
    subtitulo1.setAttribute('rotation', {
        x: rotSubtitulo1[0],
        y: rotSubtitulo1[1],
        z: rotSubtitulo1[2]
    });

    subtitulo2.setAttribute('text', 'text:' + contSubtitulo2 + '; size:0.15; font: Droid Sans Mono;');
    subtitulo2.setAttribute('position', {
        x: posSubtitulo2[0],
        y: posSubtitulo2[1],
        z: posSubtitulo2[2]
    });
    subtitulo2.setAttribute('rotation', {
        x: rotSubtitulo2[0],
        y: rotSubtitulo2[1],
        z: rotSubtitulo2[2]
    });

    subtitulo3.setAttribute('text', 'text:' + contSubtitulo3 + '; size:0.15; font: Droid Sans Mono;');
    subtitulo3.setAttribute('position', {
        x: posSubtitulo3[0],
        y: posSubtitulo3[1],
        z: posSubtitulo3[2]
    });
    subtitulo3.setAttribute('rotation', {
        x: rotSubtitulo3[0],
        y: rotSubtitulo3[1],
        z: rotSubtitulo3[2]
    });

    subtitulo4.setAttribute('text', 'text:' + contSubtitulo4 + '; size:0.15; font: Droid Sans Mono;');
    subtitulo4.setAttribute('position', {
        x: posSubtitulo4[0],
        y: posSubtitulo4[1],
        z: posSubtitulo4[2]
    });
    subtitulo4.setAttribute('rotation', {
        x: rotSubtitulo4[0],
        y: rotSubtitulo4[1],
        z: rotSubtitulo4[2]
    });

    subtitulo5.setAttribute('text', 'text:' + contSubtitulo5 + '; size:0.15; font: Droid Sans Mono;');
    subtitulo5.setAttribute('position', {
        x: posSubtitulo5[0],
        y: posSubtitulo5[1],
        z: posSubtitulo5[2]
    });
    subtitulo5.setAttribute('rotation', {
        x: rotSubtitulo5[0],
        y: rotSubtitulo5[1],
        z: rotSubtitulo5[2]
    });

    subtitulo6.setAttribute('text', 'text:' + contSubtitulo6 + '; size:0.15; font: Droid Sans Mono;');
    subtitulo6.setAttribute('position', {
        x: posSubtitulo6[0],
        y: posSubtitulo6[1],
        z: posSubtitulo6[2]
    });
    subtitulo6.setAttribute('rotation', {
        x: rotSubtitulo6[0],
        y: rotSubtitulo6[1],
        z: rotSubtitulo6[2]
    });

    subtitulo7.setAttribute('text', 'text:' + contSubtitulo7 + '; size:0.15; font: Droid Sans Mono;');
    subtitulo7.setAttribute('position', {
        x: posSubtitulo7[0],
        y: posSubtitulo7[1],
        z: posSubtitulo7[2]
    });
    subtitulo7.setAttribute('rotation', {
        x: rotSubtitulo7[0],
        y: rotSubtitulo7[1],
        z: rotSubtitulo7[2]
    });

    portal.setAttribute('scale', {
        x: 0,
        y: 0,
        z: 0
    });
    portal.setAttribute('position', {
        x: posPortal[0],
        y: posPortal[1],
        z: posPortal[2]
    });
    portal.setAttribute('rotation', {
        x: rotPortal[0],
        y: rotPortal[1],
        z: rotPortal[2]
    });
    audio.innerHTML = audioSrc;
}

portal.onmouseenter = function(e) {
    gatillo.innerHTML = '<a-animation attribute="geometry.radius" dur="3000" easing="linear" from=".4" to=".6" repeat="0"></a-animation>';
};

portal.onmouseleave = function(e) {
    gatillo.innerHTML = '<a-animation attribute="geometry.radius" direction="alternate" dur="800" easing="ease-out" from=".2" to=".3" repeat="indefinite"></a-animation>';
};

portal.addEventListener('animationend', cambioEscena, false);
start.addEventListener('animationend', cambioEscena, false);

audio.addEventListener('sound-ended', mostrarPortal);
