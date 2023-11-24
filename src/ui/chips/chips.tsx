import styles from "./chips.module.scss";

interface ChipsProps {
  chipsValues: string[];
}

export const Chips = ({ chipsValues }: ChipsProps) => {
  return (
    <div className={styles.chips}>
      {chipsValues.map((chipsItem, idx) => (
        <div key={idx} className={styles.item}>
          {chipsItem}
        </div>
      ))}
    </div>
  );
};
