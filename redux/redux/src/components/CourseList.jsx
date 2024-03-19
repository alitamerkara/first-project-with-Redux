import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CourseItem from "./CourseItem";
import { clearCart } from "../control/ControlSlice";

const CourseList = () => {
  const { cardItems, quantity, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  return (
    <div className="align-center">
      {quantity < 1 ? (
        <div>
          <section>
            <header>
              <h2>Sepetin</h2>
              <h4>Bomboş</h4>
            </header>
          </section>
        </div>
      ) : (
        <div>
          <section>
            <header>
              <h2>sepetim</h2>
            </header>
            <div>
              {cardItems.map((items) => {
                return <CourseItem {...items} />;
              })}
            </div>
          </section>
        </div>
      )}
      <footer>
        <hr />
        <div>
          Total: <span>{total}</span>
        </div>
        <button
          onClick={() => dispatch(clearCart())}
          className="mt-2 bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600"
        >
          Delete All
        </button>
      </footer>
    </div>
  );
};

export default CourseList;
