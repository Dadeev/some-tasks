import React, {ChangeEvent, useState} from 'react';
import {RequestsAPI} from "./api/RequestsAPI";

export const Request = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [responseData, setResponseData] = useState<any>(null)

    const OnClickHandler = () => {
        RequestsAPI.createCheck(isChecked)
            .then(res => {
                setResponseData(res.data)
            })
            .catch(error => {
                console.log({...error});
                setResponseData(error.response ? error.response.data.errorText : error.message);
            })
    }
    const OnCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.currentTarget.checked)
    }
    return (
        <div style={{padding: 10}}>
            <hr/>
            <div style={{marginBottom: 5}}>homeworks 13</div>
            <button onClick={OnClickHandler}>Click</button>
            <input onChange={OnCheckedHandler} type="checkbox"/> checkbox
            <h4>Response from server:</h4>
            <div style={{margin: '20px 0 0 20px', border: '1px solid', maxWidth: 550}}>
                {JSON.stringify(responseData)}
            </div>
        </div>
    );
};