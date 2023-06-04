import { useState } from "react";
import { login } from "../services/loginService";

const useLoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (values, setSubmitting, navigate) => {
        setIsLoading(true);
        try {
            const response = await login(values);
            const data = await response.data;
            if (data?.status === "success") {
                const accessToken = data?.token;
                localStorage.setItem("token", accessToken);
                setIsLoading(true);
                setSubmitting(false);
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    };

    return { handleSubmit, isLoading };

}

export default useLoginForm;