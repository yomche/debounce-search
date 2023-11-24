import { Search } from "./components/search";
import { Wrapper } from "./components/wrapper";
import { Loader } from "./ui/loader";
import { Card } from "./components/card";
import { useApp } from "./providers/appProvider";
import image from "./assets/shield.png";

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
          {!results.length && !isLoading && (
            <div className="spinner">
              <img width={200} src={image} />
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
