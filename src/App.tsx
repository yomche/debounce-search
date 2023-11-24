import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { Search } from "./components/search";
import { Wrapper } from "./components/wrapper";
import { Loader } from "./ui/loader";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);
  const apiKey = "apiKey";
  const apiHash = "apiHash";
  const queryString = `apikey=${apiKey}&hash${apiHash}&titleStartsWith=${debouncedValue}`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/comics?${queryString}`
      );
      console.log(response);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      fetchData();
    } else {
      console.log("something");
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
          <Loader isLoading={isLoading} />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
