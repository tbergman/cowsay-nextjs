import React from 'react';

class Jumbotron extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    lead: React.PropTypes.string
  }

  render = () => {
    return (
      <div className="jumbotron">
        <h1>{this.props.title}</h1>
        {this.props.lead &&
          <p className="lead">{this.props.lead}</p>
        }
      </div>
    );
  };
}

export default Jumbotron;
