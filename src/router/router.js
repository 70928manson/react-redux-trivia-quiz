import Settings from '../pages/Settings';
import Question from '../pages/Question';
import FinalScreen from '../pages/FinalScreen';
import NoMatch from '../pages/NoMatch';

const routerConfig = [
    {
      path: '/',
      element: <Settings />
    },
    {
      path: '/questions',
      element: <Question />
    },
    {
      path: '/score',
      element: <FinalScreen />
    },
    { path: "*", element: <NoMatch /> }
]

export default routerConfig;