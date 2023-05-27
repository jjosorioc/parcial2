import books from '../assets/books.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {

    MDBBtn,
    MDBInput,
}
    from 'mdb-react-ui-kit';


import { FormattedMessage } from 'react-intl';

const backUrl = "http://localhost:3000/login";
function Login() {

    const handleLogin = async () => {
        const emailInput = document.getElementById('emailLogin');
        const passwordInput = document.getElementById('passwordLogin');
        const email = emailInput.value;
        const password = passwordInput.value;

        const response = await fetch(backUrl, {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });



        if (response.ok) {
            const data = await response.json();
            console.log(data);
            // localStorage.setItem('token', data.token);
            // localStorage.setItem('user', JSON.stringify(data.user));
            window.location.href = "/home";

        } else {
            console.log(`Error: ${response.status} - ${response.statusText}`);
        }

    }

    return (
        <div className='d-flex w-100 ms-auto' style={{ height: '100vh', border: "2px solid grey", borderRadius: "200px", overflow: "hidden" }}>



            {/* Izquierda */}
            <div className='w-50 d-flex justify-content-center align-items-center' style={{ position: 'relative', backgroundColor: 'grey' }}>
                <img src={books} alt="books" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.5)' }} />
                <div className='d-flex flex-column align-items-center' style={{ position: 'absolute', bottom: 0 }}>
                    <h1 className='text-center' style={{ color: "black", margin: "0 auto" }}><FormattedMessage id="Find" /></h1>
                </div>
            </div>


            {/* Derecha */}
            <div className='w-50 bg-yellow d-flex flex-column justify-content-center align-items-center' style={{ backgroundColor: "white", width: "70vw" }}>
                <div className="text-center mb-3">
                    <h2><FormattedMessage id='Your Ally Bookstore' /></h2>
                </div>
                <MDBInput wrapperClass='mb-4' label={<FormattedMessage id='Your email' />} id='emailLogin' type='email' labelClass='white-text' />
                <MDBInput wrapperClass='mb-4' label={<FormattedMessage id='Your password' />} id='passwordLogin' type='password' labelClass='white-text' />
                <MDBBtn style={{ backgroundColor: "Grey", borderColor: "black" }} className="mb-4 w-50" onClick={handleLogin}><FormattedMessage id='Sign in' /></MDBBtn>

            </div>


        </div>

    );
}

export default Login;

