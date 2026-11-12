import React from "react";

class AddFilm extends React.Component {
    filmAdd={}
    constructor(props){
        super(props)
        this.state = {
            title:"",
            cover:"",
            directedBy:"",
            genres:"",
            actors:"",
        }
    }

    render(){
        return(
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Назва" onChange={(e)=>this.setState({title: e.target.value})}/>
                <input placeholder="Обложка (ссилка на зображення)" onChange={(e)=>this.setState({cover: e.target.value})}/>
                <input placeholder="Режисер" onChange={(e)=>this.setState({directedBy: e.target.value})}/>
                <textarea placeholder="Жанр (якщо їх декілька, введіть через кому)" onChange={(e)=>this.setState({genres: e.target.value.split(',').map(item=>item.trim())})}/>
                <textarea placeholder="Актори (якщо їх декілька, введіть через кому)" onChange={(e)=>this.setState({actors: e.target.value.split(',').map(item=>item.trim())})}/>
                <button type="button" 
                onClick={()=>{
                    this.myForm.reset()
                    this.filmAdd={
                        title: this.state.title,
                        cover: this.state.cover,
                        directedBy: this.state.directedBy,
                        genres: this.state.genres,
                        actors: this.state.actors 
                    }
                    if(this.props.film)
                        this.filmAdd.id = this.props.film.id
                    this.props.onAdd(this.filmAdd)
                }
                }>Добавити</button>
            </form>
        )
    }
}

export default AddFilm