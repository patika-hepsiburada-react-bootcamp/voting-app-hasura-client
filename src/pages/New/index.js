import { useState } from 'react';

import { useMutation } from '@apollo/client';
import { NEW_QUESTION } from './queries';

function NewQuestion() {
  const [newQuestion, { loading }] = useMutation(NEW_QUESTION);

  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([{ text: '' }, { text: '' }]);

  const handleNewOption = () => {
    console.log('hey!');
    setOptions((prev) => [...prev, { text: '' }]);
  };

  const handleChangeOption = ({ target }) => {
    const data = options;
    data[target.id].text = target.value;
    setOptions([...data]);
  };

  const handleSubmit = () => {
    console.log(question);
    console.log(options);

    newQuestion({
      variables: {
        text: question,
        data: options,
      },
    });
  };

  return (
    <div>
      <h2>New Question</h2>

      <div>
        <input
          placeholder="Enter a new question..."
          value={question}
          onChange={({ target }) => setQuestion(target.value)}
        />

        <h4>Options</h4>
        {options.map((option, i) => (
          <div key={i}>
            <input
              value={option.text}
              id={i}
              placeholder="Option..."
              onChange={handleChangeOption}
            />
          </div>
        ))}

        <button onClick={handleNewOption}>New Option</button>
        <button onClick={handleSubmit} disabled={loading}>
          Save
        </button>
      </div>
    </div>
  );
}

export default NewQuestion;
