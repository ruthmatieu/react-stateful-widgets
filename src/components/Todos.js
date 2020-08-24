import React, { Component } from 'react';

class Todos extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput:'',
            list: []
        }
    }
    changeUserInput(input) {
        this.setState({
            userInput: input
        });
    }

    addToList(input){
        let listArray = this.state.list
        listArray.push(input);
        this.setState({
            list: listArray,
            userInput: ''
        })
    }
    
  render(){
    const style = {
        width: '350px'
    };
    return (
        <div className="todos-container">
            <header>
                <h1>Tu<span>Du</span></h1>
            </header>

            <div className="input-data">
                <div className="text-area">
                    <input
                        style={style}
                        value={this.state.userInput}
                        type="text"
                        placeholder="Enter new item..."
                        onChange={ (e) =>  this.changeUserInput(e.target.value) }
                        
                    />
                </div>
                <div>
                    <button className="add-btn" onClick={()=> this.addToList(this.state.userInput)}>+</button>
                    <ul className="list">
                        {this.state.list.map((val)=> 
                            <li
                            >{val}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
  } 
}

export default Todos;