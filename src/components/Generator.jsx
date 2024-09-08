import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS, SCHEMES } from "../utils/soliders";
import Button from "./Button";
function Header(props) {
  // all the repeated units
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}
function Generator(props) {
  const {
    muscles,
    setMuscles,
    poison,
    setPoison,
    goal,
    setgola,
    updateWorkout,
  } = props;
  // this state will be aware of showing the menu (open and close)
  const [showModels, setShowModel] = useState(false);

  function toggleModel() {
    // doing (!) with each click
    setShowModel((e) => !e);
  }
  function updateMuscle(muscleGroup) {
    // if muscleGroup exsist in musclue
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) return;

    // individual is already an array so we turn the others to array to search in them
    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setShowModel(false);
      return;
    }

    setMuscles((muscles) => [...muscles, muscleGroup]);

    if (muscles.length === 2) {
      setShowModel(false);
    }
  }
  return (
    <SectionWrapper
      id={"generate"}
      header={"generate your Workout"}
      title={["it's", "huge", "o'clock"]}>
      <Header
        index={"01"}
        title={"Pick Your Poison"}
        description={"select the workout you wish to enjoy"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, index) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type); // we are changing the poison to be same as type here
              }}
              className={
                "bg-slate-950 border px-4 py-4 rounded-lg duration-200 hover:border-blue-600" +
                (type === poison // so we can do this (:
                  ? "border border-blue-600"
                  : "border border-blue-400")
              }
              key={index}>
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock On Targets"}
        description={"select the muscles judged for annihelation."}
      />
      <div className="bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={toggleModel} // toggle the menu
          className="relative p-3 flex items-center justify-center">
          <p className="capitalize">
            {/* we will .join the array of muscles (if it was not empty) that the user choose in the 
            paragraph above it using .join() to join the element of the array */}
            {muscles.length == 0 ? "select muscle groups" : muscles.join(" ")}
          </p>

          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down "></i>
        </button>

        {showModels && (
          <div className="flex flex-col p-3">
            {/* in WORKOUT we have  individual as array and the rest are objects so we need this : */}
            {(poison === "individual"
              ? WORKOUTS[poison] // deal with the array
              : Object.keys(WORKOUTS[poison])
            ) // make array out of object's keys
              .map((muscleGroup, i) => {
                return (
                  <button
                    onClick={() => {
                      updateMuscle(muscleGroup);
                    }}
                    // conditionary class {"css" + (Ternary operator) }
                    className={
                      "hover:text-blue-400  duration-200" +
                      (muscles.includes(muscleGroup)
                        ? " text text-blue-400"
                        : "")
                    }
                    key={i}>
                    <p className="uppercase">
                      {muscleGroup.replaceAll("_", " ")}
                    </p>
                  </button>
                );
              })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Become Jaggernaut"}
        description={"select your ultimate objective."}
      />
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((schem, schemIndex) => {
          return (
            <button
              onClick={() => {
                setgola(schem);
              }}
              className={
                "bg-slate-950 border px-4 py-4 rounded-lg duration-200 hover:border-blue-600" +
                (schem === goal
                  ? "border border-blue-600"
                  : "border border-blue-400")
              }
              key={schemIndex}>
              <p className="capitalize">{schem.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"Formulate"} />
    </SectionWrapper>
  );
}
export default Generator;
