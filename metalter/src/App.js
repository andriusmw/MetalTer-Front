import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route, Link} from "react-router-dom"
import './App.css';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/Register';
import { LoginPage } from './pages/LoginPage';
import { EntryPage } from './pages/EntryPage';
import { NotFoundPage } from './pages/NotFound';

function App() {
  return (<>
    <Header />
    <main>
       <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/register' element={<RegisterPage></RegisterPage>}></Route>
          <Route path='/login' element={<LoginPage></LoginPage>}></Route>
          <Route path='/entry/:id' element={<EntryPage></EntryPage>}></Route>
          <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
       </Routes>
    </main>
     <Footer />
     </>
  );
}

export default App;
