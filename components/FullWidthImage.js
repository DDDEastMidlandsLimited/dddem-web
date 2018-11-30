const FullWidthImage = (props) => (
    <section>
        <style jsx>
            {`
            section {
                width: 100vw;
                background-image: url("${ props.url }");
                height: 400px;
                background-size: cover;
            }
            `}
        </style>
    </section>
)

export default FullWidthImage