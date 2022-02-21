import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  FaMeetup,
  FaVideo,
  FaMapMarkerAlt,
  FaCalendarPlus,
} from "oh-vue-icons/icons";

export default defineNuxtPlugin((nuxt) => {
  addIcons(FaMeetup, FaVideo, FaMapMarkerAlt, FaCalendarPlus);
  nuxt.vueApp.component("v-icon", OhVueIcon);
});
