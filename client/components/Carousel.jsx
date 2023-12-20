import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState } from "react";
import Image from "next/image";


export default function Carousel({images}) {

    const [loaded, setLoaded] = useState("animate-pulse");

    const imageTag = images?.map(img =>
        <Image
            key={img}
            src={img}
            onLoad={e => setLoaded("")}
            onDragStart={e => e.preventDefault()}
            alt="Loading"
            className={`${loaded} bg-gray-700 h-full w-full object-cover`}
            height={60}
            width={100}
            layout='responsive'
        />
    )


    return (
        <AliceCarousel
            mouseTracking
            items={imageTag}
            disableButtonsControls
        />
    )
}