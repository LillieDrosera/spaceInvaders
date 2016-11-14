document.addEventListener('keydown', function (e) { // récupération des touches appuyer par l'utilisateur


console.log(e);
var key = e.which || e.keyCode;

if (key === 13 || key === 80) 
	//touche Entrée ou P : mettre en pause
{

 alert("Pause...appuyer sur entrée pour reprendre");
}

if(key === 32){
	//barre Espace : déclenche un tir

    tir();
    //moveAuto("missileId");
}

if(key === 86)
	// touche V : augmente la vitesse
{
	vitesse -= 10;
}	

if(key === 67)
	// touche C : diminue la vitesse
{
	vitesse += 10;
}

if(key === 77)
	//touche M : active ou désactive music et effet sonore
{
	musicOnOff();
}

if(key === 39){

if((parseInt(document.getElementById("tireurId").style.left,10) < document.getElementById("jeu").clientWidth -document.getElementById("tireurId").clientWidth - 10))
	{// limite a droite (-5=taille du déplacement)

	   move("tireurId", "right");
	}
}

if(key === 37){
	if(parseInt(document.getElementById("tireurId").style.left,10)-10 > 0){//limite a gauche
	   move("tireurId", "left");
	}
}

});
