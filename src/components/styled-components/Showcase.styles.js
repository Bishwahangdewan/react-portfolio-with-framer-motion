import styled from "styled-components";

export const ShowcaseImageCard = styled.div`
    border: 1px solid white;
    width: max-content;
    padding-top: 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
`;

export const ShowcaseParticleContainer = styled.div`
    position:relative;

    @media ${({theme}) => theme.breakpoints.mobile}{
        display: none;
    }
`

export const IconContainer = styled.div`
    font-size: 1.5rem;
    color: #fff;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover{
        color: ${({theme}) => theme.colors.secondary};
    }
`
