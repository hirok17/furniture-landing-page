
const ToolTip = () => {
  return (
      <div className='relative group'>
            <button className='relative p-4 bg-white/25 rounded-full border'>
                <div className='hidden absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 p-2 bg-white/25 group-hover:flex rounded-lg shadow space-x-1'>
                    <div className='size-6 bg-red-600 border rounded-full' />
                    <div className='size-6 bg-[#00D9C9] border rounded-full' />
                    <div className='size-6 bg-orange-400 border rounded-full' />
                    {/* tooltip arrow */}
                    <div className='absolute w-0 h-0 left-1/2 transform -translate-x-1/2 -bottom-2 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35'></div>
                </div>
            </button>
        </div>
  )
}

export default ToolTip