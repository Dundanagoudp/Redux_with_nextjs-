"use client";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../redux/slice";
import AddUser from "../components/AddUser";

export default function RemoveUser() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg space-y-8">

        {/* User List Box */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">User List</h2>
          {users.length === 0 ? (
            <p className="text-gray-500 text-center">No users added yet.</p>
          ) : (
            <ul className="space-y-2">
              {users.map((user) => (
                <li
                  key={user.id}
                  className="group px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 flex justify-between items-center hover:bg-gray-200 transition"
                >
                  <span>{user.name}</span>
                
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}