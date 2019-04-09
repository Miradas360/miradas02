function logScenes(){
  console.log("LOG SCENESSSS");
  for (var i = 0; i < 4; i++) {
    var j = document.getElementsByClassName("escena")[i]
    console.log(i);
    console.log(j);
  }
}

function removeScene() {
  var num = escenaNro - 1;
  var tmpo = document.querySelector('#scene' + num)
      tmpo.parentNode.removeChild(tmpo);
      console.log("removed Scene: " + escenaNro);
}
