import React from 'react'

export const TrainingItem = ({ date, amount, removeData }) => {

    const handleRemove = () => {
        removeData(date)
    }

  return (
    <li>
        Date: {date} Amount: {amount} <button onClick={handleRemove}>Delete</button>
    </li>
  )
}
