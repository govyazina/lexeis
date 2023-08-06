import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useState} from "react";

export function WordCard({front, back}) {
    const [flipped, setFlipped] = useState(false)
    if (flipped) {
        setTimeout(() => setFlipped(false), 2000)
    }
    return (

        <Box sx={{
            minWidth: 275,
            width: 300,
            marginX: 'auto',
            marginY: 2
        }}
             onClick={() => setFlipped(true)}>
                <Card variant="outlined">
                    <CardContent
                    sx={{
                        height: 50,
                        paddingY: 5
                    }}>
                        <Typography variant="h5" component="div" textAlign={"center"}>
                            {flipped ? back : front}
                        </Typography>
                    </CardContent>
                </Card>
        </Box>
    );
}