export default class FilterItem extends React.PureComponent {
    constructor(props, context) {
        super(props, context)
    
        this.state = {
            selected: false,
        }

        this._filterToggle = this._filterToggle.bind(this)
    }

    _filterToggle() {
        return () => {
            this.setState({ selected: !this.state.selected })
            if (!this.state.selected) {
                this.props.addItem(this.props.item)
            } else {
                this.props.removeItem(this.props.item)
            }
        }
    }

    render() {
        let itemClass = "filteritem"
        if (this.state.selected) {
            itemClass = "filteritem selected"
        }

        return <div className={itemClass} onClick={this._filterToggle()}>
            {this.props.item}
        </div>
    }
}