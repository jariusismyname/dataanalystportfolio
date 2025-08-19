// src/components/AdminUpload.jsx
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AdminUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageBase64, setImageBase64] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageBase64(reader.result); // this will be base64 string
    };
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !imageBase64) {
      alert("Fill all fields and select an image!");
      return;
    }
    await addDoc(collection(db, "gallery"), {
      title,
      description,
      imageUrl: imageBase64,
    });
    alert("Uploaded to Firestore!");
    setTitle("");
    setDescription("");
    setImageBase64("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px", textAlign: "center" }}>
      <h2>Upload New Gallery Item</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /><br />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br /><br />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <br /><br />
      {imageBase64 && (
        <img src={imageBase64} alt="Preview" style={{ width: "150px", borderRadius: "10px" }} />
      )}
      <br /><br />
      <button type="submit">Save to Firestore</button>
    </form>
  );
};

export default AdminUpload;
