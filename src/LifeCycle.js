import { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = { color: "red" };
    console.log("constructor");
    this.handleColor = this.handleColor.bind(this);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("derived state from props");
    // return { color: props.color };
    return null;
  }
  shouldComponentUpdate() {
    console.log("should component update");
    return true;
  }
  componentDidMount() {
    this.setState({ color: "blue" });
    console.log("component did mount");
  }
  componentDidUpdate() {
    console.log("component did update");
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snapshot before update");
    return null;
  }
  handleColor() {
    this.setState({ color: "orange" });
    console.log("change color");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.color}</h1>
        <button onClick={this.handleColor}>handle color</button>
      </div>
    );
  }
}
export default class Section extends Component {
  constructor() {
    super();
    this.state = { hidden: true };
    this.handleVisability = this.handleVisability.bind(this);
  }
  handleVisability() {
    this.setState({ hidden: !this.state.hidden });
  }
  render() {
    return (
      <div>
        {this.state.hidden && <Header color={"yellow"} />}
        <button onClick={this.handleVisability}>change visability</button>
      </div>
    );
  }
}
