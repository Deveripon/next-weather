import { getAirPolutionInfo } from "@/app/api/locations/api";
import { getAirPolutionTitle } from "@/utils";
import Image from "next/image";

const AqiPage = async ({
    params: { locationName },
    searchParams: { latitude, longitude },
}) => {
    const aqi = await getAirPolutionInfo(latitude, longitude);
    const aqiData = aqi?.list[0];

    return (
        <div className='col-span-12 lg:col-span-4 2xl:col-span-6'>
            <div className='card'>
                <h6 className='feature-name'>Air Pollution & Quality</h6>

                <div className='mt-3 space-y-2 lg:space-y-3'>
                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base'>
                            <Image
                                className='max-w-[18px]'
                                src='/icon_air_element.png'
                                alt='icon'
                                height={300}
                                width={300}
                            />
                            Air Quality Index
                        </div>
                        <span className='text-right text-sm text-white lg:text-base'>
                            {getAirPolutionTitle(aqiData.main.aqi)}
                        </span>
                    </div>

                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base'>
                            <Image
                                className='max-w-[18px]'
                                src='/icon_air_element.png'
                                alt='icon'
                                height={300}
                                width={300}
                            />
                            Carbon Monoxide
                        </div>
                        <span className='text-right text-sm text-white lg:text-base'>
                            {aqiData.components.co} µg/m³
                        </span>
                    </div>

                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base'>
                            <Image
                                className='max-w-[18px]'
                                src='/icon_air_element.png'
                                alt='icon'
                                height={300}
                                width={300}
                            />
                            Nitric Oxide
                        </div>
                        <span className='text-right text-sm text-white lg:text-base'>
                            {aqiData.components.no2} ppm
                        </span>
                    </div>

                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base'>
                            <Image
                                className='max-w-[18px]'
                                src='/icon_air_element.png'
                                alt='icon'
                                height={300}
                                width={300}
                            />
                            Nitrogen Dioxide
                        </div>
                        <span className='text-right text-sm text-white lg:text-base'>
                            {aqiData.components.no} ppm
                        </span>
                    </div>

                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base'>
                            <Image
                                className='max-w-[18px]'
                                src='/icon_air_element.png'
                                alt='icon'
                                height={300}
                                width={300}
                            />
                            Ozone
                        </div>
                        <span className='text-right text-sm text-white lg:text-base'>
                            {aqiData.components.o3} µg/m³
                        </span>
                    </div>

                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base'>
                            <Image
                                className='max-w-[18px]'
                                src='/icon_air_element.png'
                                alt='icon'
                                height={300}
                                width={300}
                            />
                            Sulfur Dioxide
                        </div>
                        <span className='text-right text-sm text-white lg:text-base'>
                            {aqiData.components.so2} ppm
                        </span>
                    </div>

                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base'>
                            <Image
                                className='max-w-[18px]'
                                src='/icon_air_element.png'
                                alt='icon'
                                height={300}
                                width={300}
                            />
                            PM2.5
                        </div>
                        <span className='text-right text-sm text-white lg:text-base'>
                            {aqiData.components.pm2_5} µg/m³
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AqiPage;

