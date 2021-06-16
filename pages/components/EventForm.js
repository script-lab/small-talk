import React, {useState} from 'react'


const EventForm = ({state, dispatch}) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")


  const addEvent = e => {
    e.preventDefault()
    dispatch({
      type: "CREATE_EVENT",
      title,
      body
    })

    setTitle("")
    setBody("")
  }


  const unCreate = title === "" || body === ""


  const deleteAllEvents = e => {
    e.preventDefault()
    const result = window.confirm("全てのイベントを本当に削除しても良いですか？")
    if (result) dispatch({type: "DELETE_ALL_EVENTS"})
  }


  return (
    <>
      <h4>イベントフォーム作成</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={e => setTitle(e.target.value)}></input>
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <input className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></input>
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreate}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>
      </form>
    </>
  )
}


export default EventForm