import { useState } from 'react';
import { SideBar } from '../Sidebar';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const CreateCategory = () => {
    const [category, setCategory] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/createCategory`,
                {
                    category
                },
                {
                    headers: {
                        Authorization: localStorage.getItem('token'),
                    },
                },
            );
            toast.success(res.data.message);
            setCategory('');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className='bg-[#191A21] min-h-screen'>
            <SideBar submitHandler={submitHandler} />
            <div className='pt-20 w-[40%] md:mx-auto h-full mx-2 text-[#f6f7f9]' style={{ marginLeft: '26%' }}>
                <h1 className='mb-10 ml-30 text-5xl font-medium '>Create a Department</h1>
                <form className='flex flex-col gap-1' onSubmit={submitHandler}>
                    <p className='mt-2'>Name</p>
                    <input
                        className='py-1 px-2 rounded-lg h-12 bg-[#343944] border-gray-600 border '
                        onChange={(e) => setCategory(e.target.value)}
                        type='text'
                        placeholder='Enter the Department name'
                        value={category}
                        required
                    />
                    <div className=' flex items-end '>
                        <button className='bg-[#B6FFFA] mt-5 text-white  rounded-lg hover:opacity-90 px-3 py-2 ' style={{ color: '#191a20' }}
                        >
                            Create Department
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default CreateCategory;
