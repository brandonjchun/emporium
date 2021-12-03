import React, { Component } from 'react';

class Home extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked })
    }
    openAlert = () => {
      alert("UI looks fantastic 👌👌");
    }
    render(){
        return(
            <div className="welcomeDiv">
              <h1 className="welcome">
                Welcome to Music Emporium
              </h1>
              <button
              className="openAlert"
              onClick={this.openAlert}
              >
                Hey there sexy mamas~
              </button>
            </div>
        )
    }
}

export default Home;
