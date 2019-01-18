import Company from './Company';

const CompanyMasonry = (props) => (
    <section>
        {
            props.companies.map(company =>
                <Company key={company.id} partner={ company } image={company.image} />
            )
        }
         <style jsx>
            {`

            `}
        </style>
    </section>
)

export default CompanyMasonry