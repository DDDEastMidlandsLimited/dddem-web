import gold from "../data/gold";
import silver from "../data/silver";
import bronze from "../data/bronze";
import partners from "../data/partners";
import standard from "../data/standard";
import CompanyGrid from "./CompanyGrid";
import CompanyDescription from "./CompanyDescription";

export default class NotableCompanies extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this.state = {
            description: undefined,
        }
        
        this.updateDescription = this.updateDescription.bind(this);
    }
    
    updateDescription (description) {
        return () => this.setState({ description: description });
    }

    render () {
        return (
            <div>
                <CompanyDescription description={this.state.description}/>
                <CompanyGrid companies={[...gold, ...silver, ...bronze, ...partners, ...standard]} updateDescription={this.updateDescription}/>
            </div>
        );
    }
}