"use client";

import Image from "next/image";

export default function ViewList2({ products }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Sneak the Peak Jackets
        </h2>

        {/* Horizontal scrolling container */}
        <div className="mt-6 flex space-x-6 overflow-x-scroll scrollbar-hide">
          {products
            .filter((item) => item.category.toLowerCase() === "jackets")
            .map((product) => (
              <div
                key={product._id}
                className="flex-shrink-0 w-64 group relative"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Image
                    height={0}
                    width={0}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    alt={product.name}
                    src={product.images[0]}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={`/home/products/${product._id}`}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${product.price}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
