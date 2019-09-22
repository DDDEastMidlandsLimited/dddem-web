import Company from './Company'
import CompanyDetailsButton from './CompanyDetailsButton'
import { SizeMe } from 'react-sizeme'

export default class CompanyGrid extends React.PureComponent {
    constructor(props, context) {
        super(props, context)
    
        this._columnWidth = 200
        
        this._renderList = this._renderList.bind(this)
        this._renderRow = this._renderRow.bind(this)
        this._renderCell = this._renderCell.bind(this)
    }

    render() {
        return <SizeMe>
            {({size}) => this._renderList(size)}
        </SizeMe>
    }

    _renderList({width}){
        const rows = []

        const itemsPerRow = Math.floor(width / this._columnWidth)
        const rowCount = Math.ceil(this.props.companies.length / itemsPerRow)

        for (let i = 0; i < rowCount; i++) {
            let row = this._renderRow(i, itemsPerRow)
            rows.push(row)
        }

        return <div>
            {rows}
        </div>
    }

    _renderRow(index, itemsPerRow){
        const cells = []
        const fromIndex = index * itemsPerRow
        const toIndex = Math.min(fromIndex + itemsPerRow, this.props.companies.length)

        for (let i = fromIndex; i < toIndex; i++) {
            let cell = this._renderCell(i)
            cells.push(cell)
        }

        return <div key={index}>
            {cells}
            <style jsx>
                {`
                    div{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }
                `}
            </style>
        </div>
    }

    _renderCell(index) {
        const {companies} = this.props
        const company = companies[index]

        let detailsButton
        if (company.description.length !== 0 && this.props.updateDescription){
            detailsButton = <CompanyDetailsButton updateDescription={this.props.updateDescription(company.description)} />
        }

        return <div key={index}>
            <Company key={company.id} partner={company} image={company.image} />
            {detailsButton}
            <style jsx>
            {`
                div{
                    width: ${this._columnWidth}px;
                    height: 100%;
                    justify-content: center;
                    text-align: center;
                }
            `}
            </style>
        </div>
    }
}