import styles from "./search.module.scss";
import { ChangeEventHandler } from "react";
import { Input } from "../../ui/input";
import { Chips } from "../../ui/chips";

interface SearchProps {
  value: string;
  debouncedValue?: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export const Search = ({ value, handleChange }: SearchProps) => {
  return (
    <div className={styles.search}>
      <Input value={value} handleChange={handleChange} />
      <Chips
        chipsValues={["raz", "dva", "raz", "dva", "raz", "dva", "raz", "dva"]}
      />
    </div>
  );
};
