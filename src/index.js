import ReactDOM from "react-dom/client";
const root = ReactDOM.createRoot(document.getElementById("root"));

const user="Mita Zuriati";
root.render(App());

function App() {
    if(user){
        return <Welcome nama={user}/>
    }else{
        return <button>Login</button>
    }
}

function Welcome(props) {
    return (
      <h1>Selamat datang {props.nama}</h1>
    )
}



