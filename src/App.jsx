import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--small"
      >
        Primary Solid Small
      </Button>

      <Button
        type="button"
        buttonStyle="btn--secondary--solid"
        buttonSize="btn--small"
      >
        Secondary Solid Small
      </Button>

      <Button
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--medium"
      >
        Primary Solid Medium
      </Button>

      <Button
        type="button"
        buttonStyle="btn--secondary--solid"
        buttonSize="btn--medium"
      >
        Secondary Solid Medium
      </Button>

      <Button
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--small"
      >
        Primary Outline Small
      </Button>

      <Button
        type="button"
        buttonStyle="btn--secondary--outline"
        buttonSize="btn--small"
      >
        Secondary Outline Small
      </Button>

      <Button
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--medium"
      >
        Primary Outline Medium
      </Button>

      <Button
        type="button"
        buttonStyle="btn--secondary--outline"
        buttonSize="btn--medium"
      >
        Secondary Outline Medium
      </Button>
    </div>
  );
}

export default App;
