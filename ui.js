class UI {
    constructor() {
        this.weather = document.getElementById('w-weather');
        this.minTemp = document.getElementById('w-minTemp');
        this.maxTemp = document.getElementById('w-maxTemp');
        this.humidity = document.getElementById('w-humidity');
    }

    paint(weather) {

        this.weather.textContent = `${weather.sys.country}, ${weather.name}: ${weather.weather[0].description.toUpperCase()}`;
        this.minTemp.textContent = weather.main.temp_min;
        this.maxTemp.textContent = weather.main.temp_max;
        this.humidity.textContent = weather.main.humidity;
    }
}
