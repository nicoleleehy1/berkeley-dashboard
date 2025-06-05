import Image from "next/image"
import Link from "next/link"
import Performance from "@/components/Performance"
import NotesTable from "@/components/NotesTable";

const dataset1 = [
  { name: "Lectures", value: 70, fill: "#C3EBFA" },
  { name: "Lectures Not Attended", value: 30, fill: "#FAE27C" },
];

const dataset2 = [
  { name: "Discussions", value: 60, fill: "#C3EBFA" },
  { name: "Group B", value: 40, fill: "#FAE27C" },
];

const dataset3 = [
  { name: "Quizzes", value: 80, fill: "#C3EBFA" },
  { name: "Group B", value: 20, fill: "#FAE27C" },
];


const SingleSubjectPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        {/* LEFT */}
        <div className="w-full xl:w-2/3">
            {/* TOP */}
            <div className="flex flex-col lg:flex-row gap-4">

                {/* USER INFO CARD */}
                <div className="bg-dashboardSky py-6 px-4 rounded-md flex-1 flex gap-4">
                    <div className="w-1/3">
                        <Image 
                            src="/logo.png" 
                            alt="" 
                            width={144} height={144} 
                            className="w-36 h-36 rounded-full object-cover"/>
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4">
                        <h1 className="text-xl font-semibold">CS 61B</h1>
                        <p className="text-sm text-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>

                        {/* Features of class*/}
                        <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/blood.png" alt="" width={14} height={14}/>
                                <span>Projected Grade: A</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/date.png" alt="" width={14} height={14}/>
                                <span>Semester: Spring 25</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/mail.png" alt="" width={14} height={14}/>
                                <span>Email: cs61b@berkeley.edu</span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/blood.png" alt="" width={14} height={14}/>
                                <span>Teacher: Josh Hug</span>
                            </div>
                        </div>

                    </div>

                </div>
                {/* SMALL CARDS */}
                <div className="flex-1 flex gap-4 justify-between flex-wrap">
                    {/* UPCOMING TODO */}
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                        <Image
                            src="/singleBranch.png"
                            alt=""
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <div className="">
                            <h1 className="text-xl font-semibold">3</h1>
                            <span className="text-sm text-gray-400">Upcoming Todos</span>
                        </div>
                    </div>

                    {/* WEEK COUNT */}
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                        <Image
                            src="/singleLesson.png"
                            alt=""
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <div className="">
                            <h1 className="text-xl font-semibold">Week 3</h1>
                            <span className="text-sm text-gray-400">Out of 18 weeks</span>
                        </div>
                    </div>

                    {/* COUNTDOWN UNTIL EXAM */}
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
                        <Image
                            src="/singleAttendance.png"
                            alt=""
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <div className="">
                            <h1 className="text-xl font-semibold">13 Days</h1>
                            <span className="text-sm text-gray-400">until Midterm 1</span>
                        </div>
                    </div>

                </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                <NotesTable />
            </div>
    
        </div>
        

        {/* RIGHT */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold pt-2">📌 Pinned</h1>
                <ul className="mt-4 list-disc list-outside text-m space-y-2 pl-5">
                <li className="bg-tagYellowBackground rounded-md">
                    <Link
                    className="block w-full px-3 py-1 text-tagYellowText"
                    href="https://sp25.datastructur.es/"
                    >
                    Course Website
                    </Link>
                </li>
                <li className="bg-tagYellowBackground rounded-md">
                    <Link
                    className="block w-full px-3 py-1 text-tagYellowText"
                    href="https://sp25.datastructur.es/"
                    >
                    Ed Website
                    </Link>
                </li>
                <li className="bg-tagYellowBackground rounded-md">
                    <Link
                    className="block w-full px-3 py-1 text-tagYellowText"
                    href="https://sp25.datastructur.es/"
                    >
                    Bcourses
                    </Link>
                </li>
                <li className="bg-tagYellowBackground rounded-md">
                    <Link
                    className="block w-full px-3 py-1 text-tagYellowText"
                    href="https://sp25.datastructur.es/"
                    >
                    Cheat Sheet
                    </Link>
                </li>
                </ul>
            </div>
            <Performance data={[dataset1, dataset2, dataset3]} />

        </div>
    </div>
  
  )
}

export default SingleSubjectPage