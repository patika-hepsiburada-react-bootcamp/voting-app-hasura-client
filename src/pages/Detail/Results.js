import React from 'react';

function Results({ options }) {
  console.log(options);

  const total = options.reduce(
    (total, currentValue) => total + currentValue.votes_aggregate.aggregate.count,
    0,
  );

  return (
    <div className="results">
      {options.map((item) => (
        <div key={item.id}>
          <div>
            {item.text} ({item.votes_aggregate.aggregate.count})
          </div>
          <progress value={item.votes_aggregate.aggregate.count} max={total} />
        </div>
      ))}
    </div>
  );
}

export default Results;
