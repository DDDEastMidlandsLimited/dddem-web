const RestrictedHeightImage = (props) => (
    <section>
        <style jsx>
            {`
            section {
                width: 100vw;
                background-image: url("${ props.url }");
    height: 250px;
    //background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
            }
            `}
        </style>
    </section>
)

export default RestrictedHeightImage