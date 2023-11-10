"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import styled from "styled-components";

const Header = () => {
  const { scrollY } = useScroll();

  const navAnimation = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
    if (latest > 80) {
      console.log("까맣게");
      navAnimation.start("scroll");
    } else {
      console.log("까맣게");
      navAnimation.start("top");
    }
  });

  return (
    <Nav variants={navVariants} initial="top" animate={navAnimation}>
      <Col>
        <Logo
          role="img"
          variants={logoVariants}
          whileHover="active"
          initial="normal"
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="0 0 24 24"
        >
          <motion.path d="M11.176 0s-.681 1.938-.867 2.527C9.844 2.202 8.386 1.194 7.78.775c.14.806.356 2.124.403 2.403-.124-.093-.821-.698-1.875-1.194.589.682 1.008 1.736 1.271 2.588a10.566 10.566 0 0 1 5.238-1.379c.977 0 1.94.14 2.854.403.093-.884.279-1.968.682-2.758-.915.728-1.474 1.503-1.551 1.596-.031-.186-.093-1.52-.17-2.434-.372.403-1.8 2.016-2.063 2.264C12.384 1.938 11.176 0 11.176 0zm1.674 3.86c-1.674 0-3.3.386-4.696 1.115.713.046 1.224.668 1.395 1.164-.558-.45-1.442-.667-1.985-.078-.511.589-.464 1.688.047 2.572-1.193-.605-1.194-2.185-.775-2.867A10.392 10.392 0 0 0 3.61 9.594l1.07.172c-1.24 1.426-2.107 3.953-2.107 5.146l1.75-.543c-.31 1.054-.401 4.602.653 6.385 0 0 1.38-.96 2.945-3.363.65 2.17.356 3.985 0 5.767 2.82 1.581 6.09.696 8.012-.683l.357 1.35c2.248-1.489 3.488-3.628 3.72-6.124l.837.93c1.286-3.829.28-6.883-1.565-9.502l-.078.637-.79-.87s.17-.077.31-.263c.03-.078-.046-.495-.371-.774-.31.078-.56.264-.684.45a3.222 3.222 0 0 0-.93-.543c.062.077.604.79.65 1.007.466.388 1.102.837 1.52 1.395-.34-.403-1.984-.497-2.728-.078 0 0-.744-.868-1.426-1.473-.14-.511.326-.96.326-.96s-.48-.03-.93.42c-.682-.512-1.55-.745-1.55-.745-.961.14-1.612.82-1.612.82.217.14.512.327.776.42.511.217 1.006.139 1.332.139.263 0 .636.078.636.078s.635.495 1.565 1.565c-1.426-.574-2.915.062-3.969-.45-1.24-.62-1.146-1.595-1.146-1.595s-.836-.11-.836-.141c0 0 .618-.82 1.548-1.1l-.464-.402c.558-.465 1.534-1.085 3.115-1.24 0 0 .683.262 2.11 1.285.232-.326.308-1.008.308-1.008.728.248 2.217 1.333 2.806 1.984-.325-.759-.559-1.223-.636-2.013-.357-.357-1.24-1.101-3.069-1.551.295.605.264 1.115.264 1.115-.34-.45-1.055-1.146-1.55-1.332-.295-.015-.605-.047-.93-.047zm3.271 7.068a4.323 4.323 0 0 0 1.256.697v1.348c-.465.403-1.985 1.675-3.008 1.566-.573-1.1-1.115-2.107-1.115-2.107s1.565-1.318 2.867-1.504zm2.975.031c.465 1.131.59 2.48.078 3.379-.28-.605-.636-.947-1.008-1.35v-1.347s.418-.264.93-.682zm-.977 3.395c.465.511.559 1.068.559 1.068-.202 1.131-.836 1.846-1.301 2.14.046-.821-.172-1.519-.172-1.519-.34.372-1.13.743-1.596.836l-.697-1.3c.822-.032 2.201-1.194 2.201-1.194l1.006-.031z" />
        </Logo>
      </Col>
      <Col>
        <Items>
          <Item>순위</Item>
          <Item>즐겨찾기</Item>
        </Items>
      </Col>
    </Nav>
  );
};

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 60px;
  height: 60px;
  fill: ${(props) => props.theme.purple};
  path {
    stroke-width: 0.3px;
    stroke: white;
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

const logoVariants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

const navVariants = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  scroll: {
    backgroundColor: "rgba(0,0,0,1)",
  },
};

export default Header;
