import "./styles.css";
const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="pageitem">
              {" "}
              <a
                href="#11"
                className="page-link"
                onClick={() => {
                  paginate(number);
                }}
              >
                {" "}
                {number}{" "}
              </a>{" "}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
