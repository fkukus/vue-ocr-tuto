import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoppingCart: 0,
    restaurentName: "La belle vue",
    simpleMenu: [
      {
        name: "Croissant",
        inStock: true,
        quantity: 1,
        price: 1,
      },
      {
        name: "Baguette de pain",
        image: {
          source: "/images/french-baguette.jpeg",
          alt: "Quatre baguettes de pain"
        },
        inStock: true,
        quantity: 1,
        price: 1.2
      },
      {
        name: "Éclair",
        image: {
          source: "/images/eclair.jpg",
          alt: "Éclair au chocolat"
        },
        inStock: false,
        quantity: 1,
        price: 1.6
      }
    ]
  },
  getters: {
    copyright(state) {
      const currentYear = new Date().getFullYear()

      return `Copyright ${state.restaurentName} ${currentYear}`
    }
  },
  mutations: {
    INCREMENT_SHOPPING_CART(state, payload = 1) {
      state.shoppingCart += payload
    }
  },
  actions: {
    addToShoppingCart({ commit }, payload) {
      commit('INCREMENT_SHOPPING_CART', payload)
    }
  },
  modules: {
  }
})
