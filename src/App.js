import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const allcategories = [
    "todos",
    ...new Set(items.map((item) => item.category)),
  ];
  const [menu, setmenu] = useState(items);
  const [categories, setcategories] = useState(allcategories);

  const filteritems = (category) => {
    if (category === "todos") {
      setmenu(items);
      return;
      console.log(category);
    }
    const newitems = items.filter((item) => item.category === category);

    console.log(newitems);

    setmenu(newitems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>nosso cardápio</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filteritems={filteritems} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
