import pizzaData from "../static/pizzaData.json";

export const state = () => ({
  data: pizzaData,
  cart: []
});

export const mutations = {
  addToCart: (state, payload) => state.cart.push(payload),
  removeFromCart: (state, payload) => state.cart.splice(payload, 1),
  setCart: (state, payload) => (state.cart = payload)
};

export const actions = {
  addToCart: (context, payload) => {
    context.commit("addToCart", payload);
  },
  removeFromCart: (context, payload) => {
    context.commit("removeFromCart", payload);
  },
  setCart: (context, payload) => {
    context.commit("setCart", payload);
  }
};

export const getters = {};
