class Editor extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <hr/>
                <div id="toolstatus"></div>
                <hr/>
                <div id="container"></div>
                <WBCanvas />
                <hr/>
                <div id="info"></div>
            </div>
        );
    }
}
class WBCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.myp5 = null;
        this.state = {loadingState: 'Loading Canvas ...'}
        this.sketch = function (p) {
            let x = 100;
            let y = 100;
            p.setup = function () {
                p.createCanvas(700, 410);
            };
            p.draw = function () {
                if (p.mouseIsPressed === true) {
                    p.fill(0, 0, 0);
                    p.ellipse(p.mouseX, p.mouseY, 20, 20);
                }
                if (p.mouseIsPressed === false) {
                    p.fill(255, 255, 255);
                }
            };
        }
    }
    componentDidMount() {
        this.myp5 = new p5(this.sketch, 'container');
        this.setState({loadingState: 'Canvas Loaded'});
    }
    render()
    {
        return(
            <div>
                <h4>Drawing status: {this.state.loadingState}</h4>
            </div>);
    }
}
ReactDOM.render(
    <WBComponents name="Daniel"/>,
    document.getElementById('root')
);