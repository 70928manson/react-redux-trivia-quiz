import { CircularProgress, Typography } from '@mui/material';
import React from 'react';

import { Button } from '@mui/material';
import { Box } from '@mui/system';

import SelectField from '../components/SelectField';
import TextFieldComp from '../components/TextFieldComp';
import useAxios from '../hooks/useAxios';

const Settings = () => {
    const { data, error, loading } = useAxios({ url: "/api_category.php" });
    console.log(data, error, loading);
    if(loading) {
        return (
            <Box mt={"45vh"}>
                <CircularProgress />
            </Box>
        )
    }

    if(error) {
        return (
            <Typography variant="h6" mt={"45vh"} color="red">
                Something Went Wrong!
            </Typography>
        )
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" }
    ]

    const typeOptions = [
        { id: "multiple", name: "Multiple Choice" },
        { id: "boolean", name: "True/False" },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    console.log('123', typeof data.trivia_categories);

    return (
        <div>
            <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
            <form onSubmit={handleSubmit}>
                <SelectField options={data.trivia_categories} label="Category" />
                <SelectField options={difficultyOptions} label="Difficulty" />
                <SelectField options={typeOptions} label="Type" />
                <TextFieldComp />
                <Box mt={3} width="100%">
                    <Button fullWidth variant="contained" type="submit">
                        GetStarted
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Settings;