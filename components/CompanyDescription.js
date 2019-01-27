export default class CompanyDescription extends React.PureComponent {
    render() {
        return <div dangerouslySetInnerHTML={{ __html: this.props.description }} />
    }
}