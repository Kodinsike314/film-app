import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"

class Film extends React.Component {
    film = this.props.film

    render(){
        return(
            <div className="card">
                <img className="card_cover" 
                    src={this.film.cover}
                    alt={this.film.title}
                />
                <div className="card_content_info">
                    <h2 className="card_title">{this.film.title}</h2>
                    <h4 className="card_direct">Режисер: <span>{this.film.directedBy}</span></h4>
                    <p className="card_genres">{this.film.genres.slice(0,3).join(" • ")}</p>
                    <p className="card_actors">{this.film.actors.slice(0,3).join(" • ")}</p>
                </div>
                <div className="film-icon">
                    <IoCloseCircleSharp className="delete-icon"/>
                    <IoHammerSharp className="edit-icon"/>
                </div>
                        
            </div>
        )
    }
}

export default Film