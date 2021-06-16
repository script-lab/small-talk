import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {

  return (
    <>
      <div className="container-fluid">
        <h4>イベントフォーム作成</h4>
        <form>
          <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle"></input>
          </div>

          <div className="form-group">
            <label htmlFor="formEventBody">ボディー</label>
            <input className="form-control" id="formEventBody"></input>
          </div>

          <button className="btn btn-primary">イベントを作成する</button>
          <button className="btn btn-danger">全てのイベントを削除する</button>
        </form>

        <h4>イベント一覧</h4>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>タイトル</th>
              <th>ボディー</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </>
  );
}


export default App