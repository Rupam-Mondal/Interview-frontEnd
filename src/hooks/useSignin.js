import Signin from "@/Apis/Auth/Signin";
import { useMutation } from "@tanstack/react-query";

function useSignin(){
    const { isPending, isSuccess, error, mutateAsync } = useMutation({
        mutationFn: Signin,
        onSuccess:(response) => {
            if (response.success == false) {
                throw new Error(response.message);
            }
            else{
                console.log(response);
            }
        },
        onError: (data) => {
            console.log(data);
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        mutateAsync
    }
}

export default useSignin;