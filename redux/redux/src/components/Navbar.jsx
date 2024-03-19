import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { quantity } = useSelector((store) => store.cart);

  return (
    <div>
      {" "}
      <nav class="flex items-center justify-between bg-blue-500 text-white p-4">
        <div class="text-xl font-bold ml-5">Store</div>
        <div class="relative mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v1H3V3zm12.65 4H5.35l-.33-1.17a2 2 0 00-1.92-1.49H2V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v1h-1.4a2 2 0 00-1.95 1.51L15.65 7zM6 17a2 2 0 104 0 2 2 0 00-4 0zm8 0a2 2 0 104 0 2 2 0 00-4 0z"
            />
          </svg>
          <div class="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
            {quantity}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
