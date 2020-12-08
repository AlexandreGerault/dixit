import React, {FC, FormEvent, useState} from 'react'

type CreateRoomFormProps = {
  onSubmit: Function
}

const CreateRoomForm: FC<CreateRoomFormProps> = ({onSubmit}) => {
  const [pseudo, setPseudo] = useState<string>('')
  const [name, setName] = useState<string>('')

  return (
    <form
      className="form"
      onSubmit={(event: FormEvent) => {
        event.preventDefault()
        onSubmit({pseudo, roomName: name})
      }}
    >
      <div className="input-group">
        <label htmlFor="pseudo" className="label">
          Pseudo
        </label>
        <input
          type="text"
          name="pseudo"
          className="input"
          value={pseudo}
          onChange={e => setPseudo(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label htmlFor="room" className="label">
          Nom de la partie
        </label>
        <input
          type="text"
          name="room"
          className="input"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      {/*
      <div className="input-group">
        <label htmlFor="room" className="label">
          Type de salon
        </label>
        <input type="text" name="room" className="input" />
      </div>
      */}
      <div className="form__right-actions">
        <button>Créer une partie</button>
      </div>
    </form>
  )
}

export {CreateRoomForm}
