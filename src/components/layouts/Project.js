import React from 'react'

import { 
    PaddingContainer, 
    Heading, 
    FlexContainer, 
    ParaText, 
    IconContainer ,
    Button,
} 
from '../styled-components/Global.styled';

import { 
    ProjectContentContainer, 
    ProjectImageContainer, 
    TechStackCard, 
    ProjectImage,
} from '../styled-components/MyProjects.styled';

import {FaGithub} from 'react-icons/fa';

import Project1 from '../../assets/Project1.png';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';

const Project = ({ rowReverse }) => {
  return (
    <FlexContainer rowReverse={rowReverse? true : false} fullWidthChild>
        <ProjectContentContainer 
            as={motion.div} 
            variants={rowReverse ? fadeInRightVariant : fadeInLeftVariant} 
            initial="hidden" 
            whileInView="visible"
        >

            <FlexContainer align="center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">Restaurant App</Heading>
                <IconContainer color="blue" size="2rem"><FaGithub /></IconContainer>
            </FlexContainer>

            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                    <TechStackCard>React JS</TechStackCard>
                    <TechStackCard>Tailwind</TechStackCard>
                    <TechStackCard>Firebase</TechStackCard>
                </FlexContainer>
            </PaddingContainer>

            <ParaText top="1.5rem" bottom="2rem">It typically includes features such as a menu with prices, the ability to place an order, and the option to pay for the order directly through the app. Some restaurant applications also allow customers to make reservations, view the restaurant's location and hours, and access special deals or promotions.</ParaText>
            
            <Button>Visit Website</Button>


        </ProjectContentContainer>
        <ProjectImageContainer 
            justify={rowReverse ? "flex-start" : "flex-end"}
            as={motion.div} 
            variants={rowReverse ? fadeInLeftVariant : fadeInRightVariant} 
            initial="hidden" 
            whileInView="visible"
        >
            <ProjectImage src={Project1} alt="project" />
        </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project