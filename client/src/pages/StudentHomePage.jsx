import React from 'react';
import Navbar from '../components/Navbar';
import notesOrange from "../assets/notes_orange.png"
import notesGreen from "../assets/notes_green.png"
import notesRed from "../assets/notes_red.png"
import bell from "../assets/bell.png"
import schedule from "../assets/schedule.png"

const StudentHomePage = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4 bg-[#F8F9FA]">
                <header className="bg-F8F9FA text-black/90 p-6 rounded bg-white border border-[#e2e2e2]">
                    <h1 className="text-3xl  text-black/90 font-bold mb-2">Welcome back, Student!</h1>
                    <p className="text-gray-600 text-lg">
                        You have <span className="text-blue-500 font-medium">3 pending assignments </span>and
                        <span className="text-blue-500 font-medium"> 2 live sessions today.</span></p>
                        <div className='flex flex-row gap-4 align-middle'>
                        <button className="px-5 mt-4 h-12 py-2 bg-blue-500 rounded-lg text-lg text-white flex items-center">
    <img className="h-4 mr-2" src={schedule} />
    <span className="text-base">View Schedule</span>
</button>
<button className="px-4 mt-4 h-12 py-2 border border-[#e2e2e2] rounded-lg text-lg text-blue-500 flex items-center">
    <img className="h-5 mr-2" src={bell} />
    <span className="text-base">Notifications</span>
</button>


                    </div>
                    </header>

                <section className="my-6">
                    <h2 className="text-3xl px-3 py-6 text-black/90 font-semibold">Live Sessions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white px-6 py-4 rounded border border-[#e2e2e2]">
                            <div className="flex justify-between items-start w-full">
                                <div>
                                    <h3 className="text-xl mb-2 text-black/90">Advanced Mathematics</h3>
                                    <p className="text-gray-600 text-lg mb-4">Dr. Smith - 10:00 AM, Today</p>
                                </div>
                                <p className="text-white bg-red-500 py-1 px-2 text-center text-sm rounded-lg">Live Now</p>
                            </div>

                            <button className="mt-2 bg-blue-500 w-full text-white px-4 py-3 rounded">Join Now</button>
                        </div>
                        <div className="bg-white p-4 rounded border border-[#e2e2e2]">
                        <div className="flex justify-between items-start w-full">
                                <div>
                                    <h3 className="text-xl mb-2 text-black/90">Physics Fundamentals</h3>
                                    <p className="text-gray-600 text-lg mb-4">Prof. Johnson - 2:30 PM, Today</p>
                                </div>
                                <p className=" bg-blue-100 text-blue-500 py-1 px-2 text-center text-sm rounded-lg">Upcoming</p>
                            </div>
                            
                            <button className="mt-2 text-blue-500 w-full  bg-gray-100 px-4 py-3 rounded">Set Reminder</button>
                        </div>
                    </div>
                </section>

                <section>
                <h2 className="text-3xl px-3 py-6 text-black/90 font-semibold">Notes & Materials</h2>

<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
    <div class="p-4 bg-white rounded-lg shadow">
        
        <h3 className="text-xl mb-2 text-black/90">Quantum Mechanics Notes</h3>
                                    <p className="text-gray-600 text-lg mb-4">Physics, Updated Yesterday</p>
        <button class="mt-2 px-8 py-2 bg-blue-500 text-white rounded">Open</button>
    </div>
    <div class="p-4 bg-white rounded-lg shadow">
    <h3 className="text-xl mb-2 text-black/90">Organic Chemistry Formulas</h3>
                                    <p className="text-gray-600 text-lg mb-4">Chemistry, Updated 3 days ago</p>
        <button class="mt-2 px-8 py-2 bg-blue-500 text-white rounded">Open</button>

    </div>
</div>
</section>

                <section className="my-6 ">
                    <h2 className="text-3xl px-3 py-6 text-black/90 font-semibold">Pending Assignments</h2>
                    <div className="bg-white  border border-[#e2e2e2] py-8 px-8 rounded-lg ">
                        <div className="flex justify-between items-center  ">
                            <div className='flex flex-row gap-2'>
                                
                        <img className="h-8 bg-orange-100 rounded " src={notesOrange} alt="Example Image" />
                            <p className='text-lg text-black/90'>Calculus Problem Set - Due Tomorrow</p>
                            </div>
                            <button className="text-blue-500 text-lg  px-4 py-1 mb-2 rounded-lg">Start</button>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                        <div className='flex flex-row gap-2'>
                                
                                <img className="h-8 bg-green-100 rounded " src={notesGreen} alt="Example Image" />
                                    <p className='text-lg text-black/90'>Physics Lab Report - Due Friday</p>
                                    </div>
                            <button className="text-blue-500 text-lg  px-4 py-1 mb-2 rounded-lg">Start</button>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                        <div className='flex flex-row gap-2'>
                                
                                <img className="h-8 bg-red-100 rounded " src={notesRed} alt="Example Image" />
                                <p className='text-lg text-black/90'>Literature Essay - Due Next Mo-lgnday</p>
                                </div>
                            
                            <button className="text-blue-500 text-lg  px-4 py-1 mb-2 rounded">Start</button>
                        </div>
                    </div>
                </section>
                <section className="my-6">
                    <h2 className="text-3xl px-3 py-6 text-black/90 font-semibold">Video Lessons</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                        <div className="bg-white rounded-lg shadow border border-[#e2e2e2]">

                            <div className='w-full h-52 bg-black rounded-lg'></div>
                            <div className='p-4'>
                                <h3 className="text-xl mb-2 text-black/90">Machine Learning Basics</h3>
                                <p className="text-gray-600 text-lg mb-4">Duration: 45 mins</p>
                                <button className="mt-2 bg-blue-500 w-full text-white px-4 py-3 rounded hover:bg-green-600 transition">Watch Now</button>
                            </div>
                        </div>

                        <div className="bg-white  rounded-lg shadow border border-[#e2e2e2]">
                            <div className='w-full h-52 bg-black rounded-lg'></div>
                            <div className='p-4'>
                                <h3 className="text-xl mb-2 text-black/90">Introduction to Web Development</h3>
                                <p className="text-gray-600 text-lg mb-4">Duration: 30 mins</p>
                                <button className="mt-2 bg-blue-500 w-full text-white px-4 py-3 rounded hover:bg-gray-200 transition">Save for Later</button>
                            </div>
                        </div>
                        
                        <div className="bg-white  rounded-lg shadow border border-[#e2e2e2]">
                            <div className='w-full h-52 bg-black rounded-lg'></div>
                            <div className='p-4'>
                                <h3 className="text-xl mb-2 text-black/90">Introduction to Web Development</h3>
                                <p className="text-gray-600 text-lg mb-4">Duration: 30 mins</p>
                                <button className="mt-2 bg-blue-500 w-full text-white px-4 py-3 rounded hover:bg-gray-200 transition">Save for Later</button>
                            </div>
                        </div>
                        <div className="bg-white  rounded-lg shadow border border-[#e2e2e2]">
                            <div className='w-full h-52 bg-black rounded-lg'></div>
                            <div className='p-4'>
                                <h3 className="text-xl mb-2 text-black/90">Introduction to Web Development</h3>
                                <p className="text-gray-600 text-lg mb-4">Duration: 30 mins</p>
                                <button className="mt-2 bg-blue-500 w-full text-white px-4 py-3 rounded hover:bg-gray-200 transition">Save for Later</button>
                            </div>
                        </div>

                    </div>
                </section>


            </div>
        </>
    );
};

export default StudentHomePage;