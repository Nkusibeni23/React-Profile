import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skillData = [
  {
    name: "HTML",
    level: "intermediate",
    color: "#f18247",
  },
  {
    name: "CSS",
    level: "advanced",
    color: "#53a6e0",
  },
  {
    name: "JavaScripts",
    level: "Advanced",
    color: "#F9D423",
  },
  {
    name: "React",
    level: "Intermediate",
    color: "#61DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="IMG_2840.JPG" alt="Benny" />;
}

function Intro() {
  return (
    <div>
      <h1>Benny Chrispin</h1>
      <p>
        <b>Full Stack Developer</b> And Student at Udemy
      </p>
    </div>
  );
}

function SkillList() {
  const programing = skillData;
  return (
    <>
      {programing.map((list) => (
        <li style={{ color: `${list.color}` }}>
          {`${list.level}: ${list.name}`}{" "}
        </li>
      ))}
    </>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
