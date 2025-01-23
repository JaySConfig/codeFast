"use client";

import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const ButtonPortal = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleBilling = async () => {
        if (isLoading) return;

        setIsLoading(true);

        try {
            const response = await axios.post("/api/billing/create-portal", {
                returnUrl: `${window.location.origin}/dashboard`,
            });

            if (!response.data.url) {
                throw new Error("Invalid portal URL");
            }

            const portalUrl = response.data.url;
            window.location.href = portalUrl;
        } catch (error) {
            const errorMessage =
                error.response?.data?.error ||
                error.message ||
                "Something went wrong";

            toast.error(errorMessage);
        } finally {
            setIsLoading(false); // Ensure the loading state is always reset
        }
    };

    return (
        <button className="btn btn-primary" onClick={handleBilling}>
            {isLoading && (
                <span className="loading loading-spinner loading-xs"></span>
            )}
            Billing
        </button>
    );
};

export default ButtonPortal;
