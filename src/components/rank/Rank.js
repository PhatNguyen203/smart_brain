import React from "react";

const Rank = ({ username, rank }) => {
  return (
    <div>
      <div className='white f3'>
        {`${username}, your current entry count is...`}
      </div>
      <div className='white f1'>{rank}</div>
    </div>
  );
};

export default Rank;
