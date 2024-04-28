const Button = props => {
  //  Write your code here.
  const {buttonname} = props
  return <button className='btnstyle'>{buttonname}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
  <h1>Social App Buttons</h1>
    <Button buttonname='like' />
    <Button buttonname='comment' />
    <Button buttonname='share' />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
