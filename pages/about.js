import React from 'react';

import Head from '../components/Head';
import NavigationBar from '../components/NavigationBar';

class About extends React.Component {
  render = () => {
    return (
      <div>
        <Head title="Cowsay | About" />
        <NavigationBar />
        <div className="container">
          <div className="page-header">
            <h1>About</h1>
          </div>
          <p className="lead">Cowsay generates an ASCII picture of a cow saying something provided by the user. If run with no arguments, it accepts standard input, word-wraps the message given at about 40 columns, and prints the cow saying the given message on standard output.</p>
        </div>
      </div>
    );
  };
}

export default About;
