import React from "react";
import Button from "./Button";
export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>Its The Time For</p>
        <h1 className="uppercase font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Exer
          <span className="text-blue-400">cise</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        welcome to gym{" "}
        <span className="text-blue-400 font-medium">you cant miss this</span> ,,
        insure legs day is forced bro , just live with it and you will accept ,
        <span className="text-blue-400 font-medium">
          train hard train right!
        </span>
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />
    </div>
  );
}
