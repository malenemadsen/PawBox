/*quiz*/
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;
	var number_correct = document.getElementById("number_correct");

	if (question1 == "Nej") {
		correct++;
}	
	if (question2 == "Ja") {
		correct++;
	}
	
	if (question3 == "Ja") {
		correct++;
	}
	
	if (question4 == "Nej") {
		correct++;
	}
	
	if (question5 == "Nej") {
		correct++;
	}
	


	var messages = ["Du har styr på det", "Du er der næsten", "Du skal læse lidt op på det"];
	var score;

	if (correct == 0) {
		score = 2;
		number_correct.className = 'alert-danger p-4';
	}

	if (correct > 0 && correct < 5) {
		score = 1;
		number_correct.className = 'alert-warning p-4';
	}

	if (correct == 5) {
		score = 0;
		number_correct.className = 'alert-success p-4';
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Du fik " + correct + " korrekte.";
	}

/*bestil*/

function validate(){
  var petname = document.getElementById("petname").value;
  var pet = document.getElementById("pet").value;
  var race = document.getElementById("race").value;
  var name = document.getElementById("name").value;
  var adresse = document.getElementById("adresse").value;
  var postnumber = document.getElementById("postnumber").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var error_message1 = document.getElementById("error_message1");
	
  var text;
  if(petname.length < 1){
    text = "Intast dit kæledyrs navn";
    error_message.innerHTML = text;
	error_message.className = 'alert-danger mb-1';
    return false;
	}
	
  if(pet.length < 3){
    text = "Intast kæledyr";
    error_message.innerHTML = text;
	error_message.className = 'alert-danger mb-1';
    return false;
  }
	
  if(race.length < 4){
    text = "Intast dit kæledyrs race";
    error_message.innerHTML = text;
	error_message.className = 'alert-danger mb-1';
    return false;
  }
  if(name.length < 6){
    text = "Intast dit dit fulde navn";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
    return false;
  }

  if(adresse.length < 6){
    text = "Intast din adresse";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
    return false;
  }
	
  if(postnumber.length < 4){
    text = "Intast dit postnummer";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
    return false;
  }
	
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Indtast email";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
    return false;
  }
	
  if(isNaN(phone) || phone.length != 8){
    text = "intast mobilnummer";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
    return false;
  }

  if(message.length <= 0){
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
    return false;
  }
	}