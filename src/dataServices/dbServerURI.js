import axios from "axios";

// Use this for local testing
// export default axios.create({ baseURL: "http://localhost:8081" });

// Deployed database server
export default axios.create({
  baseURL: "https://mini-project-2-server.cyclic.app",
});
