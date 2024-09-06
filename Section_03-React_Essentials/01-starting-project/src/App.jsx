import reactImage from './assets/react-core-concepts.png'

function App() {

    const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

    function getRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    const Header = () => {
        const description = reactDescriptions[getRandomInt(2)]

        return (
            <header>
                <img src={reactImage} alt="Stylized atom"/>
                <h1>React Essentials</h1>
                <p>
                    {description} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
        )
    }

    return (
        <div>
            <Header/>
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;
