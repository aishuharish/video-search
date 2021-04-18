import axios from "axios";

const KEY = "AIzaSyCKKjxa7DZ98yA3F0iIiRZMQzGV5XB9zAg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY,
    type: "video",
  },
});
