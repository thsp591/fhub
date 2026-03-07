document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("reservationForm");

    if (form) {
        form.addEventListener("submit", function() {
            let firstName = document.getElementById("firstName").value;
            let email = document.getElementById("email").value;

            if(firstName === "" || email === ""){
                alert("Please fill all required fields");
                return false; // ndalon submit vetëm nëse fusha bosh
            }

            // Shfaq mesazh suksesi (opsional, sepse user do të shohë email client)
            document.getElementById("successMsg").innerText =
            "Reservation form opened in your email client. Please click Send to complete the reservation.";

            // reset nuk bëhet automatik sepse forma nuk është dërguar realisht
        });
    }
});
