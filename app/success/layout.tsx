import variables from '../../styles/variables.module.scss';

export default function name({
    children,
  }: { 
    children: React.ReactNode
  }) {

  return (
    <div className={variables.bg}>{children}</div>
  )
}

