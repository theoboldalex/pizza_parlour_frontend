import pizzaData from "../static/pizzaData.json";

export const state = () => ({
  data: pizzaData,
  cart: []
});
