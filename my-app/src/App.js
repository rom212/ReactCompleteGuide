import Expenses from "./components/expenses/Expenses";

function App() {

  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: "294",
      date: new Date(2021, 1, 12)
    },
    {
      id: "e2",
      title: "Desk",
      amount: "354",
      date: new Date(2021, 2, 22)
    },
    {
      id: "e3",
      title: "Paper",
      amount: "24",
      date: new Date(2021, 3,5)
    }
  ]

  return (
    <div>
      <h2>Let's get started!YO!!</h2>
      <p>This is visisble</p>
      <Expenses {...expenses} />
  
      

    </div>
  );
}

export default App;
