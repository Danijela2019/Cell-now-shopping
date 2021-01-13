/** @jsxImportSource @emotion/react */
import React from 'react';

import Cover from './Cover';
import PopularBoard from './PopularBoard';

const Home = (): React.ReactElement => {
  return (
    <section>
      <Cover />
      <h1 css={{ textAlign: 'left', marginLeft: '2rem' }}>Best offer</h1>
      <PopularBoard />
    </section>
  );
};

export default Home;
