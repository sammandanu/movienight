import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    url: "https://api.themoviedb.org/3/",
    api: "3210a5ea0268de0ce8488efd017058c1",
  },
  mutations: {},
  actions: {
    async getLatest() {
      const url =
        this.state.url + "movie/now_playing?api_key=" + this.state.api;

      return new Promise((resolve, reject) => {
        axios
          .get(url)
          .then((response) => {
            resolve(response.data.results);
          })
          .catch(function(err) {
            reject(err.response);
          });
      });
    },

    async getGenre() {
      const url = this.state.url + "genre/movie/list?api_key=" + this.state.api;

      return new Promise((resolve, reject) => {
        axios
          .get(url)
          .then((response) => {
            resolve(response.data.genres);
          })
          .catch(function(err) {
            reject(err.response);
          });
      });
    },

    async getDetail(cek, data) {
      const url =
        this.state.url + "movie/" + data + "?api_key=" + this.state.api;

      return new Promise((resolve, reject) => {
        axios
          .get(url)
          .then((response) => {
            resolve(response.data);
          })
          .catch(function(err) {
            reject(err.response);
          });
      });
    },
  },
  modules: {},
});
