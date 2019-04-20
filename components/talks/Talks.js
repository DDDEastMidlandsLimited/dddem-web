import tags from "../../data/tags"
import talks from "../../data/talks"
import levels from "../../data/levels"
import TalkList from "./TalkList"
import TalkFilter from "./TalkFilter"


export default class Talks extends React.PureComponent {
    constructor(props, context) {
        super(props, context)

        this.state = {
            filterTags: [],
            filterLevels: [],
        }
        
        this.addTag = this.addTag.bind(this)
        this.removeTag = this.removeTag.bind(this)
        this.addLevel = this.addLevel.bind(this)
        this.removeLevel = this.removeLevel.bind(this)
    }

    addTag(tag) {
        this.setState({ filterTags: this.state.filterTags.concat(tag) })
    }

    removeTag(tag) {
        this.setState({ filterTags: this.state.filterTags.filter((t) => { return t !== tag }) })
    }

    addLevel(level) {
        this.setState({ filterLevels: this.state.filterLevels.concat(level) })
    }

    removeLevel(level) {
        this.setState({ filterLevels: this.state.filterLevels.filter((l) => { return l !== level }) })
    }

    render () {
        const filteredTalks = talks.filter((talk) => {
            const containsFilteredTags = this.state.filterTags.every((filterTag) => {
                return talk.tags.includes(filterTag)
            })

            
            let containsFilteredLevels = true
            if (this.state.filterLevels.length > 0) {
                containsFilteredLevels = this.state.filterLevels.includes(talk.level)
            }

            return containsFilteredTags && containsFilteredLevels
        })

        return <div>
            <TalkFilter tags={tags} levels={levels} addTag={this.addTag} removeTag={this.removeTag} addLevel={this.addLevel} removeLevel={this.removeLevel} />
            <TalkList talks={filteredTalks}/>
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
}