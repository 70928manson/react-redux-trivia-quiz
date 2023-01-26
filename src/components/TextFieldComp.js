import { FormControl, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import { useDispatch } from 'react-redux';
import { changeAmount } from '../slices/quizSlice';

const TextFieldComp = () => {
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(changeAmount(e.target.value))
    }

    return (
        <Box mt={3} width="100%">
            <FormControl fullWidth size="small">
                <TextField 
                  onChange={handleChange}
                  variant="outlined"
                  label="問題數量Amount of Questions"
                  type="number"
                  size="small"
                />
            </FormControl>
        </Box>
    );
};

export default TextFieldComp;