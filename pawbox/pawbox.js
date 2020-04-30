/*quiz*/

function check(){ // denne funktion tjekker antal rigtige svar

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;
	var number_correct = document.getElementById("number_correct");


	if (question1 == "Nej") { // Dette if-statement tjekker om svaret på sprøgsmål 1 er korrekt. Hvis det er, ligges der 1 til.
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

	if (correct == 0) { // Hvis man har 0 rigtige bliver dette if statement eksekveret
		score = 2; // score bliver sat til 2
		number_correct.className = 'alert-danger p-4'; // svar bliver printet i rødt felt
	}

	if (correct > 0 && correct < 5) {
		score = 1;
		number_correct.className = 'alert-warning p-4';
	}

	if (correct == 5) {
		score = 0;
		number_correct.className = 'alert-success p-4';
	}

	document.getElementById("after_submit").style.visibility = "visible"; // Når man trykker på after_submit knappen bliver den visible
	document.getElementById("message").innerHTML = messages[score]; //  dette statement printer array objecter (i dette tilfælde sætninger)
	document.getElementById("number_correct").innerHTML = "Du fik " + correct + " korrekte."; // printer sætning om antal korrekte svar
	}

/*bestil*/
function validate(){
  var order=8; // Der kan max fratrækkes 8, derfor er denne værdi sat til 8
  var petname = document.getElementById("petname").value;
  var pet = document.getElementById("pet").value;
  var race = document.getElementById("race").value;
  var name = document.getElementById("name").value;
  var adresse = document.getElementById("adresse").value;
  var postnumber = document.getElementById("postnumber").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  // var message = document.getElementById("messagecontact").value;
  var error_message = document.getElementById("error_message");
  var error_message1 = document.getElementById("error_message1");

  var text;
  if(petname.length < 1){ // Dette if-statement tjekker om kæledyrsnavnet er mindre end 1
    text = "Intast dit kæledyrs navn"; // sætter teksten til det valgte
    error_message.innerHTML = text; // indsætter teksten i HTML
	error_message.className = 'alert-danger mb-1'; // Den indsatte tekst bliver rød
	order--; // mangler udfyldt felt medfører en fratrækning fra order.
	return false; 
	}
	
  if(pet.length < 3){
    text = "Intast kæledyr";
    error_message.innerHTML = text;
	error_message.className = 'alert-danger mb-1';
	order--;
	return false;
  }

	if(race.length < 4){
    text = "Intast dit kæledyrs race";
    error_message.innerHTML = text;
	error_message.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	if(name.length < 6){
    text = "Intast dit dit fulde navn";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	if(adresse.length < 6){
    text = "Intast din adresse";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	if(postnumber.length != 4 || isNaN(postnumber)){
    text = "Intast dit postnummer";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	if(email.indexOf("@") == -1 || email.length < 6){
    text = "Indtast email";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	if(isNaN(phone) || phone.length != 8){
    text = "intast mobilnummer";
    error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
	order--;
	return false;
	}

	/*if(message.length <= 0 || message.length == null){
	error_message1.innerHTML = text;
	error_message1.className = 'alert-danger mb-1';
		order--;
		return false;
	}*/

	if (order==8) { // Hvis alle felter er udfyldt, altså der ikke er fratrukket fra order, eksekveres dette if-statement.
		alert("Bestilling gennemført.");
	}
}
