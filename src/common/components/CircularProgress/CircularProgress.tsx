import s from './CircularProgress.module.scss'
export const CircularProgress = () => {
  return (
    <div className={s.wrapper}>
      <span className={s.loader}></span>
    </div>
  )
}
