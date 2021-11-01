import React, { useState } from 'react';

export default function SignIn({ name, setName }) {
    const [string, setString] = useState("");
    return (
        <div className="global">
            <div className="">
                <h2>ようこそ</h2>
                <div className="input-area">
                    <input
                        value={string}
                        autoFocus
                        onChange={(e) => setString(e.target.value)}
                        placeholder="ニックネーム"
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                setName(string);
                            }
                        }}
                    />
                    {string && (<span>ニックネーム</span>)}
                </div><br />

                <button
                    className={`start-text ${!string && "disable"}`}
                    disabled={!string}
                    onClick={() => setName(string)}>
                    はじめる
                </button>
                <div className="copy-right">&copy;{string}</div>
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
                    border:1px solid gray;
                }
                .input-area input:focus{
                    border:2px solid blue;
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
                    cursor:pointer;
                }
                .disable{
                    background-color:gray;
                    cursor:not-allowed;
                }
                .copy-right{
                    margin:40px 0 0 0;
                }
                `}</style>
        </div>
    );
}