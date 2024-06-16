import axios from "axios";
const userContent = JSON.parse(localStorage.getItem("userContent"));
const accessToken = userContent ? userContent.accessToken : "";
export const http = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMSIsIkhldEhhblN0cmluZyI6IjE3LzEwLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyOTEyMzIwMDAwMCIsIm5iZiI6MTcwNDk5MjQwMCwiZXhwIjoxNzI5MjcwODAwfQ.e_09en7cnMlh5fiMZWSMobMs9zSCjIXHgq-eMFxPlqg",
    Authorization: `Bearer ${accessToken}`,
  },
});
