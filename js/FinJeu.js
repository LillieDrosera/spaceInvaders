function finJeu (){
  console.log("finish");
//   var ecrans = document.querySelectorAll("#jeu, #fin");
//   console.log(ecrans);
// for (var i = 0; i < ecrans.length; i++) {
//     ecrans[i].classList.toggle("masque");
//   }
document.getElementById("jeu").classList.add("masque");
document.getElementById("fin").classList.remove("masque");
if(victoire) {
	JouerMusic('musicVictoireId');
}
else 
{
	JouerMusic('musicDefaiteId');
}

document.getElementById("message").innerHTML = messageFin;
document.getElementById("scoreFin").innerHTML = document.getElementById("score").innerHTML;


}
