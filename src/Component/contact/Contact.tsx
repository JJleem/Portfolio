import React from "react";
import {
  ItemContainer,
  ItemSection,
  Profile,
} from "../../pages/collection/StyleCollection";

import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Button,
  Container,
  Email,
  Form,
  FormWrapper,
  InnerWrapper,
  Message,
  Modal,
  ModalContent,
  Name,
  NameEmail,
  ProfileContact,
  Textarea,
  Title,
} from "./StyleContact";
import Btn from "../btn/Btn";
import theme from "../../assets/theme/theme";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const onSubmit = (data: any) => {
    emailjs
      .send("service_xgxiu7c", "template_mv05zju", data, "XCg3WmVZKOgjpDgTw")
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          reset();
          setShowThankYouModal(true);
        },
        (error) => {
          console.log("Email failed to send", error.text);
        }
      );
  };
  return (
    <ItemContainer>
      <ItemSection>
        <Container>
          <FormWrapper>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Title>
                Contact <span>with MOLT</span>
              </Title>
              <ProfileContact></ProfileContact>
              <InnerWrapper>
                <Name errors={errors.name}>
                  <label htmlFor="name">
                    <span></span>Name:
                  </label>
                  <NameEmail
                    type="text"
                    id="name"
                    placeholder="당신의 이름을 입력해주세요!"
                    {...register("name", { required: true })}
                  />
                  {errors.name && <span>이름을 입력해주세요!</span>}
                </Name>
                <Email errors={errors.email}>
                  <label htmlFor="email">
                    <span></span>Email:
                  </label>
                  <NameEmail
                    type="email"
                    id="email"
                    placeholder="당신의 이메일을 입력해주세요!"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                  {errors.email && <span>정확한 이메일을 입력해주세요!</span>}
                </Email>
              </InnerWrapper>
              <Message errors={errors.message}>
                <label htmlFor="message">
                  <span></span>Message:
                </label>
                <Textarea
                  id="message"
                  placeholder="메세지를 입력해주세요!"
                  {...register("message", { required: true })}
                ></Textarea>
                {errors.message && <span>메세지를 입력해주세요!</span>}
              </Message>
              <Button type="submit">SEND</Button>
            </Form>
          </FormWrapper>

          {showThankYouModal && (
            <ModalContent
              className="modal-content"
              onClick={() => setShowThankYouModal(false)}
            >
              <span></span>
              Your mail was successfully sent to MOLT
            </ModalContent>
          )}
        </Container>
      </ItemSection>
    </ItemContainer>
  );
};

export default Contact;
