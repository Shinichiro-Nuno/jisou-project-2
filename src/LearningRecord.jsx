import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase-client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function LearningRecord() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [records, setRecords] = useState([]);
  const [isInput, setIsInput] = useState(true);

  const onClickSave = async (title, time) => {
    if (title && time) {
      const { error } = await supabase.from('study-record').insert({ title, time});

      if (error) {
        console.error('データ登録エラー:', error.message);
        return;
      }

      const newRecords = [...records, {title, time}]
      setIsInput(true);
      setRecords(newRecords);
      setTitle('');
      setTime(0);
    } else {
      setIsInput(false);
    }
  }

  useEffect(() => {
    setIsLoading(true);
    const fetchRecords = async () => {
      const { data, error } = await supabase.from('study-record').select('title, time');

      if (error) {
        console.error('データ取得エラー:', error.message);
      } else if (data && data.length > 0) {
        setRecords(data);
      }

      setIsLoading(false);
    };

    fetchRecords();
  }, []);

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
      {isLoading ? <p>Loading中...</p> : (
      <>
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
      )}
    </>
  )
}

export default LearningRecord
