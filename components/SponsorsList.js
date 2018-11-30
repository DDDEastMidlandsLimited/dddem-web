import Sponsor from './Sponsor';

const SponsorList = (props) => (
    <section>
        {
            props.sponsors.map(sponsor =>
                <div>
                    <Sponsor sponsor={ sponsor } />
                </div>
            )
        }
         <style jsx>
            {`

            `}
        </style>
    </section>
)

export default SponsorList