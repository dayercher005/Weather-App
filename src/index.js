import "./styles.css";
import {WeatherDetailsFetcher} from "./API.js"
import {WeatherAppEventListeners} from "./UI.js"

WeatherAppEventListeners();
WeatherDetailsFetcher("Singapore");