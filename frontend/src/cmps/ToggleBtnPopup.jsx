import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

export const ToggleBtnPopup = ({ fact, listProps }) => {
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
    listProps.onToggleFact(fact)
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const classes = useStyles();

  return (
    <div>
      <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })} size="small" variant="outlined" color='primary'>{listProps.btnContent}</Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={listProps.msg}
        key={vertical + horizontal}
        autoHideDuration={3000}
        action={
          <>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </>}
      />
    </div>
  );
}
