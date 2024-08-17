import { Outlet, useOutletContext } from 'react-router-dom';
import UserCard from "../components/UserCard";

function Home() {
    const users = useOutletContext();  // Accessing context data

    return (
        <main>
            <h1>Home!</h1>
            <Outlet />  {/* This will render nested routes */}
            {users.map(user => <UserCard key={user.id} user={user} />)}
        </main>
    );
}

export default Home;
