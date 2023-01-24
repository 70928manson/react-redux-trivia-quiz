import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const SelectField = ({ label }) => {
    const [value, setValue] = useState("");
    const handleChange = () => {
        ;
    }
    return (
        <Box mt={3} width="100%">
            <FormControl size="small" fullWidth>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    <MenuItem>Options1</MenuItem>
                    <MenuItem>Options2</MenuItem>
                    <MenuItem>Options3</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SelectField;