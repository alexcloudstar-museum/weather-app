type SearchBarProps = {
  city: string;
  searchCity: (city: string) => string;
};

type TempProps = {
  minTemp: number;
  maxTemp: number;
  description: string;
};

type IconProps = {
  icon: string;
};

type DaysProps = {
  day: string;
};

type WeatherBodyProps = TempProps & IconProps & DaysProps;
