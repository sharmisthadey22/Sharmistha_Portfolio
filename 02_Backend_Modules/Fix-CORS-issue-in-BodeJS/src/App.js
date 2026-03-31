import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5001/api/message")
            .then((response) => response.json())
            .then((data) => setData(data.message))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

  return (
    <div> 
      <h1>Message from API:</h1>
      <p>{data}</p>
    </div>
  );
}    

export default App;