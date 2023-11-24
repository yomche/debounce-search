import styles from "./input.module.scss";
import { ChangeEventHandler } from "react";

interface InputProps {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ value, handleChange }: InputProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};
