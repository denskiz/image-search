import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 7f6424931e187150a96c5df4161848773c0db1fb656b632d36210fa7e6c81ad5",
  },
});
