import pizzaData from "../static/pizzaData.json";

export const state = () => ({
  data: pizzaData,
  cart: []
});

export const mutations = {};

export const actions = {};

export const getters = {
  getPizzaById: state => id => state.data.filter(el => el._id === id)
};