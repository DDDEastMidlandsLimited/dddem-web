import Partner from './Partner';

const PartnerList = (props) => (
    <section className="boxedItems">
        {
            props.partners.map(partner =>
                <Partner key={partner.id} partner={ partner } />
            )
        }
         <style jsx>
            {`

            `}
        </style>
    </section>
)

export default PartnerList