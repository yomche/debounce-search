import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";
import { Search } from "./components/search";
import { Wrapper } from "./components/wrapper";

function App() {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    // Do fetch here...
  }, [debouncedValue]);

  return (
    <div className="main">
      <Wrapper>
        <Search
          value={value}
          debouncedValue={debouncedValue}
          handleChange={handleChange}
        />
      </Wrapper>
    </div>
  );
}

export default App;
