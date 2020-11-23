import axios from "axios";

const instance = axios.create({
  baseURL: "https://xpert-ecommerce.firebaseio.com/orders.json",
});

export default instance;
