import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 2rem auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 30px;
  font-weight: normal;
`;

export const ReviewsHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2rem;
    font-weight: normal;
    color: var(--White);
  }

  h2 {
    color: var(--White);
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--White);
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const ContainerReviews = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const TestimonialItem = styled.div`
  flex: 1 1 calc(33.333% - 20px);
  min-width: 280px;
  max-width: 360px;
  background-color: var(--gray-800);
  color: var(--White);
  padding: 24px;
  border-radius: 12px;
  border: 1px solid var(--Gray);
  box-shadow: 0 8px 22px rgba(85, 20, 20, 0.16);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 20px);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

export const TestimonialRate = styled.div`
  display: flex;
  gap: 4px;

  span {
    font-size: 1rem;
    color: var(--Yellow);
  }
`;

export const TestimonialQuote = styled.blockquote`
  font-size: 1rem;
`;

export const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 1rem;
`;

export const AuthorAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AuthorInfo = styled.div`
  h3 {
    font-size: 1.3rem;
    font-weight: normal;
  }

  p {
    font-size: 0.75rem;
  }
`;
