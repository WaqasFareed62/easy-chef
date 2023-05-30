import React from "react";
import rec1 from "../Home/rec1.jpg";
import rec2 from "../Home/rec2.jpg";
import rec3 from "../Home/rec3.jpg";
import rec4 from "../Home/rec4.jpg";
export default function Freerecipe() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-green-500"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Some Classic Free Recipes
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
                src={rec1}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Mediterranean Quinoa Salad:
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Mediterranean Quinoa Salad: Fresh, flavorful, and nutritious.
              Protein-rich quinoa, crisp veggies, tangy feta, zesty lemon
              dressing.
            </p>
            <a class="text-green-500 inline-flex items-center mt-3">
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
            </a>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={rec2}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Spicy Thai Basil Stir-Fry:{" "}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Thai Stir-Fry: Aromatic, fiery, and bold. Colorful veggies, tender
              chicken (or tofu), basil, chili. Taste bud adventure.
            </p>
            <a class="text-green-500 inline-flex items-center mt-3">
              View Details
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
            </a>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={rec3}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Oven-Baked Salmon:{" "}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Oven-Baked Salmon: Succulent, perfectly cooked. Light lemon-dill
              sauce. Balanced flavors, heart-healthy omega-3.
            </p>
            <a class="text-green-500 inline-flex items-center mt-3">
              View Details
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
            </a>
          </div>
          <div class="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div class="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                class="object-cover object-center h-full w-full"
                src={rec4}
              />
            </div>
            <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
              Flourless Chocolate Cake:{" "}
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Flourless Chocolate Cake: Rich, indulgent, and gluten-free.
              Velvety, intense chocolaty goodness. Premium dark chocolate,
              butter, eggs. A chocolate lover's delight.
            </p>
            <a class="text-green-500 inline-flex items-center mt-3">
              View Details
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
