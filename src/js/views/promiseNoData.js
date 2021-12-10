function promiseNoData(promise, data, error){
    //function to handle promise data rendering
    if(!promise)                                                             //nothing to promise yet
        return <span></span>;

    else if(promise && !data && !error)                                      //promise was set but is not resolved yet
        return <img src = "http://www.csc.kth.se/~cristi/loading.gif"/>;

    else if(promise && !data && error)                                       //promise failed
        return <span>{error}</span>;
    
    else if(promise && data && !error)                                       //promise is resolved
     return false;
}