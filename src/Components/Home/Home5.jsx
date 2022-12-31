import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home5 = () => {
  return (
    <Container>
      <Wrapper>
        <Title>We Pick Up And We Deliver</Title>
        <NavLink
          to="/pricing"
          style={{
            textDecoration: "none",
          }}
        >
          <button>Get Started</button>
        </NavLink>
        <img src="/image/van.jpg" alt="" />
      </Wrapper>
    </Container>
  );
};

export default Home5;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: 90%;
  }
  img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    @media (max-width: 500px) {
      height: 350px;
    }
  }
  button {
    height: 30px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: poppins;
    background-color: #087cc5;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 600;
    border-radius: 4px;
    transition: all 350ms;
    margin: 10px 0;
    cursor: pointer;
    :hover {
      transform: scale(0.94);
    }
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-family: nunito;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 24px;
  }
`;
