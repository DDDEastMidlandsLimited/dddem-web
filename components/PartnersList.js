import Partner from './Partner';

const PartnerList = (props) => (
    <section>
        {
            props.partners.map(partner =>
                <div>
                    <Partner partner={ partner } />
                </div>
            )
        }
         <style jsx>
            {`

            `}
        </style>
    </section>
)

export default PartnerList