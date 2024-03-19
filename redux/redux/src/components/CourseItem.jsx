import React from "react";
import { CgChevronUpO, CgChevronDownO } from "react-icons/cg";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotal,
} from "../control/ControlSlice";

const CourseItem = ({ id, title, price, img, quantity }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className=" mt-4 bg-white shadow-md rounded-lg p-6 flex justify-between items-center mx-auto max-w-lg">
        <img src={img} alt={title} className="w-32 h-32 rounded-lg mr-6" />
        <div className="flex-grow">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-gray-600">Price: {price}</p>
        </div>
        <div className="flex flex-col items-center justify-between text-xl ">
          <div
            onClick={() => {
              dispatch(increaseItem(id));
              dispatch(calculateTotal());
            }}
          >
            <CgChevronUpO />
          </div>
          <div>{quantity}</div>
          <div onClick={() => dispatch(decreaseItem(id))}>
            <CgChevronDownO />
          </div>
          <button
            onClick={() => {
              dispatch(removeItem(id));
            }}
            className="mt-2 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
