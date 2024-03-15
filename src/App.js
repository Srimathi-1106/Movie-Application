import AddMovie from './AddMovie';
import Login from './Login';
import Register from './Register';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Portal from './Portal';
import Home from './Home';
import NotFound from './NotFound';
import MovieList from './MovieList';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Counter from './Tasks/Counter';
import MovieDetail from './MovieDetail';
import EditMovie from './EditMovie';

function App() {

  const [mode,setMode]=useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode:mode,
    },
  });

  return (
    <div >
      <ThemeProvider theme={darkTheme}>
        <Paper style={{minHeight:"100vh", borderRadius:"0%"}} elevation={9}>
          <Routes>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/portal" element={<Portal mode={mode} setMode={setMode}/>}>
              <Route path="home" element={<Home/>}/>
              <Route path="addmovie" element={<AddMovie/>}/>
              <Route path="movielist" element={<MovieList/>}/>
              <Route path="edit/:id" element={<EditMovie/>}/>
              <Route path="view/:id" element={<MovieDetail/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
