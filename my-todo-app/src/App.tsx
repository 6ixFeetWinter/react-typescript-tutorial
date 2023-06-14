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

  return (
    <div>
      <h1>MEMO APP</h1>
      <input type='text' placeholder='メモを入力してください' value={text} onChange={handleChange} />
      <button onClick={onAddMemo}>追加</button>
      <div>
        <ul>
          {/* propsでmemosを渡そうとしたらなんかエラーになった
          <Items memos={memos} />
          */}
          {/* 型 'void[]' を型 'ReactNode' に割り当てることはできません。...
          { memos.map((memo,index):void => {
            <li key={index}>{memo}</li>
          }) }
        */}
        {/* li生成されず。再レンダリングされていない...？ */}
        {memos.map((memo,index):any => {
          <li key={index}>{memo}</li>
        })}
        </ul>
      </div>
    </div>
  );
};



export default App;
