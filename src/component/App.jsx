import { useState } from "react";
import axios from "axios";
import { Modal, Button } from "antd";
import "ldrs/quantum";
import FishDescription from "./FishDescription";

const App = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(data);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setData(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setData(null);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    previewFile(selectedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
    previewFile(droppedFile);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
  };

  const handleApiRequest = () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    setLoading(true);
    showModal();
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const imageData = reader.result.split(",")[1];
      makeApiRequest(imageData);
    };

    reader.onerror = (error) => {
      console.error("Error reading file:", error);
      setLoading(false);
    };
  };

  const makeApiRequest = (imageData) => {
    axios({
      method: "POST",
      url: "https://outline.roboflow.com/fish-classification-jkthk/3",
      params: {
        api_key: "JVse7m8RfH74pfqvVHsp",
      },
      data: imageData,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        border: "2px dashed #ccc",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {previewUrl && (
        <img src={previewUrl} alt="Preview" style={{ maxWidth: "100%" }} />
      )}
      <br />
      <input type="file" onChange={handleFileChange} />
      <p className="para">or</p>
      <p className="para">Drag and drop an image here</p>
      <Button onClick={handleApiRequest}>Know your fish...</Button>
      <Modal
        title="Result"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modal-content">
          {loading && (
            <div>
              <l-quantum size="150" speed="1.75" color="#CE4422"></l-quantum>
            </div>
          )}
          {data && <FishDescription fish_class={data.predictions[0].class} match={data.predictions[0].confidence} />}
        </div>
      </Modal>
    </div>
  );
};

export default App;
