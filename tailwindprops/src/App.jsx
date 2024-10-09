import Card from "./Card";
const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="bg-green-300 p-4 m-4 rounded-md text-center">
        Hello world! Let's do tailwind
      </h1>
      <Card rand="sasti" randArr={[1, 2, 3]} />
    </div>
  );
};

export default App;
