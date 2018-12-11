
const Company = (props) => (
    <div>

        <img src={props.image} />

        <style jsx>
        {`
            div {
                border: 5px solid white;
                background: white;
            }
            img {            
                width: 33%;
                margin-top: 4px;
            }
        `}
        </style>
    </div>
)

export default Company