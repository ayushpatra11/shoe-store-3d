import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

export const Section = styled.section`
    font-family: 'Arimo', sans-serif;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: ${props => props.primary? "#2b2e4a" : "#e1e5ea" };

`;
