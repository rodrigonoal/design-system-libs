import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import useStyles from './style';

export default function Searchbox({ search, setSearch, handleFindPokemon }) {
    const classes = useStyles();


    async function handleSubmit(e) {
        e.preventDefault();

        handleFindPokemon()
        
        setSearch('')
    }

    return (
        <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <TextField
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="outlined-basic"
                label="Search new Pokemon"
                variant="outlined" />
            <Button
                className={classes.button}
                type="submit"
                variant="contained"
                color="secondary">
                Search
                </Button>
        </form>
    );
}