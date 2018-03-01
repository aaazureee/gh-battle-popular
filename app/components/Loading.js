var React = require('react');
var PropTypes = require('prop-types');

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text
    };
  }

  componentDidMount() {
    var stopper = 'Loading' + '...';
    this.interval = setInterval(function() {
      if (this.state.text === stopper) {
        return this.setState(function() {
          return {
            text: this.props.text
          };
        });
      }
      this.setState(function(prevState) {
        return {
          text: prevState.text + '.'
        };
      });
    }.bind(this), this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    var styles = {
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

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
};

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired
};


module.exports = Loading;