import React from "react";
import LG1 from "./images/lgmoni3.jpeg";
import Sam1 from "./images/samsungmoni1.jpeg";
import Sam2 from "./images/samsungmoni2.jpeg";
import Sam3 from "./images/samsungmoni3.jpeg";
import Boat1 from "./images/boat1.jpeg";
import Boat2 from "./images/boat2.jpeg";
import Boat3 from "./images/boat3.jpeg";
import Boat4 from "./images/boat4.jpeg";
import Apple1 from "./images/apple1.jpeg";
import Apple2 from "./images/apple2.jpeg";
import Apple3 from "./images/apple3.jpeg";
import Cam1 from "./images/canoncam1.jpeg";
import Cam2 from "./images/canoncam2.jpeg";
import Cam3 from "./images/canoncam3.jpeg";
export default function ProductsApi() {
  const Products = [
    {
      ProductImage: LG1,
      ProductHeadName:
        "SAMSUNG 24 inch Full HD LED Backlit IPS Panel Gaming Monitor",
      ProductInfo: "Frameless, AMD Free Sync, Response Time: 5 ms",
      ProductRating: 3.9,
      ProductRatingAmount: "(6)",
      ProductCP: 15445,
      ProductMRP: 16000,
      Brand: "dell",
      DiscountRate: 90,
      Offer: "special-price",
      Availability: "in-stock"
    },
    {
      ProductImage: Sam1,
      ProductHeadName:
        "SAMSUNG 24 inch Full HD LED Backlit IPS Panel Gaming Monitor",
      ProductInfo: "Frameless, AMD Free Sync, Response Time: 5 ms",
      ProductRating: 3.9,
      ProductRatingAmount: "(6)",
      ProductCP: 15445,
      ProductMRP: 16000,
      Brand: "samsung",
      DiscountRate: 20,
      Offer: "no-cost-emi",
      Availability: "in-stock"
    },
    {
      ProductImage: Sam2,
      ProductHeadName:
        "SAMSUNG 24 inch Full HD LED Backlit IPS Panel Gaming Monitor",
      ProductInfo: "Frameless, AMD Free Sync, Response Time: 5 ms",
      ProductRating: 3.9,
      ProductRatingAmount: "(6)",
      ProductCP: 15445,
      ProductMRP: 16000,
      Brand: "samsung",
      DiscountRate: 30,
      Offer: "no-cost-emi",
      Availability: "out-of-stock"
    },
    {
      ProductImage: Sam3,
      ProductHeadName:
        "SAMSUNG 24 inch Full HD LED Backlit IPS Panel Gaming Monitor",
      ProductInfo: "Frameless, AMD Free Sync, Response Time: 5 ms",
      ProductRating: 3.9,
      ProductRatingAmount: "(6)",
      ProductCP: 15445,
      ProductMRP: 16000,
      Brand: "samsung",
      DiscountRate: 40,
      Offer: "no-cost-emi",
      Availability: "in-stock"
    },
    {
      ProductImage: Boat1,
      ProductHeadName: "boAt Airdopes 131 Bluetooth Headset ",
      ProductInfo: "Active Black, True Wireless",
      ProductRating: 4.1,
      ProductRatingAmount: "(48269)",
      ProductCP: 1079,
      ProductMRP: 2990,
      Brand: "boat",
      DiscountRate: 50,
      Offer: "special-price",
      Availability: "out-of-stock"
    },
    {
      ProductImage: Boat2,
      ProductHeadName: "boAt Airdopes 131 Bluetooth Headset",
      ProductInfo: "Active Black, True Wirelesss",
      ProductRating: 4.1,
      ProductRatingAmount: "(48269)",
      ProductCP: 1079,
      ProductMRP: 2990,
      Brand: "boat",
      DiscountRate: 5,
      Offer: "no-cost-emi",
      Availability: "in-stock"
    },
    {
      ProductImage: Boat3,
      ProductHeadName: "boAt Airdopes 381 with ASAP charge Bluetooth Headset",
      ProductInfo: "Blue, True Wireless",
      ProductRating: 3.9,
      ProductRatingAmount: "(6)",
      ProductCP: 15445,
      ProductMRP: 16000,
      Brand: "boat",
      DiscountRate: 10,
      Offer: "no-cost-emi",
      Availability: "in-stock"
    },
    {
      ProductImage: Boat4,
      ProductHeadName:
        "SAMSUNG 24 inch Full HD LED Backlit IPS Panel Gaming Monitor",
      ProductInfo: "Frameless, AMD Free Sync, Response Time: 5 ms",
      ProductRating: 3.9,
      ProductRatingAmount: "(6)",
      ProductCP: 15445,
      ProductMRP: 16000,
      Brand: "boat",
      DiscountRate: 30,
      Offer: "special-price",
      Availability: "out-of-stock"
    },
    {
      ProductImage: Apple1,
      ProductHeadName:
        "SAMSUNG 24 inch Full HD LED Backlit IPS Panel Gaming Monitor",
      ProductInfo: "Frameless, AMD Free Sync, Response Time: 5 ms",
      ProductRating: 3.9,
      ProductRatingAmount: "(6)",
      ProductCP: 15445,
      ProductMRP: 16000,
      Brand: "apple",
      DiscountRate: 30,
      Offer: "special-price",
      Availability: "in-stock"
    },
    {
      ProductImage: Apple2,
      ProductHeadName:
        "SAMSUNG 24 inch Full HD LED Backlit IPS Panel Gaming Monitor",
      ProductInfo: "Frameless, AMD Free Sync, Response Time: 5 ms",
      ProductRating: 3.9,
      ProductRatingAmount: "(6)",
      ProductCP: 1445,
      ProductMRP: 1600,
      Brand: "apple",
      DiscountRate: 20,
      Offer: "no-cost-emi",
      Availability: "in-stock"
    },
    {
      ProductImage: Apple3,
      ProductHeadName:
        "SAMSUNG 24 inch Full HD LED Backlit IPS Panel Gaming Monitor",
      ProductInfo: "Frameless, AMD Free Sync, Response Time: 5 ms",
      ProductRating: 4,
      ProductRatingAmount: "(6)",
      ProductCP: 1545,
      ProductMRP: 6000,
      Brand: "apple",
      DiscountRate: 40,
      Offer: "special-price",
      Availability: "in-stock"
    },
    {
      ProductImage: Cam1,
      ProductHeadName:
        "SAMSUNG 24 inch Full HD LED Backlit IPS Panel Gaming Monitor",
      ProductInfo: "Frameless, AMD Free Sync, Response Time: 5 ms",
      ProductRating: 3.9,
      ProductRatingAmount: "(6)",
      ProductCP: 15445,
      ProductMRP: 16000,
      Brand: "boat",
      DiscountRate: 50,
      Offer: "special-price",
      Availability: "out-of-stock"
    },
    {
      ProductImage: Cam2,
      ProductHeadName:
        "SAMSUNG 24 inch Full HD LED Backlit IPS Panel Gaming Monitor",
      ProductInfo: "Frameless, AMD Free Sync, Response Time: 5 ms",
      ProductRating: 3.9,
      ProductRatingAmount: "(6)",
      ProductCP: 30445,
      ProductMRP: 35000,
      Brand: "canon",
      DiscountRate: 30,
      Offer: "special-price",
      Availability: "in-stock"
    },
    {
      ProductImage: Cam3,
      ProductHeadName:
        "SAMSUNG 24 inch Full HD LED Backlit IPS Panel Gaming Monitor",
      ProductInfo: "Frameless, AMD Free Sync, Response Time: 5 ms",
      ProductRating: "3.9",
      ProductRatingAmount: "(6)",
      ProductCP: 50445,
      ProductMRP: 60000,
      Brand: "canon",
      DiscountRate: 20,
      Offer: "special-price",
      Availability: "in-stock"
    }
  ];
  return Products;
}
