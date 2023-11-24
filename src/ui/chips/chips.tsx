import styles from "./chips.module.scss";

interface ChipsProps {
  chipsValues: string[];
  handleChips: (value: string) => void;
}

export const Chips = ({ chipsValues, handleChips }: ChipsProps) => {
  return (
    <div className={styles.chips}>
      {chipsValues.map((chipsItem, idx) => (
        <div
          key={idx}
          className={styles.item}
          onClick={() => {
            handleChips(chipsItem);
          }}
        >
          {chipsItem}
        </div>
      ))}
    </div>
  );
};
