import gold from '../../data/gold';
import silver from '../../data/silver';
import bronze from '../../data/bronze';
import partners from '../../data/partners';
import standard from '../../data/standard';
import CompanyGrid from './CompanyGrid';

export default class NotableCompanies extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      description: undefined,
    };

    this.descriptionElement = React.createRef();

    this.updateDescription = this.updateDescription.bind(this);
  }

  updateDescription(description) {
    return () => {
      this.setState({ description: description });
      window.scrollTo(0, this.descriptionElement.current.offsetTop);
    };
  }

  render() {
    return (
      <div>
        <div
          ref={this.descriptionElement}
          dangerouslySetInnerHTML={{ __html: this.state.description }}
        />
        <CompanyGrid
          companies={[
            ...gold,
            ...silver,
            ...bronze,
            ...partners,
            ...standard,
          ]}
          updateDescription={this.updateDescription}
        />
      </div>
    );
  }
}
