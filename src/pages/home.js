import React from "react";
import axios from "axios";
import "../css/style.css";
import "../css/reset.min.css";
import "../css/default.css";
import logo from "../img/Logo512.png";
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
  CardBody,
} from "react-bootstrap";
import { useState } from "react";

export function Home() {
  async function login() {
    var login = await axios.get("http://35.198.38.38:3000/login");
    window.location.href = login.data;
  }
  const [searchInput, setSearchInput] = useState("");
  const [albums, setAlbums] = useState([]);

  // Search
  async function search() {
    if (searchInput !== '') {
      axios.get("http://35.198.38.38:3000/search", {
        params: {
          searchInput: searchInput
        }
      }).then((result) => {
        console.log(result.status);
        if (result.status === 200) {
          setAlbums(result.data);
        }
      });
    }
    // mostrar os albums
  }
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
      </header>

      <main className="main">
        <div className="sub-main">
          <div className="App">
            <Container>
              <InputGroup className="mb-2" size="lg">
                <FormControl
                  placeholder="Search For Artist"
                  type="input"
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      search();
                    }
                  }}
                  onChange={(event) => setSearchInput(event.target.value)}
                />
                <Button onClick={search}>Search</Button>
              </InputGroup>
            </Container>
            <Container style={{ height: "60vh", overflow: "auto" }}>
              <Row className="mx-2 row row-cols-2">
                {albums.map((album, i) => {//mudei height do scroll interno para 40
                  return (
                    <Card>
                      <Card.Img src={album.images[0].url} />

                      <CardBody>
                        <Card.Title>{album.name}</Card.Title>
                      </CardBody>
                    </Card>
                  );
                })}
              </Row>
            </Container>
          </div>
          <div className="background-image">
            <button className="round-button" onClick={login}>
              Login to Spotify
            </button>
          </div>
        </div>
      </main>

      <footer className="footer">
        <address>
          &copy; SpotifyRewind 2023 -{" "}
          <a
            href="https://github.com/LenorSantos/spotify-frontend.git"
            rel="noreferrer"
            target="_blank"
          >
            Projeto front-end UNIT
          </a>
        </address>
      </footer> 
    </div>
  );
}
