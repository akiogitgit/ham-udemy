import React, { useState, useRef } from "react";
import Gravater from "../gravatar";
import pushMessage from "../Firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function MessageInputField({ name }) {
    const inputEL = useRef(null);
    const [text, setText] = useState("");

    // gravatarに nameを渡して、帰ってきたのを imgに入れる
    const avatarPath = Gravater(name);
    return (
        <div>
            <div style={{ position: "fixed", bottom: "10px", left: 0, display: "flex" }}>
                <div style={{}}>
                    <img src={avatarPath} alt="" />
                </div>
                <input
                    style={{ border: "none", borderBottom: "dotted 1px black", outline: "none", width: "60vw", maxWidth: "1000px", height: "40px", margin: "30px 0 0 20px" }}
                    value={text}
                    autoFocus
                    ref={inputEL}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && text) {
                            pushMessage({ name: "akio", text });
                            setText("");
                        }
                    }} />
                <button
                    style={{ border: "none", fontSize: "40px", backgroundColor: "white", transform: "rotate(45deg)" }}
                    disabled={!text}
                    onClick={() => {
                        pushMessage({ name: "akio", text });
                        setText("");
                        inputEL.current.focus();
                    }}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    )
}