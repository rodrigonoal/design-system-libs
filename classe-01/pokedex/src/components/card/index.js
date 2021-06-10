import React from 'react';
import useStyles from './style'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


export default function Bigcard({ pokemon }) {
    const { name, image, abilities } = pokemon
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardHeader
                title={name}
                className={classes.cardHeader}

            />
            <CardMedia
                component="img"
                className={classes.media}
                image={image}
                title={name}
            />
            <CardContent>
                <Typography variant="h6">
                    Habilidades
                    </Typography>
                {abilities && abilities.map(item => (
                    <Typography
                        variant='body'
                        key={item.ability.name}>
                        {item.ability.name}
                        <br/>
                    </Typography>
                ))}
            </CardContent>
        </Card>
    );
}