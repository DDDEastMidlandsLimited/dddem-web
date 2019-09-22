import ImportantDate from './ImportantDate'

const ImportantDatesList = (props) => (
    <section className="boxedItems">
        {
            props.dates.map(date =>
                <ImportantDate key={date.id} dates={ date } />
            )
        }
    </section>
)

export default ImportantDatesList