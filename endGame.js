function endGame(){
				clearInterval(myInterval);

			
				document.body.removeEventListener("onkeyup", readKey);

			
				$(".glyphicon").css("color", "black");
				//hmmm, no, this just sometimes works and sometimes doesn't
			}

