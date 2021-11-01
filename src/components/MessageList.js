import React, { useState, useEffect, useRef } from "react";
import { messagesRef } from "../Firebase";
import Gravater from "../gravatar";

export default function MessageList({ name, isSubmit }) {
    const [messages, setMessages] = useState([]);
    const ref = useRef(null);

    //  key: -MnGSewevMll2O8qdksf, value: {name: 'akio', text: 'こんちくわ'} このデータを
    // {key: -MnGSewevMll2O8qdksf, name: 'akio', text: 'こんちくわ'}　　　　　こうしたい

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
    }, []);

    // isSubmit は inputを送信したときに発動 useRefを下のdivに渡すことで発動
    useEffect(() => {
        if (ref) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [isSubmit]);

    //https://i.picsum.photos/id/8/100/100.jpg?hmac=57Kp0Mcu8uqmiBdlwOKBQESnKuBxVXpha1ZVTmaE9X0

    return (
        <div style={{ margin: "0 0 70px 0" }}>
            <section>
                {messages.map((message, index) => {
                    // isLastItem = length === index + 1;
                    return (
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {message.name === name ?
                                <div style={{ display: "flex", justifyContent: "flex-end", marginRight: "20px" }}>
                                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", transform: "translate(-20px,-12px)" }}>
                                        <p style={{ display: "flex", justifyContent: "flex-end" }}>{message.name}</p>
                                        {message.text.startsWith("http") ?
                                            <img src={`${message.text}`} alt="" /> :
                                            <div style={{ padding: "10px", marginLeft: "20px", border: "1px solid gray", borderRadius: "10px", overflowWrap: "break-word", maxWidth: "300px", transform: "translate(0,-8px)" }}>{message.text}</div>
                                        }
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
                                        {message.text.startsWith("http") ?
                                            <img src={`${message.text}`} alt="" /> :
                                            <div style={{ padding: "10px", border: "1px solid gray", borderRadius: "10px", overflowWrap: "break-word", width: "100%", maxWidth: "600px", transform: "translate(0,-8px)" }}>{message.text}</div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    )
                })}
                <div ref={ref} />
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