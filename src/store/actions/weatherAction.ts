import api from 'api';
import { ThunkAction } from 'redux-thunk';
import { RootState } from 'store';

import { WeatherAction, GET_WEATHER, SET_LOADING, Weather } from 'store/types';

export const getWeather = (
  city: string
): ThunkAction<void, RootState, null, WeatherAction> => {
  return async dispatch => {
    try {
      const res = await api.get(
        `daily?days=5&city=${city}&key=3883f69ab25f46dc92cdf2b5d66a1517`
      );

      const resData: Weather[] = await res.data.data;

      dispatch({
        type: GET_WEATHER,
        payload: resData,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const setLoading = (): WeatherAction => {
  return {
    type: SET_LOADING,
  };
};
