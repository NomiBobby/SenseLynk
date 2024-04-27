import React from 'react'
import { gateWayInfo, notifications} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { employeesData, employeesGrid } from '../data/dummy';

import { BellRing, Check } from "lucide-react"
import { cn } from "../lib/utils"
import { Button } from "../components/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/card"
import { Switch } from "../components/switch"

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
      <div>
        <Card className={cn("w-[380px]", "")} >
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>You have 3 unread messages.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Push Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                  Send notifications to device.
                </p>
              </div>
              <Switch />
            </div>
            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Check className="mr-2 h-4 w-4" /> Mark all as read
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default Gateway