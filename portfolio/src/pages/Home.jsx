import { Link } from "react-router-dom";
import pic from "../assets/images/jitesh1.jpg";
import bg from "../assets/bg-home.jpg";
import "./home.css"



function Home() {
    

  return (
    <div className="home-container bg-transparent z-2 absolute top-0 w-[99vw] mt-[4.4rem] ">
      <div className="flex justify-evenly relative items-center gap-5 w-[100%] px-5 ">
        <div className="w-[30%] mt-[5rem]  ">
          <img
            src={pic}
            className="w-[80%] ml-5 h-[30rem] box-shadow rounded-[24px] object-cover shadow-lg drop-shadow-xl shadow-[#C185f0] "
            alt="jitesh here..."
          />
        </div>


        <div className=" w-[50%] ">

            <h1 className=" text-[50px] text-white font-bold  ">Hi , This is <span className="text-[#8a30d0]">Jitesh Kumar</span></h1>
            <h1 className="text-[50px] text-white font-bold">I'm  <span className="text-[#C185f0]">Web Developer</span></h1>

            <br /><br /><br /><br />

            <a href="https://drive.google.com/file/d/1G6lkdxCgRJlyqSQyVmqrHjQsRXIz9sMj/view?usp=sharing" target="_blank" > <button className="px-[1.75rem] bg-[#B43757] py-[1rem] inline-block text-white font-extrabold text-[1.3rem] rounded-[1rem] hover:bg-[#c043bce7]  ">Download CV</button></a>

        

        </div>
      </div>

      

      

      {/* <div className="w-[100% mt-5">


                <div className="flex gap-4 w-[100%] mt-2 flex-wrap">
                    <a
                        target="_blank"
                        href="https://docs.google.com/document/d/126pcwz5J_ICrMP8bJe4updkxSvv8aI68/edit?usp=sharing&ouid=102716288857617305271&rtpof=true&sd=true"
                        className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem] "
                    >
                        My Resume
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/jitesh-kumar-5190ba240/"
                        className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
                    >
                        Follow me on Linkedin
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/JITESH-KUMAR05"
                        className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
                    >
                        Follow me on Github
                    </a>
                    <a
                        target="_blank"
                        href="https://discordapp.com/users/jk05_/"
                        className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
                    >
                        Follow me on Discord
                    </a>
                    <a
                        target="_blank"
                        href="https://twitter.com/Jitesh_Kumar05"
                        className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
                    >
                        Follow me on Twitter
                    </a>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/techvedas.dev/"
                        className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
                    >
                        Follow me on Instagram
                    </a>
                    <a
                        target="_blank"
                        href="https://stackoverflow.com/users/23510505/jitesh-kumar"
                        className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
                    >
                        Follow me on Stack Overflow
                    </a>

                    <Link
                        to={"/letstalk"}
                        className="connect border-[1px] border-[solid] border-[#ddd] px-[1.75rem] py-[1rem] inline-block text-black font-semibold rounded-[1rem]"
                    >
                        Let's Talk
                    </Link>
                </div>
            </div> */}
    </div>
  );
}

export default Home;
