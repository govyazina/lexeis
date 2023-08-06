import {words} from "../../data/λεχεις";
import {WordCard} from "../WordCard/WordCard";
import {Container} from "@mui/material";

export const CardList = () => {
	return (
		<>
			<Container maxWidth="sm">
				{
					words.map((word, index) => <WordCard key={index} front={word.en} back={word.el}/>)
				}
			</Container>
		</>
	)
}