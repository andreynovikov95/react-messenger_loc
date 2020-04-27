import * as React from 'react'

import './Messages.css'

interface IProps {
    authors: object[],
    dateMeassages: object[],
    chatMessages: object[]
};

const renderMessages = (messages: Array<any>, authors: Array<any>) => messages.map(({
    authorId,
    message
})  => {
    const {
        name,
        avatar
    } = authors[authorId]

    return (
        <div className={'message'}>
            <div className={'message__avatar'}>
                <img src={avatar} alt={name} />
            </div>
            <div className={'message__text'}>
                <div className={'message__text__name'}>
                    {name}
                </div>
                <div>
                    {message}
                </div>
            </div>
        </div>
    )
})

const renderDateMessages = (chatMessages: Array<any>, messages: Array<any>, authors: Array<any>) => chatMessages.map(({
    date,
    dateMessagesId,
})  => {
    const dateMessages = messages[dateMessagesId]

    return (
        <div className={'dateMessages'}>
            <div className={'dateMessages__date'}>
                {date}
            </div>
            <div className={'dateMessages__messages'}>
                {renderMessages(dateMessages, authors)}
            </div>
        </div>
    )
})

const Messages: React.SFC<IProps> = (props: IProps) => {
    const {
        authors,
        dateMeassages,
        chatMessages
    } = props

    return (
        <div className={'messages'}>
            {renderDateMessages(chatMessages, dateMeassages, authors)}
        </div>
    )
};

Messages.defaultProps = {
    authors: [],
    dateMeassages: [],
    chatMessages: []
};

export default Messages;