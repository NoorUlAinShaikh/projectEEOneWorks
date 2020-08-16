import axios from "axios";

const baseURL = "https://reqres.in/api";
export default axios.create({ baseURL });
