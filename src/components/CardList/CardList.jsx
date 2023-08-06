import {WordCard} from "../WordCard/WordCard";
import {Container} from "@mui/material";
import {useSelector} from "react-redux";

export const CardList = () => {
	const {words} = useSelector(store => store.mainStore);
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