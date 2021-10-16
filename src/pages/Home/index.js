import React from 'react';

import { Link } from 'react-router-dom';
import { useSubscription } from '@apollo/client';
import { QUESTIONS_QUERY } from './queries';

function Home() {
  const { loading, error, data } = useSubscription(QUESTIONS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error {error}</div>;
  }

  const { questions } = data;

  return (
    <div>
      <h2>Questions</h2>

      {questions &&
        questions.map((item) => (
          <div key={item.id}>
            <Link to={`/q/${item.id}`}>{item.text}</Link>
          </div>
        ))}
    </div>
  );
}

export default Home;
