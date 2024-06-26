export default function HexagonSvg({ children }) {
  return (
    <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:h-40 md:w-40 lg:h-44 lg:w-44 xl:w-48 xl:h-48">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier"> 
          <path d="M11.0362 1.53011C11.6363 1.20002 12.3637 1.20002 12.9638 1.53011L20.9638 5.93011C21.6029 6.28161 22 6.95316 22 7.68254V16.3175C22 17.0468 21.6029 17.7184 20.9638 18.0699L12.9638 22.4699C12.3637 22.8 11.6363 22.8 11.0362 22.4699L3.03616 18.0699C2.39707 17.7184 2 17.0468 2 16.3175V7.68254C2 6.95316 2.39707 6.28161 3.03616 5.93011L11.0362 1.53011Z" fill="#061A23"></path> 
        </g>
      </svg>
      {children}
    </div>
  )
};