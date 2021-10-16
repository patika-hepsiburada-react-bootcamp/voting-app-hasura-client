import { useState } from 'react';

import { useSubscription } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUESTION_DETAIL_SUBSCRIPTION } from './queries';
import Form from './Form';
import Results from './Results';

function Detail() {
  const { id } = useParams();

  const [isVoted, setIsVoted] = useState(false);

  const { loading, error, data } = useSubscription(QUESTION_DETAIL_SUBSCRIPTION, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error {error}</div>;
  }

  const { text, options } = data.questions_by_pk;

  return (
    <div>
      <h2>{text}</h2>

      {!isVoted && <Form options={options} setIsVoted={setIsVoted} />}
      {isVoted && <Results options={options} />}
    </div>
  );
}

export default Detail;
