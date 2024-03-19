import { useEffect } from "react";
import "./App.css";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./control/ControlSlice";

function App() {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cardItems]);
  return (
    <>
      <Navbar />
      <CourseList />
    </>
  );
}

export default App;
