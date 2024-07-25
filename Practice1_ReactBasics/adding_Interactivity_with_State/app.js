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
    </div>
}

const root = ReactDOM.createRoot(app);
root.render(<HomePage />);