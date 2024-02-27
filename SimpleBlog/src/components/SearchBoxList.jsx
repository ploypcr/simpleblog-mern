function SearchBoxName({result}){
    return <p class=' hover:bg-slate-300 mb-2 max-h-40'>{result.name}</p>
}
export const SearchBoxList = ({results}) => {
    return(
        <div class=' bg-white text-black text-lg ml-[325px] mt-3 border-slate-500 border rounded-lg overflow-y-scroll'>
            {results.map(r => 
            <p class='hover:bg-slate-300 mb-2 max-h-40 p-2'>{r.name}</p>)
            }
        </div>
    );
}