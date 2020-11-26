import React from 'react'

const JoinRoomForm = () => {
  return (
    <form className="form">
      <div className="input-group">
        <label htmlFor="pseudo" className="label">
          Pseudo
        </label>
        <input type="text" name="pseudo" className="input" />
      </div>
      <div className="input-group">
        <label htmlFor="room" className="label">
          Salle
        </label>
        <input type="text" name="room" className="input" />
      </div>
      <div>
        <button>Rejoindre</button>
      </div>
    </form>
  )
}

export {JoinRoomForm}
