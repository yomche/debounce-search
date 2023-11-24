import { ChangeEventHandler } from "react";

interface InputProps {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ value, handleChange }: InputProps) => {
  return <input type="text" value={value} onChange={handleChange} />;
};
