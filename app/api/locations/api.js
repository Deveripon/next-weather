export async function getWeatherInfo(lat, lon) {
    try {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
        );
        return res.json();
    } catch (error) {
        console.log(error.message);
    }
}

export async function getAirPolutionInfo(lat, lon) {
    try {
        const res = await fetch(
            `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API_KEY}`
        );
        return res.json();
    } catch (error) {
        console.log(error.message);
    }
}

export async function getLocationInfo(lat, lon) {
    try {
        const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
        );
        return res.json();
    } catch (error) {}
}

export async function getLocationListWithLatLong() {
    try {
        const res = await fetch(`/api/locations`);
        return res.json();
    } catch (error) {
        console.log(error.message);
    }
}

export async function getLocationDataFromLocationName(name) {
    try {
        const res = fetch(`/api/locations/${name}`);
        return res.json();
    } catch (error) {
        console.log(error.message);
    }
}

