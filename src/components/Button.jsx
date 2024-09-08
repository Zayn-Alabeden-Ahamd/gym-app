import React from "react";

function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="accept mx-auto px-8 py-4 roundedmedium border-2 border-blue-400 border-solid blueShadow bg-slate-950">
      <p>{text}</p>
    </button>
  );
}
export default Button;
