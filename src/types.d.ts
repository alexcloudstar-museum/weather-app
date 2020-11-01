type SearchBarProps = {
  city: string;
  searchCity: (city: string) => Promise<void>;
  loading: boolean;
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

type LoaderProps = {
  message: string;
};

type WeatherBodyProps = TempProps & IconProps & DaysProps;
