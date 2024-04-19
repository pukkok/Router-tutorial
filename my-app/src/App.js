import './App.css';
import Container from './Component/Container';
import Header from './Component/Header'
import {Route, Routes} from 'react-router-dom'
import {Work, About} from './Pages';
import { useState } from 'react';
import productData from './Data/productData'
import Product from './Pages/Product';

function App() {

  return (
    <div className="App">
      <Container maxWidth={'1500'}>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Work/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
          {productData.length>0 && productData.map((data, id)=>{
            return <Route key={id} exact path={`/${data.product}`} element={<Product item={data}/>}></Route>
          })}
        </Routes>
      </Container>

    </div>
  )
}

export default App;
