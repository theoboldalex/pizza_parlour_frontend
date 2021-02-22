import pizzaData from "../static/pizzaData.json";

export const state = () => ({
  data: pizzaData,
  cart: []
});

export const mutations = {
  addToCart: (state, payload) => state.cart.push(payload),
  removeFromCart: (state, payload) => state.cart.splice(payload, 1)
};

export const actions = {
  addToCart: (context, payload) => {
    context.commit("addToCart", payload);
  },
  removeFromCart: (context, payload) => {
    context.commit("removeFromCart", payload);
  }
};

export const getters = {};
