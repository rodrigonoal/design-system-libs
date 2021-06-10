import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        backgroundColor: 'black',
    },

    title: {
        flexGrow: 1,
        textAlign: 'center',

    }
}));

export default useStyles;