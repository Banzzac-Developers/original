import styled from "@emotion/styled";
import { Slider } from "@mui/material"
import { useState } from "react";

function valuetext(value: number) {
    return `${value}살`;
  }
const minDistance = 10;

type Props ={
    min?:number,
    max?:number
}
export default function MultiSlider( {max=100, min=0} :Props ){

    const [value, setValue] = useState<number[]>([min, max]);

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
        return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    return(
        <Container>
            <Box>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="off"
                    getAriaValueText={valuetext}
                    step={10}
                    disableSwap
                    style={{color : "#000"}}

                />
            </Box>
        </Container>
    )
}


const Container = styled.div`
    box-sizing : border-box;
    display: flex; 
    align-items:center;
    justify-content:center;

`;
const Box = styled.div`
    width: 90%;
`;