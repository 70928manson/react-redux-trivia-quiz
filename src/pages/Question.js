import React from 'react';

import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';

import useAxios from '../hooks/useAxios';

import { useSelector, useDispatch } from 'react-redux'

const Question = () => {
    const { 
        question_category, 
        question_difficulty, 
        question_type, 
        amount_of_question
    } = useSelector(state => state.quiz);
    const dispatch = useDispatch();

    console.log(question_category, question_difficulty, question_type, amount_of_question);

    let apiUrl = `/api.php?amount=${amount_of_question}`;
    
    if(question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`)
    }
    if(question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
    }
    if(question_type) {
        apiUrl = apiUrl.concat(`&type=${question_type}`)
    }

    const { data, error, loading } = useAxios({ url: apiUrl });
    console.log('data', data);

    if(loading) {
        return (
            <Box mt={20}>
                <CircularProgress></CircularProgress>
            </Box>
        )
    }

    return (
        <Box>
            <Typography variant="h4">Question 1</Typography>
            <Typography mt={5}>This is the question</Typography>
            <Box mt={2}>
                <Button variant="contained">Answer 1</Button>
            </Box>
            <Box mt={2}>
                <Button variant="contained">Answer 2</Button>
            </Box>
            <Box mt={2}>
                <Button variant="contained">Answer 3</Button>
            </Box>
            <Box mt={2}>
                <Button variant="contained">Answer 4</Button>
            </Box>
            <Box mt={5}>Score: 2 / 6</Box>
        </Box>
    );
};

export default Question;