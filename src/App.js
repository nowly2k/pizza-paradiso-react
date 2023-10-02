import React, { useEffect, useState } from "react";
import './scss/app.scss'
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import PizzaLoader from "./components/PizzaBlock/PizzaLoader";


function App() {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetch('https://6517eede582f58d62d353e2e.mockapi.io/items')
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading
                ? [...new Array(6)].map((_, index) => <PizzaLoader key={index} />)
                : pizzas.map((obj) => (<PizzaBlock key={obj.id} {...obj} />))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
// pizzas.map((obj) => (<PizzaBlock key={obj.id} {...obj} />))
export default App;