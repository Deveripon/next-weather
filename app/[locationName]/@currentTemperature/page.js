import { getWeatherInfo } from "@/app/api/locations/api";
import Image from "next/image";
const CurrentTemperature = async ({
    params: { locationName },
    searchParams: { latitude, longitude },
}) => {
    const currentWeather = await getWeatherInfo(latitude, longitude);

    return (
        <div className='col-span-12 lg:col-span-4 2xl:col-span-3'>
            <div className='card'>
                <h6 className='feature-name'>Current Temperature</h6>
                <div className='feature-main'>
                    <Image
                        className='max-w-20'
                        src='/icon_tempareture.png'
                        alt='rain icon'
                        height={300}
                        width={300}
                    />
                    <h3 className='feature-title'>
                        {Math.round(currentWeather.main.temp)} °C
                    </h3>

                    <span className='feature-name'>
                        Feels Like {Math.round(currentWeather.main.feels_like)}{" "}
                        °C
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CurrentTemperature;

