import { Component } from '@angular/core';

interface UserInfo {
    name:string,
    user_id:string,
    message:string,
    date:number,
    avatar:string
}

const addZero = (n:number) => {
  const l = ("" + n).length
  return l === 1 ? "0" + n : "" + n;
}

@Component({
  selector: 'app-message-bubble',
  imports: [],
  templateUrl: './message-bubble.html',
  styleUrl: './message-bubble.css',
})
export class MessageBubble {

  protected readonly userBubbleTest:UserInfo =   {
    "name": "Ana García",
    "user_id": "ana_garcia_123",
    "message": "hola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como estashola como esta hola como estashola como estashola como estashola como estashola como estashola hola como estashola como estashola como estashola como estashola como estashola hola como estashola como estashola como estashola como estashola como estashola hola como estashola como estashola como estashola como estashola como estashola hola como estashola como estashola como estashola como estashola como estashola hola como estashola como estashola como estashola como estashola como estashola hola como estashola como estashola como estashola como estashola como estashola hola como estashola como estashola como estashola como estashola como estashola ",
    "date": 1703136000000,
    "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVfHORQFLyUf_rNove-xUmxIskDeMJ63REz_YIMQ6S0vCyQdkBvJos4igKspvCgpqnpy8h0xM--1uckzZIxDgyoHy37-MowkF-YzvVx8&s=10"
  }

  protected getTime24Hours() {
    const date = new Date(this.userBubbleTest.date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${addZero(hours)}:${addZero(minutes)}`;
  }

  protected getMessage() {
    const charCount = this.userBubbleTest.message.length
    const maxCount = 700
    const messageSmall = this.userBubbleTest.message.slice(0,maxCount)
    return charCount > maxCount ? messageSmall + " ..." : messageSmall
  }

}


