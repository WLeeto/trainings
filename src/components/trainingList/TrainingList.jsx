import React, { useState } from 'react'
import { allData } from '../../data/data' 
import { TrainingItem } from '../traningItem/TraningItem'

import './trainingList.css'

export const TrainingList = ({ allData, addNewData, removeData }) => {

  return (
    <ul className='resultList'>
        {Object.entries(allData).map(([date, amounts]) => (
            <TrainingItem 
            key={date} 
            date={date} 
            amount={amounts.reduce((total, value) => total + value, 0)} 
            removeData={removeData}/>
        ))}
    </ul>
  )
}
