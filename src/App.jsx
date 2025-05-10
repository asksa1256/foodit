import { useEffect, useState } from "react";
import FoodList from "./components/FoodList";
import { getFoods } from "./api";

function App() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const { foods } = await getFoods();
    setItems(foods);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <FoodList items={items} />
    </div>
  );
}

export default App;
