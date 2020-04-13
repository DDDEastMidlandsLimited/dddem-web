import theme from '../../theme/theme';
export default class TalkList extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      displayDescription: false,
    };

    this._renderTitle = this._renderTitle.bind(this);
    this._renderTagsOrLengths = this._renderTagsOrLengths.bind(this);
    this._renderTagOrLength = this._renderTagOrLength.bind(this);
    this._renderDescriptionLevelTagsAndLength = this._renderDescriptionLevelTagsAndLength.bind(
      this,
    );
    this._renderParagraph = this._renderParagraph.bind(this);
  }

  _toggleVisibility() {
    return () => {
      this.setState({
        displayDescription: !this.state.displayDescription,
      });
    };
  }

  render() {
    const { talk } = this.props;

    return (
      <div className="talk-title">
        {this._renderTitle(talk.title)}
        {this.state.displayDescription
          ? this._renderDescriptionLevelTagsAndLength(
              talk.description,
              talk.level,
              talk.tags,
              talk.lengths,
            )
          : null}
        <style jsx>
          {`
            div {
              padding: 10px;
            }

            .talk-title {
              border-radius: 12px;
              color: ${theme.palette.dark};
              display: inline-block;
              border: 2px solid ${theme.palette.quaternary};
              border-radius: 5px;
              margin-bottom: 5px;
              width: 100%;
            }
            .talk-title:hover {
              background-color: ${theme.palette.quaternary};
            }
          `}
        </style>
      </div>
    );
  }

  _renderTitle(title) {
    return (
      <div>
        <div onClick={this._toggleVisibility()}>{title}</div>
        <style jsx>
          {`
            div {
              display: flex;
              flex-direction: row;
            }
          `}
        </style>
      </div>
    );
  }

  _renderTagsOrLengths(items) {
    const itemElements = items.map((item, index) => {
      return this._renderTagOrLength(index, item);
    });

    return (
      <div>
        {itemElements}
        <style jsx>
          {`
            div {
              display: inline-flex;
              flex-direction: row;
            }
          `}
        </style>
      </div>
    );
  }

  _renderTagOrLength(index, item) {
    return (
      <div key={index}>
        {item}
        <style jsx>
          {`
            div {
              padding-left: 5px;
              padding-right: 5px;
            }
          `}
        </style>
      </div>
    );
  }

  _renderDescriptionLevelTagsAndLength(
    description,
    level,
    tags,
    lengths,
  ) {
    const paragraphs = description
      .replace('\n\n', '\n')
      .split('\n')
      .map((paragraph, index) => {
        return this._renderParagraph(index, paragraph);
      });

    return (
      <div>
        <hr />
        <div className="sub-title">Level: {level}</div>
        <div className="sub-title">
          Lengths: {this._renderTagsOrLengths(lengths)}{' '}
        </div>
        <div className="sub-title">
          Tags: {this._renderTagsOrLengths(tags)}{' '}
        </div>
        <div>
          <strong>Description:</strong>
        </div>
        {paragraphs}
        <style jsx>
          {`
            div {
              padding-top: 10px;
            }
            .sub-title {
              color: ${theme.palette.secondary};
            }
          `}
        </style>
      </div>
    );
  }

  _renderParagraph(index, paragraph) {
    return (
      <div key={index}>
        {paragraph}
        <style jsx>
          {`
            div {
              padding-top: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}
