import { Box, Button, Typography } from '@mui/material';
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { changeScore, changeAmount } from '../slices/quizSlice';

import { useNavigate } from 'react-router';

const FinalScreen = () => {
    const dispatch = useDispatch();
    const { score } = useSelector(state => state.quiz);
    const navigate = useNavigate();

    const handleBackToSettings = () => {
        dispatch(changeScore(0));
        dispatch(changeAmount(50));
        navigate("react-redux-trivia-quiz/");
    }

    return (
        <Box mt={30}>
            <Typography variant="h3" fontWeight="bold" mb={3}>
                Final Score: {score}
            </Typography>
            <Button onClick={handleBackToSettings} variant="outlined">
                Play Again!
            </Button>
        </Box>
    );
};

export default FinalScreen;