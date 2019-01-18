import Company from './Company';
import { WindowScroller, CellMeasurerCache, AutoSizer, Masonry, CellMeasurer } from 'react-virtualized'
import cellPositionerFactory from '../utils/cellPositionerFactory';

export default class CompanyMasonry extends React.PureComponent {
    constructor(props, context) {
        super(props, context);

        this._cache = new CellMeasurerCache({
            defaultHeight: 100,
            defaultWidth: 200,
            fixedWidth: true,
        });

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
            <section>
                <WindowScroller overscanByPixels={this._overscanByPixels}>
                    {this._renderAutoSizer}
                </WindowScroller>
            </section>
        );
    }

    _calculateColumnCount() {
        this._columnCount = Math.floor(this._width / (this._columnWidth + this._gutterSize));
    }

    _cellRenderer({index, key, parent, style}) {
        const {companies} = this.props;
        const {columnWidth} = this._columnWidth;
        const company = companies[index];

        return (
          <CellMeasurer cache={this._cache} index={index} key={key} parent={parent}>
            <div
              style={{
                ...style,
                width: columnWidth,
              }}>
              <Company key={company.id} partner={ company } image={company.image} />
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