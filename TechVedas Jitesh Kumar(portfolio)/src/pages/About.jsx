import pic1 from "../assets/images/jitesh1.jpg"
import datadynamo from "../assets/images/data dynamo.png"
import innovasia from "../assets/images/innovasia.png"

function About() {
  return (
    <div className="w-[100vw] about-container ">
      <div className=" w-full text-white   ">
        <div className=" text-white w-[25rem] m-auto text-[3rem] ">
          <h1 className="font-bold">More About Me </h1>
        </div>

        <div className=" w-[100vw] p-5 flex justify-center items-center gap-5 ">
          <p className=" text-white w-[50%] text-[2.5rem] ">
            {" "}
            Hello there! I'm <br />
            <span className=" text-[3.5rem] font-extrabold text-[blueviolet] ">
              Jitesh Kumar
            </span>{" "}
            <br />
            a passionate first-year <br /> B.Tech student at <span className=" text-[3.5rem] font-extrabold text-[#A3a3a6] ">Anurag University</span>.
          </p>
          <img
            className=" w-[30%] h-[35rem] box-shadow rounded-[24px] object-cover shadow-lg drop-shadow-xl shadow-[#C185f0]"
            src={pic1}
            alt=""
          />
        </div>

        <div className=" w-[100vw] p-5 flex justify-center items-center gap-5 ">
          <p className=" w-[50%] text-[2.5rem] ">
            My journey into the world of technology began with a spark of
            curiosity and has since evolved into a burning passion. From
            mastering the intricacies of the MERN stack to exploring the endless
            potential of Python, I'm constantly pushing the boundaries of what's
            possible in the ever-evolving tech landscape.
          </p>

          <img
            className=" w-[30%] h-[35rem] box-shadow rounded-[24px] object-cover shadow-lg drop-shadow-xl shadow-[#C185f0]"
            src={datadynamo}
            alt=""
          />
        </div>

        <div className=" w-[100vw] p-5 flex justify-center items-center gap-5 ">
          <p className=" w-[50%] text-[2.5rem] ">
            But my journey isn't just about coding—it's about community. As a
            proud member of the Geeks for Geeks Club and IEEE, I thrive in
            collaborative environments where ideas are born, nurtured, and
            transformed into reality. Whether it's organizing workshops,
            mentoring peers, or participating in hackathons, I'm always eager to
            connect, collaborate, and innovate.
          </p>

          <img
            className=" w-[30%] h-[35rem] box-shadow rounded-[24px] object-cover shadow-lg drop-shadow-xl shadow-[#C185f0]"
            src={innovasia}
            alt=""
          />
        </div>

        <div className=" w-[100vw] p-5 flex justify-center items-center gap-5 ">
        <p className=" w-[50%] text-[2.5rem] ">
          Beyond the screen, you'll find me on the sports field, channeling my
          competitive spirit into cricket, badminton, basketball, and table
          tennis. Because life is all about balance, right?
        </p>

        <img
            className=" w-[30%] h-[35rem] box-shadow rounded-[24px] object-cover shadow-lg drop-shadow-xl shadow-[#C185f0]"
            src="https://source.unsplash.com/random?cricket"
            alt=""
          />


        </div>
 
 <div className=" w-[100vw] p-5 flex justify-center items-center gap-5 ">
 <p className=" w-[50%] text-[2.5rem] ">
          {" "}
          So, whether you're here to explore my projects, connect over a shared
          passion for technology, or simply say hello, I'm excited to embark on
          this journey together. Let's code, create, and inspire—because the
          possibilities are limitless when we dare to dream big!
        </p>

        <img
            className=" w-[30%] h-[35rem] box-shadow rounded-[24px] object-cover shadow-lg drop-shadow-xl shadow-[#C185f0]"
            src="https://source.unsplash.com/random?connect"
            alt=""
          />

 </div>
        
      </div>
    </div>
  );
}

export default About;
