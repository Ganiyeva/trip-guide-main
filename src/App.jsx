import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "styled-components";
import Home from './pages/Home';
import { Suspense, useState } from 'react';
import { DarkTheme, LightTheme } from "./styled";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HotelList from "./pages/HotelList";
import Details from "./pages/Details";
import Payment from "./pages/Payment";
import Subscribe from "./components/Subscribe";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const AppContent = styled.div`
  background-color: ${(props) => props.theme.bodyBg};
`;

const App = () => {

  const [theme, toggleTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <AppContent className="App">
          <BrowserRouter>
            <Suspense fallback='loading'>
              <ScrollToTop />
              <Header />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/hotellist' element={<HotelList />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/payment/:id' element={<Payment />} />
                <Route path='/success/:id' element={<Success />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              <Subscribe />
              <Footer />
            </Suspense>
          </BrowserRouter>
        </AppContent>
      </ThemeProvider>
    </ThemeContext.Provider>

  );
}

export default App;