function RenderTest(){ console.log("Vue sub-component render test"); return false; }
function App(props){     
     return  ( 
          <div>
               <SearchPresenter model={props.model}/>
               <RenderTest />
          </div>  
     );
}