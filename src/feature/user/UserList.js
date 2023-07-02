import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserList = () => {
  const users = useSelector((pros) => pros.user);
  const renderCard = () =>
    users?.map((user, index) => (
      <div
        key={index}
        className="bg-gray-300 p-5 flex items-center justify-between"
      >
        <div>
          <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
          <span className="font-normal text-gray-600">{user.email}</span>
        </div>

        <div className="flex gap-4">
          <Link to={`edit-user/${user.id}`}>
            <button>
              <AiOutlineEdit />
            </button>
          </Link>
          <button>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    ));
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-2">
        <Link to="/add-user">
          <Button children="Add User" />
        </Link>
        {users.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No User
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
