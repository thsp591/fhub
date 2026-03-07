document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("reservationForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let firstName = document.getElementById("firstName").value;
let email = document.getElementById("email").value;

if(firstName === "" || email === ""){
alert("Please fill all required fields");
return;
}

document.getElementById("successMsg").innerText =
"Reservation submitted successfully! I will contact you soon.";

form.reset();

});

}

});