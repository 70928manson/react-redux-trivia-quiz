import React from 'react';

const Home = ({ start, setStart }) => {
    return (
        <div>
            <button onClick={() => setStart(!start)}>start</button>
        </div>
    );
};

export default Home;