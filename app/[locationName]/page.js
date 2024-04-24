import { getCurrentTime, getFormattedDate } from "@/utils";
import { getLocationInfo } from "../api/locations/api";
import LocationSwitcher from "../components/LocationSwitcher";
const CurrentLocationWithInfoPage = async ({
    params: { locationName },
    searchParams: { latitude, longitude },
}) => {
    const currentLocation = await getLocationInfo(latitude, longitude);
    const date = getFormattedDate();
    const time = getCurrentTime();

    return (
        <div className='col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-9'>
            <div>
                <div className='mb-2 flex items-center gap-2'>
                    <h2 className='text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]'>
                        {currentLocation.city}
                    </h2>
                    <div className='relative'>
                        <LocationSwitcher />
                    </div>
                </div>
                <p className='text-lg text-[#C4C4C4] lg:text-xl'>
                    {currentLocation.continent} | {currentLocation.countryName}
                </p>
                <div className='flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm'>
                    <span>{time}</span> <span>{date}</span>
                </div>
            </div>
        </div>
    );
};

export default CurrentLocationWithInfoPage;

