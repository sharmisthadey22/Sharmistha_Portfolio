import axios from 'axios';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter city name: ', async (city) => {
    const apiKey = '6f296a155f3dbd207ee5e58b00520c4a'; // Replace with your actual API key
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await axios.get(url);
        console.log(`City Name: ${response.data.name}`);
        console.log(`Current temperature is ${response.data.main.temp}°C`);
        console.log(`Weather conditions: ${response.data.weather[0].description}`);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    } finally {
        rl.close();
    }
})