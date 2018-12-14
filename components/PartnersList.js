import PartnerWithDescription from './PartnerWithDescription';

const PartnerList = (props) => (
    <section className="boxedItems">
        {
            props.partners.map(partner =>
                <PartnerWithDescription key={partner.id} partner={ partner }/>
            )
        }
         <style jsx>
            {`

            `}
        </style>
    </section>
)

export default PartnerList