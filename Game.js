import React from 'react';
//import ReactDOM from 'react-dom';
import {  Button } from '@material-ui/core';


class Square extends React.Component{ //보드판 그리는 것 
   
    constructor(props) {
        super(props);
    }
    render(){
        return (
        <Button variant="contained" color={this.props.color} className="square" onClick={this.props.onClick}>
            {this.props.value}
        </Button>
        );
    }
  }
  
  
class Board extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            verticalSize : 20,
            horizionSize : 20,
        };
    }
    

    renderSquare(i) {
       
        if (this.props.squares[i]==null){
            return (
                <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)} // 클릭시 game컴포넌트의 handleClick 함수 동작 
                color ='default'
                />
            );
        }
        else {
            let squaresColor = this.props.squares[i]=='X'? "primary":"secondary"
            return (
                <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)} // 클릭시 game컴포넌트의 handleClick 함수 동작 
                color = {squaresColor}
                />
            );
        }
    }

    render() {
        
      return (
        <div>
            {[...Array(this.state.verticalSize)].map((n, index1) => {
                return (
                    <div className= "board-row" key = {n}>
                        {[...Array(this.state.horizionSize)].map((key, index2) => {
                            return (
                                <>
                                    {this.renderSquare(index2+index1*this.state.verticalSize)}
                                </>
                            )
                        })}
                    </div>
                )
            })}
          
        </div>
      );
    }
}
  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(400).fill(null) //100 * 100
        }],
        xIsNext: true,
        x : 0,
        y : 0,
      };
    }
  
    handleClick(i) {
      
      const history = this.state.history;
      const current = history[history.length - 1];
      const squares = current.squares.slice();
    //   console.log("squres size : ",squares);
    //   console.log("history : ",history);
      let x = i%20;
      let y = parseInt(i/20);
      console.log("x : ",x +" y : ",y);

    //   if (calculateWinner(squares,x,y) || squares[i]) {
    //     return;
    //   }
    if (squares[i]) {
             return;
       }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      

      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        xIsNext: !this.state.xIsNext, //x,o 순서 바꾸기
        x : x,
        y : y
      });
    }
    
    render() {
      const history = this.state.history;
      const current = history[history.length - 1];
      const winner = calculateWinner(current.squares,this.state.x,this.state.y);
  
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={(i) => this.handleClick(i)}
              color = {this.state.color}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
          </div>
          
        </div>
      );
    }
  }
  
  // ========================================
  
  
  function calculateWinner(squares,x,y) {
    console.log("check x: ",x + "check_y : ",y );
    //왼쪽 나랑같은 개수 
    
    //오른쪽 개수

    // 위쪽 개수

    //아래쪽 개수

    //1시방향 개수

    // 7시방향 개수

    //5시방향 개수 

    // 11시방향 개수


    return null;
  }
  

export default Game