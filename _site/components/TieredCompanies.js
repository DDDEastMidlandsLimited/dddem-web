import SponsorGrid from "./SponsorGrid";

export default class TieredCompanies extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            partners: props.partners,
        }
    }
    
    render () {
        return (
            <div>
                <SponsorGrid companies={[... this.state.partners]}/>
            </div>
        );
    }
}