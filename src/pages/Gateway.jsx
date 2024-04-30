import React from 'react'
// import { gateWayInfo} from '../data/dummy';
// import { useStateContext } from '../contexts/ContextProvider';

import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
  Radio,
  GlobeLock,
  BatteryCharging,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { DataTable } from '@/components'

const Gateway = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              IP Address
            </CardTitle>
            <GlobeLock className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent className='flex justify-between'>
            <div>
              <div className="text-2xl font-bold">192.168.0.167</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </div>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Battery Voltage
          </CardTitle>
          <BatteryCharging className="h-6 w-6 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">4.2V</div>
            <p className="text-xs text-muted-foreground">
              99% Full
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">LoRaWan</CardTitle>
            <Radio className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">50 Nodes</div>
            <p className="text-xs text-muted-foreground">
              2 offline
            </p>
          </CardContent>
        </Card>
        <Card x-chunk="dashboard-01-chunk-3">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sensors</CardTitle>
            <Activity className="h-6 w-6 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">573</div>
            <p className="text-xs text-muted-foreground">
              15 offline
            </p>
          </CardContent>
        </Card>
      </div>
      <DataTable></DataTable>
    </>
  )
}

export default Gateway