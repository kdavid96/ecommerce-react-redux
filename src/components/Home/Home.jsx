import React from 'react';
import { Paper, Button } from '@material-ui/core'
import { HomeContainer, HomeTitle, StyledCarousel } from './style';

export default function Home() {
    var items = [
        {
            img: "./img/electronics-header.png",
            alt: "img1"
        },
        {
            img: "./img/fashion-header.jpg",
            alt: "img2"
        }
    ]
    return (
        <HomeContainer>
            <HomeTitle>HOME</HomeTitle>
            <StyledCarousel
                swipe={true}
                autoPlay={false}
                fullHeightHover={true}
                onChange={()=>{}}
                IndicatorIcon={''}
                navButtonsProps={{          
                        style: {
                        backgroundColor: 'transparent',
                        color: 'black',
                        borderRadius: 0
                    }
                }} 
            >
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
            </StyledCarousel>
            <h1>Lorem</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores vel non perferendis maiores ullam minus dolorum saepe. Vitae aut odit excepturi quis consectetur! A, aliquid eaque adipisci consequuntur commodi recusandae.
            Et, veritatis natus, incidunt tempora alias vero libero vitae maxime ut dignissimos veniam debitis cum quasi quos ratione omnis dolore quaerat? Quae similique enim quo fugit recusandae, dicta quia quos!
            Minima sapiente sint, expedita ad culpa voluptatum accusantium quaerat quasi, eligendi voluptates laudantium asperiores neque consequatur temporibus quae ex alias aperiam laboriosam provident maiores deleniti hic error. Possimus, consectetur voluptate.
            Eos consequuntur commodi numquam soluta.</p>
        </HomeContainer>
    )
}

function Item(props)
{
    return (
        <Paper>
            <img src={props.item.img} onClick={() => {console.log(props.item.alt)}} alt={props.item.alt}/>
        </Paper>
    )
}
