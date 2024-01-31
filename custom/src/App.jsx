import React from 'react';
import './App.css';
import First from './component/first.jsx';

function App() {
  const [content, setContent] = First('content','')
  return (
    <div>
      <input type="text" value={content} onChange={e=>setContent(e.target.value)}></input>
    </div>
  );
}

export default App;