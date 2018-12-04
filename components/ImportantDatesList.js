import ImportantDate from './ImportantDate';

const ImportantDatesList = (props) => (
    <section className="importantDates">
        {
            props.dates.map(date =>
                <ImportantDate dates={ date } />
            )
        }
         <style jsx>
            {`
                .importantDates {
                    display: flex;
                    margin: 0;
                    padding: 20px;
                    flex-flow: row;
                    justify-content: space-evenly;
                    flex-wrap: wrap;
                    justify-content: flex-start;
                }
            `}
        </style>
    </section>
)

export default ImportantDatesList