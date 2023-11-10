"use client";
import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Content>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
        <Section></Section>
      </Content>
    </>
  );
}

const Content = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  height: 100vh;
  width: 100%;
  background-color: #555555;
  overflow-y: scroll;
`;

const Section = styled.div`
  /* padding: 10px 20px; */
  width: 100%;
  height: 400px;
  background-color: orange;
`;
