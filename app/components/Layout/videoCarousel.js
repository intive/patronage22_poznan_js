import React, {useState} from 'react';
import styled from 'styled-components';

const CarouselItemWrapper = styled.div`
    width: 20%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    background-color: grey;
    color: white;
    margin: 1px 2px;
    border-radius: 5px;

    @media (max-width: 1025px) {
        width: 33%;
    }

    @media (max-width: 480px) {
        width: 49%;
    }
`
const Button = styled.button`
    /* visibility: visible; */
    background-color: transparent;
    color: white;
    font-size: 20px;
    border: none;

    @media (max-width: 1025px) {
        color: black;
    }

    @media (max-width: 480px) {
        color: black;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    top: 5%;
    transform: translateY(42%);

    @media (max-width: 1025px) {
        top: 2%;
        transform: translateY(85%)
    }

    @media (max-width: 480px) {
        top: 2%;
        transform: translateY(80%)
    }
`

export const CarouselItem = ({ children }) => {
    return (
        <CarouselItemWrapper>{children}</CarouselItemWrapper>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [btnVisible, setBtnVisible] = useState("hidden");
    const btnStyle = {
    visibility: `${btnVisible}`};


    const updateIndex = (newIndex) => {
        if( newIndex < 0 ) {
            newIndex = 0;
        } else if ( newIndex >= React.Children.count(children) ) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    };

    return (
        <div className='carousel'
        onMouseEnter={() => setBtnVisible("visible")}
        onMouseLeave={() => setBtnVisible("hidden")}
        style={{overflow: "hidden"}}>
            <div className='inner' style={{  transform: `translateX(-${activeIndex * 100}%)`, whiteSpace: "nowrap", transition: "transform 0.3s"}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child);
                })}
                
            </div>

            <ButtonWrapper>
                <Button style={btnStyle}
                onClick={ () => {
                    updateIndex(activeIndex -1);
                } }>
                    &#60;
                </Button>

                <Button style={btnStyle}
                onClick={ () => {
                    updateIndex(activeIndex +1);
                } }>
                    &#62;
                </Button>
            </ButtonWrapper>

        </div>
    )
}


export default Carousel;


