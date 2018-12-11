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
                width: 95%;
                margin-top: 4px;
            }
        `}
        </style>
    </div>
            
)

export default SponsorImage