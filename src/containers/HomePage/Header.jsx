import React from 'react'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

const styles = {
  header: {
    display: 'flex',
  },
  buttonPosition: {
    textAlign: 'right',
  },
  button: {
    border: '1px solid gray'
  },
};


const Header = () => {


  return (
    <div>
      <h1> Learn FrontEnd</h1>
      <div style={styles.buttonPosition}>
        <Link to={'/'}>
          <Button style={styles.button}>
            Back To Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
