import hero from "../assets/hero.jpg";
import about from "../assets/about.jpg";
import testi from "../assets/testi.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [landingpagedata, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get("http://localhost:5000/");
    setData(response.data);
  };

  return (
    <>
      {/* Navbar */}
      <header className="App-header container max-w-5xl mx-auto flex flex-row space-x-96 items-center pt-10">
        {landingpagedata.map((data) => (
          <div className="font-bold" key={data.title}>
            {data.title}
          </div>
        ))}
        <div className="flex-1">
          <ul className="flex flex-row space-x-14 text-sm font-semibold justify-end">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
      </header>
      <main>
        {/* Hero */}
        {landingpagedata.map((data) => (
          <div className="container max-w-5xl mx-auto grid grid-cols-2 space-x-52">
            <div className="mx-w">
              <div className="text-8xl pt-36 font-bold mb-2">{data.title}</div>
              <div className="mb-2 text-lg"> ————— {data.subtitle}</div>
              <div className="mb-14 text-lg">{data.herodesc}</div>
              <button className="bg-black rounded-lg text-white py-2 px-6 text-sm">
                say Hello
              </button>
            </div>
            <div className="pt-32">
              <img className="w-66 rounded-full" src={hero} alt="hero" />
            </div>
          </div>
        ))}
        <div className="text-sm text-center mb-14 pt-24">Scroll down</div>
        {/* About */}
        <div className="text-5xl font-bold text-center mb-2">About Me</div>
        <div className="text-center">My introducatio</div>
        {landingpagedata.map((data) => (
          <div className="container max-w-5xl mx-auto flex flex-row items-center pt-14 space-x-24">
            <img
              className="rounded-md w-90 border-[#E9E9E9] border-8"
              src={about}
              alt="about"
            />
            <div className="gird grid-rows-3">
              <div className="grid grid-cols-3 space-x-10">
                <div className="border border-[#D4D4D4] rounded-lg p-5 text-center text-sm font-semibold">
                  Experience
                  <div className="font-light">{data.experience}</div>
                </div>
                <div className="border border-[#D4D4D4] rounded-lg text-center p-5 text-sm font-semibold">
                  Completed
                  <div className="font-light">{data.projects} projects</div>
                </div>
                <div className="border border-[#D4D4D4] rounded-lg p-5 text-center text-sm font-semibold">
                  Supports
                  <div className="font-light">{data.supports}</div>
                </div>
              </div>
              <div className="mt-8">{data.aboutdesc}</div>
              <div className="mt-8">
                <button className="bg-black rounded-lg text-white py-2 px-6 text-sm">
                  Download CV
                </button>
              </div>
            </div>
          </div>
        ))}
        {/* Skills */}
        <div className="text-5xl font-bold text-center mb-2 mt-16">Skills</div>
        <div className="text-center">My technical level</div>
        <div className="container max-w-5xl mx-auto my-14 flex flex-wrap space-x-2 space-y-2 justify-center text-center">
          <div className="border border-[#D4D4D4] p-3 px-10 font-semibold text-lg">
            Java
            <div className="text-sm font-light">Software Development</div>
          </div>
          <div className="border border-[#D4D4D4] p-3 px-10 font-semibold text-lg">
            C++
            <div className="text-sm font-light">Application Development</div>
          </div>
          <div className="border border-[#D4D4D4] p-3 px-10 font-semibold text-lg">
            Figma
            <div className="text-sm font-light">Design Prototyping</div>
          </div>
          <div className="border border-[#D4D4D4] p-3 px-10 font-semibold text-lg">
            Notion
            <div className="text-sm font-light">Project Management</div>
          </div>
          <div className="border border-[#D4D4D4] p-3 px-10 font-semibold text-lg">
            CSS 3<div className="text-sm font-light">Style Design</div>
          </div>
          <div className="border border-[#D4D4D4] p-3 px-10 font-semibold text-lg">
            Wordpress
            <div className="text-sm font-light">Web Development</div>
          </div>
          <div className="border border-[#D4D4D4] p-3 px-10 font-semibold text-lg">
            Python
            <div className="text-sm font-light">Design Workspace</div>
          </div>
          <div className="border border-[#D4D4D4] p-3 px-10 font-semibold text-lg">
            VSCode
            <div className="text-sm font-light">Code Editor</div>
          </div>
        </div>
        {/* Services */}
        <div className="text-5xl font-bold text-center mb-2 mt-16">
          Services
        </div>
        <div className="text-center">What i offer</div>
        <div className="container max-w-5xl mx-auto my-14 grid grid-cols-3 gap-16 justify-center">
          <div className="border border-[#D4D4D4] py-7 pl-5 font-semibold text-lg rounded-lg">
            Web Design
            <div className="text-sm font-light">view more</div>
          </div>
          <div className="border border-[#D4D4D4] py-7 pl-5 font-semibold text-lg rounded-lg">
            UI/UX Design
            <div className="text-sm font-light">view more</div>
          </div>
          <div className="border border-[#D4D4D4] py-7 pl-5 font-semibold text-lg rounded-lg">
            Branding Design
            <div className="text-sm font-light">view more</div>
          </div>
        </div>
        {/* Qualification */}
        <div className="text-5xl font-bold text-center mb-2 mt-16">
          Qualification
        </div>
        <div className="text-center">My personal journey</div>
        <div class="max-w-5xl mx-auto w-full grid grid-cols-9 px-2 mt-14">
          <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full rounded-md border p-8 md:pl-4">
              <h1 class=" text-xl font-medium py-2">Web Design</h1>
              <p class=" sm:text-sm text-xs">India - Indtitute</p>
              <p class=" sm:text-sm text-xs">2022 - present</p>
            </div>
          </div>
          <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#d4d4d4]"></div>
            <div class="absolute w-6 h-6 rounded-full bg-black z-10 text-white text-center">
              1
            </div>
          </div>
          <div class="col-span-4 w-full h-full"></div>
          <div class="col-span-4 w-full h-full"></div>
          <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#d4d4d4]"></div>
            <div class="absolute w-6 h-6 rounded-full bg-black z-10 text-white text-center">
              2
            </div>
          </div>
          <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full rounded-md border p-8 md:pl-4">
              <h1 class=" text-xl font-medium py-2">Web Design</h1>
              <p class=" sm:text-sm text-xs">India - Indtitute</p>
              <p class=" sm:text-sm text-xs">2022 - present</p>
            </div>
          </div>
          <div class="col-span-4 w-full h-full ">
            <div class="w-full h-full rounded-md border p-8 md:pl-4">
              <h1 class=" text-xl font-medium py-2">Web Design</h1>
              <p class=" sm:text-sm text-xs">India - Indtitute</p>
              <p class=" sm:text-sm text-xs">2022 - present</p>
            </div>
          </div>
          <div class="relative col-span-1 w-full h-full flex justify-center items-center">
            <div class="h-full w-1 bg-[#d4d4d4]"></div>
            <div class="absolute w-6 h-6 rounded-full bg-black z-10 text-white text-center">
              3
            </div>
          </div>
          <div class="col-span-4 w-full h-full"></div>
        </div>
        {/* Testimonial */}
        <div className="text-5xl font-bold text-center mb-2 mt-16">
          Testimonial
        </div>
        <div className="text-center">My client saying</div>
        <div className="container max-w-5xl mx-auto my-14 grid grid-cols-2 gap-16 justify-center drop-shadow-md">
          <div className="p-5 rounded-lg drop-shadow-xl bg-white">
            <div className="border-2 border-b-white border-t-white border-r-white border-l-indigo-500 pl-3 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
            <div className="flex space-x-3">
              <img src={testi} className="rounded-full w-12" alt="testi" />
              <div className="grid grid-rows-2 p-1">
                <div className="font-semibold text-indigo-500 text-sm">
                  Sisca
                </div>
                <div className="font-light text-indigo-500 text-sm">
                  Graphic Designer
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 rounded-lg drop-shadow-xl bg-white">
            <div className="border-2 border-b-white border-t-white border-r-white border-l-indigo-500 pl-3 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
            <div className="flex space-x-3">
              <img src={testi} className="rounded-full w-12" alt="testi" />
              <div className="grid grid-rows-2 p-1">
                <div className="font-semibold text-indigo-500 text-sm">
                  Sisca
                </div>
                <div className="font-light text-indigo-500 text-sm">
                  Graphic Designer
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div className="text-5xl font-bold text-center mb-2 mt-16">
          Contact Me
        </div>
        <div className="text-center">Get in touch</div>
        <div className="container max-w-5xl grid grid-cols-2 mx-auto my-16 gap-48">
          <div className="text-center">
            <div className="font-semibold text-lg mb-4">Talk to me</div>
            <div className="grid grid-rows-2 gap-6">
              <div className="border rounded-lg border-[#D4D4D4] p-5">
                <div className="font-semibold">Email</div>
                <div className="text-sm font-light">example@gmail.com</div>
              </div>
              <div className="border rounded-lg border-[#D4D4D4] p-5">
                <div className="font-semibold">Whatsapp</div>
                <div className="text-sm font-light">082923718622</div>
              </div>
              <div className="border rounded-lg border-[#D4D4D4] p-5">
                <div className="font-semibold">Messenger</div>
                <div className="text-sm font-light">@example.9</div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-semibold text-lg text-center mb-4">
              Write me your project
            </div>
            <div className="grid grid-rows-3">
              <label className="block">
                <input
                  type="text"
                  className="block w-full border border-[#D4D4D4] rounded-lg p-3"
                  placeholder="Insert your name"
                ></input>
              </label>
              <label className="block">
                <input
                  type="text"
                  className="block w-full border border-[#D4D4D4] rounded-lg p-3"
                  placeholder="Insert your email"
                ></input>
              </label>
              <label className="block">
                <textarea
                  className="block w-full border border-[#D4D4D4] rounded-lg p-3"
                  placeholder="Write your project"
                ></textarea>
              </label>
              <button className="bg-black rounded-lg text-white py-2 px-6 mt-8 text-sm w-52">
                Send Message
              </button>
            </div>
          </div>
        </div>
        <div className="container max-w-5xl mx-auto">
          <div className="text-3xl font-bold text-center">krish4alex</div>
          <div className="">
            <ul className="font-semibold flex flex-row space-x-12 justify-center my-5">
              <li>About</li>
              <li>Project</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="text-sm font-light mb-5 text-center">
            krish4alex. All rights reserved.
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
