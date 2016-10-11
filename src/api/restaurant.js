import axios from 'axios';

const searchURL = 'https://restaurant-server.herokuapp.com/api/restaurants';


export function getRestaurants(searchObj) {
  console.log('in rest api', searchObj);
  return axios.post(searchURL, searchObj);
}


// export default function restaurantApi {
//   getRestaurants: (searchObj) => axios.post(searchURL, searchObj),
// };
