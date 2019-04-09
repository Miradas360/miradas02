//portal = teleport
var escenaNro = 0
var animEscenaEntraLow ='<a-animation attribute="scale" direction="alternate" dur="100" easing="ease-in" from="10 10 -10" to="0 0 0" repeat="0"></a-animation>' + '<a-animation attribute="opacity" direction="alternate" dur="100" easing="ease-in" from="0" to="1" repeat="0"></a-animation>'
var animEscenaEntraHigh ='<a-animation attribute="scale" direction="alternate" dur="100" easing="ease-in" from="10 10 -10" to="10 10 -10" repeat="0"></a-animation>' + '<a-animation attribute="opacity" direction="alternate" dur="100" easing="ease-in" from="0" to="1" repeat="0"></a-animation>'
var animEscenaSalehigh = '<a-animation attribute="opacity" direction="alternate" dur="100" easing="ease-out" from="1" to="0" repeat="0"></a-animation>'

var transiciones = {

    transicion1: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh,

        posPortal: [4, 0.8, 1.8],
        rotPortal: [0, 0, 0],
        // pathSrc: '#pathEscena1',
        audioSrc:'<a-entity sound="src: sound/1.aac; autoplay: true; volume: 3;"></a-entity>',
        actionSrc: '',
        backsound: ''
    },

    transicion2: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh,
      posPortal: [-5 , 0 , 2],
        rotPortal: [0, 80, 0],
        // pathSrc: '#pathEscena2',

        backsound:'<a-entity sound="src: sound/pre-flashes.aac; autoplay: true; volume: 2; loop: true"></a-entity>',
        audioSrc: '<a-entity sound="src: sound/esraroestelugar.aac; autoplay: true; volume: 3"></a-entity>',
        actionSrc: ''
    },
    transicion3: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh,
      posPortal: [4.5 ,0.4, 4.2],
        rotPortal: [0, 80, 0],
        // pathSrc: '#pathEscena3',
        backsound:'<a-entity sound="src: sound/flashes.aac; autoplay: true; volume: 2; loop: true"></a-entity>',
        audioSrc: '',
        actionSrc: ''
    },
    transicion4: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh,
        posPortal: [4.5 ,0.4, 4.2],
        rotPortal: [0, 90, 0],
        // pathSrc: '#pathEscena3',
        backsound:'<a-entity sound="src: sound/encender-luz.aac; autoplay: true; volume: 1; loop: true"></a-entity>',
        audioSrc: '',
        actionSrc: [3.5 ,-0.4, 4.2]
    },

    transicion5: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh ,
      posPortal: [6, .3,  -1],
        rotPortal: [0, 0, 0],
        // pathSrc: '#pathEscena4',

        backsound:'<a-entity sound="src: sound/escena-crimen.aac; autoplay: true; volume: 2; loop: true"></a-entity>',
        audioSrc: '',
        actionSrc: ' <a-curvedimage src="#msg-1" height="0.5" width="1" radius="1" theta-length="100" rotation="0 110 0" scale="1 1 1" position="1 1 -2"></a-curvedimage>'
    },
    transicion6: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh ,
      posPortal: [3.5, .7, 4.5],
        rotPortal: [0, 0, 0],
        // pathSrc: '#pathEscena4',

        backsound: '<a-entity sound="src: sound/pre-flashes.aac; autoplay: true; volume: 2; loop: true"></a-entity>',
        audioSrc: '',
        actionSrc: ''
    },
    transicion7: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh ,
      posPortal: [.8, 0, -8],
        rotPortal: [0, 0, 0],
        // pathSrc: '#pathEscena4',

        backsound:'<a-entity sound="src: sound/flashes.aac; autoplay: true; volume: 2; loop: true"></a-entity>',
        audioSrc: '',
        actionSrc: ''
    },
    transicion8: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh ,
      posPortal: [5, -2 , 0.6],
      rotPortal: [0, -20, 0],
        // pathSrc: '#pathEscena4',

        backsound:'<a-entity sound="src: sound/encender-luz.aac; autoplay: true; volume: 1; loop: true"></a-entity>',
        audioSrc: '',
        actionSrc: ''
    },
    transicion9: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh ,
      posPortal: [5, 0.5, -0.2],
        rotPortal: [0, 80, 0],
        // pathSrc: '#pathEscena4',

        backsound:'<a-entity sound="src: sound/escena-crimen.aac; autoplay: true; volume: 2; loop: true"></a-entity>',
        audioSrc: '',
        actionSrc: ''
    },
    transicion10: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh,
      posPortal: [5, 0.5, 0],
        rotPortal: [0, 80, 0],
        // pathSrc: '#pathEscena3',
        backsound:'<a-entity sound="src: sound/pre-flashes.aac; autoplay: true; volume: 2; loop: true"></a-entity>',
        audioSrc: '',
        actionSrc: ''
    },
    transicion11: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh,
      posPortal: [4, -2, 3.9],
        rotPortal: [0, 80, 0],
        // pathSrc: '#pathEscena3',
        backsound:'<a-entity sound="src: sound/flashes.aac; autoplay: true; volume: 2; loop: true"></a-entity>',
        audioSrc: '',
        actionSrc: ''
    },
    transicion12: {
      animEscenaSale: animEscenaSalehigh,
      animEscenaEntra: animEscenaEntraHigh,
      posPortal: [4, -2, 4.2],
        rotPortal: [0, 80, 0],
        // pathSrc: '#pathEscena3',
        backsound:'<a-entity sound="src: sound/placa-final.aac; autoplay: true; volume: 2; loop: true"></a-entity>',
        audioSrc: '<a-entity sound="src: sound/final.aac; autoplay: true; volume: 2; loop: false"></a-entity>',
        actionSrc: ''
    }


};
