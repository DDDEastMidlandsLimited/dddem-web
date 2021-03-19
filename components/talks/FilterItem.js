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
        <style jsx>
          {`
            .filteritem {
              border-radius: 12px;
              border: none;
              color: ${theme.palette.tertiary};
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              background-color: ${theme.palette.quaternary};
              margin-bottom: 15px;
              width: 70%;
            }

            .filteritem:hover {
              box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
                0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            .selected {
              background-color: ${theme.palette.primary};
            }
          `}
        </style>
      </div>
    );
  }
}
