import React from "react";
import styled from "styled-components";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <ImgTextHold>
          <TextDiv>
            <Title>
              <Flip top cascade>
                <div>Get Your</div>
                <div>Laundry & Dry</div>
                <div>Cleaning Done</div>
              </Flip>
            </Title>

            <Content>
              Have you been too busy to do your own laundry?, Do you have a
              tight schedule and need to always look clean and presentable? Then
              *EXECUTIVE LAUNDRY* is your best option
            </Content>
            <ButtonHold>
              <NavLink
                to="/order"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button>Place Order</Button>
              </NavLink>
              <NavLink
                to="/pricing"
                style={{
                  textDecoration: "none",
                }}
              >
                <Button>View Prices</Button>
              </NavLink>
            </ButtonHold>
          </TextDiv>
          <Slide bottom>
            <ImageDiv>
              <img src="/image/hero.png" alt="" />
            </ImageDiv>
          </Slide>
        </ImgTextHold>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms;
  margin-bottom: 70px;
`;
const Wrapper = styled.div`
  min-height: 85vh;
  width: 95%;
  background-color: #f3f7f5;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgTextHold = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
  @media (max-width: 800px) {
    width: 95%;
    justify-content: center;
  }
`;
const ImageDiv = styled.div`
  width: 500px;
  @media (max-width: 510px) {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;
const TextDiv = styled.div`
  width: 530px;
  @media (max-width: 800px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 510px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-family: Montserrat;
  font-size: 60px;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 20px;
  @media (max-width: 510px) {
    width: 100%;
    font-size: 33px;
  }
`;
const Content = styled.div`
  width: 450px;
  font-size: 14px;
  margin-bottom: 15px;
  @media (max-width: 510px) {
    width: 100%;
    font-size: 12px;
  }
`;
const ButtonHold = styled.div`
  display: flex;
  @media (max-width: 510px) {
    justify-content: center;
  }
`;
const Button = styled.button`
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
  margin-right: 20px;
  transition: all 350ms;
  @media (max-width: 510px) {
    margin: 0 5px;
    width: 120px;
    border-radius: 2px;
  }
  cursor: pointer;
  :hover {
    transform: scale(0.94);
  }
`;
