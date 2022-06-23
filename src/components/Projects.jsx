import { useQuery } from "@apollo/client";
import React from "react";
import { GET_PROJECTS } from "../queries/projectQueries";
import ProjectCard from "./ProjectCard";
import Spinner from "./Spinner";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) {
    console.log(error);
    return <p>Error :( </p>;
  }

  return (
    <>
      {data.projects.length > 0 ? (
        <div className="row">
          {data.projects.map((project) => (
            <div className="col-md-6">
              <ProjectCard key={project.id} project={project} />
            </div>
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
}
