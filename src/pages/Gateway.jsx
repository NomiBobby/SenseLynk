import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDotFill } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page, Toolbar } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Gateway = () => {
  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className='mt-5'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-no-repeat bg-cover bg-center">
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>IP Address</p>
              <p className='text-2xl'>75.36.39.43</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button color="white" bgColor="#3F7FBF" text="Ping Gateway" borderRadius="10px" size="md"/>
          </div>
        </div>

        <div className='flex m-3 flex-wrap justify-center gap-4 items-center'>
          {earningData.map((item)=>(
            <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
              <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg, }} className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}

        </div>
      </div>

      <div className='flex gap-10 flex-wrap justify-center md:mx-20'>
        <div className="m-2 md:m-15 mt-1 p-2 md:p-10 bg-white rounded-3xl">
          <Header category="Page" title="LoraNodes" />
          <GridComponent
            dataSource={employeesData}
            width="auto"
            allowPaging
            allowSorting
            pageSettings={{ pageCount: 5 }}
            editSettings={editing}
            toolbar={toolbarOptions}
          >
            <ColumnsDirective>
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
            </ColumnsDirective>
            <Inject services={[Search, Page, Toolbar]} />

          </GridComponent>
        </div>
      </div>

    </div>
  )
}

export default Gateway