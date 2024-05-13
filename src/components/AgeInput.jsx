import { useAppContext } from "../context/ContextProvider";

function AgeInput() {
  const { date, dispatch } = useAppContext();
  console.log(date);
  return (
    <form className="flex flex-col gap-5">
      <label className="w-1/2 mx-auto p-1 text-indigo-200 text-3xl">
        Enter Your Birth Date :
      </label>
      <input
        onChange={(e) => {
          dispatch({ type: "dateInput", payload: e.target.value });
        }}
        value={date}
        className="w-1/2 mx-auto p-2 rounded-full outline-none ring-4 ring-indigo-950"
        type="date"
      />
    </form>
  );
}

export default AgeInput;
