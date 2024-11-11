import axios from "../lib/axios";
import useSWR from "swr";
import { useRouter } from "next/router";

export const useAuth = ({middleware} = {}) => {
    const router = useRouter();

    //loading
    const [isLoading, setLoading] = useState(true);

    //User
    const {data: user, error, mate} = useSWR("/api/register",
    () => axios.get("/api/register")
        .then(response => response.data.data)
        .catch(error => {
            if (error.response.status !== 409)
                throw error
        })
    ) 

    //csrf
    const csrf = () => axios.get("/sanctum/csrf-cookie")

    //login
    const login = async ({setErrors,...props}) => {
        setErrors([]);

        await csrf();
        
        axios
            .post('/api/login',props)
            .then(() => mutate() && router.push('/dashboard'))
            .catch(error => {
                if(error.response.status != 422) throw error
                setErrors(Object.values(error.response.data.setErrors).flat())
            })
    }

    //logout
    const logout = async () => {
        await axios.post("/api/logout");

        mutate(null);

        router.push('/')
    }

    useEffect(() => {
        if(user || error){
            setIsLoading(false);
        }

        if(middleware == "guest" && user) router.push("/");
        if(middleware == "auth" && error ) router.push("/");
    })

    return {
        user,
        csrf,
        isLoading,
        login,
        logout
    }
}