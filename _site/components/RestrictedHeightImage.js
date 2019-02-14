const RestrictedHeightImage = (props) => (
    <section>
        <style jsx>
            {`
            section {
                width: 100vw;
                background-image: url("${ props.url }");
    height: 250px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
            }
            `}
        </style>
    </section>
)

export default RestrictedHeightImage