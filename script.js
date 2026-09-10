const clock = document.getElementById("clock");
const toggleFormat = document.getElementById("toggleFormat");

// set theme
function timeBasedTheme() {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 4) {
        setMidnight();
    } else if (hour >= 4 && hour < 6) {
        setDawn();
    } else if (hour >= 6 && hour < 12) {
        setMorning();
    } else if (hour >= 12 && hour < 17) {
        setAfternoon();
    } else if (hour >= 17 && hour < 19) {
        setEvening();
    } else {
        setNight();
    }
}

function setMidnight() {
    document.getElementById("description").textContent = "midnight";
}

function setDawn() {
    document.getElementById("description").textContent = "dawn";
    document.body.style.backgroundImage = "url('images/dawn.jpg')";
    setTheme("dawn");
}

function setMorning() {
    document.getElementById("description").textContent = "morning";
    document.body.style.backgroundImage = "url('images/morning.jpg')";
    setTheme("morning");
}

function setAfternoon() {
    document.getElementById("description").textContent = "afternoon";
    document.body.style.backgroundImage = "url('images/afternoon.jpg')";
    setTheme("afternoon");
}

function setEvening() {
    document.getElementById("description").textContent = "evening";
    document.body.style.backgroundImage = "url('images/evening.jpg')";
    setTheme("evening");
}

function setNight() {
    document.getElementById("description").textContent = "night";
    document.body.style.backgroundImage = "url('images/night.jpg')";
    setTheme("night");
}

function setTheme(themeName) {
    const themes = ["midnight", "dawn", "morning", "afternoon", "evening", "night"];
    themes.forEach(theme => document.body.classList.remove(theme));
    document.body.classList.add(themeName);
}

// live clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    if (document.body.classList.contains("12-hour-time")) {
        let periodText;
        if (hours >= 12) {
            periodText = "PM";
        } else {
            periodText = "AM";
        }

        hours = hours % 12;
        if (hours === 0) {
            hours = 12;
        }

        clock.textContent = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
        period.textContent = periodText;
    } else {
        clock.textContent = `${String(hours).padStart(2, "0")}:${minutes}:${seconds}`;
        period.textContent = "";
    }
}

// time format toggle
function toggleTimeFormat() {
    document.body.classList.toggle("12-hour-time");

    if (document.body.classList.contains("12-hour-time")) {
        toggleFormat.textContent = "24 hour time";
    } else {
        toggleFormat.textContent = "12 hour time";
    }
}


timeBasedTheme();
setInterval(timeBasedTheme, 7200000);

updateClock();
// updates clock every second (1000 milliseconds)
setInterval(updateClock, 1000);

toggleFormat.addEventListener("click", toggleTimeFormat);