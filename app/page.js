import { Suspense } from "react";
import LocationDetector from "./components/LocationDetector";

const HomePage = () => {
    return (
        <Suspense>
            <LocationDetector />
        </Suspense>
    );
};

export default HomePage;

