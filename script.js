

			// import endGame from "./endGame";

			//current version seems to work...sort of, but finnick at best.

			var randomNumber = 0;
			var timerStart;
			var score;
			var myInterval;
				var directions = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

			function start(){

				//This is all for the purpose of restarting *****
				timerStart = 60;
				score = 0;

				document.getElementById("timerBox").innerText = timerStart;
				document.getElementById("score").innerText = score;
				clearInterval(myInterval);
				//******

			myInterval = setInterval(everySecond, 1000);
		}

		

			function createNewRandom(oldRandom){
				newRandom = Math.floor(Math.random() * 4) + 1;
				if (newRandom != oldRandom)
				{
					randomNumber = newRandom;
				} 
				else
				{
					createNewRandom();
				}

				//This is supposed to ensure it doesn't chose the same number/arrow twice in a row.  Why is this not effective?  It just seems to do nothing.
			}

			

			function everySecond(){
				timerStart --;

				
				if (timerStart == 0)
				{
					endGame(); 

				}

				document.getElementById("timerBox").innerText = timerStart;
				
				// randomNumber = Math.floor(Math.random() * 4) + 1; 
				createNewRandom(randomNumber);
				
				//turns the arrow selected by "randomNumber" red.
				document.getElementById(directions[randomNumber]).style.color = "red";
				
				//this ensures only one arrow is red at a time
				for (let i = 0; i < directions.length; i++) 
				{
  if (directions[i] != directions[randomNumber])
  {
  	document.getElementById(directions[i]).style.color = "black";
  }
 
}

				document.body.addEventListener("keyup", readKey);
				

			}

			function readKey(event){
				event.preventDefault();

				console.log(event.key);
				console.log(randomNumber);
				// //the first one works but randomNumber comes back undefined.  WTF!

				if(event.key == directions[randomNumber])
				{
					score++;
					document.getElementById("score").innerText = score;
				}

				document.body.removeEventListener("onkeyup", readKey);
			}
		