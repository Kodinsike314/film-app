import React from "react";

class AddManga extends React.Component {
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
            <form>
                <input placeholder="Назва" onChange={(e)=>this.setState({title: e.target.value})}/>
                <input placeholder="Обложка (ссилка на зображення)" onChange={(e)=>this.setState({cover: e.target.value})}/>
                <input placeholder="Режисер" onChange={(e)=>this.setState({directedBy: e.target.value})}/>
                <textarea placeholder="Жанр (якщо їх декілька, введіть через кому)" onChange={(e)=>this.setState({genres: e.target.value.split(',').map(item=>item.trim())})}/>
                <textarea placeholder="Актори (якщо їх декілька, введіть через кому)" onChange={(e)=>this.setState({actors: e.target.value.split(',').map(item=>item.trim())})}/>
                <button type="button"
                onClick={()=>this.props.onAdd({
                    title: this.state.title,
                    cover: this.state.cover,
                    directedBy: this.state.directedBy,
                    genres: this.state.genres,
                    actors: this.state.actors
                })}
                >Добавити</button>
            </form>
        )
    }
}

export default AddManga