import React, { useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");

  const createProject = async () => {
    const newProject = {
      name: name,
      description: description,
      year: year,
    };
    try {
      const response = await axios.post(
        "http://127.0.0.1:5173/api/CreateProject",
        newProject
      );
      setProjects([...projects, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProject();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Année:
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <button type="submit">Créer un nouveau projet</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Description</th>
            <th>Année</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.year}</td>
              <td>
                <button>Modifier</button>
                <button>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
