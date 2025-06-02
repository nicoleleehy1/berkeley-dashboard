import Table from "@/components/Table"
import TableSearch from "@/components/TableSearch"
import Pagnition from "@/components/Pagination"
import Image from "next/image"
import Link from "next/link"

import { role, assignmentsData} from "@/lib/data"

type Assignment = {
    id:number;
    subject:string;
    class:string;
    teacher:string;
    dueDate:string;
}

const columns = [
    {
        header: "Subject",
        accessor: "subject",
        className: "hidden md:table-cell",
    },
    {
        header: "Class",
        accessor: "class",
        className: "hidden md:table-cell",
    },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell",
    },
    {
        header: "Date",
        accessor: "dueDate",
        className: "hidden md:table-cell",
    },
    {
        header: "Actions",
        accessor: "action",
    },
]

const AssignmentsListPage = () => {

    const renderRow = (item:Assignment) => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-dashboardPurpleLight">
            <td className="flex items-center gap-4 p-4">
                <div className="flex flex-col">
                    <h3 className="font-semibold">{item.subject}</h3>
                </div>
            </td>

            <td className="hidden md:table-cell">{item.class}</td>
            <td className="hidden md:table-cell">{item.teacher}</td>
            <td className="hidden md:table-cell">{item.dueDate}</td>

            <td>
                <div className="flex items-center gap-2">
                    <Link href={`/list/exams/${item.id}`}>
                    <button className="w-7 h-7 flex items-center justify-center rounded-full bg-dashboardSky">
                        <Image src="/edit.png" alt="" width={16} height={16} />
                    </button>
                    </Link>

                    {role === "admin" && (
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-dashboardPurple">
                        <Image src="/delete.png" alt="" width={16} height={16} />
                        </button>
                    )}

                </div>
            </td>
        </tr>
    );

  return (
    <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
        {/* TOP */}
        {/* small screen = search bar on top of filter, large screen = horizontal arrangement*/}
        <div className="flex items-center justify-between"> 
            <h1 className="hidden md:block text-lg font-semibold">All Assignments</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex items-center gap-4 self-end">

                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-dashboardYellow">
                        <Image src="/filter.png" alt="" width={14} height={14} />
                    </button>

                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-dashboardYellow">
                        <Image src="/sort.png" alt="" width={14} height={14} />
                    </button>

                    {role === "admin" && (<button className="w-8 h-8 flex items-center justify-center rounded-full bg-dashboardYellow">
                        <Image src="/plus.png" alt="" width={14} height={14} />
                    </button>)}
                </div>
            </div>
        </div>

        {/* LIST */}
        <Table columns={columns} renderRow={renderRow} data={assignmentsData}/>
        
        {/* PAGINATION */}
        <Pagnition />
    </div>
  )
}

export default AssignmentsListPage