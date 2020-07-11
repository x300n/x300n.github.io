class Weather{
    constructor(city) {
        this.city = city;
    }

    async getWeather() {
        const apiKey = "b610c1660e114bc505992519fbf317d3";
        const response =
            await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}`);
        const responseDate = await response.json();
        return responseDate;
    }

    changeLocation(city) {
        this.city = city;
    }
}