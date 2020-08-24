import React from 'react';

class Heroes extends React.Component {
  state = {
    heroes : [{id: 1, nom: " Hiro Hamada"},{id: 2, nom: "Baymax"},{id: 3, nom: "Honey Lemon"} ],
    powers : [{id:1, pouvoir: "Force"}, {id:2, pouvoir: "Sauvegarde de données"}, {id:3, pouvoir: "Connaissance Médical"}],
    compteur : 0,
    nouveauHero : ''
  }

handleClick() {console.log(this.state.heroes)}
handleClick2 = () => {console.log(this.state.powers)} //fonction fléché qui recupére le this automatiquement
handleClickCompteur = () => {this.setState({compteur: this.state.compteur + 1})} //modif du state
handleArrayPush = () => {
  const newArray = this.state.heroes.slice() // copie de state
  newArray.push({id:4, nom: "Go Go Tomago"}) //push sur la copie
  this.setState({heroes: newArray}) // remplacement par la copie
}
handleDeletePower = (id) => {
  const newArray = this.state.powers.slice() //copie du state avec slice
  const index = newArray.findIndex((pouvoir) => { //recherche de l'index indentique a l'input ID
    return pouvoir.id === id //retourne si il est identique
  })
  newArray.splice(index, 1) //remove à l'index
  this.setState({powers: newArray}) // remplacement par la copie
}

handleDeleteHero = (id) => {
  const newArray = [...this.state.heroes] //copie du state aveec spreadopérator
  const index = newArray.findIndex(function(hero){ //recherche de l'index indentique a l'input ID
    return hero.id === id //retourne si il est identique
  })
  newArray.splice(index, 1)
  this.setState({heroes: newArray})
}

handleSubmit = (event) => {
  event.preventDefault() // pas de recharge de la page
const id = new Date().getTime()
const nom = this.state.nouveauHero;
const hero = {id: id, nom:nom}
const heros = this.state.heroes.slice()
heros.push(hero);
this.setState({heroes:heros})
this.setState({nouveauHero: ''})
}

handleChange = (event) => {
 this.setState({nouveauHero : event.currentTarget.value})
}

  render (){
    const maVariable = <li style={{color: "grey"}}> Hiro Hamada mode brutal</li>
    const monArray = [<li style={{color: "grey"}}> Baymax mode brutal</li>,<li style={{color: "grey"}}> Honey Lemon mode brutal</li>]
    const monState = this.state.heroes.map(function(heroes){ return <li> {heroes.nom} depuis le state  </li>})
//onClick ={this.handleDelete} retourne l'événement click et ses propriétés
    return(
       <React.Fragment>
          <header className="App-header">
          <ul>
            <h1> Liste des heros </h1>
            {this.state.compteur} <button onClick={this.handleClickCompteur}> +1 </button>
            {maVariable}
            {monArray}
            {monState}
            {this.state.heroes.map(hero => (<li>{hero.nom} <button onClick={()=> this.handleDeleteHero(hero.id)}> x </button> </li>))}
            {this.state.powers.map(power => (<li>{power.pouvoir} <button onClick={()=> this.handleDeletePower(power.id)}> x </button> </li>))}
            <button onClick={this.handleClick.bind(this)}> "heros bind" </button> {/* Bind pour lié le this */}
            <button onClick={() => this.handleClick()}> "heros autofunction" </button> {/* fonction autofléché pour lié le this */}
            <button onClick={this.handleClick2}> Powers </button>
            <button onClick={this.handleArrayPush}> Push Go Go Tomago </button>
          </ul>
          <form onSubmit= {this.handleSubmit}>
            <input value={this.state.nouveauHero} onChange={this.handleChange} type ='text' placeholder ='Ajouter un hero' />
            <button>Confirmer</button>
          </form>
          </header>
        </React.Fragment>)

  }
}

export default Heroes;
