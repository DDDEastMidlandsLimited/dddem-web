import React from 'react';
import theme from '../../theme/theme';

export default class FilterItem extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this._filterToggle = this._filterToggle.bind(this);
  }

  _filterToggle() {
    return () => {
      if (!this.props.item.selected) {
        this.props.addItem(this.props.item.name);
      } else {
        this.props.removeItem(this.props.item.name);
      }
    };
  }

  render() {
    let itemClass = 'filteritem';
    if (this.props.item.selected) {
      itemClass = 'filteritem selected';
    }

    return (
      <div className={itemClass} onClick={this._filterToggle()}>
        {this.props.item.name}
      </div>
    );
  }
}
