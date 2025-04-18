import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  background-color: #0d0d0d;
  color: #ffffff;
  padding: 4rem 2rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #b91c1c;
`;

export const BlockList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

export const Block = styled(motion.div)`
  background-color: #29292e;
  border-radius: 8px;
  padding: 1.5rem;
  width: 300px;
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const BlockTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

export const BlockText = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #7e8b9c;
`;

export const TransformationText = styled.p`
  font-size: 1.2rem;
  font-weight: bolder;
  color: #b91c1c;
`;

export const CallToAction = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(90deg, #29292e, #7e8b9c, #b91c1c, #29292e);
  background-size: 300% 300%;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: gradientMove 4s ease infinite; /* Faster animation for visibility */

  p {
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 1.5rem;
    text-transform: uppercase; /* Make text uppercase */
    font-weight: bold; /* Add bold styling */
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const CTAButton = styled.a`
  margin: 1rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    #29292e,
    #7e8b9c,
    #b91c1c,
    #29292e
  ); /* Gradient background */
  background-size: 300% 300%;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border-radius: 8px; /* Less-rounded corners */
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: not-allowed; /* Indicate disabled state */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  animation: gradientMove 4s ease infinite; /* Gradient animation */

  &:hover {
    transform: scale(1.1); /* Add a stronger zoom effect */
  }

  svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
