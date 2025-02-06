import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
console.log(pizzaData);
export default function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );

  function Header() {
    return (
      <header className="header">
        <h1>Fast React Pizza co.</h1>
      </header>
    );
  }
  function Menu() {
    return (
      <div className="menu">
        <h2>Our Menu</h2>
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              image={pizza.photoName}
              sold={pizza.soldOut}
            />
          ))}
        </ul>
      </div>
    );
  }

  function Footer() {
    const openTime = 12;
    const closeTime = 23;
    const currentTime = new Date().getHours();
    const isOpen = currentTime >= openTime && currentTime <= closeTime;
    return (
      <div className="footer">
        {isOpen && (
          <div className="order">
            <p>
              We are currently open until {closeTime}:00. Come visit us or order
              online
            </p>
            <button className="btn">Order now</button>
          </div>
        )}
      </div>
    );
  }

  function Pizza(props) {
    const sold = props.sold;
    if (sold) {
      return (
        <li className="pizza sold-out">
          <img src={props.image} alt={props.name} />
          <div>
            <h3>{props.name}</h3>
            <p>{props.ingredients}</p>
            {/* <span>Price : ${props.price}</span> */}
            <span>Sold Out</span>
          </div>
        </li>
      );
    }

    return (
      <li className="pizza">
        <img src={props.image} alt={props.name} />
        <div>
          <h3>{props.name}</h3>
          <p>{props.ingredients}</p>
          <span>Price : ${props.price}</span>
        </div>
      </li>
    );
  }
}
