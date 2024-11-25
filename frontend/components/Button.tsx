import React from 'react'

type ButtonsProps = {
  name: String;
  buttonFunction: () => void;
};

const Button = ({ name, buttonFunction }: ButtonsProps) => {
  return (
    <button className="buttonStyle" onClick={buttonFunction}>
      {name}
    </button>
  );
};

export default Button