import styles from "./input.module.scss";
import { ChangeEventHandler } from "react";

interface InputProps {
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleClear: () => void;
}

export const Input = ({ value, handleChange, handleClear }: InputProps) => {
  return (
    <div className={styles.input}>
      <input
        id="search"
        placeholder="Start your search here..."
        type="text"
        value={value}
        onChange={handleChange}
      />
      <div className={styles.clear} onClick={handleClear}>
        X
      </div>
    </div>
  );
};
