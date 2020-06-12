/* import React from "react";
import Wed1 from "./assets/wedding.jpg";

class ComponentNew extends React.Component {
  constructor(props) {
    super(props);
    this.backgrounds = [{ Wed1 }, "wedding3.jpg", "plain.jpg"];
    this.state = { backgroundIndex: 0 };

    this.changeBackground = this.changeBackground.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(
      this.changeBackground,
      this.props.animDuration * 1000
    );
  }

  componentWillUnmount() {
    if (this.timeout) clearTimeout(this.timeout);
  }

  changeBackground() {
    this.setState(
      function ({ backgroundIndex }) {
        const nextBackgroundIndex = ++backgroundIndex % this.backgrounds.length;

        return { backgroundIndex: nextBackgroundIndex };
      },
      function () {
        this.timeout = setTimeout(
          this.changeBackground,
          this.props.animDuration * 3000
        );
      }
    );
  }

  render() {
    return (
      <div>
        <p>Ostatnie realizacje</p>
        <img src={this.backgrounds[this.state.backgroundIndex]} alt="" />
      </div>
    );
  }
}

export default ComponentNew;
 */
