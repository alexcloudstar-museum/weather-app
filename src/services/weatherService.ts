import axios from 'axios';

const weatherService = async (city: string) => {
  const URL = `${process.env.REACT_APP_WEATHER_API_URL}/daily?days=5&city=${city}&key=${process.env.REACT_APP_WEATHER_API_KEY}`;

  const { data } = await axios.get(URL);
  return data.data;
};

export default weatherService;
