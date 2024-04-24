"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getLocationListWithLatLong } from "../api/locations/api";
const LocationSwitcher = () => {
    const [isShowList, setIsShowList] = useState(false);
    const [locationList, setlocationList] = useState([]);

    useEffect(() => {
        async function getLocationList() {
            const locations = await getLocationListWithLatLong();
            setlocationList(locations);
        }
        getLocationList();
    }, []);

    return (
        <>
            <button
                onClick={() => {
                    setIsShowList((prev) => !prev);
                }}>
                <Image
                    className='size-9'
                    src='/link.svg'
                    alt='link icon'
                    height={100}
                    width={100}
                />
            </button>
            {isShowList ? (
                <div className='absolute max-h-[400px] overflow-auto left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2'>
                    <ul
                        role='list'
                        className='divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer'>
                        {locationList.map((location, index) => {
                            return (
                                <li key={index}>
                                    <Link
                                        href={`/${location.city}?latitude=${location.lat}&longitude=${location.lng}`}>
                                        {location.city}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default LocationSwitcher;

