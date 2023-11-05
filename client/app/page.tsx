import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/main.css'
import { redirect } from 'next/navigation';
import { getSession } from '@auth0/nextjs-auth0';
import Navbar from './components/Navbar'
import Card from './components/Card'


const Login = () => {
  redirect('/api/auth/login')
}

export default async function Home() {

  return (
    <div>
      <Navbar />
      <div className="back-section">
        <div className="img-section"></div>
        <h1>PROPERTYVERSE</h1>
      </div>


      <div className="container">
        <h1 className='text-center'>All Properties</h1>
        <div className="row">
          <div className="col-sm">
            <Card />
          </div>
          <div className="col-sm">
            <Card />
          </div>
          <div className="col-sm">
            <Card />
          </div>
        </div>
      </div>

    </div>
  )
}
