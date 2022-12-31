import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import Zoom from "react-reveal/Zoom";
import { NavLink } from "react-router-dom";

const Home2 = () => {
  return (
    <Container>
      <Wrapper>
        <Zoom left>
          <Image>
            <img src="/image/hom.gif" alt="" />
          </Image>
        </Zoom>

        <Text>
          <small>About Us</small>
          <Title>We Give The Best Of Services</Title>
          <Content>
            <p>
              EXECUTIVE LAUNDRYis a seasoned and experienced laundry service
              brand with expertise in dry-cleaning and laundry, amendment,
              ironing and stain removal services.
            </p>
            <p>
              At *EXECUTIVE LAUNDRY* we offer an extremely high level of
              professionalism in our services with affordable prices also in a
              way that suits you and your routine. Do give us a Try today...
            </p>
          </Content>
          <Visit to="/contact">
            <span>Check us out today </span>
            <HiArrowNarrowRight size="20px" />
          </Visit>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Home2;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    justify-content: center;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const Image = styled.div`
  height: 350px;
  width: 500px;
  margin-bottom: 20px;
  @media (max-width: 500px) {
    width: 100%;
    height: 300px;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
    object-fit: cover;
  }
`;
const Text = styled.div`
  width: 500px;
  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
  small {
    font-size: 11px;
    color: #fcc101;
    font-weight: 700;
  }
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 900;
  font-family: Montserrat;
`;
const Content = styled.div``;
const Visit = styled(NavLink)`
  display: flex;
  text-decoration: none;

  align-items: center;
  font-size: 13px;
  font-weight: 700;
  margin-top: 40px;
  cursor: pointer;
  color: #409efb;
  span {
    margin-right: 20px;
  }
  @media (max-width: 500px) {
    justify-content: center;
  }
`;
