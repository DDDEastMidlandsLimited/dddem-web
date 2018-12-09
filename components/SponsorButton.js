import theme from '../theme/theme.js'

const SponsorButton = (props) => (
        <div align="center">
            <button className="contactButton">
                <a href="mailto:sponsor@dddeastmidlands.com">Contact Us About Sponsorship</a>
            </button>
        <style jsx>
            {`
                .contactButton {
                        align: ${theme.palette.quaternary};
                        font-weight: bold;
                        font-size: ${theme.font.sizes.mobile.subtitle1};
                        flex-grow: 1;
                        border-radius: 12px;
                        padding: 10px 10px 10px 10px;
                        color:  ${theme.palette.primary};
                        border: 2px solid ${theme.palette.primary};
                        background-color:  ${theme.palette.light};
                        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                }
                .contactButton a {
                    text-decoration: none;
                }

                .contactButton:hover {
                    background-color: ${theme.palette.primary};
                }

                .contactButton a:hover {
                    color:  ${theme.palette.light};
                }
            `}
        </style>
    </div>
)

export default SponsorButton