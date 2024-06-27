import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
import logo2 from "../assets//img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import Discord from "../assets/img/discord.svg";
import git from "../assets/img/git.svg";
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 58) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo2} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onclick={() => onUpdateActiveLink("home")}
            >
              Home
            </NavLink>
            <NavLink
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onclick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </NavLink>
            <NavLink
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </NavLink>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/minale-fetene-a70134161/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Swiftminale">
                <img src={git} alt="" />
              </a>
              <a href="https://discord.com/channels/@minale2023">
                <img src={Discord} alt="" />
              </a>
              <a href="https://swiftcomputertechnologies.dorik.io/">
                <img src={logo2} alt="" />
              </a>
            </div>
            <button className="vvd" onclick={() => console.log("connect")}>
              <span>Let's connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
