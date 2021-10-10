import React from "react";
import Paginator from './../common/Paginator/Paginator.jsx';
import User from "./User";

const Users = ({ totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
  return <div>
    <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
    <div>
      {
        users.map(u => <User user={u}
          followingInProgress={props.followingInProgress}
          key={u.id}
          unfollow={props.unfollow}
          follow={props.follow}
        />
        )
      }
    </div>
  </div>
}
export default Users