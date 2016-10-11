import * as types from './actionTypes';
import * as restaurantApi from '../api/restaurant';

function restaurantListSuccess(restaurantList) {
  console.log('success', restaurantList);
  return { type: types.RESTAURANT_SEARCH, restaurantList };
}

function restaurantListFail(err) {
  console.log(err);
}

function toggleLoading() {
  console.log('toggle loading actions');
  return { type: types.TOGGLE_LOADING };
}

export function getRestaurantList(searchObj) {
  return dispatch => {
    dispatch(toggleLoading());
    restaurantApi.getRestaurants(searchObj)
      .then(res => {
        dispatch(restaurantListSuccess(res.data));
        dispatch(toggleLoading());
      }).catch(err => {
        restaurantListFail(err);
      });
  };
}






