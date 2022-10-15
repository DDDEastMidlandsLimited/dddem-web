import React from 'react';
import Talk from './Talk';

export default class TalkList extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this._renderTalk = this._renderTalk.bind(this);
  }

  render() {
    const { talks } = this.props;
    const talkElements = talks.map((talk) => {
      return this._renderTalk(talk);
    });

    return <div className="column talks-list">{talkElements}</div>;
  }

  _renderTalk(talk) {
    return (
      <div key={talk.id}>
        <Talk talk={talk} />
      </div>
    );
  }
}
