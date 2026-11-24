const passengers = document.getElementById("passengers");
const fare = document.getElementById("fare");
const form = document.getElementById("bookingForm");

// Fare calculation
passengers.addEventListener("change", function () {
    const total = Number(passengers.value) * 500;
    fare.innerText = "Total Fare: ₹" + total;
});

// Booking form
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector('[placeholder="Your Name"]').value;
    const mobile = document.querySelector('[placeholder="Mobile Number"]').value;
    const pickupTime = document.getElementById("pickupTime").value;
    const date = document.querySelector('input[type="date"]').value;

    const passengerCount = passengers.value;
    const totalFare = Number(passengerCount) * 500;

    const cabSelect = Array.from(document.querySelectorAll("#booking select"))
        .find(select =>
            Array.from(select.options).some(option =>
                /Swift Dzire|Ertiga|Innova/i.test(option.text)
            )
        );

    const cab = cabSelect ? cabSelect.value : "Not selected";

    // WhatsApp number
    const agencyNumber = "916006879732";

    const message =
        "New Cab Booking\n" +
        "Name: " + name + "\n" +
        "Mobile: " + mobile + "\n" +
        "Pickup: Darhal, Rajouri\n" +
        "Destination: Jammu\n" +
        "Date: " + date + "\n" +
        "Pickup Time: " + pickupTime + "\n" +
        "Passengers: " + passengerCount + "\n" +
        "Cab: " + cab + "\n" +
        "Total Fare: ₹" + totalFare;

    const url = "https://wa.me/" + agencyNumber +
        "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
});   
