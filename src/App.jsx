import './App.css'
import {useState} from 'react'
import { TrainingInputForm } from './components/trainingInputForm/TrainingInputForm'
import { TrainingList } from './components/trainingList/TrainingList'

import { allData } from './data/data'

function App() {

  const [allData, setAllData] = useState(
    {
      '2024-03-12': [10, 12, 2],
      '2024-02-12': [5, 12, 5, 6],
      '2024-01-12': [10],
  }
  )

  const addNewData = (date, value) => {
    setAllData(prevData => {
        if (prevData.hasOwnProperty(date)) {
            return { ...prevData, [date]: [...prevData[date], value] };
        } else {
            return { ...prevData, [date]: [value] };
        }
    });
  }

  const removeData = (date) => {
    setAllData(prevData => {
      const newData = {...prevData }
      delete newData[date]
      return newData
    })
  }

  return (
    <>
      <TrainingInputForm addNewData={addNewData}/>
      <TrainingList allData={allData} addNewData={addNewData} removeData={removeData}/>
    </>
  )
}

export default App
