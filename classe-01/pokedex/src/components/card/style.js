import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        height: 'auto',
        marginBottom: 20,
        marginLeft: 'auto', 
        marginRight: 'auto',
        padding: 10,
    },
    media: {
        maxHeight: 'auto',
        width: '100%'
    },
    cardHeader: {
        textAlign: 'center',
    }
}));

export default useStyles;