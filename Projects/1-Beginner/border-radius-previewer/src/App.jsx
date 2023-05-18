import { useState } from "react";

function App() {
  const [count, setCount] = useState("50px");
  let x = 0;

  return (
    <div className="container">
      <div className="previewer">
        <img
          style={{ borderRadius: `${count}` }}
          className="picture"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/26aa084b-6084-4be3-8628-95f078550408/d7jaspk-04e6fc48-b17a-492a-88ae-1014f48b4dc6.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI2YWEwODRiLTYwODQtNGJlMy04NjI4LTk1ZjA3ODU1MDQwOFwvZDdqYXNway0wNGU2ZmM0OC1iMTdhLTQ5MmEtODhhZS0xMDE0ZjQ4YjRkYzYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U2IztrwAQ3TwAABEbKcTVW4t2jntpWDsN4Ay_DyuXGY"
          alt=""
        />
      </div>
      <input
        className="input"
        value={count}
        onInput={(e) => setCount(e.target.value)}
      ></input>
      <h1>Instructions</h1>
      <p>
        Please enter values with the proper units of measurements such as px or
        rem
      </p>
      <p>Examples: 50% 100px 75rem 80em</p>
      {/* <button className="button">Enter</button> */}
    </div>
  );
}

export default App;
