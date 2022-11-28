import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

const Home3 = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          <small>Elites</small>
          <Title>Worry Not About Your Fabrics</Title>
          <Content>
            <p>
              We handle the most delicate of fabrics as we take into
              consideration the material or fabric involved and follow their
              specific care label instructions if they have any.
            </p>
            <p>
              We handle every fabric including a leather jacket, suede shirt,
              ankara wears, senators, suits, formal shirts and female wears too
            </p>
          </Content>
          <Visit>
            <span>Check our pricing list </span>
            <HiArrowNarrowRight size="20px" />
          </Visit>
        </Text>
        <Zoom left>
          <Image>
            <img src="/image/homm.gif" alt="" />
          </Image>
        </Zoom>
      </Wrapper>
    </Container>
  );
};

export default Home3;

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
    flex-direction: column-reverse;
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
    color: #15c381;
    font-weight: 700;
  }
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: 900;
  font-family: Montserrat;
`;
const Content = styled.div``;

const Visit = styled.div`
  display: flex;
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
