import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import { Modal } from '@mui/material';
import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #000000a7;
display: flex;
align-items: top;
justify-content: center;
overflow-y: scroll;
transition: all 0.5s ease;
`;

const Wrapper = styled.div`
max-width: 800px;
width: 100%;
border-radius: 16px;
margin: 50px 12px;
height: min-content;
background-color: ${({ theme }) => theme.card};
color: ${({ theme }) => theme.text_primary};
padding: 20px;
display: flex;
flex-direction: column;
position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
      font-size: 24px;
      margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`



const Desc = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        margin: 6px 6px;
    }
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    margin: 8px 6px;
    @media only screen and (max-width: 600px) {
        font-size: 16px;
        margin: 8px 6px;
    }
`;

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px;
    @media only screen and (max-width: 600px) {
        margin: 4px 0px;
    }
`;

const Tag = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary + 20};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const Contributors = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
    margin: 12px 6px;
    @media only screen and (max-width: 600px) {
        margin: 4px 6px;
    }
`;

const Contributor = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between
    gap: 24px;
    flex-wrap: wrap;
`;

const ContributorImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.3);
    @media only screen and (max-width: 600px) {
        width: 32px;
        height: 32px;
    }
`;

const ContributorName = styled.div`
    font-size: 16px;
    font-weight: 500;
    min-width: 160px;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 600px) {
        font-size: 14px;
    }
`;

const Role = styled.div`
    font-size: 12px;
    font-weight: 200;
    margin-left: 46px;
    opacity: 80%;
    min-width: 160px;
    @media only screen and (min-width: 600px) {
        font-size: 16px;
        // font-weight: 500;
        opacity: 100%;
    }
`;

const ContributorContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
flex: 1;
gap: 12px;
`;

const ContributorSocials = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;
    gap: 12px;
    width: 60px;

    a {
        text-decoration: none;
        color: inherit;
        width: 24px;
    }
`


const ButtonGroup = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 12px 0px;
    gap: 12px;
`;

const Button = styled.a`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.primary};
    ${({ dull, theme }) => dull && `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
    cursor: pointer;
    text-decoration: none;
    transition: all 0.5s ease;
    &:hover {
        background-color: ${({ theme }) => theme.primary + 99};
    }
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    }
`;

const index = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;
    const navigate = useNavigate();
    const menuRef = useRef();

    useEffect(() => {
        const handler = (e) => {
            if(!(menuRef.current && menuRef.current.contains(e.target))){
                setOpenModal(false);
                navigate("/");

            }
        };

        document.addEventListener("mousedown", handler);

        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [])

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <Container>
                <Wrapper ref={menuRef}>
                    <CloseRounded
                        style={{
                            position: "absolute",
                            top: "10px",
                            right: "20px",
                            cursor: "pointer",
                        }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    
                    <Title>{project?.title}</Title>
                    <Date>{project.date}</Date>
                    <Tags>
                        {project?.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </Tags>
                    <Desc>{project?.description}</Desc>
                    <Carousel slides={project?.slides} />
                    <ButtonGroup>
                        { project?.github &&
                            <Button dull href={project?.github} target='new'>View Code</Button>
                        }
                        { project?.webapp &&
                            <Button href={project?.webapp} target='new'>View Live App</Button>
                        }
                    </ButtonGroup>
                    {project.contributors && (
                        <>
                            <Label>Contributors</Label>
                            <Contributors>
                                {project?.contributors.map((contributor, index) => (
                                    <Contributor key={index}>
                                        <ContributorContainer>
                                            <ContributorImage src={contributor.img} />
                                            <ContributorName>{contributor.name}</ContributorName>
                                            <ContributorSocials>
                                                { contributor.linkedin &&
                                                    <a href={contributor.linkedin} target="new">
                                                    <LinkedIn />
                                                    </a>
                                                }
                                                { contributor.github &&
                                                    <a href={contributor.github} target="new">
                                                    <GitHub />
                                                    </a>
                                                }
                                            </ContributorSocials>
                                        </ContributorContainer>
                                        <ContributorContainer>
                                            <Role>
                                                {contributor.role}
                                            </Role>
                                        </ContributorContainer>
                                    </Contributor>
                                ))}
                            </Contributors>
                        </>
                    )}
                </Wrapper>
            </Container>

        </Modal>
    )
}

export default index