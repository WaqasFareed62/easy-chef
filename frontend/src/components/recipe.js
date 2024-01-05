import React, { useEffect } from "react";
import Data from "../data.json";
import { Link } from "react-router-dom";
export default function Recipe() {
  return (
    <div class="grid grid-cols-4 p-4 mb-6">
      {Data.map((rec) => {
        return (
          <div className=" sm:m-4 mx-4 mb-10 mt-3">
            <div className=" ">
              {" "}
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src={rec.src}
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                {rec.title}
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Fresh, vibrant, and artfully crafted Japanese delicacies with
                various fillings.{rec.description}
              </p>
              <Link className="btn btn-success" to={"/recipe"}>
                Get full Recipe
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
