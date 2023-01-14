import React from 'react';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';

const login = () => {
    return (
        <>
            <NavBar />
            <div className="flex flex-col justify-center h-screen">
                <div className="lg:max-w-xl w-full p-6 m-auto bg-white rounded-md shadow-2xl">
                    <h1 className="login text-4xl text-center font-semibold">
                        Log in
                    </h1>
                    <form className="mt-8">
                        <div className="flex flex-wrap justify-between mt-4">
                            <div>
                                <input type="checkbox" className="" />
                                <label htmlFor="remeber"> Remember me</label>
                            </div>
                            <a href="/" className="pw text-sm hover:underline"> Forget Password?</a>
                        </div>

                        <div className="mt-8">
                            <button className="sub-btn w-full bg-purple-700 px-4 py-2 text-lg text-white rounded focus:outline-none">
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs text-center text-gray-700">
                        Don't have an account?
                        <a href="/" className="sign-up font-medium hover:underline"> Sign up </a>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default login