import { ResultItemType } from "../../types/type";
import styles from "./card.module.scss";

interface CardProps {
  data: ResultItemType;
}

export const Card = ({ data }: CardProps) => {
  return (
    <div className={styles.card}>
      <em className={styles.type}>&laquo;{data.format}&raquo;</em>
      <div className={styles.header}>{data.title}</div>
      <img
        className={styles.image}
        src={`${data.thumbnail.path}/portrait_incredible.${data.thumbnail.extension}`}
      />
    </div>
  );
};
