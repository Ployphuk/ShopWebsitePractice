import './Navbar.css'

function Navbar() {
    return (
        <header>
            <h1>ProHome</h1>
            <nav>
                <ul className="navbar">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service </a></li>
                    <li><a href="#">Contact </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
