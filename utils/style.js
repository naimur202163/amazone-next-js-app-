import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#203040',
  },
  '& a': { color: '#fff', marginLeft: 10 },
});

export default useStyles;
