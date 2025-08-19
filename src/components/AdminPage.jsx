// src/pages/AdminPage.jsx
import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const AdminPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageBase64, setImageBase64] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setImageBase64(reader.result);
    if (file) reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !imageBase64) {
      alert("Fill all fields and pick an image!");
      return;
    }
    await addDoc(collection(db, "gallery"), {
      title,
      description,
      imageUrl: imageBase64,
    });
    alert("Saved to Firestore ✅");
    setTitle("");
    setDescription("");
    setImageBase64("");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Admin Upload Page</h2>
      <form onSubmit={handleSubmit}>
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
          <img
            src={imageBase64}
            alt="Preview"
            style={{ width: "150px", borderRadius: "10px" }}
          />
        )}
        <br /><br />
        <button type="submit">Save to Firestore</button>
      </form>
    </div>
  );
};

export default AdminPage;
