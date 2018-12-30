import LogoOnly from './LogoOnly';

const LogosList = (props) => (
    <section className="boxedItems">
        {
            props.logos.map(logo =>
                <LogoOnly key={logo.id} logo={ logo }/>
            )
        }
         <style jsx>
            {`

            `}
        </style>
    </section>
)

export default LogosList