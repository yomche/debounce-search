import { Search } from "./components/search";
import { Wrapper } from "./components/wrapper";
import { Loader } from "./ui/loader";
import { Card } from "./components/card";
import { useApp } from "./providers/appProvider";

function App() {
  const { results, isLoading } = useApp();

  return (
    <div className="main">
      <Wrapper>
        <h2>Marvel Comics</h2>
        <Search />
        <div className="results" id="results">
          {results.map((item, idx) => (
            <Card data={item} key={idx} />
          ))}
          <Loader isLoading={isLoading} />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
