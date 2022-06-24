import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

const  Message: React.FC<MessageType> = (props) => {
    return (
            <div className={s.item}>

            </div>
    )
}

export default Message
