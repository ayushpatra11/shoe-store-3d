import { useMotionValue, useTransform } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import AdidasLogo from '../../images/adidaslogo.png';
import { Link } from 'react-router-dom';

const CardDiv = styled(motion.div)`
    font-family: 'Open Sans', sans-serif;
    margin: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 450px;
    width: 550px;
    background: ${props => props.lightbg? "#fff": "#0a1931"};
    box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
    border-radius: 30px;
    cursor: grab;

    @media screen and (max-width: 760px){
        height: 300px;
        width: 330px;
    }
`;

const Wrapper = styled.div`
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    border-top-right-radius: 30px;
    
`;

const Circle = styled.div`
    border-radius: 50%;
    height: 450px;
    width: 450px;
    position: absolute;
    top: -220px;
    right: -160px;
    background-color: ${props => props.color? props.color: "none"};
    z-index: 5;
    @media screen and (max-width: 760px){
        height: 300px;
        width: 330px;
    }
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    align-items:center;
    padding: 1em 16px;
`;

const Bottom = styled.div`
    display: flex;
    flex: 0.8;
    padding: 16px;
    justify-content: center;
`;






const Image = styled(motion.img)`
    max-width: 500px;
    z-index: 11;
    position: absolute;
    bottom: 0;
    @media screen and (max-width: 760px){
        max-width: 350px;
    }
    `;

const ImageLogo = styled(motion.img)`
    max-width: 150px;
    z-index: 11;
   
    @media screen and (max-width: 760px){
        max-width: 100px;
    }
`;




function Buycard(props) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX= useTransform(y, [-100, 100], [30, -30]);
    const rotateY= useTransform(x, [-100, 100], [-30, 30]);

    return (
        <div>
            <CardDiv lightbg={props.lightbg} style = {{x, y, rotateX, rotateY, z: 100}}
            drag
            dragElastic={0.16}
            dragConstraints={{top: 0, bottom: 0, left: 0, right: 0}}
            whileTap={{cursor: "grabbing"}}>
            <Box>
                <Wrapper>
                    <Circle color={props.color} />
                </Wrapper>
                <Image flip={props.flip} src={props.image} alt={props.name}
                style = {{x, y, rotateX, rotateY, z: 100}}
                drag
                dragElastic={0.10}
                dragConstraints={{top: 0, bottom: 0, left: 0, right: 0}}
                whileTap={{cursor: "grabbing"}}

                />
            </Box>
            <Bottom>
                
                <ImageLogo src={AdidasLogo} alt="Adidas Logo" 
                style = {{x, y, rotateX, rotateY, z: 100}}
                drag
                dragElastic={0.10}
                dragConstraints={{top: 0, bottom: 0, left: 0, right: 0}}
                whileTap={{cursor: "grabbing"}}
                />
                
            </Bottom>
            </CardDiv>
        </div>
    )
}

export default Buycard;
