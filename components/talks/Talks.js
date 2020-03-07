import talks from '../../data/talks/talks';
import levels from '../../data/talks/levels';
import TalkList from './TalkList';
import TalkFilter from './TalkFilter';

export default class Talks extends React.PureComponent {
  constructor(props, context) {
    super(props, context);

    this.state = {
      filterTags: [],
      filterLevels: [],
    };

    this.addTag = this.addTag.bind(this);
    this.removeTag = this.removeTag.bind(this);
    this.addLevel = this.addLevel.bind(this);
    this.removeLevel = this.removeLevel.bind(this);
    this._filterTalks = this._filterTalks.bind(this);
    this._filterTags = this._filterTags.bind(this);
    this._projectLevels = this._projectLevels.bind(this);
  }

  addTag(tag) {
    this.setState({ filterTags: this.state.filterTags.concat(tag) });
  }

  removeTag(tag) {
    this.setState({
      filterTags: this.state.filterTags.filter(t => {
        return t !== tag;
      }),
    });
  }

  addLevel(level) {
    this.setState({
      filterLevels: this.state.filterLevels.concat(level),
    });
  }

  removeLevel(level) {
    this.setState({
      filterLevels: this.state.filterLevels.filter(l => {
        return l !== level;
      }),
    });
  }

  render() {
    const filteredTalks = this._filterTalks();
    const projectedFilteredAndOrderedTags = this._filterTags(
      filteredTalks,
    );
    const projectedLevels = this._projectLevels();

    return (
      <div>
        <TalkFilter
          tags={projectedFilteredAndOrderedTags}
          levels={projectedLevels}
          addTag={this.addTag}
          removeTag={this.removeTag}
          addLevel={this.addLevel}
          removeLevel={this.removeLevel}
        />
        <TalkList talks={filteredTalks} />
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

  _filterTalks() {
    return talks.filter(talk => {
      const containsFilteredTags = this.state.filterTags.every(
        filterTag => {
          return talk.tags.includes(filterTag);
        },
      );

      let containsFilteredLevels = true;
      if (this.state.filterLevels.length > 0) {
        containsFilteredLevels = this.state.filterLevels.includes(
          talk.level,
        );
      }

      return containsFilteredTags && containsFilteredLevels;
    });
  }

  _filterTags(filteredTalks) {
    const filteredTags = filteredTalks.reduce(
      (accumulator, current) => {
        current.tags.forEach(tag => {
          if (!accumulator.includes(tag)) accumulator.push(tag);
        });
        return accumulator;
      },
      [],
    );

    const projectedTags = filteredTags.map(tag => {
      return {
        name: tag,
        selected: this.state.filterTags.includes(tag),
      };
    });

    const sortedTags = projectedTags.sort((a, b) => {
      if (a.selected === b.selected) {
        return a.name > b.name ? 1 : -1;
      }

      var aselected = a.selected ? 1 : 0;
      var bselected = b.selected ? 1 : 0;

      return bselected > aselected ? 1 : -1;
    });

    return sortedTags;
  }

  _projectLevels() {
    return levels.map(level => {
      return {
        name: level,
        selected: this.state.filterLevels.includes(level),
      };
    });
  }
}
