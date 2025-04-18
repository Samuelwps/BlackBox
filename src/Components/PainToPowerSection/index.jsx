import React from "react";
import {
  Section,
  Title,
  BlockList,
  Block,
  Icon,
  BlockTitle,
  BlockText,
  TransformationText,
  CallToAction,
  CTAButton,
} from "./styled";
import { FaClock } from "react-icons/fa"; // Import the clock icon

const PainToPowerSection = () => {
  const pains = [
    {
      icon: "😔",
      title: "Insatisfação Silenciosa",
      description:
        "A sensação de que algo está faltando, mesmo quando tudo parece bem.",
      transformation: "COM AUTOCONHECIMENTO, VOCÊ TRANSFORMA DOR EM DIREÇÃO.",
    },
    {
      icon: "😞",
      title: "Frustração Constante",
      description: "Metas não alcançadas e sonhos adiados pesam no coração.",
      transformation:
        "COM DESENVOLVIMENTO PESSOAL, VOCÊ ENCONTRA CLAREZA E AÇÃO.",
    },
    {
      icon: "😶",
      title: "Vazio Existencial",
      description:
        "A falta de propósito que torna os dias monótonos e sem sentido.",
      transformation: "COM PROPÓSITO, VOCÊ TRANSFORMA VAZIO EM SIGNIFICADO.",
    },
    // Add more blocks as needed...
  ];

  return (
    <Section>
      <Title>Você sente isso?</Title>
      <BlockList>
        {pains.map((pain, index) => (
          <Block
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Icon>{pain.icon}</Icon>
            <BlockTitle>{pain.title}</BlockTitle>
            <BlockText>{pain.description}</BlockText>
            <TransformationText>{pain.transformation}</TransformationText>
          </Block>
        ))}
      </BlockList>
      <CallToAction>
        <p>
          Você não precisa viver com esse peso. Comece agora sua jornada de
          transformação.
        </p>
        <CTAButton href="#" disabled>
          <FaClock />
          Disponível em Breve
        </CTAButton>
      </CallToAction>
    </Section>
  );
};

export default PainToPowerSection;
