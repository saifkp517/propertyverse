import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import Image from 'next/image';


export default async function Card() {
    return (
        <div className="card">
            <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=sean-pollock-PhYq704ffdA-unsplash.jpg" height={100} width={180} layout="responsive" alt="Subimage 1" className="Image-fluid mb-3" />
                <div className="card-body">
                    <h5 className="card-title">Building Name</h5>
                    <p className="card-text">Location: Building Location</p>
                    <p className="card-text">Year Built: 2020</p>
                    <p className="card-text">Number of Floors: 10</p>
                    <Link href="/propertyshare" style={{width: "100%"}} className="btn btn-danger">Learn More</Link>
                </div>
        </div>
    )
}
