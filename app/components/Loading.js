import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
  static defaultProps = {
    text: 'Loading',
    speed: 300
  }

  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
  }
  
  state = {
    text: this.props.text
  };

  componentDidMount() {
    const { text, speed } = this.props;
    const stopper = text + '...';

    this.interval = setInterval(() => {
      (this.state.text === stopper)
        ? this.setState(() => ({ text }))
        : this.setState(prevState => ({ text: prevState.text + '.' }));
    }, speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const styles = {
      textAlign: 'center',
      fontSize: '30px'
    };
    return (
      <p style={styles}>
        {this.state.text}
      </p>
    );
  }
}

export default Loading;