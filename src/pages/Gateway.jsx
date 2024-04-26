import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { gateWayInfo, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Gateway = () => {

  return (
    <div className='mt-5'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='flex m-3 ml-10 flex-wrap justify-start gap-4 items-center'>
          {gateWayInfo.map((item)=>(
            <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg w-full md:w-56 p-4 pt-9 rounded-2xl lg:w-56'>
              <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg, }} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold' style={{ fontSize: `clamp(12px, 2vw, 20px)` }}> {/* Adjusted font size using clamp() */}
                  {item.amount}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gateway