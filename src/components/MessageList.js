import React from "react";

export default function MessageList({ name }) {
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

                <div style={{ border: "1px solid black", display: "inline-block", width: "200px", wordBreak: "break-all" }}>
                    <div style={{ padding: "10px", display: "inline-block" }}>anpananpananpananpananpananpananpananpananpananpanpananpananpananpananpananpananpananpananpananpanan</div>
                </div>
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