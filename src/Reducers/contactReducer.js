var contacts=[
    {   _id:'1',
        title:'Dar Darek',
        descreption:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
        city:'Sousse'
    },
    {   _id:'2',
    title:'Dar Darek',
    descreption:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
    city:'Sousse'
},
{   _id:'3',
title:'Dar Darek',
descreption:'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.',
city:'Sousse'
},
]

const contactReducer=(state=contacts,action)=>
{
  switch(action.type)
  {
    case 'REFRESH_CONTACT':
    return(state=action.contacts)
    case 'ADD_CONTACT' :
    return (
        state.concat(action.newcontact)
    )

      case 'ADD_CONTACT' :
      return (
          state.concat(action.newcontact)
      )

      case 'EDIT_CONTACT':
      return (
          state.map(el=>el._id===action.editcontact._id? el=action.editcontact:el)
      )
      case 'REMOVE_CONTACT':
      return (
          state.filter(el=>el._id!==action._id)
      )
      default :
      return state
  }
}
export default contactReducer