"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
    const [loading, setLoading] = useState(false);
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();
    useEffect(() => {
        setLoading(true);
        const params = new URLSearchParams(searchParams);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                params.set("latitude", position.coords.latitude);
                params.set("longitude", position.coords.longitude);
                router.push(`/current?${params.toString()}`);
            });
        }
    }, [searchParams, router, pathName]);

    return (
        <div className='flex justify-center flex-col items-center h-full w-full'>
            <Image
                src='/loc.gif'
                alt='location-finder'
                height={500}
                width={1200}
            />
            <h3 className='text-green-600 font-medium text-xl'>
                Getting your current location info
            </h3>
        </div>
    );
};

export default LocationDetector;

