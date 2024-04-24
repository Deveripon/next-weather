import { getLocationListWithLatLong } from "../api/locations/api";

const LocationList = async () => {
    const locations = await getLocationListWithLatLong();
    console.log(locations);
    return (
        <div className='absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2'>
            <ul
                role='list'
                className='divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer'>
                <li>Kolkata</li>
                <li>Dhaka</li>
                <li>London</li>
                <li>Amsterdam</li>
            </ul>
        </div>
    );
};

export default LocationList;

