
var escenaNro = 0;

var transiciones = {

    transicion1: {
        animEscenaSale: '',
        animEscenaEntra:
        '<a-animation attribute="scale" direction="alternate" dur="4000" easing="ease-in" from="0 0 0" to="10 10 -10" repeat="0"></a-animation>' +
        '<a-animation attribute="position" direction="alternate" dur="4000" easing="ease-out" from="0 1.5 -12" to="0 1.5 0" repeat="0"></a-animation>' +
        '<a-animation attribute="rotation" direction="alternate" dur="5000" easing="ease-out" from="-260 0 0" to="0 430 0" repeat="0"></a-animation>',
        posPortal: [3, 0, -2.5],
        rotPortal: [0, -20, 0],
        pathSrc: '#pathEscena1',


        audioSrc: '<a-entity sound="src: sound/audio-1_borges.mp3; autoplay: true; volume: 3;"></a-entity>'
    },

    transicion2: {
        animEscenaSale: '<a-animation attribute="scale" begin="1500" dur="0" easing="linear" to="0 0 0" repeat="0"></a-animation>',
        animEscenaEntra: '<a-animation attribute="scale" dur="0" easing="linear" to="9 9 -9" repeat="0"></a-animation>' +
            '<a-animation attribute="position" direction="alternate" dur="2000" easing="linear" to="0 0 0" repeat="0"></a-animation>',
        posPortal: [4, -2, 4.2],
        rotPortal: [0, 80, 0],
        pathSrc: '#pathEscena2',

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

        audioSrc: '<a-entity sound="src: sound/audio-3_borges.mp3; autoplay: true; volume: 3;"></a-entity>'
    },

    transicion4: {
        animEscenaSale: '<a-animation attribute="material.opacity" direction="alternate" begin="2000" dur="1000" easing="linear" to="0" repeat="0"></a-animation>',
        animEscenaEntra: '<a-animation attribute="scale" direction="alternate" dur="3000" easing="linear" to="10 10 -10" repeat="0"></a-animation>' +
            '<a-animation attribute="position" direction="alternate" dur="3000" easing="linear" to="0 0 0" repeat="0"></a-animation>',
        posPortal: [.8, 0, -8],
        rotPortal: [0, 0, 0],
        pathSrc: '#pathEscena4',

        audioSrc: '<a-entity sound="src: sound/audio-4_borges.mp3; autoplay: true; volume: 3;"></a-entity>'
    },

    transicion5: {
        animEscenaSale: '<a-animation attribute="scale" direction="alternate" dur="2000" easing="linear" to="0 0 0" repeat="0"></a-animation>' +
            '<a-animation attribute="position"  direction="alternate" dur="2000" easing="linear" to="15 0 -9" repeat="0"></a-animation>',
        animEscenaEntra: '',
        posPortal: [0, 0, 0],
        rotPortal: [0, 0, 0],
        pathSrc: '',
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


    audioSrc) {

    if (escenaNro > 0) document.getElementsByClassName("escena")[(escenaNro - 1)].innerHTML = animEscenaSale;
    document.getElementsByClassName("escena")[escenaNro].innerHTML = animEscenaEntra;

    path.setAttribute('src', pathSrc);



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


















                    </a-entity>
                    <a-entity id="audio" position="0 0 0"></a-entity>
                    <a-entity id="backsounddiv" position="0 0 1"></a-entity>


                    <a-image src="#msg-1" opacity="0" position="0 -1 -6" width="7">
                      <a-animation attribute="opacity" from="0" to="1" dur="5000">
                      </a-animation>
                      <a-animation attribute="opacity" from="1" to="0" begin="5000" dur="5000">
                      </a-animation>
                      <a-animation attribute="visible" begin="10000" to="false"></a-animation>
                      <a-animation begin="10000" easing="ease-out" attribute="scale"  from="1 1 1" to="0 0 0" dur="150"></a-animation>

                    </a-image>

                    <a-image src="#headphones" opacity="0" position="0 0 -6">
                        <a-animation attribute="opacity" from="0" to="1" begin="0" dur="5000">
                        </a-animation>
                        <a-animation attribute="opacity" from="1" to="0" begin="5000" dur="5000">
                        </a-animation>
                        <a-animation attribute="visible" begin="10000" to="false"></a-animation>
                        <a-animation attribute="rotation" dur="5000" fill="forwards" to="0 360 0" repeat="2"></a-animation>
                        <a-animation begin="10000" easing="ease-out" attribute="scale"  from="1 1 1" to="0 0 0" dur="150"></a-animation>

                    </a-image>

                    <a-image src="#msg-2" opacity="0" position="0 -1 -6" width="9">
                      <a-animation attribute="visible" begin="10000" to="true"></a-animation>
                      <a-animation attribute="opacity" from="0" to="1" begin="10000" dur="5000">
                      </a-animation>
                      <a-animation attribute="opacity" from="1" to="0" begin="15000" dur="5000">
                      </a-animation>
                      <a-animation attribute="visible" begin="20000" to="false"></a-animation>
                      <a-animation begin="20000" easing="ease-out" attribute="scale"  from="1 1 1" to="0 0 0" dur="150"></a-animation>

                    </a-image>

                     <a-image src="#cardboard" visibiity="false" opacity="0" position="0 0 -6">
                        <a-animation attribute="visible" begin="10000" to="true"></a-animation>
                        <a-animation attribute="opacity" from="0" to="1" begin="10000" dur="5000">
                        </a-animation>
                        <a-animation attribute="opacity" from="1" to="0" begin="15000" dur="5000">
                        </a-animation>
                        <a-animation attribute="visible" begin="20000" to="false"></a-animation>
                        <a-animation attribute="rotation" begin="10000" dur="5000" fill="forwards" to="0 360 0" repeat="3">
                        </a-animation>
                        <a-animation begin="20000" easing="ease-out" attribute="scale"  from="1 1 1" to="0 0 0" dur="150"></a-animation>

                    </a-image>

                    <a-image src="#msg-3" opacity="0" position="0 -1 -6" width="9">
                      <a-animation attribute="visible" begin="20000" to="true"></a-animation>
                      <a-animation attribute="opacity" from="0" to="1" begin="20000" dur="5000">
                      </a-animation>
                      <a-animation attribute="opacity" from="1" to="0" begin="25000" dur="5000">
                      </a-animation>
                      <a-animation attribute="visible" begin="30000" to="false"></a-animation>
                      <a-animation begin="30000" easing="ease-out" attribute="scale"  from="1 1 1" to="0 0 0" dur="150"></a-animation>

                    </a-image>

                    <a-image src="#rotation" visibiity="false" opacity="0" position="0 0 -6">
                        <a-animation attribute="visible" begin="20000" to="true"></a-animation>
                        <a-animation attribute="opacity" from="0" to="1" begin="20000" dur="5000">
                        </a-animation>
                        <a-animation attribute="opacity" from="1" to="0" begin="25000" dur="5000">
                        </a-animation>
                        <a-animation attribute="visible" begin="30000" to="false"></a-animation>
                        <a-animation attribute="rotation" begin="20000" dur="5000" fill="forwards" to="0 360 0" repeat="3"></a-animation>
                        <a-animation begin="30000" easing="ease-out" attribute="scale"  from="1 1 1" to="0 0 0" dur="150"></a-animation>

                    </a-image>


                    <a-plane src="#intro" opacity="0" visibility="false" width="5" height="2.8" position="0 0 -3">
                        <!-- <a-animation attribute="opacity" from="0" to="1" begin="30000" dur="5000">
                        </a-animation> -->
                        <!-- <a-animation attribute="opacity" from="1" to="0" begin="35000" dur="5000">
                        </a-animation> -->
                        <!-- <a-animation id="start" attribute="visible" begin="40000" to="false"></a-animation> -->
                        <a-animation id="start" attribute="visible" begin="35000" to="false"></a-animation>
                    </a-plane>


                    <a-image id="tituloCierre" src="#pre-cierre" opacity="0" position="0 0 -6" width="10" height="10" scale="0 0 0">
                      <a-animation attribute="opacity" from="0" to="1" dur="5000">
                      </a-animation>
                      <a-animation attribute="opacity" from="1" to="0" begin="5000" dur="5000">
                      </a-animation>
                      <a-animation attribute="visible" begin="10000" to="false"></a-animation>
                    </a-image>

                    <a-image id="equipo" src="#cierre" opacity="0" position="0 0 -6" width="10" height="10" scale="0 0 0">
                      <!-- <a-animation attribute="opacity" from="0" to="1" dur="5000">
                      </a-animation>
                      <a-animation attribute="opacity" from="1" to="0" begin="5000" dur="5000"> -->
                      </a-animation>
                    </a-image>
