import { useColorMode, Button } from '@chakra-ui/react'


function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <div>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
