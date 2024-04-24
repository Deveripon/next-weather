import Image from "next/image";
export default function RootLayout({
    children,
    aqi,
    currentWeather,
    currentTemperature,
    wind,
}) {
    return (
        <>
            <div className='wrapper'>
                <Image
                    src='/bg.jpg'
                    className='bg-img'
                    alt='bg-image'
                    height={700}
                    width={1200}
                />
                <div className='overlay'></div>

                <main className='!z-50 w-full'>
                    <div className='container'>
                        <div className='grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20'>
                            {children}
                            {currentWeather}
                            {aqi}
                            {currentTemperature}
                            {wind}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

