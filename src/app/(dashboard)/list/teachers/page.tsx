import TableSearch from "@/components/TableSearch"
import Image from "next/image"

const TeacherListPage = () => {
  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* TOP */}
        {/* small screen = search bar on top of filter, large screen = horizontal arrangement*/}
        <div className="flex items-center justify-between"> 
            <h1 className="hidden md:block text-lg font-semibold">All Notes</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="">
                    <button>
                        <Image src="/filter.png" alt="" width={14} height={14} />
                    </button>
                </div>
            </div>
        </div>

        {/* TOP */}
        <div className=""></div>
        {/* PAGINATION */}
        <div className=""></div>
    </div>
  )
}

export default TeacherListPage