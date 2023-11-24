import { Bars } from "react-loader-spinner";
import styles from "./loader.module.scss";

interface LoaderProps {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: LoaderProps) => {
  const loaderColor = "#F09667";

  return (
    <div className={styles.loader}>
      <Bars
        height="80"
        width="80"
        color={loaderColor}
        wrapperStyle={{}}
        wrapperClass=""
        visible={isLoading}
      />
    </div>
  );
};
