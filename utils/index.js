export function getAirPolutionTitle(index) {
    switch (index) {
        case 1: {
            return "Good";
        }
        case 2: {
            return "Fair";
        }
        case 3: {
            return "Moderate";
        }
        case 4: {
            return "Poor";
        }
        case 5: {
            return "Very Poor";
        }
        default: {
            return "Unknown";
        }
    }
}

export function getFormattedDate() {
    // Create a new Date object for the current date
    let currentDate = new Date();

    // Define arrays for days and months
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // Extract day, date, month, and year
    let dayName = days[currentDate.getDay()];
    let dateNumber = currentDate.getDate();
    let monthName = months[currentDate.getMonth()];
    let year = currentDate.getFullYear();

    // Form the desired format
    let formattedDate =
        dayName + ", " + dateNumber + " " + monthName + " " + year;
    return formattedDate;
}

export function getCurrentTime() {
    // Create a new Date object for the current time
    let currentTime = new Date();

    // Extract hours and minutes
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();

    // Convert hours to 12-hour format and determine AM/PM
    let meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Handle midnight (0 hours) as 12

    // Add leading zeros to minutes if necessary
    minutes = minutes < 10 ? "0" + minutes : minutes;

    // Form the desired format
    let formattedTime = hours + ":" + minutes + " " + meridiem;

    return formattedTime;
}

