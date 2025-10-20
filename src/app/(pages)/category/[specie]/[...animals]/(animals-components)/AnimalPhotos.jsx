"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./AnimalPhotos.module.css";
import CloseIcon from "@/componentes/icons/X";

export default function AnimalPhotos({ images }) {
  if (!images || images.length === 0) return null;

  const [main, ...rest] = images;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (img) => setSelectedImage(img);
  const handleClose = () => setSelectedImage(null);

  return (
    <section className={styles.photosContainer}>
      {/* 🔹 Imagem principal */}
      <div
        key={main.id}
        className={styles.photoMain}
        onClick={() => handleClick(main)}
      >
        <Image
          src={main.src || "/placeholder.svg"}
          alt={
            main.alt ||
            "A descrição não foi adicionada, lamentamos o invonveniente."
          }
          fill
          sizes="(min-width: 1230px) 551px, (min-width: 860px) 45vw, 90vw"
        />
      </div>

      {/* 🔹 Outras imagens secundárias */}
      {rest.slice(0, 4).map((img) => (
        <div
          key={img.id}
          className={styles.photoSecondary}
          onClick={() => handleClick(img)}
        >
          <Image
            src={img.src || "/placeholder.svg"}
            alt={
              img.alt ||
              "A descrição não foi adicionada, lamentamos o invonveniente."
            }
            fill
            sizes="(min-width: 1230px) 180px, (min-width: 860px) 15vw, 27vw"
          />
        </div>
      ))}

      {/* 🔹 Modal de expansão */}
      {selectedImage && (
        <div className={styles.photoOverlay} onClick={handleClose}>
          <div className={styles.photoCloseBtn}>
            <CloseIcon size="24px" />
          </div>

          <div className={styles.photoWrapper}>
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={
                selectedImage.alt ||
                "A descrição não foi adicionada, lamentamos o inconveniente."
              }
              width={1000}
              height={800}
              className={styles.photoExpanded}
            />
          </div>
        </div>
      )}
    </section>
  );
}
