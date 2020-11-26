import React from 'react'

const CreateRoomForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="pseudo">Pseudo</label>
        <input type="text" name="pseudo" />
      </div>
      <div>
        <label htmlFor="room">Nom de la partie</label>
        <input type="text" name="room" />
      </div>
      <div>
        <label htmlFor="room">Type de salon</label>
        <input type="text" name="room" />
      </div>
      <button>Créer une partie</button>
    </form>
  )
}

export {CreateRoomForm}
