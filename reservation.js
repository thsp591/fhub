(function(){
emailjs.init("OqP4nPUEKfgP5kOkL");
})();

const miniServices = {

"Creations":[
"Website",
"App",
"Presentation",
"Game",
"Roblox Game",
"Business Card",
"Word Document",
"Excel Document"
],

"Editing":[
"Website Edit",
"App Edit",
"Presentation Edit",
"Game Edit",
"Roblox Game Edit",
"Business Card Edit",
"Word Document Edit",
"Excel Document Edit"
],

"IT Help":[
"Website Help",
"App Help",
"Software Help",
"Computer Help"
],

"Online Lessons":[
"Programming Languages",
"Python Lessons",
"Design Lessons",
"Ethical Hacking (Educational purposes only)"
]

};

const serviceSelect=document.getElementById("service");
const miniSelect=document.getElementById("miniService");

serviceSelect.addEventListener("change",function(){

const selected=this.value;

miniSelect.innerHTML="<option>Select mini service</option>";

miniServices[selected].forEach(function(service){

let option=document.createElement("option");

option.value=service;
option.textContent=service;

miniSelect.appendChild(option);

});

});

document.getElementById("reservationForm").addEventListener("submit",function(e){

e.preventDefault();

let params={

first_name:document.getElementById("firstName").value,
last_name:document.getElementById("lastName").value,
email:document.getElementById("email").value,
service:document.getElementById("service").value,
mini_service:document.getElementById("miniService").value

};

emailjs.send("service_h6sdfqi","template_1bd7x62",params)

.then(function(){

alert("Reservation sent successfully!");

});

});
