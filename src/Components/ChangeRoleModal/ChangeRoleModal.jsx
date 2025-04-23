import useAuth from "../../hooks/useAuth";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const ChangeRoleModal = () => {
    const { user, open, setOpen } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [selectedRole, setSelectedRole] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const { data: user_role = '', isPending, isError, error, refetch } = useQuery({
        queryKey: ['user_role', user?.email],
        queryFn: async () => {
            try {
                const res = await axiosPublic.get(`/check-user-role?email=${user?.email}`);
                const data = await res.data;
                if (data) {
                    return data.role
                }
            } catch (err) {
                console.error(err);
            }
        }
    })

    // handleChangeRole
    const handleChangeRole = async () => {
        setErrMsg('');

        if (selectedRole === user_role) return setErrMsg(`You are ${user_role} now. Select any other.`);

        try {
            const res = await axiosPublic.patch(`/request-change-role?email=${user?.email}`, { selectedRole });
            const data = await res.data;
            if (data.modifiedCount > 0) {
                setOpen(false);
                Swal.fire({
                    title: "Good job!",
                    text: "Role change request send successfully!",
                    icon: "success"
                });
            }
        } catch (err) {
            console.error(err);
            return;
        }
    }

    return (
        <Dialog open={open} onClose={setOpen} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel transition className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            {/* warning icon & message container div */}
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-sky-100 sm:mx-0 sm:size-10"><ExclamationTriangleIcon aria-hidden="true" className="size-6 text-sky-600" /></div>

                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">Really do you wanna change role?</DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">This action will notify the admin for review and approval. Submitted, you may not be able to make another request until it's processed. Confirm that you truly want to proceed with this role change request.</p>
                                    </div>
                                </div>
                            </div>

                            {/* role & error message container div */}
                            <div className="grid gap-2 grid-cols-4 mt-5">
                                <button type="button" className={`text-sm text-green-600 font-medium px-4 py-1 border border-green-300 rounded-md bg-green-100 hover:bg-green-50 active:bg-green-100 cursor-pointer`} onClick={() => setSelectedRole('admin')}>Admin</button>
                                <button type="button" className={`text-sm text-orange-600 font-medium px-4 py-1 border border-orange-300 rounded-md bg-orange-100 hover:bg-orange-50 active:bg-orange-100 cursor-pointer`} onClick={() => setSelectedRole('farmer')}>Farmer</button>
                                <button type="button" className={`text-sm text-yellow-600 font-medium px-4 py-1 border border-yellow-300 rounded-md bg-yellow-100 hover:bg-yellow-50 active:bg-yellow-100 cursor-pointer`} onClick={() => setSelectedRole('seller')}>Seller</button>
                                <button type="button" className={`text-sm text-purple-600 font-medium px-4 py-1 border border-purple-300 rounded-md bg-purple-100 hover:bg-purple-50 active:bg-purple-100 cursor-pointer`} onClick={() => setSelectedRole('trainer')}>Trainer</button>
                            </div>
                            {errMsg ? <p className="text-xs font-mediun text-red-700 pt-2">{errMsg}</p> : undefined}
                        </div>

                        {/* buttons container starts */}
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" onClick={handleChangeRole} className="inline-flex w-full justify-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-600 sm:ml-3 sm:w-auto">Apply Change</button>

                            <button type="button" data-autofocus onClick={() => setOpen(false)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default ChangeRoleModal;