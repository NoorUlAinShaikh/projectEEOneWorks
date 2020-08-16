import React from "react";
import { connect } from "react-redux";
import { fetchUsers, fetchUsersSaga } from "../store/actions";
import { ALL_AVAILABLE_USERS, THUNK } from "../helpers/constants";
import User from "./User";
import Pagination from "./Pagination";
import LoadingFallBack from "./LoadingFallback";

class UsersPage extends React.Component {
  componentDidMount() {
    const { middleware, fetchUsers, fetchUsersSaga } = this.props;
    if (middleware === THUNK) {
      fetchUsers();
    } else {
      fetchUsersSaga();
    }
  }

  renderPagination = () => {
    const { totalPages, currentPage } = this.props;

    return (
      <div className="ui right floated inverted menu" style={{ maxHeight: "1rem" }}>
        <Pagination totalPages={totalPages} currentPage={currentPage} />
      </div>
    );
  };

  renderUsersList = () => {
    const { users } = this.props;

    return users && users.length > 0 ? (
      <div className="ui large inverted relaxed divided list" style={{ padding: "1.5rem" }}>
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    ) : (
      <LoadingFallBack />
    );
  };

  render() {
    return (
      <div className="ui raised segment" style={{ background: "#2b2b2b" }}>
        <div className="ui red ribbon label">{ALL_AVAILABLE_USERS}</div>
        {this.props.totalPages > 1 && this.renderPagination()}
        {this.renderUsersList()}
      </div>
    );
  }
}

const mapStateToProps = ({
  users: {
    usersList,
    info: { totalPages, currentPage }
  },
  middleware
}) => {
  return { users: Object.values(usersList), totalPages, currentPage, middleware };
};

export default connect(mapStateToProps, { fetchUsers, fetchUsersSaga })(UsersPage);
