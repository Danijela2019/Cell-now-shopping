/** @jsxImportSource @emotion/react */
import React from 'react';

import Cover from './Cover'
import PopularBoard from './PopularBoard'

const Home = () => {
    return(
        <div>
        <Cover />
        <h1 css={{textAlign: 'left', marginLeft: '2rem'}}>Best offer</h1>
        <PopularBoard />
        </div>
    )
}

export default Home;
