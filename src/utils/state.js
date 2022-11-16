import { proxy } from 'valtio'

export const state = proxy({
  music: [],
  photos: [],
  words: [],
  data: [],
  mobile: window.matchMedia("(max-width: 768px)").matches,
  categories: [],
  about: "",
  email: "",
  photo: "",
});