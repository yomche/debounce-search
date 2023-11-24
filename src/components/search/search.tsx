import styles from "./search.module.scss";
// import { ChangeEventHandler } from "react";
import { Input } from "../../ui/input";
import { Chips } from "../../ui/chips";
import { useApp } from "../../providers/appProvider";

export const Search = () => {
  const { value, handleChange, handleChips, handleClear } =
    useApp();

  return (
    <div className={styles.search}>
      <Input
        value={value}
        handleChange={handleChange}
        handleClear={handleClear}
      />
      <Chips
        handleChips={handleChips}
        chipsValues={["Spider", "Black Panther", "Hawkeye", "Black Widow"]}
      />
    </div>
  );
};
