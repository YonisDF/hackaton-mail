import { useState } from "react";
import axios from "axios";

const useDeleteEmail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteEmail = async (id) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.patch(`http://127.0.0.1:8000/api/mail/delete/${id}`);
            return response.data;
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