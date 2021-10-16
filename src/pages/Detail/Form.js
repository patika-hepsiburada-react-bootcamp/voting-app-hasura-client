import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { NEW_VOTE_MUTATION } from './queries';

function Form({ options, setIsVoted }) {
  const [newVote, { loading }] = useMutation(NEW_VOTE_MUTATION);

  const [selectedItem, setSelectedItem] = useState();

  const handleSubmit = () => {
    console.log('selectedItem', selectedItem);

    newVote({
      variables: {
        option_id: selectedItem,
      },
    });

    setIsVoted(true);
  };

  useEffect(() => {
    if (options.length < 1) return false;

    setSelectedItem(options[0].id);
  }, [options]);

  return (
    <div>
      {options.map((option, i) => (
        <div key={option.id}>
          <input
            defaultChecked={i === 0}
            type="radio"
            name="selected_option"
            value={option.id}
            onChange={({ target }) => setSelectedItem(target.value)}
          />

          {option.text}
        </div>
      ))}

      <button onClick={handleSubmit} disabled={loading}>
        Save
      </button>
    </div>
  );
}

export default Form;
