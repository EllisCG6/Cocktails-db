import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'


const store = createStore({
  
  state() {
    return {
      cocktails: [],
    };
  },
  getters: {
    cocktails(state) {
      return state.cocktails;
    }
  },
});

export default store;
