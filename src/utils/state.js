import { proxy } from "valtio";
import {
  handleGetAbout,
  handleGetCategories,
  handleGetData,
} from "./Firebase/Firebase.service";

export const state = proxy({
  music: handleGetData("music"),
  photos: handleGetData("photos"),
  words: handleGetData("words"),
  categories: handleGetCategories(),
  about: handleGetAbout("text"),
  email: handleGetAbout("email"),
  photo: handleGetAbout("photo"),
  mobile: window.matchMedia("(max-width: 900px)").matches,
});
