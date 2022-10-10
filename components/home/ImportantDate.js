import React from 'react';

export default function ImportantDate({ dates }) {
  return (
    <div className="box-item">
      <div tabIndex="0" className="top">
        {dates.name}
      </div>
      <div
        className={
          dates.current == true
            ? 'past-bottom-background'
            : 'bottom-background'
        }
      >
        <div
          tabIndex="0"
          className={dates.past == true ? 'strike-bottom' : 'bottom'}
        >
          {dates.date}
        </div>
      </div>
    </div>
  );
}
