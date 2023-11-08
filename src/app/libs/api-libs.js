export const getProjectResponse = async (resource, query) => {
  const response = await fetch("/public/data/projectData.json"); // Remove /public from the URL
  const project = await response.json();
  return project;
};
