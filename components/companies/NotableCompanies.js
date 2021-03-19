import React from 'react';
import gold from '../../data/sponsors/gold';
import silver from '../../data/sponsors/silver';
import partners from '../../data/sponsors/partners';
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
            ...partners,
            //...standard,
          ]}
          updateDescription={this.updateDescription}
        />
      </div>
    );
  }
}
