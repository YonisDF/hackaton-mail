import { useState } from "react";
import axios from "axios";
import API_URL from "../config/api";

const useDeleteEmail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteEmail = async (id) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.delete(`${API_URL}/api/mail/delete/${id}`);
            if (response.status === 200) {
                return true; 
            }
        } catch (err) {
            setError(err);
            console.error("Failed to delete email:", err);
        } finally {
            setIsLoading(false);
        }
    };

    return { deleteEmail, isLoading, error };
};

export default useDeleteEmail;
