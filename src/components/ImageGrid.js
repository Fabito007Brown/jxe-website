import React, { useState } from "react";
import "./ImageGridStyles.css";
import gridplaceholder from "../assets/kidsVisits.jpg";
import grid1 from "../assets/grid1.jpg";
import grid2 from "../assets/grid2.jpg";
import grid3 from "../assets/grid3.jpg";
import grid4 from "../assets/grid4.jpg";
import grid5 from "../assets/grid5.jpg";
import grid6 from "../assets/grid6.jpg";
import grid7 from "../assets/grid7.jpg";
import grid8 from "../assets/grid8.jpg";
import grid9 from "../assets/grid9.jpg";
import grid10 from "../assets/grid10.jpg";
import grid11 from "../assets/grid11.jpg";
import grid12 from "../assets/grid12.jpg";
import grid13 from "../assets/grid13.jpg";
import grid14 from "../assets/grid14.jpg";
import grid15 from "../assets/grid15.jpg";
import grid16 from "../assets/grid16.jpg";
import grid17 from "../assets/grid17.jpg";
import grid18 from "../assets/grid18.jpg";
import grid19 from "../assets/grid19.jpg";
import grid20 from "../assets/grid20.jpg";
import grid21 from "../assets/grid21.jpg";
import grid22 from "../assets/grid22.jpg";
import grid23 from "../assets/grid23.jpg";
import grid24 from "../assets/grid24.jpg";
import grid25 from "../assets/grid25.jpg";
import grid26 from "../assets/grid26.jpg";
import grid27 from "../assets/grid27.jpg";
import grid28 from "../assets/grid28.jpg";
import grid29 from "../assets/grid29.jpg";
import grid30 from "../assets/grid30.jpg";

function ImageGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <h3>Nuestras Experiencias en El Espino</h3>
      <p>Dale click a la imagen para hacerla más grande</p>
      <div className="pics-grid">
        <img alt="img" src={grid1} onClick={() => openModal(grid1)} />

        <img alt="img" src={grid2} onClick={() => openModal(grid2)} />

        <img alt="img" src={grid3} onClick={() => openModal(grid3)} />

        <img alt="img" src={grid4} onClick={() => openModal(grid4)} />

        <img alt="img" src={grid5} onClick={() => openModal(grid5)} />

        <img alt="img" src={grid6} onClick={() => openModal(grid6)} />

        <img alt="img" src={grid7} onClick={() => openModal(grid7)} />

        <img alt="img" src={grid8} onClick={() => openModal(grid8)} />

        <img alt="img" src={grid9} onClick={() => openModal(grid9)} />

        <img alt="img" src={grid10} onClick={() => openModal(grid10)} />

        <img alt="img" src={grid11} onClick={() => openModal(grid11)} />

        <img alt="img" src={grid12} onClick={() => openModal(grid12)} />

        <img alt="img" src={grid13} onClick={() => openModal(grid13)} />

        <img alt="img" src={grid14} onClick={() => openModal(grid14)} />

        <img alt="img" src={grid15} onClick={() => openModal(grid15)} />

        <img alt="img" src={grid16} onClick={() => openModal(grid16)} />

        <img alt="img" src={grid17} onClick={() => openModal(grid17)} />

        <img alt="img" src={grid18} onClick={() => openModal(grid18)} />

        <img alt="img" src={grid19} onClick={() => openModal(grid19)} />

        <img alt="img" src={grid20} onClick={() => openModal(grid20)} />

        <img alt="img" src={grid21} onClick={() => openModal(grid21)} />

        <img alt="img" src={grid22} onClick={() => openModal(grid22)} />

        <img alt="img" src={grid23} onClick={() => openModal(grid23)} />

        <img alt="img" src={grid24} onClick={() => openModal(grid24)} />

        <img alt="img" src={grid25} onClick={() => openModal(grid25)} />

        <img alt="img" src={grid26} onClick={() => openModal(grid26)} />

        <img alt="img" src={grid27} onClick={() => openModal(grid27)} />

        <img alt="img" src={grid28} onClick={() => openModal(grid28)} />

        <img alt="img" src={grid29} onClick={() => openModal(grid29)} />

        <img alt="img" src={grid30} onClick={() => openModal(grid30)} />

        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <img
                alt="modal-img"
                src={selectedImage}
                className="modal-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageGrid;
