import { useRoutes } from "react-router-dom";
import routerConfig from "./router/router";

import { Container } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  const element = useRoutes(routerConfig)

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mt={5}>
        {element}
      </Box>
    </Container>
  );
}

export default App;
