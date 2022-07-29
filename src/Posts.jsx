const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return <li key={post.id}> {post.title}</li>;
      })}
    </div>
  );
};

export default Posts;
