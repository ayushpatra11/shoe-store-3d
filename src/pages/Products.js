import React from 'react'
import Card from '../components/card/Card';
import {Section} from '../components/GlobalStyles';
import {CardData} from '../components/card/CardData';

function Products() {
    return (
        <div id="products">
            <Section>
                {CardData.map((e, index)=>
                    <Card 
                    key={index}
                    id={e.id}
                    name={e.name}
                    brandname={e.brandname}
                    price={e.price}
                    image={e.image}
                    color={e.color}
                    lightbg={e.bg}
                    flip={e.flip}
                    />
                    )}
            </Section>
        </div>
    )
}

export default Products;
