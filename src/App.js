



import './App.css';
import React , { useState } from 'react';

function Square(props){
  return  <button onClick={props.handleclick} className='square'>{props.value}</button>;
}


function Board() {
  const [xIsNext , setxIsNext] = useState(true);
  const[squares,setSquare] = useState(Array(9).fill(null));

  function StartPoint(){
    function StartO(){
      setxIsNext(false);
      setSquare(Array(9).fill(null));
    }
    function StartX(){
      setxIsNext(true);
      setSquare(Array(9).fill(null));
    }
    return(
    <>
      <div className='StartPoint'>Restart the Game?
        <br/>
        <button id='O' onClick={StartO} >Start With O</button>
        <button id='X' onClick={StartX} >Start With X</button>
      </div>
      <br/>
    </>);
  }

  function myhandleclick(i){
    if(squares[i]!=null || calculateWinner(squares)!=null)  return;
    const temp = squares.slice();
    if(xIsNext){
      temp[i] = "X";
    }else{
      temp[i] = "O";
    }
    setxIsNext(!xIsNext);
    setSquare(temp)
    if(calculateWinner(squares)!==null){
      
    }
    console.log(squares);
  }

  function calculateWinner(squares){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i=0;i<lines.length;i++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if(winner!=null){
    status = "Winner :" + winner;
  }else{
    status = "Next move : " + (xIsNext?"X":"O") ;
  }
  return (  
  <>
  <div className='mainclass'>
    <div className="status" >{status}</div>
    <StartPoint/>
    <div className='board-row'>
      <Square value={squares[0]} handleclick={()=>{myhandleclick(0)}}/>
      <Square value={squares[1]} handleclick={()=>{myhandleclick(1)}} />
      <Square value={squares[2]} handleclick={()=>{myhandleclick(2)}} />
    </div>
    <div className='board-row'>
      <Square value={squares[3]} handleclick={()=>{myhandleclick(3)}} />
      <Square value={squares[4]} handleclick={()=>{myhandleclick(4)}} />
      <Square value={squares[5]} handleclick={()=>{myhandleclick(5)}} />
    </div>
    <div className='board-row'>
      <Square value={squares[6]} handleclick={()=>{myhandleclick(6)}} />
      <Square value={squares[7]} handleclick={()=>{myhandleclick(7)}} />
      <Square value={squares[8]} handleclick={()=>{myhandleclick(8)}} />
    </div>
  </div>
  </>
  );
  
}

export default Board;
