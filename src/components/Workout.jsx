import React from "react";
import SectionWrapper from "./SectionWrapper";
import Exercise from "./Exercise";
export default function Workout(props) {
  const { workout } = props;
  return (
    <SectionWrapper
      id={"workout"}
      header={"Welcome To"}
      title={["THE", "DANGER", "ZONE"]}>
      <div className="flex flex-col gap-4 ">
        {workout.map((exercise, i) => {
          return <Exercise exercise={exercise} i={i} key={i} />;
        })}
      </div>
    </SectionWrapper>
  );
}
