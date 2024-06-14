var score1=0;
	var score2=0;
function aleatoire(a){
	
	var all=Math.floor(Math.random()*3)+1;
	var ch;
	
	switch(all){
		case 1:ch="rock";alert(ch);break;
		case 2:ch="paper";alert(ch);break;
		case 3:ch="scissor";alert(ch);break;
	}
	if (a==ch){
		score1=score1+1;
		score2=score2+1;
	}
	else if((a === 'rock' && ch === 'scissor') ||
	(a === 'paper' && ch === 'rock') ||
	(a === 'scissor' && ch === 'paper')){
		alert('Vous gagnez!');
		score1=score1+1;
	}
	else {
		alert('Vous perdez!');
		score2=score2+1;
	}
	alert('Score - Vous: ' + score1 + ', Ordinateur: ' + score2);
	document.getElementById('s1').value=score1;
	document.getElementById('s2').value=score2;
}

