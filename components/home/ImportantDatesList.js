import ImportantDate from './ImportantDate';

function ImportantDatesList({ dates }) {
  return (
    <section className="boxedItems">
      {dates.map((date) => (
        <ImportantDate key={date.id} dates={date} />
      ))}
    </section>
  );
}

export default ImportantDatesList;
