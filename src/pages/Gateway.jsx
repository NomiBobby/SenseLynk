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

  fetch('/api/gateway-info')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Work with the fetched data here
    console.log(data);
  })
  .catch(error => {
    // Handle errors here
    console.error('There was a problem with the fetch operation:', error);
  });

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4">
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
      <div className="mt-4 gap-4 grid md:grid-cols-1 md:gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2" x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">LoRaWAN</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable></DataTable>
            </CardContent>
        </Card>
        <Card className="lg:col-span-1" x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">Events</CardTitle>
            </CardHeader>
            <CardContent>
              Events
            </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Gateway

// grid-template-columns: 22% 22% auto;
// grid-template-rows: 22% auto 22%;