import { useState } from "react";
import { Title, Button } from "@/shared/components";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page-container">
      <Title text="To Do App" />
      <div className="content-container">
        <Button onClick={() => setCount((count) => count + 1)}>Click me</Button>
        <p>Count is {count}</p>
      </div>
    </div>
  );
}

export default Home;
