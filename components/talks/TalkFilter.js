import FilterItem from './FilterItem';

export default class TalkFilter extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this._renderItems = this._renderItems.bind(this);
    this._renderTag = this._renderTag.bind(this);
    this._renderLevel = this._renderLevel.bind(this);
  }

  render() {
    return (
      <div className="column">
        <h2>Level</h2>
        {this._renderItems(this.props.levels, this._renderLevel)}
        <h2>Topic</h2>
        {this._renderItems(this.props.tags, this._renderTag)}
        <style jsx>
          {`
            div {
              margin-right: 2%;
            }
            .column {
              float: left;
              width: 30%;
            }
          `}
        </style>
      </div>
    );
  }

  _renderItems(items, renderItem) {
    const elements = items.map(item => {
      return renderItem(item);
    });

    return <div>{elements}</div>;
  }

  _renderTag(tag) {
    return (
      <FilterItem
        key={tag.name}
        item={tag}
        addItem={this.props.addTag}
        removeItem={this.props.removeTag}
      />
    );
  }

  _renderLevel(level) {
    return (
      <FilterItem
        key={level.name}
        item={level}
        addItem={this.props.addLevel}
        removeItem={this.props.removeLevel}
      />
    );
  }
}
