"use client"
import styles from './page.module.css'
import variables from '../styles/variables.module.scss'
import Image from 'next/image'
import desktopPic from "../public/illustration-sign-up-desktop.svg"
import mobilePic from "../public/illustration-sign-up-mobile.svg"
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useRecoilState, atom} from 'recoil'
import { email } from './atoms/Values'
import localFont from 'next/font/local'

interface props {
  email: string,
}

const validation = Yup.object({
  email: Yup.string().email('Email required').required('Valid email required'),
})

const roboto = localFont({src:'../public/fonts/Roboto-Bold.ttf'});

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useRecoilState(email);
  return (
      <div className={variables.container}>
          <div className={variables.s3}>
          </div>
          <div className={variables.s1}>
          <Formik 
          initialValues={{
            email: '',
          }}
          onSubmit={ (values)=>{
            setValue(values.email);
            router.push('/success')
          }}

          validationSchema={validation}
          > 
            {(formik) => (
          <form className={variables.form} onSubmit={formik.handleSubmit}>
          <h1 className={variables.h1+" "+roboto.className}><b>Stay Updated!</b></h1>
          <p className={variables.p}>Join 60,000+ product managers receiving monthly update on:</p>
          <ul className={variables.ul}>
            <li>Product discovery and building what matters</li>
            <li>Measuring to ensure updates are a success</li>
            <li>And much more!</li>
          </ul>
          <div>
          <div className={variables.label_Section}>
          <label className={variables.label}><strong>Email Adress</strong></label>
          <label className={variables.error}><strong>{formik.errors.email? formik.errors.email : ""}</strong></label>
          </div>
          <input name="email" className={formik.errors.email?variables.field_error: variables.field} value={formik.values.email} onChange={formik.handleChange} placeholder='email@company.com'/>
          </div>
          <button type="submit" className={variables.btn && variables.mainBtn} >Subscribe to monthly newsletter</button>
          
          </form>)
            }
          </Formik>

          </div>
          <div className={variables.s2}>
          <Image className={variables.pic} src={desktopPic} quality={50} alt="" fill/>
          </div>


      </div>
  )
}
