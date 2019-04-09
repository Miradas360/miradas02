
backsounddiv.innerHTML = '<a-entity sound="src: sound/arpegio-exterior.aac; autoplay: true; volume: 2; loop: true"></a-entity>'
var flag = true
var soundflag = true
var cursor = document.querySelector('#cursor')
var portal = document.querySelector('#portal')
var action = document.querySelector('#action')

var activemessage = document.querySelector('#activemessage')
var messagediv = document.querySelector('#messagediv')

activemessage.onmouseenter = function(e) {
    messagediv.innerHTML = '<a-animation attribute="opacity" from="0" to="1"  dur="100"></a-animation><a-animation attribute="scale" from="0 0 0" to="1 1 1" dur="200"></a-animation><a-animation attribute="position" from="0 -10 -1" to="0 -0.4 -1" dur="400"></a-animation>';
    setTimeout(function(){mostrarPortal();console.log("muestra portal");},1500)

}
activemessage.onmouseleave = function(e) {
    messagediv.innerHTML = '<a-animation attribute="opacity" from="1" to="0"  dur="100"></a-animation><a-animation attribute="scale" from="1 1 1" to="0 0 0" dur="200"></a-animation><a-animation attribute="position" from="0 -0.4 -1" to="0 -10 -1" dur="400"></a-animation>';
}
function mostrarAction() {
  console.log("MOSTRAR ACTION");
  activemessage.innerHTML = '<a-animation attribute="opacity" from="0" to="0.3"  dur="100"></a-animation><a-animation attribute="scale" from="0 0 0" to="1 1 1"  dur="100"></a-animation><a-animation attribute="geometry.radius" dur="1500" begin="0" easing="linear" from=".3" to=".4" repeat="indefinite"></a-animation>'
}
function ocultarAction() {
  console.log("OCULTAR ACTION");
  activemessage.innerHTML = '<a-animation attribute="opacity" from="0.3" to="0"  dur="100"></a-animation><a-animation attribute="scale" from="1 1 1" to="0 0 0"  dur="100"></a-animation>'
}
function mostrarPortal() {
  console.log("MOSTRAR PORTAL");
    portal.setAttribute('scale', {
        x: 1,
        y: 1,
        z: 1
    })
    portal.innerHTML = '<a-animation attribute="geometry.radius" dur="1500" begin="0" easing="linear" from=".3" to=".4" repeat="indefinite"></a-animation>'
}
function ocultarPortal() {
  console.log("OCULTAR PORTAL");
    cursor.setAttribute('scale', {
        x: 0,
        y: 0,
        z: 0
    })
}
function mostrarCursor() {
    cursor.setAttribute('scale', {
        x: 1,
        y: 1,
        z: 1
    })

}
function ocultarCursor() {
    portal.setAttribute('scale', {
        x: 0,
        y: 0,
        z: 0
    })
}
portal.onmouseenter = function(e) {
    portal.innerHTML = '<a-animation attribute="geometry.radius" dur="1000" easing="linear" from=".4" to=".6" repeat="0"></a-animation>';
}


// ocultarCursor()
// portal.onmouseleave = function(e) {
//     portal.innerHTML = '<a-animation attribute="geometry.radius" direction="alternate" dur="800" easing="ease-out" from=".2" to=".3" repeat="indefinite"></a-animation>';
// }

portal.addEventListener('click', cambioEscena, false)
start.addEventListener('animationend', cambioEscena, false)
// cambioEscena()

// audio.addEventListener('sound-ended', mostrarPortal)

function cambioEscena() {
    ocultarPortal()
    ocultarCursor()
if(escenaNro === 0 ) mostrarPortal()
    console.log('ESCENA NRO ' + escenaNro);

    var posicion = Object.keys(transiciones)[escenaNro];

    if (escenaNro === 11) {
      posicion = Object.keys(transiciones)[11]
      console.log(transiciones[posicion].backsound);
      backsounddiv.innerHTML =  transiciones[posicion].backsound
      setTimeout(function(){audio.innerHTML =  transiciones[posicion].audioSrc},1000)
        cursor.setAttribute('opacity', 0);

        tituloCierre.setAttribute('scale', {
            x: 1,
            y: 1,
            z: 1
        });
        equipo.setAttribute('scale', {
            x: 1,
            y: 1,
            z: 1
        });
        portal.setAttribute('scale', {
            x: 0,
            y: 0,
            z: 0
        });
        // cursor.setAttribute('scale', {
        //     x: 0,
        //     y: 0,
        //     z: 0
        // });
        document.querySelector('#scene1').setAttribute('scale', {
            x: 0,
            y: 0,
            z: 0
        });


        // cursor.innerHTML =
        //     '<a-animation attribute="opacity" from="1" to="0"  dur="100"></a-animation>' +
        //     '<a-animation attribute="scale" from="1 1 1" to="0 0 0" dur="100"></a-animation>'

        tituloCierre.innerHTML =
                '<a-animation attribute="opacity" from="0" to="1" delay="2000" dur="5000"></a-animation>' +
                '<a-animation attribute="visible" delay="2000" to="true"></a-animation>' +
                '<a-animation attribute="opacity" from="1" to="0" begin="15000" dur="5000"></a-animation>';

        equipo.innerHTML =
                '<a-animation attribute="opacity" from="0" to="1" delay="20000" dur="5000"></a-animation>' +
                '<a-animation attribute="visible" delay="20000" to="true"></a-animation>' +
                '<a-animation attribute="opacity" from="1" to="0" begin="30000" dur="5000"></a-animation>';


        return false;
    }
    else if((escenaNro === 2 && flag) || (escenaNro === 6) || escenaNro === 10){
      console.log("ENTRA AESCENAAUTOMATICA");
      aEscenaAutomatica(
            transiciones[posicion].animEscenaSale,
            transiciones[posicion].animEscenaEntra,
            transiciones[posicion].posPortal,
            transiciones[posicion].rotPortal,
            transiciones[posicion].audioSrc,
            transiciones[posicion].backsound,
            transiciones[posicion].actionSrc
        )
    }else{
      console.log("ENTRA AESCENA");
      aEscena(
          transiciones[posicion].animEscenaSale,
          transiciones[posicion].animEscenaEntra,
          transiciones[posicion].posPortal,
          transiciones[posicion].rotPortal,
          transiciones[posicion].audioSrc,
          transiciones[posicion].backsound,
          transiciones[posicion].actionSrc
      )
    }

}
