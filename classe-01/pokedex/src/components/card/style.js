import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        height: 'auto',
        marginBottom: 20,
        marginLeft: 'auto', 
        marginRight: 'auto',
    },
    media: {
        height: 'auto',
        width: '100%'
    },
    cardHeader: {
        textAlign: 'center',
    }
}));

export default useStyles;