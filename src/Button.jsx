import classNames from "classnames"
export default function Button({children, ...rest}){
    
    //destruction props and whatever custom props that were passed down
    console.log(rest)
    const howBig = rest.size ==='sm'?'button-small': rest.size==='lg'? 'button-large' : ''
    const allClassnames = classNames(howBig, rest.className)
    return(
        <div>
            <button  {...rest} className={allClassnames} >{children}</button>
        </div>
    )
}