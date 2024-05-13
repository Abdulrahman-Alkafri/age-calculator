import AgeInput from "./components/AgeInput";
import CardList from "./components/CardList";
import Title from "./components/Title";
import { ContextProvider } from "./context/ContextProvider";

function App() {
  return (
    <div
      className="text-xl relative w-full h-screen font-light flex flex-col gap-24
    font-mono bg-gradient-to-r from-purple-900 via-indigo-800 to-indigo-900 "
    >
      <ContextProvider>
        <Title />
        <AgeInput />
        <CardList />
      </ContextProvider>
    </div>
  );
}

export default App;
