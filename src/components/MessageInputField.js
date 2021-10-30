import React, { useState } from "react";
import Gravater from "../gravatar";
import pushMessage from "../Firebase";

export default function MessageInputField({ name }) {
    const [text, setText] = useState("");

    // gravatarに nameを渡して、帰ってきたのを imgに入れる
    const avatarPath = Gravater(name);
    return (
        <div>MessageInputField
            <div style={{ position: "fixed", bottom: "10px", left: 0, display: "flex" }}>
                <div style={{}}>
                    <img src={avatarPath} alt="" />
                </div>
                <input
                    style={{ border: "none", borderBottom: "solid 1px black", outline: "none", width: "60vw", maxWidth: "1000px", height: "40px", margin: "30px 0 0 20px" }}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && text) {
                            pushMessage({ name: "akio", text });
                            setText("");
                        }
                    }} />
                <button
                    style={{ margin: "0px 20px", width: "50px" }}
                    disabled={!text}
                    onClick={() => {
                        pushMessage({ name: "akio", text });
                        setText("");
                    }}>送信</button>
            </div>
        </div>
    )
}