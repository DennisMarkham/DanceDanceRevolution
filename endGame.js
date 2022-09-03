function endGame(){
				clearInterval(myInterval);

				//despite this, can still add to score after game ends.  WTF!!!
				document.body.removeEventListener("onkeyup", readKey);

				// document.querySelectorAll(`[id^="Arrow"]`).style.color = "black";
				$(".glyphicon").css("color", "black");
			}

