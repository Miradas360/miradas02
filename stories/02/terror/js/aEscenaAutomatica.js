function aEscenaAutomatica(animEscenaSale, animEscenaEntra, posPortal, rotPortal, audioSrc, backsound) {
    ocultarPortal()
    audio.innerHTML = audioSrc
    backsounddiv.innerHTML = backsound

    if((escenaNro === 2) || escenaNro === 6){
      var counter = 0

      // backsounddiv.innerHTML = backsound
      var b = '#scene' + (escenaNro + 1) + 'bimg'
      var w = '#scene' + (escenaNro + 1) + 'wimg'
      document.querySelector('#scene1').setAttribute('src', w)

      for (var i = 0; i < 12; i++) {
          (function(ind) {
              setTimeout(function() {
                  if (ind % 2 == 0) {
                      document.querySelector('#scene1').innerHTML = '<a-animation attribute="opacity" direction="alternate" dur="100" easing="ease-in" from="1" to="0" repeat="0"></a-animation>'
                      document.querySelector('#scene1').setAttribute('src', b)
                      counter++
                      if (counter == 12) {
                          escenaNro++;
                          cambioEscena()
                      }
                  } else {
                      document.querySelector('#scene1').innerHTML = '<a-animation attribute="opacity" direction="alternate" dur="100" easing="ease-in" from="1" to="0" repeat="0"></a-animation>'
                      document.querySelector('#scene1').setAttribute('src', w)
                      counter++

                      if (counter == 12) {
                          escenaNro++;
                          cambioEscena()
                      }
                  }
              }, 400 + (400 * ind));
          })(i);
      }
    }else{
      var counter = 1
      z = '#auto2-1-img'

      for (var i = 0; i < 17; i++) {

          (function(ind) {
              setTimeout(function() {
                console.log("counter");
                console.log(counter);
                      if (counter == 17) {
                        setTimeout(function(){
                          document.querySelector('#scene1').innerHTML = '<a-animation attribute="opacity" from="1" to="0" begin="0" dur="2000">'
                          setTimeout(function(){
                            escenaNro++;
                            cambioEscena()
                          },2000)
                        },1000)
                      }
                      else{
                        console.log(z);
                        // document.querySelector('#scene1').innerHTML = '<a-animation attribute="opacity" direction="alternate" dur="100" easing="ease-in" from="1" to="0" repeat="0"></a-animation>'
                        document.querySelector('#scene1').setAttribute('src', z)
                        counter++
                        z = '#auto2-'+counter+'-img'
                      }
              }, 400 + (400 * ind));
          })(i);
      }
    }
}
