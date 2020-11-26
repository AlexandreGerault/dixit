import React from 'react'

const JoinRoomForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="pseudo">Pseudo</label>
        <input type="text" name="pseudo" />
      </div>
      <div>
        <label htmlFor="room">Salle</label>
        <input type="text" name="room" />
      </div>

      <button>Rejoindre</button>
    </form>
  )
}

export {JoinRoomForm}
