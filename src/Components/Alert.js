import React from 'react'

function Alert(props) {
  const captalize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    props.alert&& <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{maxWidth:"600px",margin:"0 auto", textAlign:"center"}}>
    <strong>{captalize(props.alert.type)}</strong> : {props.alert.msg}
    {/* <button type="button" className="btn-close" data-dismiss="alert"  aria-hidden="true"></button> */}
  </div>
  )
}
export default Alert