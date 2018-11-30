import ImportantDate from './ImportantDate';

const ImportantDatesList = (props) => (
    <section>
        {
            props.dates.map(date =>
                <div>
                    <ImportantDate dates={ date } />
                </div>
            )
        }
         <style jsx>
            {`

            `}
        </style>
    </section>
)

export default ImportantDatesList