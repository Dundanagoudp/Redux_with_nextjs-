"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApiUsers } from "../redux/slice";

export default function ApiUsersPage() {
  const dispatch = useDispatch();
  const apiUserData = useSelector((state) => state.usersData.userAPIData);
  const loading = useSelector((state) => state.usersData.loading);
  const error = useSelector((state) => state.usersData.error);

  // Optional: Fetch users automatically when component mounts
  useEffect(() => {
    // dispatch(fetchApiUsers()); // Uncomment if you want to fetch on mount
  }, [dispatch]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">API Users</h1>
        <p className="text-gray-600 mt-2">
          View and manage users fetched from a REST API endpoint.
        </p>
      </header>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">User List</h2>
            <p className="text-sm text-gray-500">
              {apiUserData.length > 0
                ? `${apiUserData.length} users found`
                : "No users available"}
            </p>
          </div>
          <button
            onClick={() => dispatch(fetchApiUsers())}
            disabled={loading}
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {loading ? "Fetching..." : "Fetch Users"}
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
            <p>Error: {error}</p>
          </div>
        )}

        <div className="overflow-x-auto">
          {apiUserData.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {apiUserData.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {user.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-800">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No users
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Click the "Fetch Users" button to load user data.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}