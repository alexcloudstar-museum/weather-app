interface WeatherContextParams {
  datetime: string;
  weather: { code: number; description: string };
  min_temp: number;
  max_temp: number;
}

export default WeatherContextParams;
