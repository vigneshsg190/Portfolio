import myimg from '../assets/myimg.jpg'


function Profile() {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-6 ">
                <div className="w-100 h-100 rounded-full overflow-hidden">
                    <img src={myimg} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold mb-2">Vignesh SG</h1>
                    <p className="text-lg mb-4">Web Developer</p>
                    <a href="#projects"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        View My Works
                    </a>
                </div>
            </div>
            <div id='about' className='about-me'>
                <div className='container mx-auto px-4'>
                    <div className="grid grid-cols md:w-9/12  mx-auto ">
                        <div>
                            <h2 className="text-2xl font-bold">About Me</h2>
                            <p>
                               I’m a passionate web developer with hands-on experience in HTML, CSS, Bootstrap, JavaScript, and WordPress. I specialize in creating responsive and user-friendly landing pages that align with modern web standards and design principles. I’ve worked on various frontend projects, focusing on clean layout, performance, and usability. I’m currently expanding my skill set in React and actively learning to build dynamic, component-based web applications. With a strong foundation in frontend technologies and a continuous drive to learn, I aim to contribute effectively to creative and development teams.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;