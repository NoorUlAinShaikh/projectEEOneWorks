import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchUsersSaga } from "../store/actions";
import { THUNK } from "../helpers/constants";

const Pagination = ({ currentPage, totalPages }) => {
  const middleware = useSelector(({ middleware }) => middleware);
  const dispatch = useDispatch();

  const handlePageChange = e => {
    const nextPage = e.target.getAttribute("page");
    if (nextPage && nextPage !== currentPage) {
      if (middleware === THUNK) {
        dispatch(fetchUsers(nextPage));
      } else {
        dispatch(fetchUsersSaga(nextPage));
      }
    }
  };

  return [...Array(totalPages)].map((e, index) => {
    const page = index + 1;
    return (
      <button
        key={index}
        page={page}
        onClick={handlePageChange}
        className={`red item ${page === currentPage ? "active" : ""}`}
      >
        {page}
      </button>
    );
  });
};

export default Pagination;
