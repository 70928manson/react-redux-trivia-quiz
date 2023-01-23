import { useRoutes } from "react-router-dom";

import Settings from './pages/Settings';
import Question from './pages/Question';
import FinalScreen from './pages/FinalScreen';
import NoMatch from './pages/NoMatch';

const routerConfig = [
  {
    path: '/',
    element: <Settings />
  },
  {
    path: '/question',
    element: <Question />
  },
  {
    path: '/score',
    element: <FinalScreen />
  },
  { path: "*", element: <NoMatch /> }
]

function App() {
  const element = useRoutes(routerConfig)

  return (
    <>
      {/* <Route path="/">
        <Settings />
      </Route>
      <Route path="/question">
        <Question />
      </Route>
      <Route path="/score">
        <FinalScreen />
      </Route> */}
      {element}
    </>
  );
}

export default App;
