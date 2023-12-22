import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { useState } from "react";
import Image from "next/image";


export default function Carousel({ images }) {

    const [loaded, setLoaded] = useState("animate-pulse");

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };

    const imageTag = images?.map(img =>
        <div key={img} className="mx-3">
            <Image
                src={img}
                onLoad={e => setLoaded("")}
                onDragStart={e => e.preventDefault()}
                alt="Loading"
                className={`${loaded} rounded-xl bg-gray-700  h-full w-full`}
                height={200}
                autoWidth
                width={300}
                layout='responsive'
            />
        </div>
    )


    return (
        <AliceCarousel
            mouseTracking
            animationType="fadeout"
            animationDuration={800}
            items={imageTag}
            infinite
            responsive={responsive}
            disableButtonsControls
        />
    )
}