const FullWidthImage = (props) => (
    <section>
        <style jsx>
            {`
            section {
                background-image: url("${ props.url }");
                height: 300px;
                background-repeat: no-repeat;
                background-position: center;
                text-align:center;
                background-size: 100% auto;
            }
            `}
        </style>
    </section>
)

export default FullWidthImage