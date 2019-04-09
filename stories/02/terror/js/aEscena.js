function aEscena(animEscenaSale, animEscenaEntra, posPortal, rotPortal, audioSrc,backsound,actionSrc) {
  if(escenaNro > 0) backsounddiv.innerHTML = backsound
  audio.innerHTML = audioSrc
  if (escenaNro === 4) mostrarAction();
  if (escenaNro === 5) ocultarAction();

if(escenaNro > 0 && escenaNro !== 4) {
  setTimeout(function(){mostrarPortal();console.log("muestra portal");},1500)
}
    portal.setAttribute('position', {
        x: posPortal[0],
        y: posPortal[1],
        z: posPortal[2]
    });
    portal.setAttribute('rotation', {
        x: rotPortal[0],
        y: rotPortal[1],
        z: rotPortal[2]
    })
    portal.setAttribute('opacity','0.2')

    setTimeout(function(){mostrarCursor();console.log("muestra cursors");},500)

    document.querySelector('#scene1').innerHTML ='<a-animation attribute="scale" direction="alternate" dur="100" easing="ease-in" from="10 10 -10" to="0 0 0" repeat="0"></a-animation><a-animation attribute="opacity" direction="alternate" dur="100" easing="ease-in" from="0" to="1" repeat="0"></a-animation>'
    document.querySelector('#scene1').innerHTML ='<a-animation attribute="opacity" direction="alternate" dur="100" easing="ease-in" from="1" to="0" repeat="0"></a-animation>'
    document.querySelector('#scene1').setAttribute('src', '#scene'+(escenaNro+1)+'img')
    document.querySelector('#scene1').innerHTML ='<a-animation attribute="scale" direction="alternate" dur="100" easing="ease-in" from="0 0 0" to="10 10 -10" repeat="0"></a-animation><a-animation attribute="opacity" direction="alternate" dur="400" easing="ease-in" from="0" to="1" repeat="0"></a-animation>'

    escenaNro++
}
