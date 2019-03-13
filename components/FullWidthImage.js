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

            @media (max-width: 992px) {	
                height: 250px !important;
                width: 100%;
            }
            `}
        </style>
    </section>
)

export default FullWidthImage