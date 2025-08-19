import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import "./Gallery.css";
import FadeSection from "./FadeSection";
import AdminUpload from "./AdminUpload";
import TypingEffect from "./TypingEffect";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // fetch images and order by `order` field
  const fetchGallery = async () => {
    const querySnapshot = await getDocs(collection(db, "gallery"));
    const fetchedItems = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    fetchedItems.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    setItems(fetchedItems);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // admin login
  const handleAdminLogin = () => {
    const password = prompt("Enter admin password:");
    if (password === "Connectedisme1234@") {
      setIsAdmin(true);
    } else {
      alert("Wrong password!");
    }
  };

  // edit item
  const handleEdit = async (id, updated) => {
    await updateDoc(doc(db, "gallery", id), updated);
    fetchGallery();
  };

  // delete item
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "gallery", id));
    fetchGallery();
  };

  // drag end handler (admin only)
  const handleDragEnd = async (result) => {
    if (!result.destination || !isAdmin) return;

    const newItems = Array.from(items);
    const [movedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, movedItem);
    setItems(newItems);

    // update Firestore order
    newItems.forEach(async (item, index) => {
      await updateDoc(doc(db, "gallery", item.id), { order: index });
    });
  };

  return (
    <div id="gallery">
      <div className="gallery-container">
        <FadeSection>
          <div style={{ textAlign: "center" }}>
            <TypingEffect
              words={["Gallery", "Certifications", "Stories", "Dashboards", "Codes"]}
              speed={150}
              pause={1000}
            />
<div>
            {!isAdmin && (
              <a className="admin-btn" onClick={handleAdminLogin}>
                I am an Admin
              </a>
            )}
          </div>
</div>
          {isAdmin && <AdminUpload />}

          {/* DragDropContext only affects admin */}
          {isAdmin ? (
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="gallery-droppable">
                {(provided) => (
                  <div
                    className="gallery-grid"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {items.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            className="gallery-wrapper"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <h3 className="gallery-title">{item.title}</h3>
                            <div className="gallery-item">
                              <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="gallery-img"
                                onError={(e) =>
                                  (e.target.src =
                                    "https://via.placeholder.com/600x400?text=No+Image")
                                }
                              />
                              <p>{item.description}</p>
                              <div className="admin-actions">
                                <button
                                  onClick={async () => {
                                    const newTitle = prompt("New title:", item.title);
                                    const newDescription = prompt(
                                      "New description:",
                                      item.description
                                    );
                                    if (!newTitle || !newDescription) return;

                                    const changeImage = window.confirm(
                                      "Do you want to pick a new image?"
                                    );
                                    if (changeImage) {
                                      const fileInput = document.createElement("input");
                                      fileInput.type = "file";
                                      fileInput.accept = "image/*";

                                      fileInput.onchange = async (e) => {
                                        const file = e.target.files[0];
                                        if (!file) return;

                                        const reader = new FileReader();
                                        reader.onloadend = async () => {
                                          const newImageUrl = reader.result;
                                          await handleEdit(item.id, {
                                            title: newTitle,
                                            description: newDescription,
                                            imageUrl: newImageUrl,
                                          });
                                        };
                                        reader.readAsDataURL(file);
                                      };

                                      fileInput.click();
                                    } else {
                                      await handleEdit(item.id, {
                                        title: newTitle,
                                        description: newDescription,
                                        imageUrl: item.imageUrl,
                                      });
                                    }
                                  }}
                                >
                                  Edit
                                </button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          ) : (
            // Non-admin view (no dragging)
            <div className="gallery-grid">
              {items.map((item) => (
                <div key={item.id} className="gallery-wrapper">
                  <h3 className="gallery-title">{item.title}</h3>
                  <div className="gallery-item">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="gallery-img"
                      onError={(e) =>
                        (e.target.src =
                          "https://via.placeholder.com/600x400?text=No+Image")
                      }
                    />
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </FadeSection>
      </div>
    </div>
  );
};

export default Gallery;
