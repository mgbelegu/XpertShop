import axios from "axios";

const instance = axios.create({
  baseURL: "https://xpert-ecommerce.firebaseio.com/users.json",
});

export default instance;
