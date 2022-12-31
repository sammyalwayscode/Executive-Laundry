import React from "react";
import styled from "styled-components";
import { GiLoincloth, GiWashingMachine } from "react-icons/gi";
import { FaHandsWash } from "react-icons/fa";
import { MdIron } from "react-icons/md";

const Pricing = () => {
  const lundryPrice = [
    {
      id: 1,
      wears: "Shirt",
      tot: 200,
      wsh: 100,
      Irn: 100,
      bg: "#087cc5",
    },
    {
      id: 2,
      wears: "Trouser",
      tot: 200,
      wsh: 100,
      Irn: 100,
      bg: "#e63946",
    },
    {
      id: 3,
      wears: "Skirt",
      tot: 200,
      wsh: 100,
      Irn: 100,
      bg: "#219ebc",
    },
    {
      id: 4,
      wears: "Blouse",
      tot: 200,
      wsh: 100,
      Irn: 100,
      bg: "#000000",
    },
    {
      id: 5,
      wears: "Gown",
      tot: 400,
      wsh: 200,
      Irn: 200,
      bg: "#264653",
    },
    {
      id: 6,
      wears: "Jean Trouser",
      tot: 250,
      wsh: 250,
      Irn: 100,
      bg: "#432818",
    },
    {
      id: 7,
      wears: "Jean Jacket",
      tot: 250,
      wsh: 250,
      Irn: 100,
      bg: "#ae2012",
    },
    {
      id: 8,
      wears: "Joggers",
      tot: 200,
      wsh: null,
      Irn: null,
      bg: "#ffbf69",
    },
    {
      id: 9,
      wears: "Vests, Round Necks",
      tot: 100,
      wsh: null,
      Irn: null,
      bg: "#40916c",
    },
    {
      id: 10,
      wears: "Shorts",
      tot: 100,
      wsh: null,
      Irn: null,
      bg: "#0a1128",
    },
    {
      id: 11,
      wears: "Native",
      tot: 400,
      wsh: 200,
      Irn: 200,
      bg: "#5e6472",
    },
    {
      id: 12,
      wears: "Iro & Buba",
      tot: 400,
      wsh: 200,
      Irn: 200,
      bg: "#8f2d56",
    },
    {
      id: 13,
      wears: "Agbada (Complete)",
      tot: 800,
      wsh: 500,
      Irn: 400,
      bg: "#218380",
    },
    {
      id: 14,
      wears: "Agbada (Top)",
      tot: 400,
      wsh: 300,
      Irn: 250,
      bg: "#7cb518",
    },
    {
      id: 15,
      wears: "Suit (Complete)",
      tot: 800,
      wsh: 500,
      Irn: 400,
      bg: "#220901",
    },
    {
      id: 16,
      wears: "Blazer",
      tot: 400,
      wsh: 300,
      Irn: 200,
      bg: "#5b8e7d",
    },
    {
      id: 17,
      wears: "Bead Spread (Small)",
      tot: 400,
      wsh: null,
      Irn: null,
      bg: "#bc3908",
    },
    {
      id: 18,
      wears: "Bead Spread (Big)",
      tot: 500,
      wsh: null,
      Irn: null,
      bg: "#f4a259",
    },
    {
      id: 19,
      wears: "Duvet",
      tot: 1500,
      wsh: null,
      Irn: null,
      bg: "#34252f",
    },
    {
      id: 20,
      wears: "Cap",
      tot: 100,
      wsh: null,
      Irn: null,
      bg: "#10451d",
    },
  ];
  return (
    <Container>
      <Wrapper>
        <Title>Excutive Laundry Price List</Title>
        <small
          style={{
            fontSize: "9.5px",
          }}
        >
          <strong>TL:</strong> Total Laundry = <strong>WA:</strong>Washing Alone
          + <strong>IA:</strong>Ironing Alone
        </small>
        <small>Price List (Per One)</small>
        <PriceCard>
          {lundryPrice?.map((props) => (
            <Card key={props.id}>
              <ImgHold
                style={{
                  backgroundColor: `${props.bg}`,
                }}
              >
                {" "}
                {props.wears}{" "}
              </ImgHold>
              <PriceHold>
                <TopA>
                  <span>
                    {" "}
                    {/* <IconHold
                      style={{
                        backgroundColor: "#ffb703",
                      }}
                    >
                      <GiWashingMachine />
                    </IconHold> */}
                    <strong>Total Laundry: </strong> ₦{props.tot}
                  </span>
                </TopA>
                <Top>
                  <span>
                    {" "}
                    <IconHold
                      style={{
                        backgroundColor: "#fb8500",
                      }}
                    >
                      <FaHandsWash />
                    </IconHold>
                    <strong>Washing:</strong> ₦{props.wsh}
                  </span>
                  <span>
                    {" "}
                    <IconHold
                      style={{
                        backgroundColor: "#023047",
                      }}
                    >
                      <MdIron />
                    </IconHold>
                    <strong>Ironing:</strong> ₦{props.Irn}
                  </span>
                </Top>
              </PriceHold>
            </Card>
          ))}
        </PriceCard>
      </Wrapper>
    </Container>
  );
};

export default Pricing;

const IconHold = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  margin-right: 5px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-family: Montserrat; */
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 24px;
    font-family: Montserrat;
  }
`;
const PriceCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  width: 300px;
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
  }
`;
const ImgHold = styled.div`
  height: 40px;
  width: 100%;
  background-color: #087cc5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 800;
  color: #fff;
`;
const PriceHold = styled.div``;
const Top = styled.div`
  width: 270px;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  span {
    display: flex;
    align-items: center;
    margin: 10px;
  }
`;

const TopA = styled.div`
  width: 270px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  span {
    display: flex;
    align-items: center;
    margin: 10px;
  }
`;
