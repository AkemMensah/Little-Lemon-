
function Nav()
{
    return(
        <nav className="navlings">
            <img alt="little-Lemon-icon" src="./conponents/images/lemon.jpg"/>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Order Online</li>
                <li>Login</li>
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