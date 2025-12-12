import Button from './components/Button';

function App() {
  const handleOnClick = () => {
    console.log('Clicked');
  };
  return (
    <>
      <Button onClick={handleOnClick}>Primary</Button>
      <Button color='secondary' onClick={handleOnClick}>
        Secondary
      </Button>
      <Button color='danger' onClick={handleOnClick}>
        Danger
      </Button>
    </>
  );
}

export default App;
