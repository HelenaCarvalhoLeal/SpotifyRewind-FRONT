import $ from "jquery";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import './stylesp1.css';

function App() {

  // const [userdata, getuserdata] = useState({});

  const urlParams = window.localStorage.getItem("code");
  useEffect(() => {
    if (urlParams != null) {
      axios.get("http://localhost:3000/spotData", {
        params: {
          code: urlParams
        }
      }).then(response => {
        console.log(response.data);
        $(".App").html(`<p>${JSON.stringify(response.data)}</p>`);
      });
      window.localStorage.removeItem("code");
    } else {
      // $(".App").html(`<button>Fazer login</button>`);
      $(".background-image").html(`<button class="round-button">Login to Spotify</button>`);
      $(".round-button").on("click", async () => {
        var login = await axios.get("http://localhost:3000/login");
        window.location.href = login.data;
      });
    }
  });

  return (
    <div className="App">
      <div className="background-image">
        
      </div>
    </div>
  );
}

export default App;
