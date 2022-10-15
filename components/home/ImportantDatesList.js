import React from 'react';
import ImportantDate from './ImportantDate';

export default function ImportantDatesList({ dates }) {
  return (
    <section className="boxed-items">
      {dates.map((date) => (
        <ImportantDate key={date.id} dates={date} />
      ))}
    </section>
  );
}
