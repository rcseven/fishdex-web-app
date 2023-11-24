import { useState } from "react";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null); // [1]

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleApiRequest = () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const imageData = reader.result.split(",")[1]; // Extract base64-encoded data
      makeApiRequest(imageData);
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
    };
  };

  const makeApiRequest = (imageData) => {
    axios({
      method: "POST",
      url: "https://outline.roboflow.com/fish-classification-jkthk/3",
      params: {
        api_key: "JVse7m8RfH74pfqvVHsp"
      },
      data: imageData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
      .then(function (response) {
		setData(response.data); // [1]
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  };

  return (
    <div>
		{data && <h1>{data.predictions[0].class}</h1>}
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleApiRequest}>Make API Request</button>
    </div>
  );
};

export default App;
