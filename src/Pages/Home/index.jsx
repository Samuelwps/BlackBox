import React from "react";
import HeroSection from "../../Components/2-Hero Section";
import WhoAre from "../../Components/3-WhoAre";
import Reviews from "../../Components/4-Reviews";
import SlideBar from "../../Components/5-SlideBar";
import Questions from "../../Components/7-Questions";
import Copyright from "../../Components/Copyright";
import Header from "../../Components/1-Header";
import PromotionalBanner from "../../Components/8-Amazon";
import { Container, Section, Footer, BannerWrapper } from "./styled";

const Home = () => {
  return (
    <>
      
        <Header />
      <Container>
        <Section>
          <HeroSection />
        </Section>
        <Section>
          <WhoAre />
        </Section>
        <Section>
          <Reviews />
        </Section>
        <Section>
          <SlideBar />
        </Section>
        <Section>
          <Questions />
        </Section>
        <Footer>
          <Copyright />
        </Footer>
        <BannerWrapper>
          <PromotionalBanner />
        </BannerWrapper>
      </Container>
    </>
  );
};

export default Home;