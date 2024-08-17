import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <Outlet context={users} /> {/* Passing users to nested routes */}
            </main>
        </>
    );
}

export default App;
