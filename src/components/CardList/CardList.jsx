import {WordCard} from "../WordCard/WordCard";
import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getList} from "../../store/actions/mainActions";

export const CardList = () => {
	const {words, user} = useSelector(store => store.mainStore);
	const {id} = useParams()
	const dispatch = useDispatch()
	useEffect(() => {
		if (id && user.token) {
			dispatch(getList(user.token, id))
		}
	}, [id, user.token])
	return (
		<>
			<Container maxWidth="sm">
				{
				words.map((word, index) => <WordCard key={index} front={word.front} back={word.back}/>)
				}
			</Container>
		</>
	)
}