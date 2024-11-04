import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function LearningRecord() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [records, setRecords] = useState([]);
  const [isInput, setIsInput] = useState(true);

  const onClickSave = (title, time) => {
    const newRecords = [...records, {title, time}]
    if (title && time) {
      setIsInput(true);
      setRecords(newRecords);
      setTitle('');
      setTime(0);
    } else {
      setIsInput(false);
    }
  }

  const totalTime = records.reduce((prev, record) => prev + record.time, 0);

  return (
    <>
      <h1>学習記録一覧</h1>
      <div>
        <p>学習内容</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <p>学習時間</p>
        <input
          type="number"
          value={time}
          min="0"
          onChange={(e) => setTime(parseInt(e.target.value, 10))}
        />
      </div>
      <p>{`入力されている学習内容：${title}`}</p>
      <p>{`入力されている学習内容：${time}時間`}</p>
      <button onClick={() => onClickSave(title, time)}>登録</button>
      {!isInput && (
        <p>入力されていない項目があります</p>
      )}
      {records.map((record, index) => (
        <div key={index}>
          <p>{`${record.title} ${record.time}時間`}</p>
        </div>
      ))}
      <p>{`合計時間：${totalTime}`}/1000(h)</p>
    </>
  )
}

export default LearningRecord
