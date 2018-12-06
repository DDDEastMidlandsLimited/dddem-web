import Sponsor from './Sponsor';

const SponsorList = (props) => (
    <section className="boxedItems">
        {
            props.sponsors.map(sponsor =>
                <Sponsor key={sponsor.id} sponsor={ sponsor } />
            )
        }
         <style jsx>
            {`

            `}
        </style>
    </section>
)

export default SponsorList