"use client";


const FormAddPost = () => {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isLoading) return;

        setIsLoading(true);

        try {
            const data = await axios.post("/api/board", { name });

            setName("");

            toast.success("Board created")

            router.refresh();


        } catch (error)
        { const errorMessage = 
            error.response?.data.error || 
            error.message || 
            "Something went wrong"

            toast.error(errorMessage);
        } finally {
            setIsLoading(false)
        }

    }


    return <form 
    className="bg-base-11 p-8 rounded-3xl space-y-8"
    onSubmit={handleSubmit}>

        <p className="font-bold text-lg">Create a new feedback board</p>

        <label className="form-control w-full ">
        <div className="label">
            <span className="label-text">Board name</span>
        </div>
        <input 
        required
        type="text" 
        placeholder="Type here" 
        className="input input-bordered w-full"
        value={title}
        onChange={(event) => setTitle(event.target.value)
        } />
    
        </label>

        <button className="btn btn-primary btn-block" type="submit">
            {isLoading && <span className="loading loading-spinner loading-xs"></span>
}
            Create board</button>
        </form>


};

export default FormAddPost;