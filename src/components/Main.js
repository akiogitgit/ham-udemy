import React, { useState } from "react";
import MessageInputField from "./MessageInputField";
import MessageList from "./MessageList";

export default function Main({ name }) {
    return (
        <div>
            Main
            <a href="/">home</a>
            <MessageList name={name} />
            <MessageInputField name={name} />

        </div>
    )
}