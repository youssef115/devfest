import React from 'react'
import invade from '../../assets/images/invade.jpeg'
function Awarness() {
  return (
    <div className='flex items-center justify-center mt-10 rounded-lg'>
    <div className='bg-white w-3/4 h-80 shadow-xl overflow-hidden flex'>
            <img src={invade} alt="" className='w-96 h-full' />
            <span className='p-5'>
                
The question of Palestine in 1947 refers to the historical and political issues surrounding the future of the British Mandate of Palestine, a territory that had been under British control since 1922. The main issue was how to divide the land between the Arab and Jewish populations, who had conflicting claims and aspirations. The United Nations General Assembly adopted a resolution on November 29, 1947, that proposed a plan to partition Palestine into two states: one Jewish and one Arab, with Jerusalem as an international city. The resolution was accepted by the Jewish Agency, but rejected by the Arab Higher Committee and the neighboring Arab states. The partition plan sparked a civil war between the Jewish and Arab communities in Palestine, which escalated into a regional conflict when Israel declared its independence on May 14, 1948, and was invaded by five Arab armies
            </span>
    </div>
    </div>
  )
}

export default Awarness