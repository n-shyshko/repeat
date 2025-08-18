import Swiper from "swiper";
import axios from "axios";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import iziToast from "izitoast";


const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
});

const swiperJS = document.querySelector('.swiper').swiper;



