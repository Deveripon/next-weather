import { getWeatherInfo } from "@/app/api/locations/api";
import Image from "next/image";
const WindPage = async ({
    params: { locationName },
    searchParams: { latitude, longitude },
}) => {
    const currentWeather = await getWeatherInfo(latitude, longitude);
    return (
        <div className='col-span-12 lg:col-span-4 2xl:col-span-3'>
            <div className='card'>
                <h6 className='feature-name'>Wind</h6>
                <div className='feature-main'>
                    <Image
                        className='max-w-20'
                        src='/icon_wind.png'
                        alt='rain icon'
                        height={300}
                        width={300}
                    />
                    <h3 className='feature-title'>
                        {currentWeather.wind.speed} kmph
                    </h3>
                    <span className='feature-name'>
                        deg : {currentWeather.wind.deg}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default WindPage;

