import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaMeetup, FaVideo, FaMapMarkerAlt } from "oh-vue-icons/icons";

export default defineNuxtPlugin((nuxt) => {
  addIcons(FaMeetup, FaVideo, FaMapMarkerAlt);
  nuxt.vueApp.component("v-icon", OhVueIcon);
});
