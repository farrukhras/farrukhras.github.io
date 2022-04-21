import React from "react";
import { StyledButton } from "../styles/Button.styled";
import {Name, StyledButtonsContainer, StyledHome, Title, Line, Greeting, Social, Socials, Quote, MyImage} from "../styles/Home.styled";
import "./style.css";
import projectIcon from "../../assets/icons/project-icon.svg";
import aboutIcon from "../../assets/icons/about-me.svg";
import { IconContext } from "react-icons";
import { GrLinkedinOption } from "react-icons/gr";
import { GoMarkGithub } from "react-icons/go";
import { FaEnvelope } from "react-icons/fa";
import me from '../../assets/me.jpg';


function Home () {

  let today = new Date(),
  hour = today.getHours();
  
  return (
    <IconContext.Provider value={{ size: "1rem" }}>
      <StyledHome id="home">
        <Name>Farrukh Rasool</Name>
        <Title>Software Engineer</Title>
        <p>
          I create responsive websites.
        </p>
        <StyledButtonsContainer>
          <StyledButton icon={projectIcon} to="projects" smooth={true} duration={0} delay={0} spy={true} spyThrottle={0} exact="true" offset={-50}>
            <span>Projects</span>
          </StyledButton>
          <StyledButton icon={aboutIcon} secondary="true" content="B" to="about" smooth={true} duration={0} delay={0} spy={true} spyThrottle={0} exact="true" offset={-50}>
            <span>About me</span>
          </StyledButton>
        </StyledButtonsContainer>
        <Line />
        <Greeting>
          Hope you are having a great
          <span>
            {hour < 12 ? " morning" : hour < 18 ? " afternoon" : " evening"}
          </span>.
        </Greeting>
        {/* Social media links */}
        <Socials>
          <Social href="mailto:farrukhrasool112@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </Social>
          <Social href="https://github.com/farrukhras" target="_blank" rel="noopener noreferrer">
            <GoMarkGithub />
          </Social>
          <Social href="https://www.linkedin.com/in/farrukh-rasool/" target="_blank" rel="noopener noreferrer">
            <GrLinkedinOption />
          </Social>
        </Socials>
        {/* <MyImage>
          <img width="300px" height="350px" src={me} alt="me" />
        </MyImage> */}
        <Quote>Never stop learning, because life never stops teaching.</Quote>
      </StyledHome>
    </IconContext.Provider>
  );
};

export default Home;
