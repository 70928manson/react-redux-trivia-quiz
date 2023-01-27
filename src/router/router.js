import Settings from '../pages/Settings';
import Question from '../pages/Question';
import FinalScreen from '../pages/FinalScreen';
import NoMatch from '../pages/NoMatch';

const routerConfig = [
    {
      path: 'react-redux-trivia-quiz/',
      element: <Settings />
    },
    {
      path: 'react-redux-trivia-quiz/questions',
      element: <Question />
    },
    {
      path: 'react-redux-trivia-quiz/score',
      element: <FinalScreen />
    },
    { path: "*", element: <NoMatch /> }
]

export default routerConfig;