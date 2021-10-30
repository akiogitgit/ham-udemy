//hashをするやつ
import crypto from "crypto";

//nameをstringで受け取る
export default function Gravatar(string) {
    //stringを小文字にする
    const lowerCaseString = string.trim().toLowerCase();

    const md5 = crypto.createHash("md5");
    // stringをハッシュ化する
    const digest = md5.update(lowerCaseString, "binary").digest("hex");

    //ハッシュ化された文字列をURLに埋め込んで返す。
    return `https://www.gravatar.com/avatar/${digest}/?d=robohash`;
}