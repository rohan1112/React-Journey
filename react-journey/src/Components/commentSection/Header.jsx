function Header(props){
    return(
        <div>
            <img className="w-[50px] h-[50px] float-left mr-2.5 rounded-[50px]" src={props.profileImg}/>
            <h1 className="inline-block align-middle leading-[50px] m-0">{props.username}</h1>
        </div>
        
    )

}
export default Header;