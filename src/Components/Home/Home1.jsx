import React from "react";
import styled from "styled-components";
import { BsBasket2Fill, BsFillPhoneFill } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";

const Home1 = () => {
  return (
    <Container>
      <Wrapper>
        <Title>How We Work</Title>
        <SubTitle>Easy As One, Two, Three 😏</SubTitle>
        <CardHold>
          <Card>
            <InCard>
              <IconDiv style={{ backgroundColor: "#dbdaf4", color: "#7c4fcf" }}>
                <BsFillPhoneFill />
              </IconDiv>
              <CardTitle>Place Order</CardTitle>
              <CardContent>
                Choose when and where you wish us to collect & deliver your
                laundry.
              </CardContent>
            </InCard>
          </Card>

          <Card>
            <InCard>
              <IconDiv style={{ backgroundColor: "#FCD4DC", color: "#EE2A52" }}>
                <BsBasket2Fill />
              </IconDiv>
              <CardTitle>We Collect</CardTitle>
              <CardContent>
                We come pick up your clothes from your aborde and take it to our
                laundry hub
              </CardContent>
            </InCard>
          </Card>

          <Card>
            <InCard>
              <IconDiv
                style={{ backgroundColor: "#087dc54a", color: "#087CC5" }}
              >
                <GiWashingMachine />
              </IconDiv>
              <CardTitle>We Clean</CardTitle>
              <CardContent>
                We list and clean your items according to your requirements.
              </CardContent>
            </InCard>
          </Card>

          <Card>
            <InCard>
              <IconDiv style={{ backgroundColor: "#FEF0D9", color: "#FCC101" }}>
                <TbTruckDelivery />
              </IconDiv>
              <CardTitle>We Deliver</CardTitle>
              <CardContent>
                We deliver your items cleaned as quick as you want and at the
                time required.
              </CardContent>
            </InCard>
          </Card>
        </CardHold>
      </Wrapper>
    </Container>
  );
};

export default Home1;

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
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 900;
  font-family: nunito;
`;
const SubTitle = styled.div`
  font-size: 13px;
  margin-bottom: 30px;
`;
const CardHold = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Card = styled.div`
  height: 200px;
  width: 230px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  /* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;
const InCard = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
`;
const IconDiv = styled.div`
  height: 50px;
  width: 50px;
  /* background-color: #dbdaf4;
  color: #7c4fcf; */
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 20px;
`;
const CardTitle = styled.div`
  font-family: Montserrat;
  font-weight: 800;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  font-size: 13px;
`;
