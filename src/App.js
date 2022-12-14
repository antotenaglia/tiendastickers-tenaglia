import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartProvider';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <NavBar />
                    </header>
                    <Routes>
                        <Route path='/' element= {<ItemListContainer/>}/>
                        <Route path='/allCategories' element= {<ItemListContainer/>}/>
                        <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
                        <Route path='item/:id' element= {<ItemDetailContainer/>}/>
                        <Route path='/cart' element= {<Cart/>}/>
                        <Route path='/logIn' element= {<Login/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;

