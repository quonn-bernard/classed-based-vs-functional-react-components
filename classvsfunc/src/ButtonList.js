import React from "react";
import Button from "./Button";

class ButtonList extends React.Component {
  
  constructor(){
    super()
    this.state={
      isVisible: false,
    }
    this.toggleState = this.toggleState.bind(this)
  }

  toggleState = () => this.setState({ isVisible: !this.state.isVisible });
  renderButtons = () => this.btnsArr.map((button) => <div>{button}</div>);

  btnsArr = [
    <Button>BUTTON</Button>,
    <Button>BUTTON</Button>,
    <Button>BUTTON</Button>,
  ];

  render() {
    return (
      <>
        <Button bg='white' color='black' click={this.toggleState}>TOGGLE</Button>
        {this.state.isVisible && this.renderButtons()}
      </> 
    );
  }
}

export default ButtonList;







