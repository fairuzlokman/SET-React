import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FormikForm from '../components/FormikForm';

const Home = () => {
    return (
        <div>
            <div className='px-10 py-5 shadow-lg'>
                <ul className='hidden sm:flex gap-3'>
                    <li><a href="#isHome">About</a></li>
                    <li><a href="#isContact">Contact</a></li>
                </ul>
                <div className='sm:hidden'>
                    <ul className='group flex-col gap-3'>
                        <li><a className='hidden group-hover:block' href="#isHome">About</a></li>
                        <li><a className='hidden group-hover:block' href="#isContact2">Contact</a></li>
                    </ul>
                    <MenuIcon />
                </div>
            </div>
            <div className='sm:flex items-center'>
                <div className='sm:w-1/2 p-10'>
                    <p id='isHome' className='text-6xl'>This is Home</p>
                    <p className='text-justify mt-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nesciunt omnis praesentium. Molestias ipsum voluptates eius fugit culpa unde, cum voluptatum odit neque nobis ex minus distinctio quo magni voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, rerum mollitia impedit tenetur reiciendis enim ratione eligendi. Quaerat impedit perspiciatis soluta! Obcaecati necessitatibus minima aliquam fuga corrupti praesentium modi. Distinctio. Vero ullam laboriosam qui quas voluptate deleniti dignissimos, quos expedita illum assumenda, delectus velit ex harum. Maxime impedit totam quod et, aperiam esse optio quaerat laudantium saepe culpa voluptas? Nobis.
                    </p>
                </div>
                <div className='sm:w-1/2 flex items-center'>
                    <img src="landscape.jpg" alt="" />
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-10 p-10 bg-my-color text-white font-semibold'>
                <div className='sm:w-1/2'>
                    <p id='isContact' className='hidden sm:flex text-9xl justify-center'>Let's<br />connect</p>
                </div>
                <p id='isContact2' className='sm:hidden text-4xl text-center mb-5'>Contact Me</p>
                <div className='w-[600px]'>
                    <FormikForm />
                </div>
            </div>
        </div>   
    )
}

export default Home