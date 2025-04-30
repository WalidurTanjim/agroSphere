// components/ProfileUpdate.jsx
import { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify"; // Optional: for notifications
import useAuth from "../../hooks/useAuth";
import DashboardRoutes from "../../router/DashboardRoutes";

const ProfileUpdate = () => {
    const { user, updateUserProfile, setUser } = useAuth();
    const [name, setName] = useState(user?.displayName || "");
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            let photoURL = user?.photoURL;

            // If a new image is selected, upload to Firebase Storage
            if (imageFile) {
                const storage = getStorage();
                const storageRef = ref(storage, `profilePictures/${user.uid}`);
                await uploadBytes(storageRef, imageFile);
                photoURL = await getDownloadURL(storageRef);
            }

            // Update user profile
            await updateUserProfile(name, photoURL);

            // Reflect the change in local context
            setUser({ ...user, displayName: name, photoURL });

            toast.success("Profile updated!");
        } catch (error) {
            console.error("Profile update error:", error);
            toast.error("Profile update failed.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 sm:p-8 bg-white rounded-2xl shadow-lg">
            <DashboardRoutes></DashboardRoutes>
            <h2 className="text-xl font-semibold mb-4">Update Profile</h2>
            <form onSubmit={handleUpdate} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Upload Profile Picture</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImageFile(e.target.files[0])}
                        className="block w-full text-sm text-gray-900 file:mr-4 file:rounded-md file:border-0 file:bg-green-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-green-700 hover:file:bg-green-100"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-md bg-green-600 px-4 py-2 text-white font-medium hover:bg-green-700 transition-colors duration-300"
                >
                    {loading ? "Updating..." : "Update Profile"}
                </button>
            </form>


            {user?.photoURL && (
                <div className="mt-6">
                    <p>Current Profile Picture:</p>
                    <img src={user.photoURL} alt="Profile" className="w-24 h-24 rounded-full mt-2" />
                </div>
            )}
        </div>
    );
};

export default ProfileUpdate;