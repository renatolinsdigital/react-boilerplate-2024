import { useState } from "react";
import { Title, Button, Text } from "@/shared/components";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="page-container p-5">
      <Title>To Do App</Title>
      <div className="content-container column gap-2">
        <Button onClick={() => setCount((count) => count + 1)}>Click me</Button>
        <Text>Count is {count}</Text>
      </div>
    </div>
  );
}

export default Home;
