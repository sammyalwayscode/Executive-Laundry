import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Thanks = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Icon>
            <img src="/image/celebration.jpg" alt="" />
          </Icon>

          <Title>Order Recived</Title>

          <Message>
            Thanks for placing an order, Your Order has been Recived 🤝 A mail
            has been sent to you to justify this and we'll pick up your laundry
            as soon as we can. Thanks for choosing us
          </Message>

          <NavLink
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <button>Back Home</button>
          </NavLink>
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Thanks;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
const Wrapper = styled.div`
  width: 500px;
  background-color: #caf0f8;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

const Hold = styled.div`
  text-align: center;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  }
`;

const Icon = styled.div`
  img {
    width: 170px;
  }
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 10px;
`;
const Message = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;
