import theme from '../theme/theme.js'

export default class Details extends React.PureComponent {
    render() {
        return (
            <div>
                <button onClick={this.props.updateDescription}>see details</button>
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
        );
    }
}