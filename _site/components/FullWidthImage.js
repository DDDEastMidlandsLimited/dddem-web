const FullWidthImage = (props) => (
    <section>
        <style jsx>
            {`
            section {
                background-image: url("${ props.url }");
                height: 500px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover; 
                text-align:center;
            }
            `}
        </style>
    </section>
)

export default FullWidthImage