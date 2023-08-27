import {WordCard} from "../WordCard/WordCard";
import {Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getList} from "../../store/actions/mainActions";

export const CardList = () => {
	const {words, user, currentList} = useSelector(store => store.mainStore);
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
					user.token
						? currentList.map(item => <WordCard key={item.id} front={item.front} back={item.back}/>)
						: words.map((word, index) => <WordCard key={index} front={word.en} back={word.el}/>)
				}
			</Container>
		</>
	)
}