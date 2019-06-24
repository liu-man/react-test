const reducer =(state={
  homebannerlist: [1,2,3],
  homeprolist: []
},action) =>{
  const {type,data} =action
  switch(type){
    case 'changeHomebannerlist':return Object.assign({}, state,{homebannerlist:data})
    case 'changeProlist': return Object.assign({},state,{homeprolist:data})
    default: return state;
  }
}

export default reducer;