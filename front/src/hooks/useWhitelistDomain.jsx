import { useState } from "react";
import axios from "axios";
import API_URL from "../config/api";

const useWhitelistDomain = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const WhitelistDomain = async (domain) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            // Step 1: Create the domain
            const createResponse = await axios.post(`${API_URL}/api/domain/create/`, { name: domain });
            if (createResponse.status === 201) {
                // Step 2: Add the domain to the whitelist
                const whitelistResponse = await axios.patch(`${API_URL}/api/domain/whitelist/add/`, { name: domain });
                if (whitelistResponse.status === 200) {
                    setSuccess(true);
                }
            }
        } catch (createError) {
            if (createError.response?.status === 400) {
                // If the domain already exists, directly add it to the whitelist
                try {
                    const whitelistResponse = await axios.patch(`${API_URL}/api/domain/whitelist/add/`, { name: domain });
                    if (whitelistResponse.status === 200) {
                        setSuccess(true);
                    }
                } catch (whitelistError) {
                    setError(whitelistError.response?.data?.message || "Failed to add domain to whitelist.");
                }
            } else {
                setError(createError.response?.data?.message || "An error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return { WhitelistDomain, loading, error, success };
};

export default useWhitelistDomain;
