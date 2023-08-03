import "./Consoles.css";
import { Link } from "react-router-dom";

const Consoles = () => {
  const consoles = [
    { id: "c1", title: "playStation 1" },
    { id: "c2", title: "playStation 2" },
    { id: "c3", title: "playStation 3" },
    { id: "c4", title: "playStation 4" },
  ];

  return (
    <div className="consoles">
      <h1>Select your console</h1>
      <ul>
        {consoles.map((console, index) => {
          return (
            <li key={index}>
              {" "}
              <Link to={`/consoles/${console.id}`}>{console.title}</Link>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Consoles;
