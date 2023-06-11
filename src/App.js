
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Ekipman from './routes/ekipman/ekipman';

import SignIn from './routes/sign-in/sign-in.component';

import { Routes, Route } from 'react-router-dom';

const Sepet = () => {
  return <h1>Sepet Sayfası</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path='ekipman' element={<Ekipman />} />
        <Route path='sepet' element={<Sepet />} />
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
