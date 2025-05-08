import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

import {RouterProvider} from "react-router-dom";
import router from "./router/Router";
import {Toaster} from "react-hot-toast";
import AuthProvider from "./context/AuthProvider";
import {ThemeProvider} from "./context/ThemeProvider";

import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import { TaskProvider } from "./pages/To-Do/TaskContext";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
               <TaskProvider>
               <ThemeProvider>
                    <RouterProvider router={router}/>
                    <Toaster/>
                </ThemeProvider>
               </TaskProvider>
            </AuthProvider>
        </QueryClientProvider>
    </StrictMode>
);
