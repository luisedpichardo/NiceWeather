import { View } from 'react-native';
// Components
import { HrInfoDisplay } from './HrInfoDisplay.tsx';
// Types
type Clouds = {
  all: number;
};
type Main = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
};
type Sys = {
  pod: string;
};
type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};
type Wind = {
  deg: number;
  gust: number;
  speed: number;
};
type InfoPerHrList = {
  clouds: Clouds;
  dt: number;
  dt_txt: number;
  main: Main;
  pop: number;
  sys: Sys;
  visibility: number;
  weather: Array<Weather>;
  wind: Wind;
};
type Props = {
  infoPerHrList: Array<InfoPerHrList>;
};

export const TempHrDisplay = ({ infoPerHrList }: Props) => {
  return (
    <View>
      {infoPerHrList.map((el: InfoPerHrList, i: number) => {
        return <HrInfoDisplay key={i} hr={el} />;
      })}
    </View>
  );
};
