/**
 * 初始学习的react游戏示例
 */
import React from 'react';

/**
 * 每个操作按钮，状态由父组件传递，并有一个回调函数改变状态 
 * @param {*} props 
 */
function Square(props){
    return (
    <button 
        className="square" 
        onClick={props.onClick}>
        {props.value}
    </button>
    );
}
/**
 * 
 */
class Board extends React.Component {

  renderSquare(i) {
    return <Square value={this.props.squares[i]} key={i} onClick={()=>{this.props.onClick(i)}}/>;
  }
  renderGrid([row=3,column=3]){
    let grids = new Array(row);
    for(let i=0;i<row;i++){
      let cell = new Array(column);
      for(let j=0;j<column;j++){
        cell.push(this.renderSquare(i*column+j));
      }
      grids.push(<div className="board-row" key={i}>{cell}</div>);
    }
    return  grids;
  }
  render() {
      // const winner = calculateWinner(this.state.square);
      
    // const status = winner?"winner: "+winner:('Next player: '+(this.state.xIsNext?"X":"O"));
    
    return (
      <div>
        {this.renderGrid([3,3])}
      </div>
    );
  }
}

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history:[{
                squares:Array(9).fill(null),
                target:[null,null]
            }],
            // 处理下次操作的用户
            xIsNext:true,
            // 当前跳转的步骤
            stepNumber:0,
        }
    }
    jumpTo(step){
        this.setState({
            stepNumber:step,
            xIsNext:(step % 2)===0,
        });
    }
    handleClick(i){
        const  history = this.state.history.slice(0,this.state.stepNumber+1);
        const curr  =  history[history.length-1];
        const squares = curr.squares.slice();
        if(calculateWinner(squares) || squares[i]){
            return ;
        }
        squares[i] = this.state.xIsNext?"X":"O";
        this.setState({
            history:history.concat([{
                squares:squares,
                target:[i%3+1,Math.floor(i/3)+1]
            }]),
            xIsNext:!this.state.xIsNext,
            stepNumber:history.length
        }); 
      }
  render() {
      const history = this.state.history;
      const curr  =  history[this.state.stepNumber];
      const winner = calculateWinner(curr.squares);
      const status = winner?"winner: "+winner:('Next player: '+(this.state.xIsNext?"X":"O"));
      const moves = history.map((step,move)=>{
        const desc = move?"go to move #"+move:"go to game start";
        const pos =  move?"selected position:["+step.target+"]":"not selected";
        return (<li key={move} className={this.state.stepNumber===move?"selected":""}>
                <button  onClick={()=>this.jumpTo(move)}>{desc}</button>
                <span style={{color:"red"}}>{pos}</span>
            </li>);
      });
    return (
      <div className="game">
        <div className="game-board">
          <Board  squares={curr.squares} onClick={(i)=>this.handleClick(i)}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  export default Game;