import React from 'react';
import NextHead from 'next/head';

class Head extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    title: 'Cowsay'
  };

  render = () => {
    return (
      <NextHead>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title>{this.props.title}</title>
        <link rel="icon" type="image/png" href="/static/favicon.png" />
        <link rel="stylesheet" href="/static/bootstrap-3.3.7-dist/css/bootstrap.min.css" />
      </NextHead>
    );
  }
}

export default Head;
