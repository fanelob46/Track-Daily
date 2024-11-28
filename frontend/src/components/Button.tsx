// import React from 'react'

type ButtonsProps = {
  name: string;
  buttonFunction: () => void;
};

const Button = ({ name, buttonFunction }: ButtonsProps) => {
  return (
    <button className="buttonStyle w-full" onClick={buttonFunction}>
      {name}
    </button>
  );
};

export default Button;