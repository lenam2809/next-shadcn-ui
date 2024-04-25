"use client";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Weather } from "@/lib/definitions";
import { useEffect, useState } from "react";

import { getWeathers } from "@/lib/data";


export default function WeatherTableComponent() {
    const [weathers, setWeathers] = useState<Weather[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const fetchedWeathers = await getWeathers();
                setWeathers(fetchedWeathers);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Weathers</CardTitle>
                <CardDescription>
                    Manage your weathers.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>TemperatureC</TableHead>
                            <TableHead>TemperatureF</TableHead>
                            <TableHead>Summary</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            weathers?.map((weather) => (
                                <TableRow key={weather.date}>
                                    <TableCell className="hidden sm:table-cell">
                                    {weather.date}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                    {weather.temperatureC}
                                    </TableCell>
                                    <TableCell>
                                    {weather.temperatureF}
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">{weather.summary}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong> weathers
                </div>
            </CardFooter>
        </Card>
    )
}
