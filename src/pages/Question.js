import React, { useEffect, useState } from 'react';

import { Button, CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';

import useAxios from '../hooks/useAxios';

import { useSelector, useDispatch } from 'react-redux';
import { changeScore } from '../slices/quizSlice';
import { useNavigate } from 'react-router';

import { decode } from "html-entities";

const getRandomNum = (max) => {
    return Math.floor(Math.random(  ) * Math.floor(max));
}

const Question = () => {
    const { 
        question_category, 
        question_difficulty, 
        question_type, 
        amount_of_question,
        score
    } = useSelector(state => state.quiz);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    //組合傳給Open Trivia Database的url
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

    const { data, loading } = useAxios({ url: apiUrl });
    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);

    console.log('options' ,options);

    useEffect(() => {
        if(data?.results?.length) {
            const question = data.results[questionIndex];
            console.log('correct_answer', question.correct_answer);
            let answers = [...question.incorrect_answers];
            //在隨機位置中插入正確答案，避免答案永遠在同一個位置
            answers.splice(
                getRandomNum(question.incorrect_answers.length),
                0,
                question.correct_answer
            );
            setOptions(answers);
        }
    }, [data, questionIndex])

    if(loading) {
        return (
            <Box mt={20}>
                <CircularProgress></CircularProgress>
            </Box>
        )
    }

    const handleClickAnswer = (e) => {
        const question = data.results[questionIndex];
        if(e.target.textContent === question.correct_answer) {
            dispatch(changeScore(score + 1));
        }
        //問題回答完後載入下一個問題，一直到所有問題答完後導航至最終分數頁面
        if(questionIndex + 1 < data.results.length) {
            setQuestionIndex(questionIndex + 1);
        } else {
            navigate("/score");
        }
    }

    return (
        <Box>
            <Typography variant="h4">Question {questionIndex + 1}</Typography>
            <Typography mt={5}>{decode(data.results[questionIndex].question)}</Typography>
            {options.map((data, id) => (
                <Box mt={2} key={id} style={{width: "30%", margin: "16px auto 0px auto"}}>
                    <Button onClick={handleClickAnswer} variant="contained" style={{width: "100%"}}>
                        {decode(data)}
                    </Button>
                </Box>
            ))}
            <Box mt={5}>Score: {score} / {data.results.length}</Box>
        </Box>
    );
};

export default Question;