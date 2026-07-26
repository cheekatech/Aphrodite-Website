import "./Products.css"
import Cart from "../assets/icons/addToCart.png"
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";



import stars from "../assets/icons/4stars.png";

import sportWears1 from "../assets/productImages/sportWears1.webp";
import sportWears1T1 from "../assets/productImages/sportWears1-2.webp";
import sportWears1T2 from "../assets/productImages/sportWears1-3.webp";
import sportWears1T3 from "../assets/productImages/sportWears1-4.avif";

import sportWears2 from "../assets/productImages/sportWears2.webp";
import sportWears2T1 from "../assets/productImages/sportWears2-2.webp";
import sportWears2T2 from "../assets/productImages/sportWears2-3.webp";
import sportWears2T3 from "../assets/productImages/sportWears2-4.webp";

import sportWears3 from "../assets/productImages/sportWears3.avif";
import sportWears3T1 from "../assets/productImages/sportWears3-2.webp";
import sportWears3T2 from "../assets/productImages/sportWears3-3.jpg";
import sportWears3T3 from "../assets/productImages/sportWears3-4.avif";

import sportWears4 from "../assets/productImages/sportWears4.avif";
import sportWears4T1 from "../assets/productImages/sportWears4-2.avif";
import sportWears4T2 from "../assets/productImages/sportWears4-3.avif";
import sportWears4T3 from "../assets/productImages/sportWears4-4.webp";

import sportWears5 from "../assets/productImages/sportWears5.webp";
import sportWears5T1 from "../assets/productImages/sportWears5-2.avif";
import sportWears5T2 from "../assets/productImages/sportWears5-3.avif";
import sportWears5T3 from "../assets/productImages/sportWears5-4.webp";


import trendingNow1 from "../assets/productImages/trendingNow1.avif";
import trendingNow1T1 from "../assets/productImages/trendingNow1-2.avif";
import trendingNow1T2 from "../assets/productImages/trendingNow1-3.avif";
import trendingNow1T3 from "../assets/productImages/trendingNow1-4.avif";

import trendingNow2 from "../assets/productImages/trendingNow2.avif";
import trendingNow2T1 from "../assets/productImages/trendingNow2-2.avif";
import trendingNow2T2 from "../assets/productImages/trendingNow2-3.webp";
import trendingNow2T3 from "../assets/productImages/trendingNow2-4.webp";

import trendingNow3 from "../assets/productImages/trendingNow3.avif";
import trendingNow3T1 from "../assets/productImages/trendingNow3-2.avif";
import trendingNow3T2 from "../assets/productImages/trendingNow3-3.avif";
import trendingNow3T3 from "../assets/productImages/trendingNow3-4.avif";

import trendingNow4 from "../assets/productImages/trendingNow4.avif";
import trendingNow4T1 from "../assets/productImages/trendingNow4-2.avif";
import trendingNow4T2 from "../assets/productImages/trendingNow4-3.png";
import trendingNow4T3 from "../assets/productImages/trendingNow4-4.png";

import trendingNow5 from "../assets/productImages/trendingNow5.avif";
import trendingNow5T1 from "../assets/productImages/trendingNow5-2.avif";
import trendingNow5T2 from "../assets/productImages/trendingNow5-3.avif";
import trendingNow5T3 from "../assets/productImages/trendingNow5-4.avif";



import newArrivals1 from "../assets/productImages/newArrivals1.avif";
import newArrivals1T1 from "../assets/productImages/newArrivals1-2.avif";
import newArrivals1T2 from "../assets/productImages/newArrivals1-3.jpeg";
import newArrivals1T3 from "../assets/productImages/newArrivals1-4.jpeg";

import newArrivals2 from "../assets/productImages/newArrivals2.avif";
import newArrivals2T1 from "../assets/productImages/newArrivals2-2.avif";
import newArrivals2T2 from "../assets/productImages/newArrivals2-3.avif";
import newArrivals2T3 from "../assets/productImages/newArrivals2-4.avif";

import newArrivals3 from "../assets/productImages/newArrivals3.avif";
import newArrivals3T1 from "../assets/productImages/newArrivals3-2.avif";
import newArrivals3T2 from "../assets/productImages/newArrivals3-3.avif";
import newArrivals3T3 from "../assets/productImages/newArrivals3-4.png";

import newArrivals4 from "../assets/productImages/newArrivals4.png";
import newArrivals4T1 from "../assets/productImages/newArrivals4-2.png";
import newArrivals4T2 from "../assets/productImages/newArrivals4-3.png";
import newArrivals4T3 from "../assets/productImages/newArrivals4-4.png";

import newArrivals5 from "../assets/productImages/newArrivals5.avif";
import newArrivals5T1 from "../assets/productImages/newArrivals5-2.avif";
import newArrivals5T2 from "../assets/productImages/newArrivals5-3.avif";
import newArrivals5T3 from "../assets/productImages/newArrivals5-4.jpeg";


import men1 from "../assets/productImages/men1.avif";
import men1T1 from "../assets/productImages/men1-2.avif";
import men1T2 from "../assets/productImages/men1-3.avif";
import men1T3 from "../assets/productImages/men1-4.avif";

import men2 from "../assets/productImages/men2.avif";
import men2T1 from "../assets/productImages/men2-2.avif";
import men2T2 from "../assets/productImages/men2-3.avif";
import men2T3 from "../assets/productImages/men2-4.avif";

import men3 from "../assets/productImages/men3.avif";
import men3T1 from "../assets/productImages/men3-2.avif";
import men3T2 from "../assets/productImages/men3-3.avif";
import men3T3 from "../assets/productImages/men3-4.avif";

import men4 from "../assets/productImages/men4.avif";
import men4T1 from "../assets/productImages/men4-2.avif";
import men4T2 from "../assets/productImages/men4-3.avif";
import men4T3 from "../assets/productImages/men4-4.jpeg";

import men5 from "../assets/productImages/men5.avif";
import men5T1 from "../assets/productImages/men5-2.avif";
import men5T2 from "../assets/productImages/men5-3.avif";
import men5T3 from "../assets/productImages/men5-4.avif";


import women1 from "../assets/productImages/women1.avif";
import women1T1 from "../assets/productImages/women1-2.avif";
import women1T2 from "../assets/productImages/women1-3.avif";
import women1T3 from "../assets/productImages/women1-4.png";

import women2 from "../assets/productImages/women2.avif";
import women2T1 from "../assets/productImages/women2-2.avif";
import women2T2 from "../assets/productImages/women2-3.avif";
import women2T3 from "../assets/productImages/women2-4.png";

import women3 from "../assets/productImages/women3.avif";
import women3T1 from "../assets/productImages/women3-2.avif";
import women3T2 from "../assets/productImages/women3-3.avif";
import women3T3 from "../assets/productImages/women3-4.png";

import women4 from "../assets/productImages/women4.avif";
import women4T1 from "../assets/productImages/women4-2.avif";
import women4T2 from "../assets/productImages/women4-3.avif";
import women4T3 from "../assets/productImages/women4-4.png";

import women5 from "../assets/productImages/women5.avif";
import women5T1 from "../assets/productImages/women5-2.avif";
import women5T2 from "../assets/productImages/women5-3.avif";
import women5T3 from "../assets/productImages/women5-4.avif";


import flashSales1 from "../assets/productImages/flashSales1.webp";
import flashSales1T1 from "../assets/productImages/flashSales1-2.avif";
import flashSales1T2 from "../assets/productImages/flashSales1-3.webp";
import flashSales1T3 from "../assets/productImages/flashSales1-4.webp";

import flashSales2 from "../assets/productImages/flashSales2.avif";
import flashSales2T1 from "../assets/productImages/flashSales2-2.avif";
import flashSales2T2 from "../assets/productImages/flashSales2-3.png";
import flashSales2T3 from "../assets/productImages/flashSales2-4.png";

import flashSales3 from "../assets/productImages/flashSales3.avif";
import flashSales3T1 from "../assets/productImages/flashSales3-2.avif";
import flashSales3T2 from "../assets/productImages/flashSales3-3.avif";
import flashSales3T3 from "../assets/productImages/flashSales3-4.avif";

import flashSales4 from "../assets/productImages/flashSales4.avif";
import flashSales4T1 from "../assets/productImages/flashSales4-2.avif";
import flashSales4T2 from "../assets/productImages/flashSales4-3.avif";
import flashSales4T3 from "../assets/productImages/flashSales4-4.png";

import flashSales5 from "../assets/productImages/flashSales5.avif";
import flashSales5T1 from "../assets/productImages/flashSales5-2.avif";
import flashSales5T2 from "../assets/productImages/flashSales5-3.avif";
import flashSales5T3 from "../assets/productImages/flashSales5-4.avif";

import flashSales6 from "../assets/productImages/flashSales6.jpg";
import flashSales6T1 from "../assets/productImages/flashSales6-2.webp";
import flashSales6T2 from "../assets/productImages/flashSales6-3.jpg";
import flashSales6T3 from "../assets/productImages/flashSales6-4.webp";

import flashSales7 from "../assets/productImages/flashSales7.avif";
import flashSales7T1 from "../assets/productImages/flashSales7-2.avif";
import flashSales7T2 from "../assets/productImages/flashSales7-3.avif";
import flashSales7T3 from "../assets/productImages/flashSales7-4.avif";

import flashSales8 from "../assets/productImages/flashSales8.avif";
import flashSales8T1 from "../assets/productImages/flashSales8-2.avif";
import flashSales8T2 from "../assets/productImages/flashSales8-3.avif";
import flashSales8T3 from "../assets/productImages/flashSales8-4.avif";

import flashSales9 from "../assets/productImages/flashSales9.avif";
import flashSales9T1 from "../assets/productImages/flashSales9-2.avif";
import flashSales9T2 from "../assets/productImages/flashSales9-3.avif";
import flashSales9T3 from "../assets/productImages/flashSales9-4.jpg";

import flashSales10 from "../assets/productImages/flashSales10.avif";
import flashSales10T1 from "../assets/productImages/flashSales10-2.avif";
import flashSales10T2 from "../assets/productImages/flashSales10-3.avif";
import flashSales10T3 from "../assets/productImages/flashSales10-4.avif";



  export const ProductLists = [
  {
    id: 1,
    category: "Trending Now",
    watchlist: "",
    Image: [trendingNow1, trendingNow1T1, trendingNow1T2,trendingNow1T3],
    name: "Ladies lace blouse",
    writeup: "it comes in different colors and sizes.",
    price: 45,
    oldprice: 50,
    discount: 10,
    star: stars,
    rating: 200,
    addtocart: "",
    procolors: ["khaki", "Black", "Peach", "White"],
  },
  {
    id: 2,
    category: "Trending Now",
    watchlist: "",
    Image: [trendingNow2, trendingNow2T1, trendingNow2T2, trendingNow2T3],
    name: "Women jewllery set",
    writeup: "A set of women necklace, earrings and purse.",
    price: 27,
    oldprice: 30,
    discount: 10,
    star: stars,
    rating: 123,
    addtocart: "",
    procolors: ["White", "Khaki", "Black", "Blue"],
  },
  {
    id: 3,
    category: "Trending Now",
    watchlist: "",
    Image: [trendingNow3, trendingNow3T1, trendingNow3T2, trendingNow3T3],
    name: "Ladies gown",
    writeup: "Ladies simple plain gown in different colors.",
    price: 72,
    oldprice: 80,
    discount: 10,
    star: stars,
    rating: 204,
    addtocart: "",
    procolors: ["Khaki", "Peach", "Blue", "Black"],
  },
  {
    id: 4,
    category: "Trending Now",
    watchlist: "",
    Image: [trendingNow4, trendingNow4T1, trendingNow4T2, trendingNow4T3],
    name: "Men's leather shoes",
    writeup: "Men's pointed shining shoes in brown and black colors.",
    price: 54,
    oldprice: 60,
    discount: 10,
    star: stars,
    rating: 64,
    addtocart: "",
    procolors: ["Brown", "Black", "White", "Navy"],
  },
  {
    id: 5,
    category: "Trending Now",
    watchlist: "",
    Image: [trendingNow5, trendingNow5T1, trendingNow5T2, trendingNow5T3],
    name: "Men's shirt and trousers",
    writeup: "Men's matching shirt and trousers in differenet colors and size.",
    price: 108,
    oldprice: 120,
    discount: 10,
    star: stars,
    rating: 276,
    addtocart: "",
    procolors: ["Coffee", "Navy", "Blue", "Black"],
  },
  {
    id: 6,
    category: "New Arrivals",
    watchlist: "",
    Image: [newArrivals1, newArrivals1T1, newArrivals1T2, newArrivals1T3],
    name: "Women's blouse",
    writeup: "Fine women's blouse in many colors.",
    price: 30,
    oldprice: 60,
    discount: 50,
    star: stars,
    rating: 20,
    addtocart: "",
    procolors: ["Red", "Black", "White", "Blue"],
  },
  {
    id: 7,
    category: "New Arrivals",
    watchlist: "",
    Image: [newArrivals2, newArrivals2T1, newArrivals2T2, newArrivals2T3],
    name: "Men's cap",
    writeup: "Men's cap comes in different colors.",
    price: 20,
    oldprice: 40,
    discount: 50,
    star: stars,
    rating: 13,
    addtocart: "",
    procolors: ["Blue", "White", "Khaki", "Black"],
  },
  {
    id: 8,
    category: "New Arrivals",
    watchlist: "",
    Image: [newArrivals3, newArrivals3T1, newArrivals3T2, newArrivals3T3],
    name: "Men's sunglasses",
    writeup: "Fancy Men's sunglasses in many colors.",
    price: 20,
    oldprice: 40,
    discount: 50,
    star: stars,
    rating: 24,
    addtocart: "",
    procolors: ["Khaki", "Black", "Blue", "Gray"],
  },
  {
    id: 9,
    category: "New Arrivals",
    watchlist: "",
    Image: [newArrivals4, newArrivals4T1, newArrivals4T2, newArrivals4T3],
    name: "Unisex plain shirt",
    writeup: "For men and women. Comes in different sizes and colors.",
    price: 25,
    oldprice: 50,
    discount: 50,
    star: stars,
    rating: 12,
    addtocart: "",
    procolors: ["Red", "Blue", "Black", "White"],
  },
  {
    id: 10,
    category: "New Arrivals",
    watchlist: "",
    Image: [newArrivals5, newArrivals5T1, newArrivals5T2, newArrivals5T3],
    name: "Women's leather shoes",
    writeup: "Fancy women's leather shoes in different sizes and colors.",
    price: 30,
    oldprice: 60,
    discount: 50,
    star: stars,
    rating: 9,
    addtocart: "",
    procolors: ["Black", "Red", "White", "Yellow"],
  },
  {
    id: 11,
    category: "Men Fashion",
    watchlist: "",
    Image: [men1, men1T1, men1T2, men1T3],
    name: "Men good quality shirt",
    writeup: "Quality men shirt in different colors and sizes.",
    price: 80,
    star: stars,
    rating: 150,
    addtocart: "",
    procolors: ["Red", "Pink", "Blue", "Navy"],
  },
  {
    id: 12,
    category: "Men Fashion",
    watchlist: "",
    Image: [men2, men2T1, men2T2, men2T3],
    name: "Men stylish cap",
    writeup: "Stylish cap for men in different colors.",
    price: 20,
    star: stars,
    rating: 100,
    addtocart: "",
    procolors: ["Navy", "Gray", "Black", "White"],
  },
  {
    id: 13,
    category: "Men Fashion",
    watchlist: "",
    Image: [men3, men3T1, men3T2, men3T3],
    name: "Men stylish glasses",
    writeup: "Stylish glasses for men in different styles.",
    price: 30,
    star: stars,
    rating: 80,
    addtocart: "",
    procolors: ["Silver", "Black", "Brown", "Gray"],
  },
  {
    id: 14,
    category: "Men Fashion",
    watchlist: "",
    Image: [men4, men4T1, men4T2, men4T3],
    name: "Men stylish slippers",
    writeup: "Stylish slippers for men in different colors.",
    price: 120,
    star: stars,
    rating: 100,
    addtocart: "",
    procolors: ["Khaki", "Black", "Plain Black", "White"],
  },
  {
    id: 15,
    category: "Men Fashion",
    watchlist: "",
    Image: [men5, men5T1, men5T2, men5T3],
    name: "Men plain trousers",
    writeup: "Plain trousers for men in different colors.",
    price: 150,
    star: stars,
    rating: 100,
    addtocart: "",
    procolors: ["Khaki", "Off-White", "White", "Black"],
  },
  {
    id: 16,
    category: "Women Fashion",
    watchlist: "",
    Image: [women1, women1T1, women1T2, women1T3],
    name: "Women fashion hand bag",
    writeup: "Stylish hand bag for women in different colors.",
    price: 100,
    star: stars,
    rating: 100,
    addtocart: "",
    procolors: ["Brown", "Red", "Black", "White"],
  },
  {
    id: 17,
    category: "Women Fashion",
    watchlist: "",
    Image: [women2, women2T1, women2T2, women2T3],
    name: "Women stylish cap",
    writeup: "Stylish cap for women in different colors.",
    price: 20,
    star: stars,
    rating: 100,
    addtocart: "",
    procolors: ["Khaki", "Peach", "Cream", "Red"],
  },
  {
    id: 18,
    category: "Women Fashion",
    watchlist: "",
    Image: [women3, women3T1, women3T2, women3T3],
    name: "Women stylish slippers",
    writeup: "Stylish slippers for women in different colors.",
    price: 30,
    star: stars,
    rating: 80,
    addtocart: "",
    procolors: ["White", "Off-white", "Gold", "Black"],
  },
  {
    id: 19,
    category: "Women Fashion",
    watchlist: "",
    Image: [women4, women4T1, women4T2, women4T3],
    name: "Women stylish plain gown",
    writeup: "Stylish plain gown for women in different styles.",
    price: 30,
    star: stars,
    rating: 80,
    addtocart: "",
    procolors: ["Black", "Red", "Army-green", "White"],
  },
  {
    id: 20,
    category: "Women Fashion",
    watchlist: "",
    Image: [women5, women5T1, women5T2, women5T3],
    name: "Women knitted gown",
    writeup: "Knitted gown for women in different colors.",
    price: 150,
    star: stars,
    rating: 100,
    addtocart: "",
    procolors: ["Brown", "Black", "Red", "White"],
  },
  {
    id: 21,
    category: "Sport Wears",
    watchlist: "",
    Image: [sportWears1, sportWears1T1, sportWears1T2, sportWears1T3],
    name: "France 2026 home jersey",
    writeup: "Get your France 2026 home jersey in different sizes.",
    price: 100,
    star: stars,
    rating: 100,
    addtocart: "",
    procolors: ["Men", "Women", "Youth", "Kids"],
  },
  {
    id: 22,
    category: "Sport Wears",
    watchlist: "",
    Image: [sportWears2, sportWears2T1, sportWears2T2, sportWears2T3],
    name: "Germany 2026 home jersey",
    writeup: "Get your Germany 2026 home jersey in different sizes.",
    price: 100,
    star: stars,
    rating: 100,
    addtocart: "",
    procolors: ["Men", "Women", "Youth", "Kids"],
  },
  {
    id: 23,
    category: "Sport Wears",
    watchlist: "",
    Image: [sportWears3, sportWears3T1, sportWears3T2, sportWears3T3],
    name: "Argentina 2026 home jersey",
    writeup: "Get your Argentina 2026 home jersey in different sizes.",
    price: 100,
    star: stars,
    rating: 100,
    addtocart: "",
    procolors: ["Men", "Women", "Youth", "Kids"],
  },

  {
    id: 24,
    category: "Sport Wears",
    watchlist: "",
    Image: [sportWears4, sportWears4T1, sportWears4T2, sportWears4T3],
    name: "Portugal 2026 home jersey",
    writeup: "Get your Portugal 2026 home jersey in different sizes.",
    price: 100,
    star: stars,
    rating: 100,
    addtocart: "",
    procolors: ["Men", "Women", "Youth", "Kids"],
  },

  {
    id: 25,
    category: "Sport Wears",
    watchlist: "",
    Image: [sportWears5, sportWears5T1, sportWears5T2, sportWears5T3],
    name: "Brazil 2026 home jersey",
    writeup: "Get your Brazil 2026 home jersey in different sizes.",
    price: 100,
    star: stars,
    rating: 100,
    addtocart: "",
    procolors: ["Men", "Women", "Youth", "Kids"],
  },
  

  { 
    id: 26,
    category: "Flash Sales",
    name: "Brazil 2026 Away Jersey", 
    price: 30, 
    discount: 70, 
    Image: [flashSales1, flashSales1T1, flashSales1T2, flashSales1T3],
    rating: 211,
    star: stars,
    procolors: ["Men", "Women", "Youth", "Kids"],
  },

  { 
    id: 27, 
    category: "Flash Sales",
    name: "Black men jeans", 
    price: 40, 
    discount: 70, 
    Image: [flashSales2, flashSales2T1, flashSales2T2, flashSales2T3],
    rating: 203,
    star: stars,
    procolors: ["Black", "Blue", "Red", "White"],

  },
  { 
    id: 28, 
    category: "Flash Sales",
    name: "Women fur cap", 
    price: 15, 
    discount: 70, 
    Image: [flashSales3, flashSales3T1, flashSales3T2, flashSales3T3],
    rating: 214,
    star: stars,
    procolors: ["White", "Pink", "Black", "Brown"],
  },
  { 
    id: 29, 
    category: "Flash Sales",
    name: "Women gown", 
    price: 20, 
    discount: 70, 
    Image: [flashSales4, flashSales4T1, flashSales4T2, flashSales4T3],
    rating: 114,
    star: stars,
    procolors: ["Khaki", "Yellow", "Black", "White"],
  },
  { 
    id: 30, 
    category: "Flash Sales",
    name: "Women leather bag", 
    price: 15, 
    discount: 70, 
    Image: [flashSales5, flashSales5T1, flashSales5T2, flashSales5T3],
    rating: 245,
    star: stars,
    procolors: ["Brown", "Red", "Pink", "White"],
  },
  { 
    id: 31, 
    category: "Flash Sales",
    name: "Mexico 2026 home jersey", 
    price: 60, 
    discount: 70, 
    Image: [flashSales6, flashSales6T1, flashSales6T2, flashSales6T3],
    rating: 213,
    star: stars,
    procolors: ["Men", "Women", "youth", "kids"],
  },

  { 
    id: 32, 
    category: "Flash Sales",
    name: "Men long sleeve polo", 
    price: 15, 
    discount: 70, 
    Image: [flashSales7, flashSales7T1, flashSales7T2, flashSales7T3],
    rating: 234,
    star: stars,
    procolors: ["Khaki", "Army-green", "Black", "Gray"],
  },

  { 
    id: 33, 
    category: "Flash Sales",
    name: "Women Fashion glasses 2 n 1", 
    price: 5, 
    discount: 70, 
    Image: [flashSales8, flashSales8T1, flashSales8T2, flashSales8T3],
    rating: 233,
    star: stars,
    procolors: ["Black/Pink", "Black/Khaki", "Black/Gold", "White/Pink"],
  },

  { 
    id: 34, 
    category: "Flash Sales",
    name: "Men chinos", 
    price: 20, 
    discount: 70, 
    Image: [flashSales9, flashSales9T1, flashSales9T2, flashSales9T3],
    rating: 153,
    star: stars,
    procolors: ["Khaki", "Gray", "Black", "Army-green"],
  },

  { 
    id: 35, 
    category: "Flash Sales",
    name: "Unisex knitted sweater", 
    price: 20, 
    discount: 70, 
    Image: [flashSales10, flashSales10T1, flashSales10T2, flashSales10T3],
    rating: 222,
    star: stars,
    procolors: ["Khaki", "Green", "Black", "Pink"],
  },
  
];


export function WishlistButton({ product }) {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button className="wishlistBtn" onClick={toggleWishlist}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill={inWishlist ? "#c2185b" : "none"}
        stroke={inWishlist ? "#c2185b" : "#3f2305"}
        strokeWidth="2"
      >
        <path d="M12 21s-6.716-4.35-9.428-8.06C.29 9.36 1.1 5.5 4.5 4.2 7 3.2 9.5 4 12 7c2.5-3 5-3.8 7.5-2.8 3.4 1.3 4.21 5.16 1.928 8.74C18.716 16.65 12 21 12 21z" />
      </svg>
    </button>
  );
}


export function TrendingNow({ product }) {

    const trendingNow = ProductLists.filter(ProductList => ProductList.category === "Trending Now");
    const { addToCart } = useCart();
  return (
    <section id="trendingNow">
    <div className="products-container">
      <h2 className="gridTitle">Trending Now</h2>
      <div className="products-grid">

        {trendingNow.map(product => (
          <section>
            <div className="cardImageArea">
              <Link style={{textDecoration: "none", color: "#3f2305"}} to={`/products/${product.id}`} key={product.id}>

              {product.Image && (
                <div className="image-wrapper">
                  <img className="products" src={product.Image[0]} alt={product.name} />
                </div>
              )}
              </Link>
              <WishlistButton product={product} />
            </div>
            

            {product.name && <h3>{product.name}</h3>}

            {product.writeup && <p className="writeup">{product.writeup}</p>}

            {product.price && (
              <p className="price">
                ${product.price}{" "}
                {product.oldprice && <span><i>${product.oldprice}</i></span>}
              </p>
            )}

            {product.discount && <p className="percent">-{product.discount}%</p>}
            
            {product.rating && (
              <div className="below-container">
                <div className="rating">
                  <img className="stars" src={product.star} alt="Star" />
                  <span>({product.rating})</span>
                </div>
                <button onClick={() => addToCart(product)}><img src={Cart} alt="Add to Cart" /></button>
              </div>
            )}

          
          </section>
        ))}

      </div>
    </div>
  </section>
  )
}


export function NewArrivals() {

    const newArrivals = ProductLists.filter(ProductList => ProductList.category === "New Arrivals");
    const { addToCart } = useCart();
  return (
    <section id="newArrivals">
    <div className="products-container">
      <h2 className="gridTitle">New Arrivals</h2>
      <div className="products-grid">

        {newArrivals.map(product => (
          <section>
            <div className="cardImageArea">
              <Link style={{textDecoration: "none", color: "#3f2305"}} to={`/products/${product.id}`} key={product.id}>

              {product.Image && (
                <div className="image-wrapper">
                  <img className="products" src={product.Image[0]} alt={product.name} />
                </div>
              )}
              </Link>
              <WishlistButton product={product} />
            </div>
            

            {product.name && <h3>{product.name}</h3>}

            {product.writeup && <p className="writeup">{product.writeup}</p>}

            {product.price && (
              <p className="price">
                ${product.price}{" "}
                {product.oldprice && <span><i>${product.oldprice}</i></span>}
              </p>
            )}

            {product.discount && <p className="percent">-{product.discount}%</p>}
            
            {product.rating && (
              <div className="below-container">
                <div className="rating">
                  <img className="stars" src={product.star} alt="Star" />
                  <span>({product.rating})</span>
                </div>
                <button onClick={() => addToCart(product)}><img src={Cart} alt="Add to Cart" /></button>
              </div>
            )}

          
          </section>
        ))}

      </div>
    </div>
  </section>
  )
}


export function MenFashion() {

    const menFashion = ProductLists.filter(ProductList => ProductList.category === "Men Fashion");
    const { addToCart } = useCart();
  return (
    <section id="menFashion">
    <div className="products-container">
      <h2 className="gridTitle">Men Fashion</h2>
      <div className="products-grid">

        {menFashion.map(product => (
          <section>
            <div className="cardImageArea">
              <Link style={{textDecoration: "none", color: "#3f2305"}} to={`/products/${product.id}`} key={product.id}>

              {product.Image && (
                <div className="image-wrapper">
                  <img className="products" src={product.Image[0]} alt={product.name} />
                </div>
              )}
              </Link>
              <WishlistButton product={product} />
            </div>
            

            {product.name && <h3>{product.name}</h3>}

            {product.writeup && <p className="writeup">{product.writeup}</p>}

            {product.price && (
              <p className="price">
                ${product.price}{" "}
                {product.oldprice && <span><i>${product.oldprice}</i></span>}
              </p>
            )}

            {product.discount && <p className="percent">-{product.discount}%</p>}
            
            {product.rating && (
              <div className="below-container">
                <div className="rating">
                  <img className="stars" src={product.star} alt="Star" />
                  <span>({product.rating})</span>
                </div>
                <button onClick={() => addToCart(product)}><img src={Cart} alt="Add to Cart" /></button>
              </div>
            )}

          
          </section>
        ))}

      </div>
    </div>
  </section>
  )
}


export function WomenFashion() {

    const womenFashion = ProductLists.filter(ProductList => ProductList.category === "Women Fashion");
    const { addToCart } = useCart();
  return (
    <section id="womenFashion">
    <div className="products-container">
      <h2 className="gridTitle">Women Fashion</h2>
      <div className="products-grid">

        {womenFashion.map(product => (
          <section>
            <div className="cardImageArea">
              <Link style={{textDecoration: "none", color: "#3f2305"}} to={`/products/${product.id}`} key={product.id}>

              {product.Image && (
                <div className="image-wrapper">
                  {product.Image[0] && (<img className="products" src={product.Image[0]} alt={product.name} />)}
                </div>
              )}
              </Link>
              <WishlistButton product={product} />
            </div>
            {product.name && <h3>{product.name}</h3>}
            {product.writeup && <p className="writeup">{product.writeup}</p>}
            {product.price && (
              <p className="price">
                ${product.price}{" "}
                {product.oldprice && <span><i>${product.oldprice}</i></span>}
              </p>
            )}
            {product.discount && <p className="percent">-{product.discount}%</p>}
            {product.rating && (
              <div className="below-container">
                <div className="rating">
                  <img className="stars" src={product.star} alt="Star" />
                  <span>({product.rating})</span>
                </div>
                <button onClick={() => addToCart(product)}><img src={Cart} alt="Add to Cart" /></button>
              </div>
            )}

          
          </section>
        ))}

      </div>
    </div>
  </section>
  )
}


export function SportWears() {

    const sportWears = ProductLists.filter(ProductList => ProductList.category === "Sport Wears");
    const { addToCart } = useCart();
  return (
    <section id="sportWears">
    <div className="products-container">
      <h2 className="gridTitle">Sport Wears</h2>
      <div className="products-grid">

        {sportWears.map(product => (
          <section>
            <div className="cardImageArea">
              <Link style={{textDecoration: "none", color: "#3f2305"}} to={`/products/${product.id}`} key={product.id}>

              {product.Image && (
                <div className="image-wrapper">
                  {product.Image[0] && (<img className="products" src={product.Image[0]} alt={product.name} />)}
                </div>
              )}
              </Link>
              <WishlistButton product={product} />
            </div>
            {product.name && <h3>{product.name}</h3>}
            {product.writeup && <p className="writeup">{product.writeup}</p>}
            {product.price && (
              <p className="price">
                ${product.price}{" "}
                {product.oldprice && <span><i>${product.oldprice}</i></span>}
              </p>
            )}
            {product.discount && <p className="percent">-{product.discount}%</p>}
            {product.rating && (
              <div className="below-container">
                <div className="rating">
                  <img className="stars" src={product.star} alt="Star" />
                  <span>({product.rating})</span>
                </div>
                <button onClick={() => addToCart(product)}><img src={Cart} alt="Add to Cart" /></button>
              </div>
            )}

          
          </section>
        ))}

      </div>
    </div>
  </section>
  )
}

export function FlashSales() {

  const flashSales = ProductLists.filter(ProductList => ProductList.category === "Flash Sales");


  return (
    <section id="flashSales" style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 20px' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '1.5rem', color: 'red', textAlign: 'center' }}>Flash Sales</h2>

      <Swiper
  modules={[Navigation, Autoplay]}
  navigation
  autoplay={{ delay: 3000 }}
  spaceBetween={20}
  slidesPerGroup={1}
  breakpoints={{
    0:   { slidesPerView: 2, slidesPerGroup: 1 },
    600: { slidesPerView: 3, slidesPerGroup: 1 },
    900: { slidesPerView: 4, slidesPerGroup: 1 },
  }}
>
  {flashSales.map((product) => (
    <SwiperSlide className='flashSalesContainer' key={product.id}>
      <div className="cardImageArea">
        <Link style={{ textDecoration: "none", color: "#3f2305" }} to={`/products/${product.id}`}>
          {product.Image && (
            <div>
              {product.Image[0] && (
                <img className="flashSalesImg" src={product.Image[0]} alt={product.name} />
              )}
            </div>
          )}
        </Link>
        <WishlistButton product={product} />
      </div>
      <p style={{ fontWeight: 500 }}>{product.name}</p>
      <p style={{ color: '#555' }}>${product.price.toFixed(2)}</p>
      <p style={{ color: 'red' }}>{product.discount}% OFF</p>
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
}



export default function Products() {

return (
  <>
  <TrendingNow />
  <NewArrivals/>
  <MenFashion />
  <WomenFashion />
  <SportWears />
  <FlashSales />
  </>
)
}
