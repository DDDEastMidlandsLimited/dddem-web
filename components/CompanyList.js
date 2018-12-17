import Company from './Company';

const GoldList = (props) => (
    <section>
        {
            props.partners.map(partner =>
                <Company key={partner.id} partner={ partner } image={partner.image} />
            )
        }
         <style jsx>
            {`

            `}
        </style>
    </section>
)

export default GoldList