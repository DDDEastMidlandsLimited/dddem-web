import Company from './Company';

const GoldList = (props) => (
    <section>
        {
            props.partners.map(partner =>
                <div key={partner.id}><Company key={partner.id} partner={ partner } image={partner.image} /></div>
            )
        }
         <style jsx>
            {`
                div {
                    width: 33%;
                }
            `}
        </style>
    </section>
)

export default GoldList