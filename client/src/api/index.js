import axios from "axios";
const apiEndpoint = "http://localhost:5000/post";

export const fetchPosts = async () => await axios.get(apiEndpoint);

export const createPost = async (post) => await axios.post(apiEndpoint , post);