import React from 'react'

const CreateRoomForm = () => {
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
          Nom de la partie
        </label>
        <input type="text" name="room" className="input" />
      </div>
      <div className="input-group">
        <label htmlFor="room" className="label">
          Type de salon
        </label>
        <input type="text" name="room" className="input" />
      </div>
      <div className="form__right-actions">
        <button>Créer une partie</button>
      </div>
    </form>
  )
}

export {CreateRoomForm}
