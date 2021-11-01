import React, { useState } from "react";
import MessageInputField from "./MessageInputField";
import MessageList from "./MessageList";

export default function Main({ name }) {
    const [isSubmit, setIsSubmit] = useState(0);
    return (
        <div>
            Main
            <a href="/">home</a>
            <MessageList name={name} isSubmit={isSubmit} setIsSubmit={setIsSubmit} />
            <MessageInputField name={name} isSubmit={isSubmit} setIsSubmit={setIsSubmit} />

        </div>
    )
}