import React from 'react';

import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

import useAxios from '../hooks/useAxios';

const Question = () => {
    let apiUrl = `/api.php?amount=10`;
    const { data, error, loading } = useAxios({ url: apiUrl });

    console.log('123', data);
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