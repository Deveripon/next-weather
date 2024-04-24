const cities = [
    {
        city: "Dhaka",
        lat: "23.7639",
        lng: "90.3889",
        country: "Bangladesh",
        iso2: "BD",
        admin_name: "Dhaka",
        capital: "primary",
        population: "18627000",
        population_proper: "8906039",
    },
    {
        city: "Chattogram",
        lat: "22.3350",
        lng: "91.8325",
        country: "Bangladesh",
        iso2: "BD",
        admin_name: "Chattogram",
        capital: "admin",
        population: "7000000",
        population_proper: "2581643",
    },
    {
        city: "Gāzipura",
        lat: "23.9889",
        lng: "90.3750",
        country: "Bangladesh",
        iso2: "BD",
        admin_name: "Dhaka",
        capital: "",
        population: "2674697",
        population_proper: "2674697",
    },
    {
        city: "Rājshāhi",
        lat: "24.3667",
        lng: "88.6000",
        country: "Bangladesh",
        iso2: "BD",
        admin_name: "Rājshāhi",
        capital: "admin",
        population: "1600000",
        population_proper: "448087",
    },
    {
        city: "Khulna",
        lat: "22.8167",
        lng: "89.5500",
        country: "Bangladesh",
        iso2: "BD",
        admin_name: "Khulna",
        capital: "admin",
        population: "1400689",
        population_proper: "1400689",
    },
    {
        city: "Rangapukur",
        lat: "25.5600",
        lng: "89.2500",
        country: "Bangladesh",
        iso2: "BD",
        admin_name: "Rangpur",
        capital: "",
        population: "1031388",
        population_proper: "1031388",
    },
    {
        city: "Nārāyanganj",
        lat: "23.6200",
        lng: "90.5000",
        country: "Bangladesh",
        iso2: "BD",
        admin_name: "Dhaka",
        capital: "",
        population: "967951",
        population_proper: "967951",
    },
    {
        city: "Mymensingh",
        lat: "24.7539",
        lng: "90.4031",
        country: "Bangladesh",
        iso2: "BD",
        admin_name: "Mymensingh",
        capital: "admin",
        population: "576927",
        population_proper: "576927",
    },
    {
        city: "Bogra",
        lat: "24.8500",
        lng: "89.3667",
        country: "Bangladesh",
        iso2: "BD",
        admin_name: "Rājshāhi",
        capital: "",
        population: "400983",
        population_proper: "400983",
    },
    {
        city: "Savar",
        lat: "23.8500",
        lng: "90.2600",
        country: "Bangladesh",
        iso2: "BD",
        admin_name: "Dhaka",
        capital: "",
        population: "384093",
        population_proper: "384093",
    },
    {
        city: "Tungi",
        lat: "23.9000",
        lng: "90.4100",
        country: "Bangladesh",
        iso2: "BD",
        admin_name: "Dhaka",
        capital: "",
        population: "350000",
        population_proper: "350000",
    },
];

export function getLocation() {
    return cities;
}

export function getLocationByName(locationName) {
    if (!locationName) {
        return null;
    }
    const city = cities.find(
        (c) => c.name.toLowerCase() === locationName.toLowerCase()
    );
    return city || {};
}

