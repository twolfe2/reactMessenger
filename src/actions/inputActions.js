import * as types from './actionTypes';


export default {
  updateLocality(locality) {
    return { type: types.UPDATE_LOCALITY, locality };
  },
  updateRegion(region) {
    return { type: types.UPDATE_REGION, region };
  },
  updateQ(q) {
    return { type: types.UPDATE_Q, q };
  },

};
