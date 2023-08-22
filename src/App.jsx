import { Seeker } from "./components/Seeker";
import { GridGifs } from "./components/GridGifs";

import "./assets/css/gifs.css";
import { useSearchGifs } from "./utils/useSearchGifs";

function App() {
  const { valorInput, onChange, onSubmit, gifs, loading } = useSearchGifs();

  return (
    <>
      <div>
        <Seeker
          valorInput={valorInput}
          onChange={onChange}
          onSubmit={onSubmit}
        />

        {
          loading ? 
          (<h2>Cargando...</h2>) : 
          (<GridGifs gifs={gifs} />)
        }
      </div>
    </>
  );
}

export default App;
