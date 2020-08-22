import React from 'react';

function Add() {
  return (
    <React.Fragment>
      <h1 className="m-3">Nouvelle tâche</h1>
          <div className="card mx-3">
              <form className="card-body" onSubmit={(e) => this.handleSubmit(e)}>
                  <div className="form-group">
                      <label form="taskName">Nom de la tâche</label>
                      <input type="text" className="form-control" name="taskName" id="taskName" />
                  </div>
                  <button type="submit" className="btn btn-primary">Créer</button>
              </form>
          </div>
    </React.Fragment>
  );
}
//required ref={input => this.newTask = input} 
export default Add;
