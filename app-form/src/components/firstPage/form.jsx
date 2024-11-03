import React, { useState, forwardRef, useImperativeHandle } from "react";

const Form = forwardRef(({ onSubmit }, ref) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  // REGULAR EXPRESSIONS
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9\s()-]{7,15}$/;
  const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

  useImperativeHandle(ref, () => ({
    handleSubmit: () => {
      if (
        !errors.name &&
        !errors.email &&
        !errors.phone &&
        name &&
        email &&
        phone
      ) {
        // Si el formulario es válido, llamar a la función onSubmit
        onSubmit({ name, email, phone });

        // Reiniciar los campos
        resetForm();
      } else {
        alert("Please correct the errors before submitting");
      }
    },
  }));

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setErrors({ name: "", email: "", phone: "" }); // Limpiar también los errores
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado del campo correspondiente
    if (name === "name") {
      setName(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: nameRegex.test(value) ? "" : "Invalid name format",
      }));
    }

    if (name === "email") {
      setEmail(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: emailRegex.test(value) ? "" : "Invalid email format",
      }));
    }

    if (name === "phone") {
      setPhone(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: phoneRegex.test(value) ? "" : "Invalid phone number format",
      }));
    }
  };

  return (
    <form>
      <div>
        <div className="flex justify-between">
          <label className="block font-semibold text-primary-marine-blue" htmlFor="name">
            Name
          </label>
          {errors.name && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.name}</p>
          )}
        </div>
        <input
          className={`w-full py-2 px-4 border rounded outline-none ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          value={name}
          required
          placeholder="e.g., Stephen King"
        />
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <label className="block font-semibold text-primary-marine-blue" htmlFor="email">
            Email Address
          </label>
          {errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.email}</p>
          )}
        </div>
        <input
          className={`w-full py-2 px-4 border rounded outline-none ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          value={email}
          required
          placeholder="e.g., stephenking@lorem.com"
        />
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <label className="block font-semibold text-primary-marine-blue" htmlFor="phone">
            Phone Number
          </label>
          {errors.phone && (
            <p style={{ color: "red", fontSize: "14px" }}>{errors.phone}</p>
          )}
        </div>
        <input
          className={`w-full py-2 px-4 border rounded outline-none ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          onChange={handleChange}
          type="text"
          id="phone"
          name="phone"
          value={phone}
          required
          placeholder="e.g., +1 (234) 567-8900"
        />
      </div>
    </form>
  );
});

export default Form;
