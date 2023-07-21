"use client"
import variables from '../../styles/variables.module.scss'
import successbtn from '../../public/icon-success.svg'
import Image from 'next/image'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import {email} from '../atoms/Values'



export default function Success () {
  //const router = useRouter();
  const [value, setValue] = useRecoilState(email);
  
  // const searchParams = useSearchParams()
  // const search = searchParams.get('value')

  return (
    <div className={variables.sm_container}>
      <div className={variables.relative}>
      <div className={variables.column}>
      <Image className={variables.success} src={successbtn} height={60} width={60} alt=''/>
      <h1 className={variables.h1}>Thanks for subscribing!</h1>
      <p className={variables.p}>
        A confirmation email has been sent to <b>{value}</b> Please open it nad click the button inside to confirm your subscrition.
      </p>
      <button onSubmit={()=> alert("Thanks for subscribing")} className={variables.btn} >Dimiss message</button>
      </div>
      </div>
    </div>
  )}