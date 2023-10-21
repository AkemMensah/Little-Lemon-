function HeroSection()
{
    return(
        <>
        <h1>Little Lemon</h1>
        <h3>CHICAGO</h3>
        <p>Little Lemon is a restaurant in Chicago that serves authentic Chinese food.</p>
        <img alt="little-Lemon-icon" src="./hero_cake.jpg"/>
        <button>Reserve a Table</button>
        </>
    );
};

function Highlights()
{
    return(
        <>
        <div className="intro">
        <p>This weeks specials!</p>
        <button>Online Menu</button>
        </div>
        <div className="images">
            <div className="image">
                <img alt="little-Lemon-icon" src="./hero_cake.jpg"/>
                <p>Greek Salad</p>
        </div>
        </>

    );
};

function Main()
{
    return(
        <HeroSection/>
    );
};

export default Main;