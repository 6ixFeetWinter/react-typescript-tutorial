import React, { useState } from 'react';
import './App.css';
import { Items } from './components/Items';

function App() {

  const [text, setText] = useState<string>('');

  const [memos,setMemos] = useState<string[]>([]);

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(e.target.value);
  };

  const onAddMemo = () => {
    if(text === ''){
      alert('内容を追加してください');
    }else{
    setMemos([...memos,text]);
    setText('');
    console.log(memos);
    }
  }

  const onDelete = (index:number) => {
    const newMemos = [...memos];
    newMemos.splice(index,1);
    setMemos(newMemos);
  }

  return (
    <>
      <h1>MEMO APP</h1>
      <input type='text' placeholder='メモを入力してください' value={text} onChange={handleChange} />
      <button onClick={onAddMemo}>追加</button>
      <div>
        <ul>
          {/* <Items memos={memos} /> */}
        {memos.map( (memo:string, index:number) => (
          <li key={memo + index}>
            <p>{memo}</p>
            <button key={index} onClick={() => onDelete(index)}>削除</button>
          </li>
        ))}
        </ul>
      </div>
    </>
  );
};



export default App;
