import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.container}>
            <div>
                <img className={s.avatar} src={props.avatar} alt=""/>
            </div>
            <div className={s.containerForMessage}>
                <div className={s.name}>
                    {props.name}
                </div>
                <div className={s.message}>
                    {props.message}
                </div>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>
    )
}

export default Message
