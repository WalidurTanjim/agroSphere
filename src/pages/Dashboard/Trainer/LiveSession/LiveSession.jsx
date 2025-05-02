import moment from "moment/moment";
import useAuth from "../../../../hooks/useAuth";
import DashboardRoutes from "../../../../router/DashboardRoutes";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const LiveSession = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();

    // handleSubmit
    const handleSubmit = async e => {
        e.preventDefault();
        const form = e.target;
        const s_link = form.session_link.value;
        const s_name = form.session_name.value
        const s_desc = form.session_description.value;
        const m_name = form.mentor_name.value;
        const m_image = form.mentor_image.value;
        const s_date = form.session_date.value;
        const s_time = form.session_time.value;
        const s_timePeriod = form.timePeriod.value;
        const session_info = { s_link, s_name, s_desc, m_name, m_image, s_date, s_time, s_timePeriod, release_date: moment().format("DD-MM-YYYY"), author_name: user?.displayName, author_email: user?.email, author_image: user?.photoURL };


        try {
            const res = await axiosPublic.post('/post-session', session_info);
            const data = await res.data;
            console.log(data);
            if (data?.insertedId) {
                Swal.fire({
                    title: "Good job!",
                    text: "You've added a session successfully!",
                    icon: "success"
                });
                form.reset();
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <section className="live-session w-full">
            {/* dashboard routes */}
            <DashboardRoutes />

            <div className="live-session-inner container mx-auto px-6 lg:px-40 py-14 min-h-screen flex items-center justify-center">
                <div className="w-full md:w-[550px] lg:w-[750px]">
                    <h1 className="text-lg md:text-2xl font-medium text-slate-700">Live Session</h1>

                    <form className="w-full block mt-5" onSubmit={handleSubmit}>
                        {/* session_link div starts */}
                        <div className="session_link mb-3">
                            <h2 className="text-slate-800 mb-1.5">Session link:</h2>
                            <input type="text" name="session_link" id="session_link" className="w-full px-3 py-1.5 outline-none border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-slate-300 rounded-md" placeholder="Session link" autoComplete="off" required />
                        </div>

                        {/* mentor_name div starts */}
                        <div className="mentor_name mb-3">
                            <h2 className="text-slate-800 mb-1.5">Mentor name:</h2>
                            <input type="text" name="mentor_name" id="mentor_name" className="w-full px-3 py-1.5 outline-none border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-slate-300 rounded-md" placeholder="Mentor name" autoComplete="off" required />
                        </div>

                        {/* mentor_image div starts */}
                        <div className="mentor_image mb-3">
                            <h2 className="text-slate-800 mb-1.5">Mentor image:</h2>
                            {/* <input type="file" name="mentor_image" id="mentor_image" className="w-full px-3 py-1.5 text-gray-500 outline-none border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-slate-300 rounded-md"required /> */}
                            <input type="text" name="mentor_image" id="mentor_image" className="w-full px-3 py-1.5 outline-none border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-slate-300 rounded-md" placeholder="Mentor image" autoComplete="off" required />
                        </div>

                        {/* session_name div starts */}
                        <div className="session_name mb-3">
                            <h2 className="text-slate-800 mb-1.5">Session name:</h2>
                            <input type="text" name="session_name" id="session_name" className="w-full px-3 py-1.5 outline-none border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-slate-300 rounded-md" placeholder="Session name" autoComplete="off" required />
                        </div>

                        {/* session_description div starts */}
                        <div className="session_description mb-3">
                            <h2 className="text-slate-800 mb-1.5">Session description:</h2>
                            <textarea name="session_description" id="session_description" rows={4} className="w-full px-3 py-1.5 outline-none border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-slate-300 rounded-md" placeholder="Session description" autoComplete="off" required />
                        </div>

                        {/* session_date div starts */}
                        <div className="session_date mb-3">
                            <h2 className="text-slate-800 mb-1.5">Session name:</h2>
                            <input type="date" name="session_date" id="session_date" className="w-full px-3 py-1.5 outline-none border border-gray-300 focus:border-gray-400 focus:ring-2 focus:ring-slate-300 rounded-md" placeholder="Session name" autoComplete="off" required />
                        </div>

                        {/* session_time */}
                        <div className="session_time mb-3">
                            <h2 className="text-slate-800 mb-1 5">Session time</h2>

                            <div className="flex gap-3">
                                <select name="session_time" id="session_time" className="w-9/12 px-3 py-1.5 otuline-none border border-gray-300 focus:border-gray-400 focus:gray-400 focus:ring-2 focus:ring-slate-300 rounded-md">
                                    <option value="7.00">7.00</option>
                                    <option value="7.30">7.30</option>
                                    <option value="8.00">8.00</option>
                                    <option value="8.30">8.30</option>
                                    <option value="9.00">9.00</option>
                                    <option value="9.30">9.30</option>
                                    <option value="10.00">10.00</option>
                                </select>

                                <select name="timePeriod" id="timePeriod" className="w-3/12 px-3 py-1.5 otuline-none border border-gray-300 focus:border-gray-400 focus:gray-400 focus:ring-2 focus:ring-slate-300 rounded-md">
                                    <option value="am">AM</option>
                                    <option value="pm">PM</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className={`text-[#fff] font-medium w-full text-center px-5 py-1.5 border border-green-300 outline-none rounded-md bg-green-700 hover:bg-green-600 active:bg-green-700`}>Add Session</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LiveSession;