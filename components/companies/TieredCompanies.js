import CompanyGrid from './CompanyGrid';

export default class TieredCompanies extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      partners: props.partners,
    };
  }

  render() {
    return (
      <div>
        <CompanyGrid companies={[...this.state.partners]} />
      </div>
    );
  }
}
