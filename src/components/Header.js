
function Nav()
{
    return(
        <nav className="navlings">
            <img alt="little-Lemon-icon" src="./lemon.jpg"/>
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">About</a></li>
                <li><a href="./menu.html">Menu</a></li>
                <li><a href="./orders.html">Order Online</a></li>
                <li><a href="./login.html">Login</a></li>
            </ul>
        </nav>
    );
};

function Heading(){
    return(
        <>
        <p>Welcome to Little Lmon Restaurant!</p>
        <Nav/>
        </>
    );
};

export default Heading;