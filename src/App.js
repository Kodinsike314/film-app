import React from "react";
import Films from "./Components/Films";
import Header from "./Components/Header";
import AddManga from "./Components/AddManga";


class App extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            films: [
            {
                id:1,
                cover: `https://thumb.wikimedia.org/wikipedia/uk/thumb/2/29/Interstellar_film_poster2.jpg/250px-Interstellar_film_poster2.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail`,
                title: "Інтерстеллар",
                genres: ["Наукова фантастика", "Пригоди", "Детективний фільм", "Трилер"],
                directedBy: "Крістофер Нолан",
                actors: ["Метью Макконагі","Енн Гетевей","Джессіка Честейн"]
            },
            {
                id:2,
                cover: `https://thumb.wikimedia.org/wikipedia/uk/thumb/e/e3/Infinity_War_Poster.jpg/250px-Infinity_War_Poster.jpg?utm_source=uk.wikipedia.org&utm_campaign=parser&utm_content=thumbnail`,
                title: "Месники: Війна Нескінченності",
                genres: ["Супергеройський", "Науково-фантастичний", "Екшн"],
                directedBy: "Ентоні Руссо",
                actors: ["Роберт Дауні-молодший","Кріс Еванс","Марк Раффало", "Кріс Гемсворт", "Елізабет Олсен"]
            }
        ]
        }
        this.addManga = this.addManga.bind(this)
  }
  render(){
    return (
      <div>
        <Header title="Фільми"/>
        <div className="container">
          <main className="content">
            <Films films={this.state.films}/>
          </main>
          <aside className="sidebar">
            <AddManga onAdd={this.addManga} />
          </aside>
        </div>
        
      </div> 
    )
  }

  addManga(film) {
    const id = this.state.films.lenght + 1
    this.setState({films: [...this.state.films, {id, ...film}]})
  }

}

export default App;
