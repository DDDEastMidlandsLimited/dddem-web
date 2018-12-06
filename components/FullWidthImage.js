const FullWidthImage = (props) => (
    <section>
        <style jsx>
            {`
            section {
                width: 100vw;
                background-image: url("${ props.url }");
    height: 500px;
    //background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
            }
            `}
        </style>
    </section>
)

export default FullWidthImage