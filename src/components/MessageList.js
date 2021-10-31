import React, { useState, useEffect } from "react";
import { messagesRef } from "../Firebase";
import Gravater from "../gravatar";

export default function MessageList({ name }) {
    const [messages, setMessages] = useState([]);
    const avatarPath = Gravater(name);

    //  key: -MnGSewevMll2O8qdksf, value: {name: 'akio', text: 'こんちくわ'} このデータを
    // {key: -MnGSewevMll2O8qdksf, name: 'akio', text: 'こんちくわ'}　　　　　こうしたい

    // orderByKeyをつけることで、時系列準で出る
    // order でkeyの並び替え、limit 個数制限クエリ
    useEffect(() => {
        messagesRef.orderByKey().limitToLast(100).on("value", (snapshot) => {
            const messages = snapshot.val();
            if (messages === null) return;//メッセージが0の時にエラーにならない
            const entries = Object.entries(messages);
            const newMessages = entries.map((entry) => {
                const [key, nameAndText] = entry;
                return { key, ...nameAndText };
            });
            console.log(newMessages);
            setMessages(newMessages);
        });
    }, [])

    return (
        <div style={{ margin: "0 0 70px 0" }}>
            <section>
                {messages.map((message) => (
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        {message.name === name ?
                            <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px" }}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "translate(-20px,-12px)" }}>
                                    <p style={{ display: "flex", justifyContent: "flex-end" }}>{message.name}</p>
                                    <div style={{ padding: "10px", marginLeft: "20px", border: "1px solid gray", borderRadius: "10px", overflowWrap: "break-word", maxWidth: "300px", transform: "translate(0,-8px)" }}>{message.text}</div>
                                </div>
                                <div style={{ height: "70px", width: "70px" }}>
                                    <img src={Gravater(message.name)} alt="" />
                                </div>
                            </div> :

                            <div style={{ display: "flex" }}>
                                <div style={{ height: "70px", width: "70px" }}>
                                    <img src={Gravater(message.name)} alt="" />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", transform: "translate(20px,-12px)" }}>
                                    <p>{message.name}</p>
                                    <div style={{ padding: "10px", border: "1px solid gray", borderRadius: "10px", overflowWrap: "break-word", width: "100%", maxWidth: "600px", transform: "translate(0,-8px)" }}>{message.text}</div>
                                </div>
                            </div>}
                    </div>
                ))}
            </section>

            <style jsx>{`
                .talk{
                    border:1px solid gray;
                    border-radius:10px;
                    width:50%;
                    max-width:400px;
                }
                .avatar{
                    overflow:hidden;
                    width:100px;
                    height:100px;
                    border-radius:999px;
                }
                `}</style>
        </div>
    )
}