import classNames from "classnames"
export default function Button({children, ...rest}){
    
    //destruction props and whatever custom props that were passed down
    const variant = rest.variant? rest.variant : ''
    const howBig = rest.size ==='sm'?'button-small': rest.size==='lg'? 'button-large' : ''
    const allClassnames = classNames(howBig, rest.className, rest.variant)
    return(
        <div>
            <button  {...rest} className={allClassnames} >{children}</button>
        </div>
    )
}