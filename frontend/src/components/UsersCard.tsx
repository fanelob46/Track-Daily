import { MdDeleteOutline } from "react-icons/md";
import UserInfo from "./UserInfo";
import {
  useGetAllUsersQuery,
  useDeleteUserMutation,
} from "../slices/userApiSlice";

const UsersCard = () => {
  const { data, isLoading } = useGetAllUsersQuery(); // Fetch users
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  // Loading state
  if (isLoading) return <p>Loading...</p>;

  
  if (!data || !data.data) return <p>No users found.</p>;

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await deleteUser(id).unwrap(); // Call delete mutation
        alert(response.message); // Show success message
      } catch (error: any) {
        console.error("Failed to delete user:", error);
        alert(error?.data?.message || "An error occurred.");
      }
    }
  };

  return (
    <div className="p-2 space-y-4 mr-4">
    <div className="bg-white rounded-xl p-2 shadow-lg">
        <UserInfo />
      </div>
      <section className="p-2 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">All Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-scroll">
          {data.data.length === 0 ? (
            <p>No users available.</p>
          ) : (
            data.data.map((user) => (
              <div
                key={user._id}
                className="border-2 border-gray-300 shadow-lg p-4 rounded-xl flex flex-col space-y-2 hover:scale-[1.01] cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p>{new Date(user.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="flex justify-end items-center">
                  <button
                    onClick={() => handleDelete(user._id)}
                    disabled={isDeleting}
                  >
                    <MdDeleteOutline className="text-red-500 cursor-pointer hover:scale-110" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default UsersCard;
