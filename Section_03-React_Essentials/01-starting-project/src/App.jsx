import reactImage from './assets/react-core-concepts.png'
import componentImage from './assets/components.png'

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

    const CoreConcept = (props) => {

        return (
            <li>
                <img src={props.image} alt="image"/>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </li>
        )
    }

    return (
        <div>
            <Header/>
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title='Components'
                            description='The core UI building block.'
                            image={componentImage}
                        />
                        <CoreConcept
                            title='Components'
                            description='The core UI building block.'
                            image={componentImage}
                        />
                        <CoreConcept
                            title='Components'
                            description='The core UI building block.'
                            image={componentImage}
                        />
                        <CoreConcept
                            title='Components'
                            description='The core UI building block.'
                            image={componentImage}
                        />
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;
