import React from 'react';
import theme from '../../theme/theme';

export default class Talk extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      displayDescription: false,
    };

    this._renderTitle = this._renderTitle.bind(this);
    this._renderTagsOrLengths = this._renderTagsOrLengths.bind(this);
    this._renderTagOrLength = this._renderTagOrLength.bind(this);
    this._renderDescriptionLevelTagsAndLength =
      this._renderDescriptionLevelTagsAndLength.bind(this);
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

    return <div className="tags-or-lengths">{itemElements}</div>;
  }

  _renderTagOrLength(index, item) {
    return (
      <div className="tag-or-lengths" key={index}>
        {item}
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
      <div className="description-level-tags-length">
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
      </div>
    );
  }

  _renderParagraph(index, paragraph) {
    return (
      <div className="render-paragraph" key={index}>
        {paragraph}
      </div>
    );
  }
}
