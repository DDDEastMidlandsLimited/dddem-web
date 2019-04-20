import Talk from "./Talk"

export default class TalkList extends React.PureComponent {
    constructor(props, context) {
        super(props, context)
    
        this._renderTalk = this._renderTalk.bind(this)
    }

    render() {
        const {talks} = this.props
        const talkElements = talks.map((talk, index) => {
            return this._renderTalk(index, talk)
        })

        return <div>
            {talkElements}
        </div>
    }

    _renderTalk(index, talk){
        return <div key={index}>
            <Talk talk={talk} />
        </div>
    }
}