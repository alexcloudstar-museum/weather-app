export type TempProps = {
  minTemp: number;
  maxTemp: number;
};

type IconProps = {
  icon: string;
};

type DaysProps = {
  day: string;
};

type WeatherBodyProps = TempProps & IconProps & DaysProps;
