import React, { useEffect, useState } from 'react';
import {withRouter} from 'react-router-dom';
import {CardData} from '../components/card/CardData';
import Card from '../components/card/Card';
import {Section} from '../components/GlobalStyles';
import styled from 'styled-components';
import Buycard from '../components/card/Buycard'
import {Link} from 'react-router-dom'

const Container = styled.div`
    height: 100vh;
    font-family: 'Open Sans', sans-serif;   
    margin: 30px;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

const ColumnLeft = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5rem 2rem;


h1{
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    color: #fff;
}

p{
    text-align: center;
    margin: 2rem 0;
    text-align: center;
    font-size: 3rem;
    line-height: 1.1;
    color: #fff;
}

`;

const ColumnRight= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;

    h1{
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 2.5rem;
    color: #2B2E4A;
}

    p{
        text-align: center;
        margin: 2rem 0;
        text-align: center;
        font-size: 2rem;
        line-height: 1.1;
        color: #2B2E4A;
    }

    @media screen and (max-width: 768px){
    h1{
    margin-bottom: 0.5rem;
    text-align: center;
    font-size: 1.5rem;
}

    p{
        text-align: center;
        margin: 2rem 0;
        text-align: center;
        font-size: 1.2rem;
        line-height: 1.1;
    }
    }
`;

const Buy = styled(Link)`
    background: ${props => props.color? props.color: "none"};
    color: ${props => props.lightbg? "#000": "#fff"};
    font-size: 1.3rem;
  font-weight: bold;
    text-align: center;
    cursor: pointer;
    width: 200px;
    text-decoration: none;
    border: 2px solid ${props => props.lightbg? "#000": "#fff"};
    padding: 5px;
    border-radius: 5px;
`;




function ProductPage(props) {
    const searchid = props.match.params.id;
    const [shoe, setShoe]=useState({
        id: "",
        brandname: "",
        name: "",
        price: "",
        image: "",
        color: "",
        bg: ""
    })
    
    // const {id,brandname,name,price,image,color,bg} = CardData;

    console.log(props);
    
    function handleShoe(){
        CardData.map((e, index)=>{
            if(searchid==e.id){
                setShoe({id: e.id,
                    brandname: e.brandname,
                    name: e.name,
                    price: e.price,
                    image: e.image,
                    color: e.color,
                    bg: e.bg});
            }
        })
    }

    useEffect(()=>{
        handleShoe();
    }, []);
    
    
    return (

        <div>
            <Section>
                <Container>
                    <ColumnLeft>
                            <Buycard 
                                    image={shoe.image}
                                    color={shoe.color}
                                    lightbg={shoe.bg}   
                            />
                    </ColumnLeft>
                    <ColumnRight>
                        <h1>{shoe.name}</h1>
                        <p>{shoe.brandname}</p>
                        <h1>{shoe.price}</h1>
                        <Buy
                        to='#'
                        lightbg={shoe.bg} color={shoe.color}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        >Buy</Buy>
                    </ColumnRight>
                </Container>
            </Section>
        </div>
    )
}

export default withRouter(ProductPage)


