import React, {useEffect, useState} from 'react';
import {Button, Container} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {WordCard} from "../WordCard/WordCard";
import Box from "@mui/material/Box";
import {shuffleWordsAC} from "../../store/actions/mainActions";

function RandomWordCard() {
  const [index, setIndex] = useState(0)
  const dispatch = useDispatch()
  const {words, shuffledWords} = useSelector(store => store.mainStore)
  useEffect(()=> {
    dispatch(shuffleWordsAC())
  }, [words])
  if (!shuffledWords[0]) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <Container maxWidth="sm">
      <WordCard key={index} front={shuffledWords[index].en} back={shuffledWords[index].el}/>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>

      <Button variant="contained"
              onClick={() => setIndex((i) => i >= shuffledWords.length - 1 ? 0 : i + 1)}>Next</Button>
    </Box>
    </Container>

  );
}

export default RandomWordCard;