import { Camera, Link2, Mail, MessageSquareText, User, Video } from "lucide-react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../../hooks/useAuth";
import DashboardRoutes from "../../../../router/DashboardRoutes";
import useAxiosPublic from "../../../../hooks/useAxiosPublic.jsx";
import Swal from "sweetalert2";

const VideoUpload = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    // console.log(user);

    // handleSubmit handler
    const handleSubmit = async e => {
        e.preventDefault();

        const form = e.target;
        const videoLink = form.video_link.value;
        const videoTitle = form.video_title.value;
        const videoDescription = form.video_description.value;
        const videoInfo= { name: user?.displayName, email: user?.email, videoLink, videoTitle, videoDescription };

        try{
            const res = await axiosPublic.post("/videos", videoInfo);
            const data = await res.data;

            if(data?.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "You have added a new video successfully!",
                    icon: "success"
                });
                form.reset()
            }
        }catch(err){
            console.error(err);
        }
    }

    return (
        <section className="video_upload w-full min-h-screen bg-gray-100 flex items-center justify-center">
            <DashboardRoutes />

            <div className="video_upload_inner container mx-auto px-6 py-14 w-full h-full text-center">
                <h1 className="text-2xl md:text-3xl text-slate-700 mb-10">Upload Video Here</h1>

                <form className="w-full md:w-[550px] mx-auto" onSubmit={handleSubmit}>
                    {/* username */}
                    <div className="username relative flex items-center mt-8 cursor-not-allowed">
                        <span className="absolute"><User className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-500" /></span>

                        <input type="text" className="block w-full py-3 cursor-not-allowed text-gray-500 bg-blue-50 outline-none border border-gray-300 rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-zinc-400 dark:focus:border-zinc-300 focus:ring-zinc-300 focus:outline-none focus:ring focus:ring-opacity-40" disabled={true} placeholder="Username" value={user?.displayName} />
                    </div>

                    {/* email */}
                    <div className="email relative flex items-center mt-4 cursor-not-allowed">
                        <span className="absolute"><Mail className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-500" /></span>

                        <input type="email" className="block w-full py-3 cursor-not-allowed text-gray-500 bg-blue-50 outline-none border border-gray-300 rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-zinc-400 dark:focus:border-zinc-300 focus:ring-zinc-300 focus:outline-none focus:ring focus:ring-opacity-40" disabled={true} placeholder="Email Address" value={user?.email} />
                    </div>

                    {/* video_link */}
                    <div className="video_link relative flex items-center mt-4">
                        <span className="absolute"><Link2 className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-500" /></span>

                        <input type="text" name="video_link" className="block w-full py-3 text-gray-700 bg-white outline-none border border-gray-300 rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-zinc-400 dark:focus:border-zinc-300 focus:ring-zinc-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Video Link" required />
                    </div>

                    {/* video_title */}
                    <div className="video_title relative flex items-center mt-4">
                        <span className="absolute"><Video className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-500" /></span>

                        <input type="text" name="video_title" className="block w-full py-3 text-gray-700 bg-white outline-none border border-gray-300 rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-zinc-400 dark:focus:border-zinc-300 focus:ring-zinc-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Video Title" required />
                    </div>

                    {/* video_description */}
                    <div className="video_description relative flex items-start mt-4">
                        <span className="absolute"><MessageSquareText className="w-5 h-5 mx-3 mt-4 text-gray-400 dark:text-gray-500" /></span>

                        <textarea type="text" name="video_description" className="block w-full py-3 text-gray-700 bg-white outline-none border border-gray-300 rounded-md px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-zinc-400 dark:focus:border-zinc-300 focus:ring-zinc-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Video Description" required />
                    </div>

                    {/* upload button */}
                    <button type="submit" className="block w-full py-3 mt-4 border border-gray-300 rounded-md outline-none bg-[#222E3C] hover:bg-[#2c394b] text-gray-400 hover:text-gray-200">Upload Video</button>
                </form>
            </div>
        </section>
    );
};

export default VideoUpload;