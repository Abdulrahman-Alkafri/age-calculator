import { useAppContext } from "../context/ContextProvider";

function CardList() {
  const { date } = useAppContext();
  function calculateAge(birthDate) {
    let currentDate = new Date();

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      months--;
      let prevMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        0
      );
      days += prevMonthDate.getDate();
    }

    return {
      years: years,
      months: months,
      days: days,
    };
  }

  let myBirthDate = new Date(date);
  const Age = calculateAge(myBirthDate);
  return (
    <ul className="flex justify-around items-center capitalize text-sm md:text-5xl">
      <li
        className="w-1/4  relative
          mx-auto p-3 bg-indigo-200 h-40 rounded-full text-center leading-none"
      >
        <span
          className="text-indigo-800 font-bold flex justify-center 
        items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        >
          {Age.years || 0} years
        </span>
      </li>
      <li
        className="w-1/4  relative
          mx-auto p-3 bg-indigo-200 h-40 rounded-full text-center leading-none"
      >
        <span
          className="text-indigo-800 font-bold flex justify-center items-center absolute 
        left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        >
          {Age.months || 0} months
        </span>
      </li>
      <li
        className="w-1/4  relative
          mx-auto p-3 bg-indigo-200 h-40 rounded-full text-center leading-none"
      >
        <span
          className="text-indigo-800 font-bold flex justify-center items-center absolute 
        left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        >
          {Age.days || 0} days
        </span>
      </li>
    </ul>
  );
}

export default CardList;
