import {Router} from "./routes/Router";
import { GlobalState } from "./context/GlobalState";
import { ChakraProvider} from "@chakra-ui/react";


export default function App() {

  return (
    <ChakraProvider resetCSS>
      <GlobalState>
        <Router/>
      </GlobalState>
    </ChakraProvider>
  );
}