import React from "react";
import p1 from "../Home/p1.jpg";
import p2 from "../Home/p2.jpg";
import p3 from "../Home/p3.jpg";
import p4 from "../Home/p4.jpg";
import p5 from "../Home/p5.jpg";
import p6 from "../Home/p6.jpg";
import p7 from "../Home/p7.jpg";
import p8 from "../Home/p8.jpg";

export default function Premiumrecipe() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-green-500"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Worlds Top Chefs Premium Recipes
            </h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              From vibrant salads bursting with colorful vegetables to hearty
              soups, delectable main courses, and guilt-free desserts, we've got
              you covered with recipes that will satisfy both your taste buds
              and your desire for a healthier lifestyle.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={p1}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Sushi Rolls
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Fresh, vibrant, and artfully crafted Japanese delicacies with
              various fillings.
            </p>
            {/* <a class="text-green-500 inline-flex items-center mt-3">
              View Details{" "}
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a> */}
            <button className="btn btn-success">Get full Recipe</button>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={p2}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Pad Thai{" "}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Classic Thai stir-fried noodles with a perfect balance of sweet,
              sour, and savory flavors.
            </p>
            <button className="btn btn-success">Get full Recipe</button>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={p3}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Biryani{" "}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Fragrant and flavorful Indian rice dish infused with aromatic
              spices and tender meat or vegetables.
            </p>
            <button className="btn btn-success">Get full Recipe</button>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={p8}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Miso Ramen{" "}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Japanese noodle soup with rich, umami-packed miso broth, tender
              pork, and toppings.
            </p>
            <button className="btn btn-success">Get full Recipe</button>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={p4}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Bibimbap
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Korean rice bowl topped with an assortment of colorful vegetables,
              meat, and a fried egg.
            </p>
            <button className="btn btn-success">Get full Recipe</button>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={p5}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Tom Yum Soup{" "}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Spicy and tangy Thai soup infused with lemongrass, lime, and a
              variety of herbs.
            </p>
            <button className="btn btn-success">Get full Recipe</button>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={p6}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Dim Sum{" "}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Assortment of bite-sized Chinese dumplings, steamed or fried,
              filled with savory ingredients.
            </p>
            <button className="btn btn-success">Get full Recipe</button>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={p7}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Pho{" "}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Vietnamese noodle soup with aromatic broth, tender meat, fresh
              herbs, and rice noodles.
            </p>
            <button className="btn btn-success">Get full Recipe</button>
          </div>
        </div>
      </div>
    </section>
  );
}
