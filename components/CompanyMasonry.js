import Company from './Company';
import theme from '../theme/theme.js'
import { WindowScroller, CellMeasurerCache, AutoSizer, Masonry, CellMeasurer } from 'react-virtualized'
import cellPositionerFactory from '../utils/cellPositionerFactory';

export default class CompanyMasonry extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this._cache = new CellMeasurerCache({
            defaultHeight: 160,
            fixedHeight: true,
            defaultWidth: 200,
            fixedWidth: true,
        });

        this.state = {
            description: '',
        }

        this._columnCount = 0;
        this._columnWidth = 200;
        this._overscanByPixels = 30;
        this._gutterSize = 10;

        this._cellRenderer = this._cellRenderer.bind(this);
        this._onResize = this._onResize.bind(this);
        this._renderAutoSizer = this._renderAutoSizer.bind(this);
        this._renderMasonry = this._renderMasonry.bind(this);
        this._setMasonryRef = this._setMasonryRef.bind(this);
    }

    render() {
        return (
            <div>
                <div className="company-desc" dangerouslySetInnerHTML={{ __html: this.state.description }} />
                <WindowScroller overscanByPixels={this._overscanByPixels}>
                    {this._renderAutoSizer}
                </WindowScroller>
                <style jsx>
                {`
                    div{
                        margin: 10px 10px 10px 10px;
                    }
                    div .company-desc{
                        border: 2px solid ${theme.palette.quaternary}!important;
                        padding: 10px 10px 10px 10px;
                        border-radius: 16px;
                    }  
                `}
                </style>
            </div>
        );
    }

    _calculateColumnCount() {
        this._columnCount = Math.floor(this._width / (this._columnWidth + this._gutterSize));
    }

    _cellRenderer({index, key, parent, style}) {
        const {companies} = this.props;
        const company = companies[index];

        return (
          <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
            <div
                style={{
                    ...style,
                    width: this._columnWidth,
                }}>
                <Company key={company.id} partner={ company } image={company.image} />
                <button onClick={() => this.setState({ description: company.description })}>see details</button>
                <style jsx>
                {`
                    button {
                        border-radius: 12px;
                        border: none;
                        color:  ${theme.palette.tertiary};
                        padding: 15px 32px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;
                        background-color:  ${theme.palette.quaternary};
                    }
                    button:hover {
                        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                    }

                    div{
                        text-align: center;
                    }

                `}
                </style>
            </div>
          </CellMeasurer>
        );
    }

    _initCellPositioner() {
        if (typeof this._cellPositioner === 'undefined') {
            this._cellPositioner = cellPositionerFactory({
                cellMeasurerCache: this._cache,
                columnCount: this._columnCount,
                columnWidth: this._columnWidth,
                spacer: this._gutterSize,
            });
        }
    }

    _onResize({width}) {
        this._width = width;
    
        this._calculateColumnCount();
        this._resetCellPositioner();
        this._masonry.recomputeCellPositions();
    }

    _renderAutoSizer({height, scrollTop}) {
        this._height = height;
        this._scrollTop = scrollTop;

        return (
          <AutoSizer
            disableHeight
            height={this._height}
            onResize={this._onResize}
            overscanByPixels={this._overscanByPixels}
            scrollTop={this._scrollTop}>
            {this._renderMasonry}
          </AutoSizer>
        );
    }

    _resetCellPositioner() {
        this._cellPositioner.reset({
          columnCount: this._columnCount,
          columnWidth: this._columnWidth,
          spacer: this._gutterSize,
        });
    }

    _renderMasonry({width}) {
        this._width = width;
    
        this._calculateColumnCount();
        this._initCellPositioner();
    
        return (
          <Masonry
            autoHeight={true}
            cellCount={this.props.companies.length}
            cellMeasurerCache={this._cache}
            cellPositioner={this._cellPositioner}
            cellRenderer={this._cellRenderer}
            height={this._height}
            overscanByPixels={this._overscanByPixels}
            ref={this._setMasonryRef}
            scrollTop={this._scrollTop}
            width={width}
          />
        );
    }

    _setMasonryRef(ref) {
        this._masonry = ref;
    }
}