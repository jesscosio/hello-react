'use strict';

const e = React.createElement;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pinged: false };
  }

  render() {
    if (this.state.pinged) {
      return 'Header has been pinged.';
    }

    return e(
      'div',
      { onClick: () => this.setState({ pinged: true }) },
      'Ping'
    );
  }
}

const domContainer = document.querySelector('#header');
ReactDOM.render(e(Header), domContainer);