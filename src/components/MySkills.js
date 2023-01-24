import React from 'react'
import { FlexContainer, Heading, PaddingContainer, IconContainer, ParaText, BlueText } from './styled-components/Global.styled'
import { SkillsCardContainer, SkillsCard } from './styled-components/MySkills.styled'
import { Skills } from '../utils/Data'
import { motion } from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';



const MySkills = () => {
  return (
    <PaddingContainer top="10%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
        <FlexContainer responsiveDirection="column-reverse" responsiveFlex fullWidthChild>
            <SkillsCardContainer 
                as={motion.div} 
                variants={fadeInLeftVariant} 
                initial="hidden" 
                whileInView="visible"
            >

                {Skills.map((skill) => (
                  <SkillsCard key={skill.id}>
                    <IconContainer size="5rem" color="blue">
                      {skill.icon}
                    </IconContainer>
                    
                    <Heading as="h4" size="h4">{skill.tech}</Heading>
                  </SkillsCard>
                ))}

            </SkillsCardContainer>

            <motion.div variants={fadeInRightVariant} initial="hidden"          whileInView="visible">
                <Heading as="h4" size="h4">MY SKILLS</Heading>
                <Heading as="h2" size="h2" top="0.5rem">What <BlueText>I can do</BlueText></Heading>

                <ParaText top="2rem" bottom="1.5rem">As a developer, I have a wide range of experience in front-end web development. I am proficient in JavaScript, React, Angular, HTML, and CSS. My strong experience in building responsive and dynamic user interfaces using React and Redux has allowed me to create engaging and interactive web applications.</ParaText>

                <ParaText>I have experience in using React for building scalable and maintainable applications. This has allowed me to create efficient and sustainable code that can adapt to the changing needs of a business.</ParaText>
            </motion.div>
        </FlexContainer>
    </PaddingContainer>
    
  )
}

export default MySkills