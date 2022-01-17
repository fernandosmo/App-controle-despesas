import Expenses from "./Components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Papel higienico",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", 
      title: "TV nova", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Seguro do carro",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "mesa nova (madeira)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      
      <Expenses 
      items={expenses} />
    </div>
  );
}

export default App;
