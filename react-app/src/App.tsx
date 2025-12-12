import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [clicked, setClicked] = useState(false);
  const handleOnClick = () => {
    setClicked(true);
  };
  return (
    <>
      <Button onClick={handleOnClick}>Primary</Button>
      {clicked && (
        <Alert>
          <div
            className='alert alert-primary alert-dismissible fade show'
            role='alert'
          >
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
            <button
              onClick={() => setClicked(false)}
              type='button'
              className='btn-close'
              data-bs-dismiss='alert'
              aria-label='Close'
            ></button>
          </div>
        </Alert>
      )}
    </>
  );
}

export default App;
