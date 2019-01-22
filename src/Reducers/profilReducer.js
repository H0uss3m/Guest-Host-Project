let profilDesc=[
    {
        _id:'1',
        name:'Justin Timberlake',
        adress:'Beverly Hills,California,USA',
        aboutme:'An easy-going person who loves learning from others and making a new friends with different cultures and background.I used to be that person who always play it safe, but in the meanwhile, I am always trying to get out of my comfort zone, so travel is the key to get into the learning zone.Im not addicted to coffee, we are just in a committed relationship. 😊💫☕️☕️',
    }
]

const profilReducer=(state=profilDesc,action) => {
    switch(action.type){
        
        case 'EDIT_PROFIL':
      return (
          state.map(el=>el._id===action.editprofil._id? el=action.editprofil:el)
      )
      default :
      return state
  }
}

export default profilReducer;
