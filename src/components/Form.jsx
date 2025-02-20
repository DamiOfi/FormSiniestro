import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import {
  FormContainer,
  FormTitle,
  StyledForm,
  StyledInput,
  StyledTextarea,
  StyledLabel,
  SubmitButton,
} from "./Form.styles"; // Reutiliza los estilos

const FormAsegurado = () => {
  const form = useRef();
  const [images, setImages] = useState([]);
  const [imageNames, setImageNames] = useState([]);

  const handleImageUpload = async (e) => {
    const files = e.target.files;

    const uploadedImages = [];
    const uploadedImageNames = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "formularioSiniestro"); // Reemplaza con tu upload preset

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/drx3naywk/image/upload`, // Reemplaza con tu cloud name
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        uploadedImages.push(data.secure_url);
        uploadedImageNames.push(file.name);
      } catch (error) {
        console.error("Error uploading image: ", error);
      }
    }
    setImages([...images, ...uploadedImages]);
    setImageNames([...imageNames, ...uploadedImageNames]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    const newImageNames = [...imageNames];
    newImages.splice(index, 1);
    newImageNames.splice(index, 1);
    setImages(newImages);
    setImageNames(newImageNames);
  };

  const adjustTextareaHeight = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Convierte el array de imágenes a una cadena separada por comas
    const imagesString = images.length > 0 ? images.join(", ") : "No se subieron imágenes";

    const formData = {
      nombreAsegurado: form.current.nombreAsegurado.value,
      patente: form.current.patente.value,
      detalleDelHecho: form.current.detalleDelHecho.value,
      images: imagesString, // Envía las imágenes como una cadena de texto
    };

    emailjs
      .send(
        "service_5fdrqv9", // Reemplaza con el Service ID del nuevo correo
        "template_zx82x48", // Reemplaza con el Template ID del nuevo correo
        formData,
        "WQ_PaA_hXTv221oPM" // Reemplaza con el User ID del nuevo correo
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "¡Mensaje enviado!",
            text: "Tu mensaje se envió correctamente. Nos pondremos en contacto contigo pronto.",
            confirmButtonText: "Aceptar",
          });
          form.current.reset();
          setImages([]);
          setImageNames([]);
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ocurrió un error al enviar tu mensaje. Por favor, intenta nuevamente.",
            confirmButtonText: "Aceptar",
          });
        }
      );
  };

  return (
    <FormContainer>
      <FormTitle>Reporte de Asegurado</FormTitle>
      <StyledForm ref={form} onSubmit={sendEmail}>
        <div className="input-container">
          <StyledLabel htmlFor="nombreAsegurado">Nombre del Asegurado:</StyledLabel>
          <StyledInput
            type="text"
            name="nombreAsegurado"
            id="nombreAsegurado"
            placeholder="Ej: Juan Pérez"
            required
          />
        </div>
        <div className="input-container">
          <StyledLabel htmlFor="patente">Patente:</StyledLabel>
          <StyledInput
            type="text"
            name="patente"
            id="patente"
            placeholder="Ej: AB123CD"
            required
          />
        </div>
        <div className="input-container">
          <StyledLabel htmlFor="detalleDelHecho">Detalle del Hecho:</StyledLabel>
          <StyledTextarea
            name="detalleDelHecho"
            id="detalleDelHecho"
            placeholder="Describe los detalles del hecho"
            required
            onInput={adjustTextareaHeight}
          />
        </div>
        <div className="input-container">
          <StyledLabel htmlFor="images">Agrega imágenes (opcional):</StyledLabel>
          <p style={{ fontSize: "12px", color: "#666", marginTop: "5px", marginBottom: "10px" }}>
            Solo se permiten fotos relacionadas con el caso. Cualquier imagen inapropiada resultará en la <b>NO</b> continuidad del caso.
          </p>
          <StyledInput
            type="file"
            name="images"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
          />
          <div className="container-img">
            {imageNames.map((name, index) => (
              <div
                className="container-list"
                key={index}
              >
                <span className="img-span">{name}</span>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  style={{
                    marginLeft: "15px",
                    background: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",
                    width: "23px",
                    height: "23px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default FormAsegurado;