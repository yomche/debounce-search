import axios from "axios";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  ChangeEvent,
  useEffect,
} from "react";
import { useDebounce } from "usehooks-ts";
import { ResultItemType } from "../types/type";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiHash = import.meta.env.VITE_APP_API_HASH;

interface AppContextProps {
  value: string;
  isLoading: boolean;
  results: ResultItemType[];
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  handleChips: (value: string) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);
  const [results, setResults] = useState<ResultItemType[]>([]);
  const queryString = `ts=1&apikey=${apiKey}&hash=${apiHash}&titleStartsWith=${debouncedValue}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleChips = (value: string) => {
    const scrollableDiv = document.getElementById("results");
    scrollableDiv?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setValue(value);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/comics?${queryString}`
      );
      setResults([...response.data.data.results]);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      fetchData();
    } else {
      setResults([]);
    }
  }, [debouncedValue]);

  const contextValue = {
    value,
    isLoading,
    results,
    handleChange,
    handleClear,
    handleChips,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};
