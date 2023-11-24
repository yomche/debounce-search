import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { Search } from "./components/search";
import { Wrapper } from "./components/wrapper";
import { Loader } from "./ui/loader";
import axios from "axios";

const apiKey = import.meta.env.VITE_APP_API_KEY;
const apiHash = import.meta.env.VITE_APP_API_HASH;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);
  const [results, setResults] = useState<any>([]);
  const queryString = `ts=1&apikey=${apiKey}&hash=${apiHash}&titleStartsWith=${debouncedValue}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/comics?${queryString}`
      );
      console.log(response.data.data.results);
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

  return (
    <div className="main">
      <Wrapper>
        <h2>Comics Search</h2>
        <Search
          value={value}
          debouncedValue={debouncedValue}
          handleChange={handleChange}
        />
        <div className="results">
          {results.map((item) => item.title)}
          <Loader isLoading={isLoading} />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
