const Show = {
    $slots: undefined,
    data(){ return {hashState: window.location.hash}; },
    props: ["hash"],

    created(){
        this.listener= ()=> this.hashState = window.location.hash;
        window.addEventListener("hashchange", this.listener);
    },
    unmounted(){
        window.removeEventListener("hashchange", this.listener);
    },
    render(){
        return <div class = {this.hashState === this.hash ? "" : "hidden" }>
            {this.$slots.default()}
        </div>
    }
}