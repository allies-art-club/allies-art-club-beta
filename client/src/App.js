import React from 'react';


class App extends React.Component{
  state = {
    ping:''
  }
  componentDidMount(){
    fetch('/ping', {
            method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            } 
        })
    .then((res)=>
        res.json().then((res)=>{
          console.log(res)
          this.setState({pong:res.pong})
        })
    )
    }
  
  render(){
    return (
      <div >
        <header className="App-header">
        
            Learn React
        </header>
        <p>{this.state.pong}</p>
      </div>
    );
  }
}

export default App;
