export type TempProps = {
  minTemp: number;
  maxTemp: number;
};

export type IconProps = {
  icon: string;
};

export type DaysProps = {
  day: string;
};

export type WeatherBodyProps = TempProps & IconProps & DaysProps;
