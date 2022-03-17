import React, { useState } from 'react'

import { GridForm, ColOne, ColTwo, Button } from './Styled'

import { addFruit } from '../api'

function AddFruit ({ setFruits, closeAddForm, setError }) {
  // TODO: read from global state
  const [newFruit, setNewFruit] = useState(false)

  function handleAddChange (e) {
    const { name, value } = e.target
    setNewFruit({
      ...newFruit,
      [name]: value
    })
  }

  function handleAdd () {
    const fruit = { ...newFruit }
    // TODO: pass token as second parameter
    addFruit(fruit, 'token')
      .then(setFruits)
      .then(closeAddForm)
      .catch(err => setError(err.message))
  }

  const { name: addingName, calories: addingCalories } = newFruit

  return (
    <>
      <h2>Add new</h2>
      <GridForm>
        <ColOne>Name:</ColOne>
        <ColTwo type='text'
          name='name'
          aria-label='adding-name'
          value={addingName || ''}
          onChange={handleAddChange} />

        <ColOne>Calories:</ColOne>
        <ColTwo type='text'
          name='calories'
          aria-label='adding-calories'
          value={addingCalories || ''}
          onChange={handleAddChange} />

        <Button type='button' onClick={handleAdd}>Add fruit</Button>
        <Button type='button' onClick={closeAddForm}>Close</Button>
      </GridForm>
    </>
  )
}

export default AddFruit
