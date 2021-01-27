import axios from "axios";

const API_KEY = "18964408-9430149bbed18e9d9e56d5420";
const URL_REQUEST = "https://pixabay.com/api/?";
const DEFAULT_REQUEST_PARAM =
  "&image_type=photo&orientation=horizontal&per_page=12";

export const fetchImg = (searchName = "", searchPage = "1") => {
  return axios.get(
    URL_REQUEST +
      `q=${searchName}&page=${searchPage}&key=` +
      API_KEY +
      DEFAULT_REQUEST_PARAM
  );
};
