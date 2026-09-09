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

timeBasedTheme();