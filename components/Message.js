export default function Message({ children, avatar, username, description }) {
    return (
        <div className='bg-white p-8 mt-2 shadow rounded-lg'>
            <div className='flex items-center gap-4'>
                <img src={avatar} className='w-10 rounded-full' />
                <h2 className="font-semibold">{username}</h2>
            </div>
            <div className='py-4 text-base font-normal'>
                <p>{description}</p>
            </div>
            {children}
        </div>
    )
}