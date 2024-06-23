import Menu from './components/Menu';
import SearchBar from './components/SearchBar';
import Wrapper from './components/Wrapper';

function App() {
    return (
        <div className="App">
            <Wrapper>
                <Menu />
            </Wrapper>
            <Wrapper>
                <SearchBar />
            </Wrapper>
            <h1>React App</h1>
        </div>
    );
}

export default App;
