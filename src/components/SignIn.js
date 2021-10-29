import React, { useState } from 'react';

export default function SignIn() {

    const [text, setText] = useState("");
    return (
        <div className="global">
            <div className="">
                <h2>ようこそ</h2>
                <div className="input-area">
                    <input value={text} onChange={(e) => setText(e.target.value)} placeholder="ニックネーム" />
                    {text && (<span>ニックネーム</span>)}
                </div><br />

                <div className="start-text">はじめる</div>
                <div className="copy-right">&copy;akio</div>
            </div>

            <style jsx>{`
                .global{
                    text-align:center;
                }

                .input-area{
                    position:relative;
                    display:inline-block;
                }
                .input-area input{
                    height:30px;
                    width:350px;
                    padding:10px 0 0 0;
                    outline:none;
                    border:1px solid black;
                }
                .input-area input::placeholder{
                    transform:translate(15px,-5px)scale(1);
                    transition:0.3s;
                    z-index:10;
                    background:white;
                }
                .input-area input:focus::placeholder{
                    transform:translate(-45px,-18px)scale(0.7);
                    transition:transform 0.3s;
                }
                .input-area span{
                    position:absolute;
                    top:0;
                    left:8px;
                    font-size:6px;
                    color:gray;
                }
                .start-text{
                    background-color:black;
                    color:white;
                    display:inline-block;
                    padding:7px 150px;
                    margin:20px 0 0 0;
                }
                .copy-right{
                    margin:40px 0 0 0;
                }
                `}</style>
        </div>
    );
}