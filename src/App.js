import { useState, useEffect } from "react";
import Posts from "./Posts";
import Pagination from "./Pagination";
import axios from "axios";
import "./styles.css";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [currentpage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerpage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // methods
  const indexOfLastPost = currentpage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPage = posts.slice(indexOfFirstPost, indexOfLastPost);

  // set page
  const paginate = (Number) => setCurrentPage(Number);
  return (
    <div className="App">
      <h3>All comments are listed below : </h3>
      <Posts posts={currentPage} />
      <Pagination
        totalPosts={posts.length}
        postPerPage={postPerPage}
        paginate={paginate}
      />{" "}
    </div>
  );
}
