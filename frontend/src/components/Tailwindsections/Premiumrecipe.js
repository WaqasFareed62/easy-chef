import React from "react";

import Recipe from "../recipe";
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
        <div class="grid ">
          <Recipe />
        </div>
      </div>
    </section>
  );
}
