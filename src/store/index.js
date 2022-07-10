import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: null,
  },
  getters: {
    todos(state) { //Формируем массивы по Userid и свойством titles в виде массива списков
      let arr = [];
      state.todos?.forEach(el => {
        let exists = false;
        arr.forEach(item => {
          if(el.userId === item.userId) {
            exists = true;
            item.titles?.push({
              completed: el.completed,
              id: el.id,
              title: el.title,
            });
          }
        });

        if (!exists) {
          let b = {
            userId: el.userId,
            titles: [],
            completed: 0,
          };
          b.titles.push({
            completed: el.completed,
            id: el.id,
            title: el.title,
          })

          arr.push(b);
        }

      })
      return arr;
    },
  },
  mutations: {
    setItems(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    fetchAllItems({commit}, url) {
      return axios.get(url)
          .then((response) => {
            commit("setItems", response.data);
          })
          .catch((err) => console.error(err));
    },


  },
  modules: {
  }
})
