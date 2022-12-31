import React from "react";
import styled from "styled-components";

const Home4 = () => {
  const data = [
    {
      id: 1,
      img: "/image/dry.png",
      product: "Dry Cleaning",
    },
    {
      id: 2,
      img: "/image/lun.jpg",
      product: "Laundry",
    },
    {
      id: 3,
      img: "/image/ame.png",
      product: "Alterations & Repairs",
    },
    {
      id: 4,
      img: "/image/iro.jpeg",
      product: "Ironing",
    },
    {
      id: 5,
      img: "/image/sta.jpg",
      product: "Stain Removal",
    },
    {
      id: 6,
      img: "/image/jac.jpg",
      product: "Leather Jackets",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Title>Our Exclusive Services</Title>
        <Sub>Try out our exclusive services today</Sub>

        <CardHold>
          {data.map((props) => (
            <Card key={props.id}>
              <ImgDiv>
                {" "}
                <img src={props.img} alt="" />{" "}
              </ImgDiv>
              <ImgTitle> {props.product} </ImgTitle>
            </Card>
          ))}
        </CardHold>
      </Wrapper>
    </Container>
  );
};

export default Home4;

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
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  @media (max-width: 500px) {
    width: 95%;
  }
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-family: nunito;
  text-align: center;
`;
const Sub = styled.div`
  font-size: 13px;
  margin-bottom: 20px;
`;
const CardHold = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  margin: 10px;
  @media (max-width: 500px) {
    margin: 10px 0;
  }
`;
const ImgDiv = styled.div`
  height: 200px;
  width: 300px;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImgTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;
