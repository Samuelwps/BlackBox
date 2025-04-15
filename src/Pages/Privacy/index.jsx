import React from "react";
import Header from "../../Components/1-Header";
import { Container, Title, Section, Paragraph } from "./styled";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Privacy Policy</Title>
        <Section>
          <Paragraph>
            Welcome to BlackBox Digital! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
          </Paragraph>
        </Section>
        <Section>
          <h2>Information We Collect</h2>
          <Paragraph>
            We may collect personal information such as your name, email address, and other details when you interact with our website.
          </Paragraph>
        </Section>
        <Section>
          <h2>How We Use Your Information</h2>
          <Paragraph>
            The information we collect is used to improve our services, provide customer support, and communicate updates.
          </Paragraph>
        </Section>
        <Section>
          <h2>Sharing Your Information</h2>
          <Paragraph>
            We do not sell or share your personal information with third parties, except as required by law or to provide our services.
          </Paragraph>
        </Section>
        <Section>
          <h2>Your Rights</h2>
          <Paragraph>
            You have the right to access, update, or delete your personal information. Contact us if you have any concerns.
          </Paragraph>
        </Section>
        <Section>
          <h2>Contact Us</h2>
          <Paragraph>
            If you have any questions about this Privacy Policy, please contact us at support@blackboxdigital.com.
          </Paragraph>
        </Section>
      </Container>
    </>
  );
};

export default PrivacyPolicy;