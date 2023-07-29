import React from 'react';
import ReactDOM from 'react-dom/client';
import './variables.scss';
import './index.scss';
import './assets/font/font.scss'
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/index';
import Contact from './pages/contact/contact';
import BlogPage from './pages/[name]/[name]';
import Resume from './pages/resume/resume';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
      
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/resume' element={<Resume />}></Route>
          <Route path='*' element={<BlogPage />}></Route>
        </Routes>

        <Footer />

      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
