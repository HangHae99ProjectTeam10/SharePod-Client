import React, { useEffect } from "react";
import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";
import Stomp, { client } from "stompjs";
// import * as StompJs from "@stomp/stompjs";/

const PersonalChat2 = () => {
  const SockJs = new SockJS("http://13.125.219.196/ws-stomp");
  const StompClient = Stomp.over(SockJs);
  //   const client = new StompJs.Client({
  //     brokerURL: "ws://13.125.219.196/ws-stomp",
  //     connectHeaders: {
  //       login: "user",
  //       passcode: "password",
  //     },
  //     debug: function (str) {
  //       console.log("debug", str);
  //     },
  //     reconnectDelay: 50000, //자동 재 연결
  //     heartbeatIncoming: 4000,
  //     heartbeatOutgoing: 4000,
  //   });

  //   client.onConnect = function (frame) {
  //     console.log("onconnect", frame);
  //   };

  //   client.onStompError = function (frame) {
  //     // Will be invoked in case of error encountered at Broker
  //     // Bad login/passcode typically will cause an error
  //     // Complaint brokers will set `message` header with a brief message. Body may contain details.
  //     // Compliant brokers will terminate the connection after any error
  //     console.log("Broker reported error: " + frame.headers["message"]);
  //     console.log("Additional details: " + frame.body);
  //   };

  //   client.activate();

  //   // vue.js
  const sendMessage = () => {
    StompClient.send(
      "/pub/templates/chat/message",
      {},
      JSON.stringify({
        chatRoomId: 7,
        userId: 2,
        message: "hi",
      })
    );
  };
  const recvMessage = (recv) => {
    console.log(recv);
  };

  //   // pub/sub event
  StompClient.connect(
    {},
    function (frame) {
      StompClient.subscribe("/sub/chat/room/" + 7, function (message) {
        var recv = JSON.parse(message.body);
        console.log("cc");
        console.log(recv);
        recvMessage(recv);
      });
      // ws.send("/pub/chat/message", {}, JSON.stringify({type:'ENTER', chatId:vm.$data.chatId, sender:vm.$data.sender}));
    },
    function (error) {
      alert("error " + error);
    }
  );

  return (
    <div>
      <button
        onClick={() => {
          sendMessage();
        }}
      >
        send
      </button>
    </div>
  );
};
export default PersonalChat2;
