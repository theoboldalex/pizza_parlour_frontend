import pizzaData from "../static/pizzaData.json";

export const state = () => ({
  data: pizzaData,
  cart: []
});

export const mutations = {
  addToCart: (state, payload) => state.cart.push(payload)
};

export const actions = {
  addToCart: (context, payload) => {
    context.commit("addToCart", payload);
  }
};

export const getters = {};
