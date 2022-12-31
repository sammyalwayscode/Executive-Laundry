import React, { useState } from "react";
import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import Swal from "sweetalert2";
import LoadState from "../LoadState/LoadState";

const Order = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleForm = yup.object().shape({
    name: yup.string().required("Your name is Required"),
    email: yup.string().required("This Field is Required"),
    mobileNo: yup.string().required("This Field is Required"),
    address: yup.string().required("Please enter Your Address"),
    pickUp: yup.string().required("This Field is Required"),
    delivery: yup.string().required("This Field is Required"),
    description: yup.string(),
    instruction: yup.string(),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(handleForm) });

  const onSubmmit = handleSubmit(async (value) => {
    console.log(value);
    const {
      name,
      email,
      mobileNo,
      address,
      pickUp,
      delivery,
      description,
      instruction,
    } = value;
    const URL = "https://executive-laundry.onrender.com/api/newOrder";
    setLoading(true);
    await axios
      .post(URL, {
        name,
        email,
        mobileNo,
        address,
        pickUp,
        delivery,
        description,
        instruction,
      })
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Great 👏",
          text: "Order Has Been Sent Sucessfully",
          showConfirmButton: false,
          timer: 2500,
        }).then(() => {
          navigate("/order_sent");
        });
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          title: error.response.data.message,
          text: `Please Check and Fix this ERROR`,
          icon: "error",
          showConfirmButton: false,
          timer: 3500,
        });
        setLoading(false);
      });
  });

  return (
    <Container>
      {loading ? <LoadState /> : null}
      <Wrapper>
        <InputPart>
          <IconTop
            onClick={() => {
              navigate(-1);
            }}
          >
            <FiArrowLeftCircle />
          </IconTop>
          <SignInputHold>
            <SignTitle>Place Your Order</SignTitle>
            <SignSubTitle>
              We'll be there in no time to pick up your laundry
            </SignSubTitle>
            <InputForm onSubmit={onSubmmit}>
              <InputDiv placeholder="Your Name" {...register("name")} />
              <Error>{errors.name?.message}</Error>
              <InputDiv
                placeholder="Email Address"
                type="email"
                {...register("email")}
              />
              <Error>{errors.email?.message}</Error>
              <InputDiv placeholder="Mobile No" {...register("mobileNo")} />
              <Error>{errors.mobileNo?.message}</Error>
              <InputDiv placeholder="Street Address" {...register("address")} />
              <Error>{errors.address?.message}</Error>
              <small>Pick Up Date</small>
              <InputDiv
                placeholder="Pick Up Date"
                type="date"
                {...register("pickUp")}
              />
              <Error>{errors.pickUp?.message}</Error>
              <small>Delivery Date</small>
              <InputDiv
                placeholder="Delivery Date"
                type="date"
                {...register("delivery")}
              />
              <Error>{errors.delivery?.message}</Error>
              <small>Description</small>
              <InputDiv
                placeholder=" e.g: Shirt - 10, Jean - 10"
                {...register("description")}
              />
              <Error>{errors.description?.message}</Error>
              <small>Special Instruction</small>
              <InputDiv
                placeholder="e.g: Wash without deodarant"
                {...register("instruction")}
              />
              <Error>{errors.instruction?.message}</Error>
              <InputButton type="submit">Place Request</InputButton>
            </InputForm>
          </SignInputHold>
        </InputPart>
      </Wrapper>
    </Container>
  );
};

export default Order;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  background-color: #fff;
`;
const Wrapper = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const InputPart = styled.div``;
// const IconTop = styled(NavLink)`
const IconTop = styled.div`
  font-size: 30px;
  text-decoration: none;
  /* color: ${(props) => props.theme.textColor}; */
`;
const SignInputHold = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const SignTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  /* color: ${(props) => props.theme.textColor}; */
`;
const SignSubTitle = styled.div`
  font-size: 12px;
  color: #77838f;
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  small {
    font-size: 10px;
    font-weight: 600;
  }
`;
const InputDiv = styled.input`
  height: 45px;
  width: 280px;
  margin: 10px 0 0 0;
  border: none;
  outline: none;
  border-radius: 5px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 13px;
  padding-left: 20px;

  background-color: #087dc542;
  ::placeholder {
    font-family: Montserrat;
    font-weight: 700;
    font-size: 13px;
    /* color: #377dff; */
    color: #000;
    /* padding-left: 10px; */
  }
`;
const InputButton = styled.button`
  height: 40px;
  border: none;
  outline: none;
  font-family: Montserrat;
  font-weight: 700;
  color: #fff;
  /* background-color: #377dff; */
  background-color: #000;
  border-radius: 3px;
  margin-top: 10px;
`;

const Error = styled.div`
  font-size: 10px;
  color: red;
  margin-bottom: 10px;
`;
