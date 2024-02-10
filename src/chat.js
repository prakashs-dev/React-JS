import React from "react";

const chatData = [
  {
    sender: "Prakash",
    message: "Hello Every One",
    time: "3 min ago",
  },
  {
    sender: "God",
    message: "God bless you",
    time: "5 min ago",
  },
  {
    sender: "Evil",
    message: "Kill every one",
    time: "2 min ago",
  },
];

export const Card = ({ sender, message, time: timestamp }) => {
  return (
    <div style={styles.card}>
      <b>{sender}</b>
      <p>{message}</p>
      <span style={styles.time}>{timestamp}</span>
    </div>
  );
};

export const Chat = () => {
  return (
    <div>
      {/* <Card
        sender={chatData[0].sender}
        message={chatData[0].message}
        time={chatData[0].time}
      ></Card>
      <Card
        sender={chatData[1].sender}
        message={chatData[1].message}
        time={chatData[1].time}
      ></Card>
      <Card
        sender={chatData[2].sender}
        message={chatData[2].message}
        time={chatData[2].time}
      ></Card> */}
      {chatData.map((chatObj) => (
        <Card
          sender={chatObj.sender}
          message={chatObj.message}
          time={chatObj.time}
        ></Card>
      ))}
    </div>
  );
};

const styles = {
  card: {
    boxShadow: "4px 4px 4px gray",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
  },
  time: {
    alignSelf: "flex-end",
    fontSize: "1.3rem",
  },
};
