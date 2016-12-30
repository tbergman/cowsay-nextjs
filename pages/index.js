import React from 'react';
import classnames from 'classnames';
import cowsay from 'cowsay-browser';

import Head from '../components/Head';
import Jumbotron from '../components/Jumbotron';
import NavigationBar from '../components/NavigationBar';

class Index extends React.Component {

  state = {
    text: 'Hello, world!',
    f: 'default',
    action: 'say'
  };

  textChanged = (event) => {
    this.setState({ 
      text: event.target.value 
    });
  };

  cowChanged = (event) => {
    this.setState({
      f: event.target.value
    })
  };

  actionClicked = (event) => {
    this.setState({
      action: event.target.value
    })
  };

  componentDidMount = () => {
    cowsay.list((_, cows) => {
      this.setState({
        cows
      });
    });
  };

  render = () => {
    const { text, f, action, cows } = this.state;
    return (
      <div>
        <Head title="Cowsay | Home" />
        <NavigationBar />
        <div className="container">
          <Jumbotron title="Cowsay" lead="Amoooooosing, isn't it?" />
          <form>
            <div className="form-group">
              <label htmlFor="textInput">Text: </label>
              <input 
                id="textInput" 
                className="form-control" 
                type="text" 
                value={text} 
                onChange={this.textChanged} 
              />
            </div>
            <div className="form-group btn-group" data-toggle="buttons">
              <label className={classnames('btn btn-primary', { active: action === 'say' })}>
                <input type="radio" name="action" value="say" onClick={this.actionClicked} defaultChecked />
                Say
              </label>
              <label className={classnames('btn btn-primary', { active: action === 'think' })}>
                <input type="radio" name="action" value="think" onClick={this.actionClicked} />
                Think
              </label>
            </div>
            {cows &&
              (
                <div className="form-group">
                  <label htmlFor="cowInput">Cow: </label>
                  <select 
                    id="cowInput" 
                    className="form-control" 
                    value={f} 
                    onChange={this.cowChanged}
                  >
                    {
                      cows.map((cow) => {
                        return <option value={cow} key={cow}>{cow}</option>
                      })
                    }
                  </select>
                  </div>
              )
            }
          </form>

          <pre className="panel panel-default">
            {action === 'say' &&
              cowsay.say({
                text: text,
                f: f
              })
            }
            {action === 'think' &&
              cowsay.think({
                text: text,
                f: f
              })
            }
          </pre>
        </div>
      </div>
    );
  };
}

export default Index;