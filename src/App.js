import {WordCard} from "./components/WordCard/WordCard";
import {Container} from "@mui/material";
import {words} from './data/λεχεις.js'

function App() {

    return (
        <div className="App">
            <Container maxWidth="sm">
                {
                    words.map((word, index) => <WordCard key={index} front={word.en} back={word.el}/>)
                }
            </Container>

        </div>
    );
}

export default App;
