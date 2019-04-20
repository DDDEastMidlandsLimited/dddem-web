export default class TalkList extends React.PureComponent {
    constructor(props, context) {
        super(props, context)

        this.state = {
            displayDescription: false,
        }
    
        this._renderTitleAndTags = this._renderTitleAndTags.bind(this)
        this._renderTags = this._renderTags.bind(this)
        this._renderTag = this._renderTag.bind(this)
        this._renderDescriptionAndLevel = this._renderDescriptionAndLevel.bind(this)
        this._renderParagraph = this._renderParagraph.bind(this)
    }

    _toggleVisibility() {
        return () => {
            this.setState({ displayDescription: !this.state.displayDescription })
        }
    }

    render() {
        const {talk} = this.props

        return <div>
            {this._renderTitleAndTags(talk.title, talk.tags)}
            {this.state.displayDescription ? this._renderDescriptionAndLevel(talk.description, talk.level) : null }
            <style jsx>
                {`
                    div{
                        padding: 10px;
                    }
                `}
            </style>
        </div>
    }

    _renderTitleAndTags(title, tags){
        return <div>
            <div onClick={this._toggleVisibility()}>{title}</div>
            <div>
                {this._renderTags(tags)}
            </div>
            <style jsx>
                {`
                    div{
                        display: flex;
                        flex-direction: row;
                    }
                `}
            </style>
        </div>
    }

    _renderTags(tags){
        const tagElements = tags.map((tag, index) => {
            return this._renderTag(index, tag)
        })

        return <div>
            {tagElements}
            <style jsx>
                {`
                    div{
                        display: flex;
                        flex-direction: row;
                    }
                `}
            </style>
        </div>
    }

    _renderTag(index, tag){
        return <div key={index}>
            {tag}
            <style jsx>
                {`
                    div{
                        padding-left: 5px;
                        padding-right: 5px;
                    }
                `}
            </style>
        </div>
    }

    _renderDescriptionAndLevel(description, level){
        const paragraphs = description.replace("\n\n", "\n").split("\n").map((paragraph, index) => {
            return this._renderParagraph(index, paragraph)
        })

        return <div>
            <div>Level: {level}</div>
            {paragraphs}
            <style jsx>
                {`
                    div{
                        padding-top: 10px;
                    }
                `}
            </style>
        </div>
    }

    _renderParagraph(index, paragraph){
        return <div key={index}>
            {paragraph}
            <style jsx>
                {`
                    div{
                        padding-top: 10px;
                    }
                `}
            </style>
        </div>
    }
}