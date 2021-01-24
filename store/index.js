import pizzaData from "../static/pizzaData.json";

export const state = () => ({
  data: pizzaData,
  cart: [],
  modalIsVisible: false
});

export const mutations = {
  showModal: (state, payload) => (state.modalIsVisible = payload)
};

export const actions = {
  showModal: (context, payload) => context.commit("showModal", payload)
};
