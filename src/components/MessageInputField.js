import React, { useState, useRef } from "react";
import Gravater from "../gravatar";
import pushMessage from "../Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function MessageInputField({ name, isSubmit, setIsSubmit }) {
    const inputEL = useRef(null);
    const [text, setText] = useState("");

    // gravatarに nameを渡して、帰ってきたのを imgに入れる
    const avatarPath = Gravater(name);
    return (
        <div>
            <div style={{ position: "fixed", bottom: 0, left: 0, paddingBottom: "10px", width: "100%", display: "flex", backgroundColor: "white", opacity: "0.8" }}>
                <div className="avatar">
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
                            pushMessage({ name, text });
                            setText("");
                            setIsSubmit(isSubmit + 1);
                        }
                    }} />
                <button
                    style={{ border: "none", fontSize: "40px", transform: "rotate(45deg)", cursor: "pointer" }}
                    disabled={!text}
                    onClick={() => {
                        pushMessage({ name, text });
                        setText("");
                        setIsSubmit(isSubmit + 1);
                        inputEL.current.focus();
                    }}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>

            <style jsx>{`
                .avatar:hover{
                    animation-name:kf-avatar;
                    animation-duration:2s;
                    animation-iteration-count:infinite;
                }
                @keyframes kf-avatar{
                    0%{transform:rotateX(0)rotateX(0);}
                    25%{transform:rotateX(360deg);}
                    50%{transform:rotateX(360deg)rotateY(360deg);}
                    75%{transform:rotateX(0)rotateY(360deg);}
                    100%{transform:rotateX(0)rotateY(0);}
                }
                `}</style>
        </div>
    )
}