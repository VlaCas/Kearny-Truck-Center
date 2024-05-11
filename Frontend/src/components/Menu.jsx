export default function Menu({children}){
  return(
    <p className="text-xl xl:text-2xl text-[white] linkHover relative active:text-[rgba(255,255,255,0.7)] hover:text-[rgb(255,255,255,0.9)]" /*onClick={() => document.getElementsByTagName('input')[0].focus()}*/>
      {children}  
    </p>
  )
};