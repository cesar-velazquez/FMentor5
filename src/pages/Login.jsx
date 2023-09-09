import { useForm } from 'react-hook-form';



const Login = ({ setUserLogged, setEmailValue }) => {
    

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSubmitemail = (data) => {        
        if (data.email) {                          
            setUserLogged(true)                                   
            setEmailValue(data.email)                                  
        } else {
            alert("ingresa un correo valido")
        }
    }


    const submit = (data) => {
        handleSubmitemail(data);                        
    }

    return (
        <section className='sm:grid font-roboto bg-slate-900 min-h-screen '>

            <div className='sm:flex sm:flex-row-reverse 
        max-w-[800px]  m-auto p-2 rounded-2xl bg-white '>
                <div className='flex justify-center'>
                    <img className='sm:hidden block' src="/svgs/illustration-sign-up-mobile.svg" alt="Back" />
                    <img className='hidden sm:block' src="/svgs/illustration-sign-up-desktop.svg" alt="Back" />
                </div>

                <div>
                    <section className='px-5' >
                        <h1 className=' py-4 text-4xl font-semibold'>Stay updated!</h1>
                        <h2 className='text-[16px] ' >Join 60,000+ product managers receiving monthly updates on:</h2>
                    </section>

                    <div className='p-4 relative ' >
                        <img className='absolute left-4  ' src="/svgs/icon-list.svg" alt="List" />
                        <h3 className='px-8 '> Product discovery and building what matters</h3>
                    </div>

                    <div className='p-4 relative ' >
                        <img className='absolute left-4  ' src="/svgs/icon-list.svg" alt="List" />
                        <h3 className='px-8 '> Measuring to ensure updates are a success</h3>
                    </div>

                    <div className='p-4 relative ' >
                        <img className='absolute left-4  ' src="/svgs/icon-list.svg" alt="List" />
                        <h3 className='px-8 '> And much more!</h3>
                    </div>

                    <form
                        onSubmit={handleSubmit(submit)}
                        className='px-4  mb-10 ' >
                        <div className='flex justify-between my-2 text-xs '>
                        <p className=' '>Email address</p>
                        {errors.email && <p className='text-red-600 text-center  font-semibold rounded-3xl w-[200px] bg-white/40 '>{errors.email.message}</p>}                        
                        </div>
                        <input
                            placeholder='email@company.com'
                            className='focus:text-red-600 outline-none focus:bg-red-100 focus:border-2 focus:border-red-600 w-full py-1 px-4 border-2 border-DarkSlateGrey'
                            type="email"
                            id='email'
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Es requerido su email"
                                },
                                pattern: {
                                    value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                                    message: "Valid email required"
                                }
                            }
                            )
                            }
                        />
                        <button className='rounded-md font-semibold my-3 p-3 w-full bg-gray-950 text-white ' >Suscribe to monthly newsletter</button>
                    </form>
                </div>

            </div>
        </section>
    )
}

export default Login