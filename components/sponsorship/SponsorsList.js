import Sponsor from './Sponsor';

const SponsorList = (props) => (
  <section className="boxedItems">
    {props.sponsors.map((sponsor) => (
      <Sponsor key={sponsor.id} sponsor={sponsor} />
    ))}
  </section>
);

export default SponsorList;
