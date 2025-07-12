import "./styles.css";
import {WeatherLocationFetcher} from "./API.js"
import {WeatherAppEventListeners} from "./UI.js"

WeatherAppEventListeners();
WeatherLocationFetcher("Singapore");