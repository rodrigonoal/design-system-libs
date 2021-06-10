import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 300,
    height: 100,
    marginLeft: 'auto', 
    marginRight: 'auto',
  },
  button: {
    width: 'auto',
    marginTop: 10
  }
  ,
}));

export default useStyles;