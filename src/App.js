import {WordCard} from "./components/WordCard/WordCard";
import {Container} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import {CardList} from "./components/CardList/CardList";


function App() {

    return (
       <>
       <Routes>
           <Route path={'/'} element={<CardList/>}/>
       </Routes>
       </>
    );
}

export default App;
