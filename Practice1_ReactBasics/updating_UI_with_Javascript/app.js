const app = document.getElementById('app');

// const header = document.createElement('h1');

// const text = 'Develop. Preview. Ship.';

// const headerContent = document.createTextNode(text);

// header.appendChild(headerContent);

// app.appendChild(header);

// with react

function Header() {
    return (<h1>Develop. Preview. Ship</h1>)
}

function HomePage() {
    return <div>
        <Header /> 
    </div>
}

const root = ReactDOM.createRoot(app);
h1>
root.render(<HomePage />);