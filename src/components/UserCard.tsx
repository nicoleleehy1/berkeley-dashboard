import Image from "next/image"

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-dashboardPurple even:bg-dashboardYellow p-4 flex-1 min-w-[130px]'>
        <div className="">
            <span>2024/25</span>
            <Image src="/more.png" alt="" width={20} height={20} />
        </div>
        <h1>1,234</h1>
        <h1>{type}</h1>
    </div>
  )
}

export default UserCard