import logo from './logo.svg';
import './App.css';
import Addbooks from './components/Addbooks';
import Searchbooks from './components/Searchbooks';
import DeleteBooks from './components/DeleteBooks';
import Viewbooks from './components/Viewbooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Addbooks/> } />
      <Route path="/search" element={ <Searchbooks/> } />
      <Route path="/delete" element={ <DeleteBooks/> } />
      <Route path="/view" element={ <Viewbooks/> } />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
