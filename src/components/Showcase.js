import React from 'react';
import { PaddingContainer, FlexContainer, Heading, BlueText,ParaText, Particle } from './styled-components/Global.styled';
import { ShowcaseImageCard, ShowcaseParticleContainer, IconContainer } from './styled-components/Showcase.styles';
import ShowcaseImg from '../assets/showcase-img.png';
import BackgroundImg from '../assets/particle.png';
import {BsTwitter, BsYoutube} from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {
  return (
    <PaddingContainer left="3%" right="10%" top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
        <FlexContainer align="center" fullWidthChild>
            <motion.div variants={fadeInLeftVariant} initial="hidden" whileInView="visible"> 
                <Heading as="h4" size="h4" >Hello!</Heading>

                <Heading as="h1" size="h1" top="0.5rem" bottom="1rem">
                    I'm <BlueText>Bishwahang</BlueText>
                </Heading>

                <Heading as="h3" size="h3">
                    I'm a <BlueText>Frontend Developer</BlueText>
                </Heading>
                
                <ParaText as="p" top="2rem" bottom="4rem">
                    Hello, my name is Bishwahang Dewan and I am a front-end developer with 4 years of experience in creating and designing user-friendly websites and web applications. 
                </ParaText>

                <FlexContainer gap="20px" responsiveFlex>
                    <IconContainer>
                        <BsTwitter />
                    </IconContainer>

                    <IconContainer>
                        <BsYoutube />
                    </IconContainer>
                    
                </FlexContainer>
            </motion.div>

            <FlexContainer justify="flex-end">
                <ShowcaseParticleContainer as={motion.div} variants={fadeInRightVariant} initial="hidden" whileInView="visible">
                    <ShowcaseImageCard background={BackgroundImg}>
                        <img src={ShowcaseImg} alt="showcase" />
                    </ShowcaseImageCard>

                    <Particle src={BackgroundImg} initialTop="-80px" initialLeft="20px" rotate="60deg" />
                    <Particle src={BackgroundImg} initialTop="50px" initialRight="-70px" rotate="0deg"/>
                    <Particle src={BackgroundImg} initialBottom="10px" initialLeft="-70px" rotate="50deg" />
                </ShowcaseParticleContainer>
            </FlexContainer>

        </FlexContainer>

    </PaddingContainer>
  )
}

export default Showcase;