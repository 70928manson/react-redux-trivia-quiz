import { CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button } from '@mui/material';
import { Box } from '@mui/system';

import SelectField from '../components/SelectField';
import TextFieldComp from '../components/TextFieldComp';
import useAxios from '../hooks/useAxios';

const Settings = () => {
    const { data, error, loading } = useAxios({ url: "/api_category.php" });
    const navigate = useNavigate();

    if(loading) {
        return (
            <>
                <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
                <Box mt={20}>
                    <CircularProgress />
                </Box>
            </>
        )
    }

    if(error) {
        return (
            <Typography variant="h6" mt={20} color="red">
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
        navigate("/questions")
    }   

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