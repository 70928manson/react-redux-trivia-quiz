import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { changeCategory, changeDifficulty, changeType } from '../slices/quizSlice';

const SelectField = ({ label, options }) => {
    const dispatch = useDispatch();

    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);
        if (label === "Category") {
            //注意category為數字，之後會將數字作為參數帶至url回傳資料
            dispatch(changeCategory(e.target.value));
        }else if(label === "Difficulty") {
            dispatch(changeDifficulty(e.target.value));
        }else if(label === "Type") {
            dispatch(changeType(e.target.value));
        }
    }
    return (
        <Box mt={3} width="100%">
            <FormControl size="small" fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {options.map((option) => (
                        <MenuItem value={option.id} key={option.id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectField;