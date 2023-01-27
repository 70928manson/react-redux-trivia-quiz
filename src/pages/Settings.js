import { CircularProgress, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

import { Button } from '@mui/material';
import { Box } from '@mui/system';

import SelectField from '../components/SelectField';
import TextFieldComp from '../components/TextFieldComp';
import useAxios from '../hooks/useAxios';

import { useSelector } from 'react-redux';

const Settings = () => {
    const { amount_of_question } = useSelector(state => state.quiz);
    const { data, error, loading } = useAxios({ url: "/api_category.php" });
    const navigate = useNavigate();

    if(loading) {
        return (
            <>
                <Typography variant="h2" fontWeight="bold">Manson Quiz</Typography>
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
        if (amount_of_question > 0) {
            navigate("/react-redux-trivia-quiz/questions");
        }else {
            alert("問題數量不可小於1");
        }

    }   

    return (
        <div>
            <Typography variant="h2" fontWeight="bold">Manson Quiz</Typography>
            <form onSubmit={handleSubmit}>
                <SelectField options={data.trivia_categories} label="Category" />
                <SelectField options={difficultyOptions} label="Difficulty" />
                <SelectField options={typeOptions} label="Type" />
                <TextFieldComp />
                <Box mt={3} width="100%">
                    <Button fullWidth variant="contained" type="submit">
                        Get Started
                    </Button>
                </Box>
            </form>
        </div>
    );
};

export default Settings;