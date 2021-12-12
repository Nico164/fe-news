import axios from "axios";
import React, { Fragment, useState } from "react";

const CreateNews = ({setActiveMenu}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addPost = async (e) => {
      e.preventDefault()

    const token = window?.localStorage.getItem("token");
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "http://localhost:8080/posts",
        {
          title: title,
          description: description,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setActiveMenu("my-news")
      setIsLoading(false)
    } catch (error) {
        setIsLoading(false)
    }
  };

  return (
    <Fragment>
      <form onSubmit={addPost}>
        <div className="mb-3">
          <label htmlFor="title" class="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e?.target?.value)}
            className="form-control"
            id="title"
            placeholder="title..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            onChange={(e) => setDescription(e?.target?.value)}
            className="form-control"
            id="description"
            rows="10"
          >
            {description}
          </textarea>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-secondary me-md-2" type="reset">
            Clear
          </button>
          <button className="btn btn-primary me-md-2" type="submit">
            Save
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default CreateNews;
