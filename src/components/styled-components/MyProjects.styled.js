import styled from "styled-components";

export const ProjectContentContainer = styled.div`

`;

export const ProjectImageContainer = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify };
`;

export const TechStackCard = styled.span`
    display: inline-block;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 5px;

    @media ${({ theme }) => theme.breakpoints.mobile}{
        margin-right: 1rem;
    }
`

export const ProjectImage = styled.img`
    border: 1px solid #fff;
    width: 80%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;

    @media ${({ theme }) => theme.breakpoints.mobile}{
        width: 100%;
        margin-top: 2rem;
    }
`



