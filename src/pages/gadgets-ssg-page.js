import { useEffect, useState } from "react";

const Gadget = ({ gadget }) => {
  console.log({ gadget });
  return (
    <li style={{ border: "1px solid grey", margin: ["8px"], padding: ["8px"] }}>
      <div style={{ color: "blue" }}>Name: {gadget.name}</div>
      <div style={{ color: "green" }}>Color: {gadget.data?.color}</div>
      <div style={{ color: "red" }}>Capacity: {gadget.data?.capacity}</div>
    </li>
  );
};

const Home = ({ gadgets }) => {
  return (
    <div>
      <h1>Gadgets</h1>
      <ul style={{ display: "flex", flexWrap: "wrap", margin: ["16px"] }}>
        {gadgets.map((gadget) => (
          <Gadget key={gadget.id} gadget={gadget}></Gadget>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/gadgets");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  return {
    props: {
      gadgets: result,
    },
  };
}
