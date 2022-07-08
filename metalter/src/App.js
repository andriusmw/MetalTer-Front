import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route, Link} from "react-router-dom"
import './App.css';

function App() {
  return (<>
    <Header />
    <main>
       <Routes>
          <Route path='/' element={<p>Estamos en la home</p>}></Route>
          <Route path='/register' element={<p>Formulario de registro</p>}></Route>
          <Route path='/login' element={<p>Formulario de Login</p>}></Route>
       </Routes>
    </main>
     <Footer />
     </>
  );
}

export default App;
