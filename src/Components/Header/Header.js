import React, { useState } from "react";
import styled from "styled-components";
import { RiHomeSmileFill } from "react-icons/ri";
import { IoMdPricetags, IoMdContact } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { GiCancel } from "react-icons/gi";
import SideBar from "./SideBar";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleChange = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Logo>
            <img src="/logo.png" alt="Logo" />
          </Logo>
          <Navigations>
            <Navs>
              <RiHomeSmileFill />
              <span>Home</span>
            </Navs>
            <Navs>
              <IoMdPricetags />
              <span>Price List</span>
            </Navs>
            <Navs>
              <IoMdContact />
              <span>Contact</span>
            </Navs>
            <Navs>
              <button>
                {" "}
                <HiShoppingCart /> Place Order
              </button>
            </Navs>
          </Navigations>
          <Side>
            {toggle ? (
              <GiCancel onClick={toggleChange} size="25px" />
            ) : (
              <CgSmartHomeWashMachine onClick={toggleChange} size="25px" />
            )}
          </Side>
        </Wrapper>
      </Container>
      {toggle ? <SideBar setToggle={setToggle} toggle={toggle} /> : null}
    </>
  );
};

export default Header;
const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 510px) {
    height: 65px;
  }
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.div`
  width: 60px;
  img {
    width: 100%;
  }
  @media (max-width: 510px) {
    width: 45px;
  }
`;
const Navigations = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Navs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  cursor: pointer;
  font-size: 14px;
  /* #F3F7F5
  #F3F7F5 */
  span {
    margin-left: 3px;
    font-weight: 600;
  }
  button {
    padding: 7px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: poppins;
    background-color: #087cc5;
    border: none;
    outline: none;
    color: #fff;
    font-weight: 600;
    border-radius: 30px;
  }
`;

const Side = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
