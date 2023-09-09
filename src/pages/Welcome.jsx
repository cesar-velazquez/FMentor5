import React from 'react'

const Welcome = ({ setUserLogged, emailValue }) => {
    const LogOut = () => {
        setUserLogged(false)
    }
    return (
        <div className='bg-gray-800 min-h-screen grid font-roboto '>

            <section className='bg-white rounded-2xl m-auto p-4 w-[250px] 
            ' >
                <div>
                    <img src="/svgs/icon-list.svg" alt="Succesfully" />
                </div>
                <div>
                    <h1 className='text-3xl font-bold my-4'>Thanks for subscribing!</h1>
                    <p className='text-xs'>{`A confirmation email has been sent to`} <span className='font-bold' >{emailValue}</span>
                    {`. Please open it and click
                        the button inside to confirm your subscription.`}</p>
                    <button
                        onClick={LogOut}
                        className='bg-blue-950 text-white w-full px-4 py-2 my-2 text-xs  ' >Dismiss message</button>
                </div>
            </section>
        </div>
    )
}

export default Welcome