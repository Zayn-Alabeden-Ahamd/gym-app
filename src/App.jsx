import { useState } from "react";
import Generator from "./components/Generator";
import Hero from "./components/Hero";
import Workout from "./components/Workout";
import { generateWorkout } from "./utils/function";

function App() {
  const [workout, SetWorkOut] = useState(null);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setgola] = useState("strength_power");

  function updateWorkout() {
    if (muscles.length < 1) return 0;
    let newWorkOut = generateWorkout({ poison, muscles, goal });
    console.log(newWorkOut);
    SetWorkOut(newWorkOut);
    window.location.href = "#workout"; // # is very importatnt to add
  }
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero />
      <Generator
        poison={poison}
        setPoison={setPoison}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setgola={setgola}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
