import axios from "axios";

export default axios.create({
  // mocking server with json-server
  baseURL: "http://localhost:3001",
});
