import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleted, setIsDeleted] = useState(false);
  const toRotate = ["Web Developer", "React Developer", "MERN Stack Developer"];
  const [text, setText] = useState("");
  const period = 1000; // Decreased the period for faster rotation
  const [delta, setDelta] = useState(150 - Math.random() * 50); // Decreased delta for faster typing

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleted
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleted) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleted && text === fullText) {
      setIsDeleted(true);
      setDelta(period);
    } else if (isDeleted && updatedText === "") {
      setIsDeleted(false);
      setLoopNum(loopNum + 1);
      setDelta(300); // Adjusted delta for a more consistent typing speed
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Minale`} <br /> <span className="wrap">{text}</span>
            </h1>
            <p>Irure consequat eu duis elit fugiat nulla.</p>
            <button className="vvd" onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
