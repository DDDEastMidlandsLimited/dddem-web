import theme from '../../theme/theme'

const SponsorButton = (props) => (
        <div align="center">
            <button>see details</button>
            <style jsx>
            {`
                button {
                    border-radius: 12px;
                    border: none;
                    color:  ${theme.palette.tertiary};
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    background-color:  ${theme.palette.quaternary};
                    margin-bottom: 15px;
                }

                button:hover {
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                }
            `}
            </style>
    </div>
)

export default SponsorButton