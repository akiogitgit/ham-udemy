import React, { useState, useEffect } from "react";
import { messagesRef } from "../Firebase";

export default function MessageList({ name }) {
    const [messages, setMessages] = useState([]);

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
        <div>
            <section>
                <div className="flex">
                    <div className="avatar">
                        <img src="http://unsplash.it/100" alt="" />
                    </div>
                    <div className="talk">
                        <h4 style={{ padding: "0px 20px" }}>name{name}</h4>
                        <div style={{ padding: "0px 20px 10px 20px" }}>私は、今どこにあるかと踏みしめた足跡をなんども見つめ返す</div>
                    </div>
                </div>
                {messages.map((e) => (
                    <div className="flex">
                        <div className="avatar">
                            <img src="http://unsplash.it/100" alt="" />
                        </div>
                        <div className="talk">
                            <h4 style={{ padding: "0px 20px" }}>{e.name}</h4>
                            <div style={{ padding: "0px 20px 10px 20px" }}>{e.text}</div>
                        </div>
                    </div>
                ))}
            </section>

            <style jsx>{`
                .talk{
                    border:1px solid gray;
                    border-radius:20px;
                    margin:0 0 20px 10px;
                    width:50%;
                    max-width:400px;
                }
                .avatar{
                    overflow:hidden;
                    width:100px;
                    height:100px;
                    border-radius:999px;
                }
                .flex{
                    display:flex;
                }
                `}</style>
        </div>
    )
}