import Sponsor from './Sponsor';

function SponsorList({ sponsors }) {
  return (
    <section className="boxedItems">
      {sponsors.map((sponsor) => (
        <Sponsor key={sponsor.id} sponsor={sponsor} />
      ))}
    </section>
  );
}

export default SponsorList;
