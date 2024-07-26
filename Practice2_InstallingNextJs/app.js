const app = document.getElementById('app');

// const header = document.createElement('h1');

// const text = 'Develop. Preview. Ship.';

// const headerContent = document.createTextNode(text);

// header.appendChild(headerContent);

// app.appendChild(header);

// with react

function Header({title}) {
    return <h1>{title}</h1>
}

function HomePage() {

    const names = ['Ada','Tyrone','Chicken']

    const [likes,setLikes] = React.useState(0);

    function handleClick(){
        setLikes((likes)=>likes+1);
    }

    return <div>
        <Header title="React" /> 
        <Header title="New Title"/>
        <ul>
            {
                names.map((name)=> (
                    <li key={`check_${name}`}>{name}</li>
                ))
            }
        </ul>
        <button onclick={handleClick}>Like({likes})</button>
    </div>
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);