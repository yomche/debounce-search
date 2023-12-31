import { Bars } from "react-loader-spinner";
import styles from "./loader.module.scss";

interface LoaderProps {
  isLoading: boolean;
}

export const Loader = ({ isLoading }: LoaderProps) => {
  const loaderColor = "#fff";

  return (
    <div
      className={styles.loader}
      style={isLoading ? { height: "100px" } : { height: "" }}
    >
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
