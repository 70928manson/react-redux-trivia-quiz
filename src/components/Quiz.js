import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../slices/quizSlice';
import styles from '../styles/modules/quiz.module.scss';

const Quiz = () => {
    const count = useSelector(state => state.quizReducer.value);
    const dispatch = useDispatch();
    return (
        <div className={styles.quiz}>
            <h1>Quiz</h1>
            <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
            {count}
            <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        </div>
    );
};

export default Quiz;