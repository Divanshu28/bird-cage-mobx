import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('BirdStore') //inject birdstore into the app
@observer //app component is observer that watches store for the data/state changes to rerender the component
class App extends Component {
 
   handleSubmit = (e) => {
      e.preventDefault();
      const bird = this.bird.value;
      this.props.BirdStore.addBird(bird);
      this.bird.value = '';   
    }

  render() {
    const {BirdStore} = this.props;
    return (
      <div className="App">
        <h2>You have {BirdStore.birdCount} birds.</h2>

        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="Enter bird" ref={input => this.bird = input}/>
          <button>Add Bird</button>
        </form>

        <ul>
          {
          BirdStore.birds.map(bird => (
            <li key={bird}>{bird}</li>
          ))}
        </ul>
      </div>
    );
  }
 
}

export default App;
