import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <AbtBag>
          <Logo>Executive Laundry</Logo>
          <Text>
            EXECUTIVE LAUNDRY is a seasoned and experienced laundry service
            brand with expertise in dry-cleaning and laundry, amendment, ironing
            and stain removal services.
          </Text>
          <button>Get Started</button>
        </AbtBag>
        <OtherNav>
          <Holder>
            <Title>Menu</Title>
            <span>Home</span>
            <span>Price List</span>
            <span>Contact</span>
          </Holder>
          <Holder>
            <Title>Help</Title>
            <span>FAQ</span>
            <span>Privacy Policy</span>
            <span>Terms and Condition</span>
          </Holder>
          <Holder>
            <Title>Socials</Title>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
            <span>Whatapp</span>
          </Holder>
        </OtherNav>
      </Wrapper>
      <small>Developed by Olorunda Samuel.09032676595</small>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 50vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  flex-direction: column;
  font-family: montserrat;
  small {
    font-size: 8px;
    margin-bottom: 10px;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
const AbtBag = styled.div`
  margin-bottom: 10px;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 30px;
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
const Logo = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 10px;
`;
const Text = styled.div`
  width: 250px;
  font-size: 12px;
  margin-bottom: 15px;
`;
const OtherNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    justify-content: center;
    flex-direction: column;
  }
`;
const Holder = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  font-size: 15px;

  @media (max-width: 500px) {
    align-items: center;
    margin-bottom: 20px;
  }

  span {
    margin: 10px 0;
    font-weight: lighter;
  }
`;
const Title = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
`;
