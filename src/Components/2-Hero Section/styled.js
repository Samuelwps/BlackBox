import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap-reverse;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  background-color: transparent;
`;

export const ActionHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;

  .description {
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--Gray-300);

    strong {
      font-weight: 800;
      color: var(--Gray-100);
    }
  }

  .gradiend {
    font-weight: 800;
    color: var(--Yellow);
    font-size: 2.2rem;
    line-height: 1;
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  span {
    font-size: 2rem;
    display: flex;
    align-items: center;
    padding: 10px;

    img {
      height: 3rem;
      margin-right: 0.5rem;
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.5rem;
    font-weight: normal;

    margin-top: 12px;
    padding: 1rem 1.5rem;
    color: var(--White);
    background-color: var(--Red);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    width: 100%;
  }

  .btn:hover {
    background-color: var(--Green);
  }

  .btn-three {
    position: relative;
    transition: all 0.5s;
  }

  .btn-three::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
  }

  .btn-three:hover::before {
    opacity: 0;
    transform: scale(0.5, 0.5);
  }

  .btn-three::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    transform: scale(1.2, 1.2);
  }

  .btn-three:hover::after {
    opacity: 1;
    transform: scale(1, 1);
  }

  .btn-overlay {
    position: relative;
    display: inline-block;
    width: fit-content;
  }

  .lock-overlay {
    position: absolute;
    top: 10px; /* Adjusted to center vertically within the button */
    left: 0;
    width: 100%;
    height: 90%; /* Matches the button's exact height */
    background: rgba(50, 50, 50, 0.8); /* Stronger gray */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px; /* Matches the button's border-radius */
    z-index: 2;
    pointer-events: none; /* Prevents interaction with the overlay */
    box-sizing: border-box; /* Ensures padding and border are included in dimensions */
  }

  .lock-icon {
    font-size: 1.5rem;
    color: var(--White);
  }
`;

export const ImageHero = styled.div`
  width: 100%;
  max-width: 500px;
  max-height: 700px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  background-color: var(--Red);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  transition: background 0.3s ease;

  &:hover {
    background-color: var(--Red-900);
  }
`;
