import SponsorImage from './SponsorImage';
import SponsorDescription from './SponsorDescription';

function Sponsor({ sponsor }) {
  return (
    <div className="boxItem">
      {sponsor.soldOutImage ? (
        <SponsorImage image={sponsor.soldOutImage} />
      ) : (
        <SponsorDescription
          description={sponsor.description}
          name={sponsor.name}
        />
      )}
    </div>
  );
}

export default Sponsor;
