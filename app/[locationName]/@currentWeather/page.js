import { getWeatherInfo } from "@/app/api/locations/api";
import Image from "next/image";
const CurrentWeatherPage = async ({
    params: { locationName },
    searchParams: { latitude, longitude },
}) => {
    const currentWeather = await getWeatherInfo(latitude, longitude);
    const { main, description, icon } = currentWeather.weather[0];
    return (
        <div className='col-span-12 lg:col-span-4 2xl:col-span-3'>
            <div className='card'>
                <h6 className='feature-name'>Current Weather</h6>
                <div className='feature-main'>
                    <Image
                        className='max-w-20'
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt='rain icon'
                        height={80}
                        width={80}
                    />
                    <h3 className='feature-title'>{main}</h3>
                    <span className='feature-name'>{description}</span>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeatherPage;

