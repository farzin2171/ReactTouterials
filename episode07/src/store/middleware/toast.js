const toast=store=>next=>action=>{
   if(action.type==='error')
      console.log("Tostify",action.payoad.message);
    else
      next(action);

}

export default toast;