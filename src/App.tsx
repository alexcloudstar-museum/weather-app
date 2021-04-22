import GlobalStyle from 'globalStyles';
import { FC } from 'react';
import { WeatherBody } from 'shared';

const App: FC = () => (
  <div className='App'>
    <div className='weatherContainer pt-3 pb-3'>
      <GlobalStyle />
      <WeatherBody
        day='Mon'
        iconCode={801}
        minTemp={15}
        maxTemp={25}
        description='Lorem ipsum'
      />
      <WeatherBody
        day='Tue'
        iconCode={803}
        minTemp={5}
        maxTemp={10}
        description='Lorem ipsum'
      />
      <WeatherBody
        day='Wed'
        iconCode={801}
        minTemp={0}
        maxTemp={-5}
        description='Lorem ipsum'
      />
      <WeatherBody
        day='Thu'
        iconCode={801}
        minTemp={12}
        maxTemp={14}
        description='Lorem ipsum'
      />
      <WeatherBody
        day='Fri'
        iconCode={801}
        minTemp={-10}
        maxTemp={-22}
        description='Lorem ipsum'
      />
    </div>
  </div>
);

export default App;
