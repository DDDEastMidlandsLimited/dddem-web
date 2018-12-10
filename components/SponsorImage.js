const SponsorImage = (props) => (
    <div>
        <img src={props.image} />

        <style jsx>
        {`
            div {
                position: absolute;
                top: 0;
                left: 0;
            }
            img {
                width: 100%;
            }
        `}
        </style>
    </div>
            
)

export default SponsorImage