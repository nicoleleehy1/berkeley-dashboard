import EventCalendar from "@/components/EventCalendar"
import UserCard from "@/components/UserCard"
import InternshipChart from "@/components/InternshipChart"

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      <span className="text-[20px]">📌 Pinned Classes</span>
      {/* USER CARDS */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Math 54"/>
          <UserCard type="CS 61B"/>
          <UserCard type="EECS 16A"/>
          <UserCard type="BIOE 25"/>
        </div>

        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* PROGRESS TRACKER CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <InternshipChart />
          </div>

          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            
          </div>

        </div>

        {/* BOTTOM CHARTS */}
        <div className="">

        </div>
      </div>
      
      {/* RIGHT */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalendar />
    
      </div>
    </div>
  )
}

export default AdminPage