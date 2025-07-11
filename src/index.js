import "./styles.css";
import {LocationFetcher} from "./API.js"
import {WeatherAppEventListeners} from "./UI.js"

WeatherAppEventListeners();
LocationFetcher("Singapore");