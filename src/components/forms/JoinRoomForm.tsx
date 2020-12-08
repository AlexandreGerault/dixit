import React, {FC, FormEvent, useState} from 'react'

type JoinRoomFormProps = {
  onSubmit: Function
}

const JoinRoomForm: FC<JoinRoomFormProps> = ({onSubmit}) => {
  const [pseudo, setPseudo] = useState<string>('')
  const [room, setRoom] = useState<string>('')

  return (
    <form
      className="form"
      onSubmit={(event: FormEvent) => {
        event.preventDefault()
        onSubmit({pseudo, room})
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
          Salle
        </label>
        <input
          type="text"
          name="room"
          className="input"
          value={room}
          onChange={e => setRoom(e.target.value)}
        />
      </div>
      <div className="form__right-actions">
        <button>Rejoindre</button>
      </div>
    </form>
  )
}

export {JoinRoomForm}
