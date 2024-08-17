import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://gczejdgdwlfflnrgtpyg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjemVqZGdkd2xmZmxucmd0cHlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3ODk3MjEsImV4cCI6MjAzOTM2NTcyMX0.SOIx5kheJ0Ekt-aTA5PD5cpG5gnV6JPV9L19XPsofwk");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
