

export const Login = () => {
  return (
    <div className="flex  justify-center items-center h-full w-full ">
        <div className="w-log h-log flex flex-col  gap-5">
            <div className="bg-[#DADADA] w-full h-full flex flex-col gap-5" >
                <h1 className="text-center font-bold h-4">Sign Up</h1>
                <form action="post" className=" h-full flex justify-center items-center p-6 flex-col gap-5">
                    <label className="h-0">Email</label>
                    <input type="text" name='user' placeholder="hello" className="h-10 "/>
                    <input type="text" name='user' placeholder="hello" className="h-10"/>
                </form>
            </div>
                <button className="h-8 bg-[#DADADA] w-full p-6 flex items-center justify-center">
                    Sign Up
                </button>
        </div>
    </div>
  )
}
