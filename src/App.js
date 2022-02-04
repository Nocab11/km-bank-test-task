import React from 'react';
import "./App.css";
import Users from "./components/Users/Users";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <div>
            <Header />
            <Users />
            <Footer />
        </div>
    );
};

export default App;
