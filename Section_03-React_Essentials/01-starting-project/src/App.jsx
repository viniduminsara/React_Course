import {CORE_CONCEPTS, EXAMPLES} from './data'
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {

    const [ selectedTopic, setSelectedTopic ] = useState(null);

    const handleSelect = (selectedBtn) => {
        setSelectedTopic(selectedBtn);
    }

    return (
        <div>
            <Header/>
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
                <section id='examples'>
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
                    </menu>
                    {!selectedTopic && <p>Please select a topic.</p>}
                    {selectedTopic && (
                        <div id='tab-content'>
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}

export default App;
