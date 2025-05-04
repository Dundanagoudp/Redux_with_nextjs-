"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";
import Link from "next/link";

export default function AddUser() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleAddUser = () => {
    if (!name.trim()) return;
    dispatch(addUser(name.trim()));
    setName("");
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add User"
        className="flex-1 px-4 py-2 border text-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAddUser}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Add
      </button>
      <Link href="/removeuser" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
        Remove User
      </Link>
      <Link href="/todolist" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
        Todo List
      </Link>
      <Link href="/apiusers" className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition">
        API Users
      </Link>
    </div>
  );
}