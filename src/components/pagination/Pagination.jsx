import React from "react";
import ReactPaginate from "react-paginate";

function Pagination(props) {
  const { totalProducts ,handlePageClick } = props;

  return (
    <div>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={totalProducts / 8}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName= {'active'}
      />
    </div>
  );
}

export default Pagination;
