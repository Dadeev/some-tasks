import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {Slider} from "@material-ui/core";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeHandler1 = (e: any, newValue: number | number[]) => {
        setValue1(newValue as number)
    }
    const onChangeHandler2 = (e: any, [newValue1, newValue2]: any) => {
        setValue1(newValue1 as number)
        setValue2(newValue2 as number)
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div style={{width: 300}}>
                <div>
                    <span>{Math.round(value1)}</span>
                    <Slider
                        onChange={onChangeHandler1}
                        defaultValue={value1}
                        value={value1}

                    />
                </div>

                <div style={{width: 300}}>
                    <span>{Math.round(value1)}</span>
                    <Slider
                        onChange={onChangeHandler2}
                        defaultValue={[value1, value2]}
                        value={[value1, value2]}
                    />
                    <span>{Math.round(value2)}</span>
                </div>
            </div>
        </div>
    )
}

export default HW11