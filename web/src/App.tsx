import styles from './App.module.scss';
//
import React from 'react';
import LoggedInLayout from "./components/LoggedInLayout";
import LoggedOutLayout from "./components/LoggedOutLayout";

function App() {
  const isLoggedIn = localStorage.getItem('loggedin');
  return (
    <div className={styles["App"]}>
        {isLoggedIn ? <LoggedInLayout /> : <LoggedOutLayout/>}
    </div>
  );
}

export default App;
