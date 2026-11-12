import React from "react"
import './../style/Films.css'
import Film from "./Film"

class Films extends React.Component {
    render(){   
        if (this.props.films.length > 0)
            return(
                <div className="card_container">
                    {this.props.films.map((el) => (
                        <Film onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} film={el}/>
                    ))}
                </div>
            )
        else
            return(<div className="film">
                <h1>Тут поки що немає жодного фільму</h1>
            </div>)
    }
}

export default Films