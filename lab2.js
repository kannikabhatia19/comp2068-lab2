var user = prompt('rock,scissors, or paper');
console.log(user);

var computerRandom = Math.floor(Math.random() * 2) + 1;
var computer;

switch(computerRandom){

	case 1:
			computer = 'rock';
			break;
	case 2:
			computer = 'scissors';
			break;
	case 3:
			computer = 'paper';
			break;
}

console.log(computer);

function compare(user, computer){
	if(user=='rock'){
		if(computer =='rock'){
			console.log('Tie');
		}
		else if(computer == 'scissors'){
			console.log('You win');
		}
		else if(computer == 'paper'){
			console.log('You lose');
		}
	}
	else if(user=='paper'){
		if(computer =='rock'){
			console.log('You won');
		}
		else if(computer == 'scissors'){
			console.log('You lose');
		}
		else if(computer == 'paper'){
			console.log('Tie');
		}
	}
	else if(user == 'scissors'){
		if(computer =='rock'){
			console.log('You lose');
		}
		else if(computer == 'scissors'){
			console.log('Tie');
		}
		else if(computer == 'paper'){
			console.log('You win');
		}
	}
}