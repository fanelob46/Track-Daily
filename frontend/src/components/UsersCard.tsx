import { MdDeleteOutline } from "react-icons/md";
import UserInfo from "./UserInfo";
import {
  useGetAllUsersQuery,
  useDeleteUserMutation,
} from "../slices/userApiSlice";

const UsersCard = () => {
  const { data, isLoading } = useGetAllUsersQuery();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  // Loading state
  if (isLoading) return <p>Loading...</p>;

  // Ensure data is defined and has users before mapping
  if (!data || !data.data) return <p>No users found.</p>;

  const handleDelete = async (id: string) => {
    console.log(id);
    try {
      const response = await deleteUser(id).unwrap();
      alert(response.message); // Show success message
    } catch (error: any) {
      console.error("Failed to delete user:", error);
      alert(error?.data?.message || "An error occurred.");
    }
  };

  return (
    <>
      <UserInfo />
      <section className="">
        <h1 className="text-2xl font-semibold mb-4">All Users</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6   px-10 overflow-y-scroll">
          {/* Render User Cards */}
          {data.data.length === 0 ? (
            <p>No users available.</p>
          ) : (
            data.data.map((user) => (
              <div
                key={user.id}
                className="border-2 border-gray-300 shadow-lg p-4 rounded-xl flex flex-col space-y-2 hover:scale-[1.01] cursor-pointer"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                  <p>{user.createdAt}</p>
                  <h4>{user.id}</h4>
                </div>
                <div className="flex justify-end items-center">
                  <button
                    onClick={() => handleDelete(user.id)}
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
    </>
  );
};

export default UsersCard;
